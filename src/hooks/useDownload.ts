import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useDownload = () => {
  const { toast } = useToast();

  const downloadFile = async (fileId: string) => {
    try {
      // Get file details
      const { data: file, error: fileError } = await supabase
        .from('course_files')
        .select('*')
        .eq('id', fileId)
        .single();

      if (fileError) throw fileError;

      // Check if user is premium
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "Non connecté",
          description: "Veuillez vous connecter pour télécharger",
          variant: "destructive",
        });
        return;
      }

      const { data: premiumStatus } = await supabase
        .from('premium_users')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .single();

      if (!premiumStatus) {
        toast({
          title: "Compte Premium requis",
          description: "Veuillez passer au Premium pour télécharger des fichiers",
          variant: "destructive",
        });
        return;
      }

      // Track download
      await supabase
        .from('user_downloads')
        .insert({
          user_id: user.id,
          file_id: fileId,
        });

      // If Google Drive link, redirect to it
      if (file.google_drive_link) {
        window.open(file.google_drive_link, '_blank');
        toast({
          title: "Téléchargement démarré",
          description: "Le fichier va se télécharger depuis Google Drive",
        });
        return;
      }

      // Otherwise download from Supabase storage
      const bucket = file.file_type === 'cours' ? 'cours-complets' : 
                     file.file_type === 'resume' ? 'resumes-cours' : 'exercices';

      const { data: downloadData, error: downloadError } = await supabase
        .storage
        .from(bucket)
        .download(file.file_path);

      if (downloadError) throw downloadError;

      // Create download link
      const url = window.URL.createObjectURL(downloadData);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${file.course_name}.${file.file_format}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Téléchargement démarré",
        description: `${file.course_name}.${file.file_format}`,
      });

    } catch (error: any) {
      console.error('Download error:', error);
      toast({
        title: "Erreur de téléchargement",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return { downloadFile };
};
