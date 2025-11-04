import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.75.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const AIRTABLE_API_KEY = Deno.env.get('AIRTABLE_API_KEY')!
const AIRTABLE_BASE_ID = 'appBW99WIVu9ZUami'

interface AirtableRecord {
  fields: Record<string, any>
}

async function sendToAirtable(tableName: string, data: AirtableRecord) {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${tableName}`
  
  console.log(`Sending to Airtable table ${tableName}:`, data)
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error(`Airtable error for ${tableName}:`, error)
    throw new Error(`Airtable API error: ${error}`)
  }

  return await response.json()
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    const { type, data } = await req.json()
    console.log('Sync request received:', { type, data })

    let result

    switch (type) {
      case 'payment_validated':
        // Synchroniser le paiement validé
        result = await sendToAirtable('paiements', {
          fields: {
            'User ID': data.user_id,
            'Montant': data.amount,
            'Pays': data.country,
            'Plateforme': data.payment_platform,
            'Statut': 'Validé',
            'Date de validation': data.validated_at || new Date().toISOString(),
            'Validé par': data.validated_by,
          }
        })
        console.log('Payment synced to Airtable:', result)
        break

      case 'new_user':
        // Créer un nouvel utilisateur
        result = await sendToAirtable('utilisateurs', {
          fields: {
            'User ID': data.user_id,
            'Téléphone': data.phone || '',
            'Email': data.email || '',
            'Date inscription': new Date().toISOString(),
            'Statut compte': data.is_premium ? 'Premium' : 'Gratuit',
          }
        })
        console.log('User synced to Airtable:', result)
        break

      case 'download_request':
        // Préparer le téléchargement depuis Google Drive
        // Les liens Google Drive doivent être publics
        result = {
          message: 'Download ready',
          download_url: data.google_drive_link,
          file_name: data.file_name,
        }
        console.log('Download request prepared:', result)
        break

      default:
        throw new Error(`Unknown sync type: ${type}`)
    }

    return new Response(
      JSON.stringify({ success: true, result }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Sync error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})