import { createClient } from '@supabase/supabase-js';

// External Supabase project configuration
const EXTERNAL_SUPABASE_URL = 'https://pbnnkpbgwlfvhnwxasql.supabase.co';
const EXTERNAL_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibm5rcGJnd2xmdmhud3hhc3FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNTg4MjEsImV4cCI6MjA3NzkzNDgyMX0.KXqiPH7c87dHVbrILuW8YR3GIHkTCb7M-Cp_2eTeDx0';

export const externalSupabase = createClient(
  EXTERNAL_SUPABASE_URL,
  EXTERNAL_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);
