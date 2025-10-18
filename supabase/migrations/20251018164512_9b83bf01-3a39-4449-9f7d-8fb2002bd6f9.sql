-- Create enum for roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE,
  role public.app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
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

-- Users can view their own role
CREATE POLICY "Users can view their own role"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

-- Update course_files policies - only admins can insert
CREATE POLICY "Admins can insert course files"
ON public.course_files
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Admins can update course files
CREATE POLICY "Admins can update course files"
ON public.course_files
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- Admins can delete course files
CREATE POLICY "Admins can delete course files"
ON public.course_files
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));