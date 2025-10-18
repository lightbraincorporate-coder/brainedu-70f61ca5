import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Upload, ArrowLeft, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { levels } from '@/data/levels';
import { subjects as subjectsData } from '@/data/subjects';

export default function Admin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUserName(user.phone || 'Administrateur');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };
  
  const [formData, setFormData] = useState({
    level: '',
    className: '',
    subject: '',
    trimester: '',
    courseName: '',
    fileType: '' as 'cours' | 'resume' | 'exercices' | '',
    fileFormat: '' as 'pdf' | 'epub' | 'txt' | '',
  });
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Auto-detect format
      const extension = file.name.split('.').pop()?.toLowerCase();
      if (extension === 'pdf' || extension === 'epub' || extension === 'txt') {
        setFormData(prev => ({ ...prev, fileFormat: extension as 'pdf' | 'epub' | 'txt' }));
      }
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        title: 'Erreur',
        description: 'Veuillez sélectionner un fichier',
        variant: 'destructive',
      });
      return;
    }

    const { level, className, subject, trimester, courseName, fileType, fileFormat } = formData;
    
    if (!level || !className || !subject || !courseName || !fileType || !fileFormat) {
      toast({
        title: 'Erreur',
        description: 'Veuillez remplir tous les champs',
        variant: 'destructive',
      });
      return;
    }

    setUploading(true);

    try {
      // Determine bucket based on file type
      const bucket = fileType === 'cours' ? 'cours-complets' : 
                     fileType === 'resume' ? 'resumes-cours' : 'exercices';
      
      // Create file path: level/class/subject/trimester/courseName.ext
      const filePath = `${level}/${className}/${subject}/${trimester || 'general'}/${courseName}.${fileFormat}`;
      
      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, selectedFile, {
          cacheControl: '3600',
          upsert: true
        });

      if (uploadError) throw uploadError;

      // Save metadata to database
      const { error: dbError } = await supabase
        .from('course_files')
        .insert({
          level,
          class_name: className,
          subject,
          trimester: trimester || null,
          course_name: courseName,
          file_type: fileType,
          file_path: filePath,
          file_format: fileFormat
        });

      if (dbError) throw dbError;

      toast({
        title: 'Succès',
        description: 'Fichier uploadé avec succès',
      });

      // Reset form
      setFormData({
        level: '',
        className: '',
        subject: '',
        trimester: '',
        courseName: '',
        fileType: '',
        fileFormat: '',
      });
      setSelectedFile(null);
      
      // Reset file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error: any) {
      console.error('Upload error:', error);
      toast({
        title: 'Erreur',
        description: error.message || 'Erreur lors de l\'upload',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/20 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Connecté en tant que: <strong>{userName}</strong>
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Déconnexion
            </Button>
          </div>
        </div>

        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-2">Administration des Cours</h1>
          <p className="text-muted-foreground mb-8">
            Uploadez les fichiers de cours, résumés et exercices ici. Ils seront automatiquement disponibles pour téléchargement après validation du paiement.
          </p>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Niveau</label>
                <Select value={formData.level} onValueChange={(value) => setFormData(prev => ({ ...prev, level: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(levels).map(level => (
                      <SelectItem key={level.id} value={level.id}>{level.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Classe</label>
                <Input
                  value={formData.className}
                  onChange={(e) => setFormData(prev => ({ ...prev, className: e.target.value }))}
                  placeholder="Ex: CE1, 3ème, Terminale D"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Matière</label>
                <Input
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  placeholder="Ex: Mathématiques, Français"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Trimestre (optionnel)</label>
                <Input
                  value={formData.trimester}
                  onChange={(e) => setFormData(prev => ({ ...prev, trimester: e.target.value }))}
                  placeholder="Ex: Trimestre 1, Semestre 2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Nom du cours</label>
              <Input
                value={formData.courseName}
                onChange={(e) => setFormData(prev => ({ ...prev, courseName: e.target.value }))}
                placeholder="Ex: Les nombres décimaux, La photosynthèse"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Type de fichier</label>
                <Select value={formData.fileType} onValueChange={(value: any) => setFormData(prev => ({ ...prev, fileType: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cours">Cours complet</SelectItem>
                    <SelectItem value="resume">Résumé de cours</SelectItem>
                    <SelectItem value="exercices">Exercices corrigés</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Format</label>
                <Select value={formData.fileFormat} onValueChange={(value: any) => setFormData(prev => ({ ...prev, fileFormat: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="epub">EPUB</SelectItem>
                    <SelectItem value="txt">TXT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Fichier</label>
              <Input
                id="file-upload"
                type="file"
                accept=".pdf,.epub,.txt"
                onChange={handleFileSelect}
              />
              {selectedFile && (
                <p className="text-sm text-muted-foreground mt-2">
                  Fichier sélectionné: {selectedFile.name}
                </p>
              )}
            </div>

            <Button
              onClick={handleUpload}
              disabled={uploading}
              className="w-full"
              size="lg"
            >
              {uploading ? (
                'Upload en cours...'
              ) : (
                <>
                  <Upload className="mr-2 h-5 w-5" />
                  Uploader le fichier
                </>
              )}
            </Button>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">📍 Organisation des fichiers</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Les fichiers sont organisés dans 3 buckets selon leur type :
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• <strong>cours-complets</strong> : Pour les cours complets</li>
                <li>• <strong>resumes-cours</strong> : Pour les résumés de cours</li>
                <li>• <strong>exercices</strong> : Pour les exercices corrigés</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                Structure du chemin : <code className="bg-background px-2 py-1 rounded">niveau/classe/matière/trimestre/nom_cours.format</code>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
