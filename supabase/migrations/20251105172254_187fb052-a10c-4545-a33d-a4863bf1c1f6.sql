-- Create app_role enum if it doesn't exist
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('user', 'admin', 'super_admin');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- Create user_roles table if not exists
CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Drop existing policy if exists and recreate
DROP POLICY IF EXISTS "Users can view their own role" ON public.user_roles;
CREATE POLICY "Users can view their own role"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

-- Create secondary_admins table if not exists
CREATE TABLE IF NOT EXISTS public.secondary_admins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  phone TEXT NOT NULL,
  access_code TEXT NOT NULL,
  country TEXT NOT NULL,
  payment_platform TEXT NOT NULL,
  payment_number TEXT NOT NULL,
  created_by UUID NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  is_active BOOLEAN DEFAULT true
);

ALTER TABLE public.secondary_admins ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Secondary admins can view their own profile" ON public.secondary_admins;
CREATE POLICY "Secondary admins can view their own profile"
ON public.secondary_admins
FOR SELECT
USING (user_id = auth.uid() OR has_role(auth.uid(), 'super_admin'));

DROP POLICY IF EXISTS "Super admin can manage secondary admins" ON public.secondary_admins;
CREATE POLICY "Super admin can manage secondary admins"
ON public.secondary_admins
FOR ALL
USING (has_role(auth.uid(), 'super_admin'));

-- Create super_admin_backup table if not exists
CREATE TABLE IF NOT EXISTS public.super_admin_backup (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone TEXT NOT NULL,
  created_by UUID NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.super_admin_backup ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Super admin can manage backup numbers" ON public.super_admin_backup;
CREATE POLICY "Super admin can manage backup numbers"
ON public.super_admin_backup
FOR ALL
USING (has_role(auth.uid(), 'super_admin'));

-- Create payment_proofs table if not exists
CREATE TABLE IF NOT EXISTS public.payment_proofs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  amount NUMERIC NOT NULL,
  country TEXT NOT NULL,
  payment_platform TEXT NOT NULL,
  proof_type TEXT NOT NULL,
  proof_data TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  assigned_admin_id UUID,
  validated_by UUID,
  validated_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.payment_proofs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can insert their own payment proofs" ON public.payment_proofs;
CREATE POLICY "Users can insert their own payment proofs"
ON public.payment_proofs
FOR INSERT
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view their own payment proofs" ON public.payment_proofs;
CREATE POLICY "Users can view their own payment proofs"
ON public.payment_proofs
FOR SELECT
USING (auth.uid() = user_id OR has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'super_admin'));

DROP POLICY IF EXISTS "Admins can update payment proofs" ON public.payment_proofs;
CREATE POLICY "Admins can update payment proofs"
ON public.payment_proofs
FOR UPDATE
USING (has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'super_admin'));

DROP POLICY IF EXISTS "Super admin can delete payment proofs" ON public.payment_proofs;
CREATE POLICY "Super admin can delete payment proofs"
ON public.payment_proofs
FOR DELETE
USING (has_role(auth.uid(), 'super_admin'));

-- Create premium_users table if not exists
CREATE TABLE IF NOT EXISTS public.premium_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  payment_proof_id UUID,
  activated_at TIMESTAMPTZ DEFAULT now(),
  expires_at TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT true
);

ALTER TABLE public.premium_users ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own premium status" ON public.premium_users;
CREATE POLICY "Users can view their own premium status"
ON public.premium_users
FOR SELECT
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can manage premium users" ON public.premium_users;
CREATE POLICY "Admins can manage premium users"
ON public.premium_users
FOR ALL
USING (has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'super_admin'));

-- Create user_downloads table if not exists
CREATE TABLE IF NOT EXISTS public.user_downloads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  file_id UUID NOT NULL,
  downloaded_at TIMESTAMPTZ DEFAULT now(),
  download_count INTEGER DEFAULT 1
);

ALTER TABLE public.user_downloads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can insert their own downloads" ON public.user_downloads;
CREATE POLICY "Users can insert their own downloads"
ON user_downloads
FOR INSERT
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view their own downloads" ON public.user_downloads;
CREATE POLICY "Users can view their own downloads"
ON public.user_downloads
FOR SELECT
USING (auth.uid() = user_id);

-- Create payment-proofs storage bucket if not exists
INSERT INTO storage.buckets (id, name, public)
VALUES ('payment-proofs', 'payment-proofs', false)
ON CONFLICT (id) DO NOTHING;

-- RLS policies for payment-proofs bucket
DROP POLICY IF EXISTS "Users can upload their own payment proofs" ON storage.objects;
CREATE POLICY "Users can upload their own payment proofs"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'payment-proofs' AND auth.uid()::text = (storage.foldername(name))[1]);

DROP POLICY IF EXISTS "Users can view their own payment proofs" ON storage.objects;
CREATE POLICY "Users can view their own payment proofs"
ON storage.objects
FOR SELECT
USING (bucket_id = 'payment-proofs' AND (auth.uid()::text = (storage.foldername(name))[1] OR has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'super_admin')));

DROP POLICY IF EXISTS "Admins can manage payment proofs" ON storage.objects;
CREATE POLICY "Admins can manage payment proofs"
ON storage.objects
FOR ALL
USING (bucket_id = 'payment-proofs' AND (has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'super_admin')));