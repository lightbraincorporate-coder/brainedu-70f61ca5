import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.75.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// External Supabase credentials
const EXTERNAL_SUPABASE_URL = 'https://pbnnkpbgwlfvhnwxasql.supabase.co'
const EXTERNAL_SUPABASE_SERVICE_KEY = Deno.env.get('EXTERNAL_SUPABASE_SERVICE_KEY')!

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const externalSupabase = createClient(
      EXTERNAL_SUPABASE_URL,
      EXTERNAL_SUPABASE_SERVICE_KEY
    )

    const { type, data } = await req.json()
    console.log('External Supabase sync request:', { type, data })

    let result

    switch (type) {
      case 'payment_validated':
        // Insert validated payment into external Supabase
        const { data: paymentData, error: paymentError } = await externalSupabase
          .from('payment_proofs')
          .update({
            status: 'approved',
            validated_at: data.validated_at || new Date().toISOString(),
            validated_by: data.validated_by
          })
          .eq('id', data.id)
          .select()
          .single()

        if (paymentError) throw paymentError
        result = paymentData
        console.log('Payment synced to external Supabase:', result)
        break

      case 'new_premium_user':
        // Create premium user in external Supabase
        const { data: premiumData, error: premiumError } = await externalSupabase
          .from('premium_users')
          .insert({
            user_id: data.user_id,
            payment_proof_id: data.payment_proof_id,
            expires_at: data.expires_at,
            is_active: true
          })
          .select()
          .single()

        if (premiumError) throw premiumError
        result = premiumData
        console.log('Premium user synced to external Supabase:', result)
        break

      case 'track_download':
        // Track download in external Supabase
        const { data: downloadData, error: downloadError } = await externalSupabase
          .from('user_downloads')
          .insert({
            user_id: data.user_id,
            file_id: data.file_id
          })
          .select()
          .single()

        if (downloadError) throw downloadError
        result = downloadData
        console.log('Download tracked in external Supabase:', result)
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
    console.error('External Supabase sync error:', error)
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
