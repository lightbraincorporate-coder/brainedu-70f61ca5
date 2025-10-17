-- Create storage buckets for course files
INSERT INTO storage.buckets (id, name, public) 
VALUES 
  ('cours-complets', 'cours-complets', true),
  ('resumes-cours', 'resumes-cours', true),
  ('exercices', 'exercices', true);

-- Create table to catalog all course files
CREATE TABLE public.course_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  level TEXT NOT NULL,
  class_name TEXT NOT NULL,
  subject TEXT NOT NULL,
  trimester TEXT,
  course_name TEXT NOT NULL,
  file_type TEXT NOT NULL CHECK (file_type IN ('cours', 'resume', 'exercices')),
  file_path TEXT NOT NULL,
  file_format TEXT NOT NULL CHECK (file_format IN ('pdf', 'epub', 'txt')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.course_files ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read course files
CREATE POLICY "Anyone can view course files"
ON public.course_files
FOR SELECT
USING (true);

-- Create storage policies for course files
CREATE POLICY "Anyone can view course files in storage"
ON storage.objects
FOR SELECT
USING (bucket_id IN ('cours-complets', 'resumes-cours', 'exercices'));

-- Only authenticated users can upload (for admin)
CREATE POLICY "Authenticated users can upload course files"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id IN ('cours-complets', 'resumes-cours', 'exercices')
  AND auth.role() = 'authenticated'
);

-- Create index for faster queries
CREATE INDEX idx_course_files_lookup 
ON public.course_files(level, class_name, subject, trimester, file_type);

-- Create function to update updated_at
CREATE OR REPLACE FUNCTION public.update_course_files_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_course_files_timestamp
BEFORE UPDATE ON public.course_files
FOR EACH ROW
EXECUTE FUNCTION public.update_course_files_updated_at();