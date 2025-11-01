-- Ajouter le rôle super_admin à l'enum
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'super_admin';

-- Table pour les administrateurs secondaires
CREATE TABLE IF NOT EXISTS public.secondary_admins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  phone TEXT NOT NULL UNIQUE,
  access_code TEXT NOT NULL,
  country TEXT NOT NULL,
  payment_platform TEXT NOT NULL, -- MTN, Airtel, Moov, Wave
  payment_number TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_by UUID REFERENCES auth.users(id) NOT NULL
);

-- Table pour le numéro de secours du super admin
CREATE TABLE IF NOT EXISTS public.super_admin_backup (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_by UUID REFERENCES auth.users(id) NOT NULL
);

-- Table pour les preuves de paiement
CREATE TABLE IF NOT EXISTS public.payment_proofs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  assigned_admin_id UUID REFERENCES public.secondary_admins(id),
  payment_platform TEXT NOT NULL,
  country TEXT NOT NULL,
  amount DECIMAL NOT NULL,
  proof_type TEXT NOT NULL, -- 'id', 'screenshot', 'message'
  proof_data TEXT NOT NULL, -- ID, image URL, or message text
  status TEXT DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
  validated_by UUID REFERENCES auth.users(id),
  validated_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.secondary_admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.super_admin_backup ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_proofs ENABLE ROW LEVEL SECURITY;

-- RLS Policies pour secondary_admins
CREATE POLICY "Super admin can manage secondary admins"
ON public.secondary_admins
FOR ALL
USING (public.has_role(auth.uid(), 'super_admin'::app_role));

CREATE POLICY "Secondary admins can view their own profile"
ON public.secondary_admins
FOR SELECT
USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'super_admin'::app_role));

-- RLS Policies pour super_admin_backup
CREATE POLICY "Super admin can manage backup numbers"
ON public.super_admin_backup
FOR ALL
USING (public.has_role(auth.uid(), 'super_admin'::app_role));

-- RLS Policies pour payment_proofs
CREATE POLICY "Users can insert their own payment proofs"
ON public.payment_proofs
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own payment proofs"
ON public.payment_proofs
FOR SELECT
USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'::app_role) OR public.has_role(auth.uid(), 'super_admin'::app_role));

CREATE POLICY "Admins can update payment proofs"
ON public.payment_proofs
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.has_role(auth.uid(), 'super_admin'::app_role));

CREATE POLICY "Super admin can delete payment proofs"
ON public.payment_proofs
FOR DELETE
USING (public.has_role(auth.uid(), 'super_admin'::app_role));