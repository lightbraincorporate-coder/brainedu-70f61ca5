# Guide d'Administration BrainEdu

## 🔐 Accès Sécurisé

L'accès administrateur de BrainEdu est strictement contrôlé et sécurisé.

### Administrateurs Autorisés
Seuls **deux numéros** sont autorisés à accéder à l'administration :
- +242066070176
- +2250768839613

### Processus de Connexion
1. Cliquez sur l'icône **bouclier** (🛡️) dans la barre de navigation
2. Vous serez redirigé vers la page de connexion administrateur
3. Entrez votre **numéro de téléphone autorisé**
4. Entrez le **code d'accès secret** : `LoneTGuraN`
5. Cliquez sur "Envoyer le code de vérification"
6. Entrez le **code SMS** reçu sur votre téléphone
7. Vous êtes maintenant connecté en tant qu'administrateur

⚠️ **Sécurité** : Sans le numéro autorisé ET le code secret correct, l'accès est impossible.

## 🎯 Structure de la base de données

Lovable Cloud a été activé avec succès ! Voici ce qui a été créé :

### 📦 Buckets de stockage
Trois buckets ont été créés pour organiser les fichiers :

1. **cours-complets** : Pour tous les cours complets
2. **resumes-cours** : Pour tous les résumés de cours  
3. **exercices** : Pour tous les exercices corrigés

### 📊 Table de catalogage
Une table `course_files` a été créée pour cataloguer tous les fichiers avec :
- Niveau (primaire, collège, lycée, université)
- Classe
- Matière
- Trimestre/Semestre
- Nom du cours
- Type de fichier (cours, resume, exercices)
- Format (pdf, epub, txt)
- Chemin du fichier

## 🔧 Comment uploader les fichiers

### Upload d'un fichier
1. Connectez-vous en tant qu'administrateur (voir ci-dessus)
2. Vous accédez automatiquement à la page d'administration
3. Remplissez tous les champs du formulaire :
   - **Niveau** : Sélectionnez le niveau scolaire
   - **Classe** : Entrez la classe (ex: CE1, 3ème, Terminale D)
   - **Matière** : Entrez la matière (ex: Mathématiques, Français)
   - **Trimestre** : (Optionnel) Entrez le trimestre ou semestre
   - **Nom du cours** : Nom descriptif du cours
   - **Type de fichier** : Cours complet, Résumé ou Exercices
   - **Format** : PDF, EPUB ou TXT

4. Sélectionnez le fichier à uploader
5. Cliquez sur "Uploader le fichier"

### Organisation des fichiers
Les fichiers sont automatiquement organisés selon cette structure :
```
niveau/classe/matière/trimestre/nom_cours.format
```

Exemple :
```
primaire/CE1/Mathematiques/Trimestre_1/Les_nombres_decimaux.pdf
college/3eme/Francais/Trimestre_2/La_conjugaison.epub
lycee/Terminale_C/Physique/Semestre_1/Electricite.pdf
```

## 📥 Système de téléchargement

Le système est déjà intégré :
- Quand un utilisateur valide son paiement, il peut choisir son format préféré
- Le système affiche un message indiquant que les fichiers seront disponibles après upload
- Une fois uploadés via l'interface admin, les fichiers seront accessibles automatiquement

## ⚠️ Important

### Prochaines étapes pour vous
1. **Collecter les cours** : Recherchez et téléchargez les fichiers de cours sur le web
2. **Organiser les fichiers** : Renommez-les de façon claire avant upload
3. **Uploader progressivement** : Commencez par les niveaux/matières les plus demandés
4. **Vérifier les uploads** : Testez le téléchargement après chaque upload

### Suggestions
- Commencez par les matières principales (Maths, Français, Sciences)
- Priorisez les niveaux collège et lycée
- Utilisez des noms de cours clairs et descriptifs
- Gardez une copie locale de tous les fichiers uploadés

## 🔐 Sécurité

- L'accès admin nécessite une authentification à 2 facteurs (téléphone + code secret + OTP)
- Seuls les numéros autorisés peuvent devenir administrateurs
- Les buckets sont publics en lecture (pour les téléchargements)
- Seuls les administrateurs authentifiés peuvent uploader
- Les métadonnées sont stockées de façon sécurisée dans la base de données
- Tous les fichiers sont versionnés (vous pouvez réuploader le même fichier)

## 🏢 À propos de BrainCorp

BrainCorp est l'entreprise innovante qui révolutionne l'éducation en Afrique avec trois plateformes complémentaires :

### 🎓 BrainEdu (Plateforme actuelle)
Votre plateforme éducative complète pour réussir à tous les niveaux. Cours, résumés, exercices et bien plus encore.

### 👨‍🏫 BrainTeaching
Plateforme dédiée à la formation continue des enseignants et au suivi pédagogique. 
🔗 https://brainteaching.lovable.app/

### 🛡️ BrainSecure
Aide les parents à suivre l'évolution de leurs enfants grâce à un suivi personnalisé et des tests adaptés.
*(Bientôt disponible)*

## 📞 Support

Si vous avez besoin d'aide pour :
- Uploader en masse plusieurs fichiers
- Organiser automatiquement des dossiers
- Créer des scripts d'import
- Autre fonctionnalité

N'hésitez pas à demander !
