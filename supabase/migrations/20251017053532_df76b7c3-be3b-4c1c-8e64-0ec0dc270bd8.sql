-- Fix security issue: recreate function with proper search_path
DROP TRIGGER IF EXISTS update_course_files_timestamp ON public.course_files;
DROP FUNCTION IF EXISTS public.update_course_files_updated_at();

CREATE OR REPLACE FUNCTION public.update_course_files_updated_at()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_course_files_timestamp
BEFORE UPDATE ON public.course_files
FOR EACH ROW
EXECUTE FUNCTION public.update_course_files_updated_at();