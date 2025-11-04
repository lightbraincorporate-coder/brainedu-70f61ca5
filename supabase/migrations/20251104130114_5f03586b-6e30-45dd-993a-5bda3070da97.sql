-- Add Google Drive link column to course_files
ALTER TABLE public.course_files 
ADD COLUMN IF NOT EXISTS google_drive_link TEXT;

-- Add download tracking
CREATE TABLE IF NOT EXISTS public.user_downloads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  file_id UUID NOT NULL REFERENCES public.course_files(id) ON DELETE CASCADE,
  downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  download_count INTEGER DEFAULT 1
);

-- Enable RLS on user_downloads
ALTER TABLE public.user_downloads ENABLE ROW LEVEL SECURITY;

-- Users can view their own downloads
CREATE POLICY "Users can view their own downloads"
ON public.user_downloads
FOR SELECT
USING (auth.uid() = user_id);

-- Users can insert their own downloads
CREATE POLICY "Users can insert their own downloads"
ON public.user_downloads
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Create premium_users table to track premium status
CREATE TABLE IF NOT EXISTS public.premium_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE,
  activated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE,
  payment_proof_id UUID REFERENCES public.payment_proofs(id),
  is_active BOOLEAN DEFAULT true
);

-- Enable RLS on premium_users
ALTER TABLE public.premium_users ENABLE ROW LEVEL SECURITY;

-- Users can view their own premium status
CREATE POLICY "Users can view their own premium status"
ON public.premium_users
FOR SELECT
USING (auth.uid() = user_id);

-- Admins can manage premium users
CREATE POLICY "Admins can manage premium users"
ON public.premium_users
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'super_admin'::app_role));