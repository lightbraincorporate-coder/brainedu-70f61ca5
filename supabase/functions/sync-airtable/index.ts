import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.75.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const AIRTABLE_API_KEY = Deno.env.get('AIRTABLE_API_KEY')!
const AIRTABLE_BASE_ID = 'appBW99WIVu9ZUami'

// Correct table names
const TABLES = {
  USERS: 'users',
  PAYMENTS: 'payments',
  COURSES: 'courses',
  EXERCISES: 'exercises'
}

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
        // Sync validated payment
        result = await sendToAirtable(TABLES.PAYMENTS, {
          fields: {
            'User ID': data.user_id,
            'Amount': data.amount,
            'Country': data.country,
            'Platform': data.payment_platform,
            'Status': 'Approved',
            'Validated At': data.validated_at || new Date().toISOString(),
            'Validated By': data.validated_by,
          }
        })
        console.log('Payment synced to Airtable:', result)
        break

      case 'new_user':
        // Create new user
        result = await sendToAirtable(TABLES.USERS, {
          fields: {
            'User ID': data.user_id,
            'Phone': data.phone || '',
            'Email': data.email || '',
            'Registration Date': new Date().toISOString(),
            'Account Status': data.is_premium ? 'Premium' : 'Free',
          }
        })
        console.log('User synced to Airtable:', result)
        break

      case 'course_added':
        // Sync course to Airtable
        result = await sendToAirtable(TABLES.COURSES, {
          fields: {
            'Course ID': data.id,
            'Level': data.level,
            'Class': data.class_name,
            'Subject': data.subject,
            'Trimester': data.trimester || '',
            'Course Name': data.course_name,
            'File Type': data.file_type,
            'Format': data.file_format,
            'Google Drive Link': data.google_drive_link || '',
            'Created At': data.created_at,
          }
        })
        console.log('Course synced to Airtable:', result)
        break

      case 'download_request':
        // Prepare download from Google Drive
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