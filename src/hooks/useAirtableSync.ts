import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useAirtableSync = () => {
  const { toast } = useToast();

  const syncToAirtable = async (type: string, data: any) => {
    try {
      const { data: result, error } = await supabase.functions.invoke('sync-airtable', {
        body: { type, data }
      });

      if (error) {
        console.error('Airtable sync error:', error);
        throw error;
      }

      console.log('Airtable sync success:', result);
      return result;
    } catch (error) {
      console.error('Failed to sync with Airtable:', error);
      toast({
        title: "Erreur de synchronisation",
        description: "Impossible de synchroniser avec Airtable",
        variant: "destructive",
      });
      throw error;
    }
  };

  const syncPaymentValidation = async (paymentData: any) => {
    return syncToAirtable('payment_validated', paymentData);
  };

  const syncNewUser = async (userData: any) => {
    return syncToAirtable('new_user', userData);
  };

  const syncCourse = async (courseData: any) => {
    return syncToAirtable('course_added', courseData);
  };

  const prepareDownload = async (downloadData: any) => {
    return syncToAirtable('download_request', downloadData);
  };

  return {
    syncPaymentValidation,
    syncNewUser,
    syncCourse,
    prepareDownload,
  };
};