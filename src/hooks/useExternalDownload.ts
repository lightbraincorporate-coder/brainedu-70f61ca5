import { supabase } from "@/integrations/supabase/external-client";
import { useToast } from "@/hooks/use-toast";

export const useExternalDownload = () => {
  const { toast } = useToast();

  const downloadFile = async (fileId: string, googleDriveLink: string) => {
    try {
      // Check if user is authenticated
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Authentication requise",
          description: "Veuillez vous connecter pour télécharger des fichiers",
          variant: "destructive",
        });
        return;
      }

      // Check if user has premium access
      const { data: premiumData, error: premiumError } = await supabase
        .from('premium_users')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .maybeSingle();

      if (premiumError && premiumError.code !== 'PGRST116') {
        console.error('Error checking premium status:', premiumError);
      }

      const isPremium = premiumData !== null;

      if (!isPremium) {
        toast({
          title: "Accès Premium requis",
          description: "Vous devez avoir un compte premium pour télécharger des fichiers",
          variant: "destructive",
        });
        return;
      }

      // Track download in database
      const { error: downloadError } = await supabase
        .from('user_downloads')
        .insert({
          user_id: user.id,
          file_id: fileId,
          downloaded_at: new Date().toISOString(),
        });

      if (downloadError) {
        console.error('Error tracking download:', downloadError);
      }

      // Redirect to Google Drive link
      if (googleDriveLink) {
        window.open(googleDriveLink, '_blank');
        toast({
          title: "Téléchargement démarré",
          description: "Le fichier s'ouvre depuis Google Drive",
        });
      } else {
        toast({
          title: "Erreur",
          description: "Lien de téléchargement non disponible",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors du téléchargement",
        variant: "destructive",
      });
    }
  };

  return { downloadFile };
};
