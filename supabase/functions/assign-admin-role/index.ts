import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.75.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    const { userId, phone, secretCode, role } = await req.json();

    console.log('Assign admin role request:', { userId, phone });

    const isSuperAdmin = phone === '+242066070176' && secretCode === 'LoneTecrasoWinter';
    
    if (!isSuperAdmin) {
      const { data: adminData } = await supabaseClient
        .from('secondary_admins')
        .select('*')
        .eq('phone', phone)
        .eq('access_code', secretCode)
        .eq('is_active', true)
        .single();

      if (!adminData) {
        throw new Error('Numéro ou code incorrect');
      }
      
      await supabaseClient
        .from('secondary_admins')
        .update({ user_id: userId })
        .eq('id', adminData.id);
    }

    // Vérifier si l'utilisateur a déjà un rôle
    const { data: existingRole } = await supabaseClient
      .from('user_roles')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (existingRole) {
      console.log('User already has a role:', existingRole);
      return new Response(
        JSON.stringify({ success: true, message: 'Role already assigned' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { error: roleError } = await supabaseClient
      .from('user_roles')
      .insert({
        user_id: userId,
        role: role || 'admin',
      });

    if (roleError) {
      console.error('Error assigning role:', roleError);
      throw roleError;
    }

    console.log('Admin role assigned successfully to user:', userId);

    return new Response(
      JSON.stringify({ success: true, message: 'Admin role assigned' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in assign-admin-role function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
