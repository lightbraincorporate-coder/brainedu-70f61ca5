export const subjects: Record<string, string[] | Record<string, string[]>> = {
  primaire: {
    'CP1': ['Mathématiques', 'Français', 'Sciences', 'Education Civique'],
    'CP2': ['Mathématiques', 'Français', 'Sciences', 'Education Civique'],
    'CE1': ['Mathématiques', 'Français', 'Histoire-Géographie', 'Sciences', 'Education Civique'],
    'CE2': ['Mathématiques', 'Français', 'Histoire-Géographie', 'Sciences', 'Education Civique'],
    'CM1': ['Mathématiques', 'Français', 'Histoire-Géographie', 'Sciences', 'Education Civique'],
    'CM2': ['Mathématiques', 'Français', 'Histoire-Géographie', 'Sciences', 'Education Civique']
  },
  college: ['Mathématiques', 'Français', 'Anglais', 'SVT', 'Physique-Chimie', 'Histoire-Géo', 'EPS'],
  lycee: {
    'Série A': ['Français', 'Philosophie', 'Histoire-Géo', 'Mathématiques', 'Anglais', 'Espagnol'],
    'Série C': ['Mathématiques', 'Physique-Chimie', 'SVT', 'Français', 'Philosophie', 'Anglais'],
    'Série D': ['Mathématiques', 'Physique-Chimie', 'SVT', 'Français', 'Philosophie', 'Anglais'],
    'Série F1': ['Mathématiques', 'Physique', 'Technologie', 'Dessin Technique', 'Français'],
    'Série F2': ['Mathématiques', 'Physique', 'Électronique', 'Technologie', 'Français'],
    'Série F3': ['Mathématiques', 'Électricité', 'Électronique', 'Technologie', 'Français'],
    'Série G': ['Économie', 'Comptabilité', 'Mathématiques', 'Droit', 'Français']
  },
  universite: ['Droit', 'Médecine', 'Ingénierie Informatique', 'Économie et Gestion', 'Pharmacie', 'Génie Civil', 'Lettres Modernes']
};

export const coursesBySubject: Record<string, Record<string, string[]>> = {
  'Mathématiques-CP1': {
    'Trimestre 1': ['Les nombres de 0 à 5', 'Compter et dénombrer'],
    'Trimestre 2': ['Les nombres de 6 à 10', 'Addition simple (0 à 5)'],
    'Trimestre 3': ['Soustraction simple', 'Les formes : carré, rond, triangle']
  },
  'Français-CP1': {
    'Trimestre 1': ['L\'alphabet (A-M)', 'Les voyelles', 'Sons simples'],
    'Trimestre 2': ['L\'alphabet (N-Z)', 'Lecture de syllabes'],
    'Trimestre 3': ['Lecture de mots simples', 'Écriture de lettres']
  },
  'Sciences-CP1': {
    'Trimestre 1': ['Mon corps : les 5 sens'],
    'Trimestre 2': ['Les animaux familiers'],
    'Trimestre 3': ['Les plantes autour de moi']
  },
  'Education Civique-CP1': {
    'Trimestre 1': ['Vivre ensemble à l\'école'],
    'Trimestre 2': ['Le respect des camarades'],
    'Trimestre 3': ['Les règles de propreté']
  },
  'Mathématiques-CP2': {
    'Trimestre 1': ['Les nombres de 0 à 20', 'Addition (0 à 10)'],
    'Trimestre 2': ['Les nombres de 20 à 50', 'Soustraction (0 à 10)'],
    'Trimestre 3': ['Les doubles', 'Introduction à la multiplication']
  },
  'Français-CP2': {
    'Trimestre 1': ['Lecture de phrases simples', 'Les sons complexes (ch, ou, on)'],
    'Trimestre 2': ['Compréhension de textes courts', 'L\'écriture cursive'],
    'Trimestre 3': ['Conjugaison : présent simple', 'Production d\'une phrase']
  },
  'Sciences-CP2': {
    'Trimestre 1': ['L\'eau dans la nature'],
    'Trimestre 2': ['Le cycle de vie des plantes'],
    'Trimestre 3': ['Les saisons']
  },
  'Education Civique-CP2': {
    'Trimestre 1': ['Mes droits et devoirs'],
    'Trimestre 2': ['La sécurité à l\'école'],
    'Trimestre 3': ['Aider les autres']
  },
  'Mathématiques-CE1': {
    'Trimestre 1': ['Les nombres jusqu\'à 100', 'Addition posée'],
    'Trimestre 2': ['Soustraction posée', 'Tables de multiplication (2, 5, 10)'],
    'Trimestre 3': ['Introduction à la division', 'Les mesures : longueur']
  },
  'Français-CE1': {
    'Trimestre 1': ['Lecture fluide', 'Le nom et l\'article'],
    'Trimestre 2': ['Le verbe et le sujet', 'Conjugaison : présent, futur'],
    'Trimestre 3': ['L\'adjectif qualificatif', 'Production de textes courts']
  },
  'Histoire-Géographie-CE1': {
    'Trimestre 1': ['Se repérer dans le temps : hier, aujourd\'hui, demain'],
    'Trimestre 2': ['Mon école, mon quartier'],
    'Trimestre 3': ['Ma ville, mon pays']
  },
  'Sciences-CE1': {
    'Trimestre 1': ['Le corps humain : squelette et muscles'],
    'Trimestre 2': ['L\'alimentation'],
    'Trimestre 3': ['L\'air et le vent']
  },
  'Education Civique-CE1': {
    'Trimestre 1': ['Les règles de vie collective'],
    'Trimestre 2': ['Le respect de l\'environnement'],
    'Trimestre 3': ['Les symboles de mon pays']
  },
  'Mathématiques-CE2': {
    'Trimestre 1': ['Les nombres jusqu\'à 1000', 'Toutes les tables de multiplication'],
    'Trimestre 2': ['Division simple', 'Les fractions simples (1/2, 1/4)'],
    'Trimestre 3': ['Géométrie : triangles, rectangles', 'Périmètre et aire']
  },
  'Français-CE2': {
    'Trimestre 1': ['Grammaire : phrases simples et complexes', 'Le groupe nominal'],
    'Trimestre 2': ['Conjugaison : passé composé, imparfait', 'L\'orthographe des sons'],
    'Trimestre 3': ['Le dialogue dans un texte', 'Rédaction de petits textes']
  },
  'Histoire-Géographie-CE2': {
    'Trimestre 1': ['Les grandes périodes de l\'histoire'],
    'Trimestre 2': ['La préhistoire'],
    'Trimestre 3': ['Cartes et paysages du Congo']
  },
  'Sciences-CE2': {
    'Trimestre 1': ['Les états de la matière'],
    'Trimestre 2': ['Les animaux : classification'],
    'Trimestre 3': ['Le cycle de l\'eau']
  },
  'Education Civique-CE2': {
    'Trimestre 1': ['Égalité filles-garçons'],
    'Trimestre 2': ['La solidarité'],
    'Trimestre 3': ['Les dangers domestiques']
  },
  'Mathématiques-CM1': {
    'Trimestre 1': ['Les grands nombres (jusqu\'à 1 000 000)', 'Opérations sur les décimaux'],
    'Trimestre 2': ['Fractions et décimaux', 'Proportionnalité simple'],
    'Trimestre 3': ['Géométrie : cercles, polygones', 'Volumes et capacités']
  },
  'Français-CM1': {
    'Trimestre 1': ['Analyse grammaticale complète', 'Les compléments d\'objet'],
    'Trimestre 2': ['Tous les temps de l\'indicatif', 'Orthographe : accords complexes'],
    'Trimestre 3': ['Rédaction : récit, description', 'Vocabulaire enrichi']
  },
  'Histoire-Géographie-CM1': {
    'Trimestre 1': ['L\'Antiquité'],
    'Trimestre 2': ['Le Moyen Âge'],
    'Trimestre 3': ['Géographie : les continents']
  },
  'Sciences-CM1': {
    'Trimestre 1': ['Le système solaire'],
    'Trimestre 2': ['L\'énergie'],
    'Trimestre 3': ['Les écosystèmes']
  },
  'Education Civique-CM1': {
    'Trimestre 1': ['Les institutions de mon pays'],
    'Trimestre 2': ['La démocratie'],
    'Trimestre 3': ['Les droits de l\'enfant']
  },
  'Mathématiques-CM2': {
    'Trimestre 1': ['Nombres et calculs avancés', 'Problèmes complexes'],
    'Trimestre 2': ['Fractions et pourcentages', 'Proportionnalité et échelles'],
    'Trimestre 3': ['Géométrie plane et dans l\'espace', 'Préparation au collège']
  },
  'Français-CM2': {
    'Trimestre 1': ['Analyse logique : propositions', 'Conjugaison : subjonctif, conditionnel'],
    'Trimestre 2': ['Orthographe : homophones grammaticaux', 'Vocabulaire : préfixes, suffixes'],
    'Trimestre 3': ['Rédaction : argumentation, lettre', 'Préparation à la 6ème']
  },
  'Histoire-Géographie-CM2': {
    'Trimestre 1': ['Les Temps modernes'],
    'Trimestre 2': ['Le XIXe et XXe siècle'],
    'Trimestre 3': ['Géographie : mon pays dans le monde']
  },
  'Sciences-CM2': {
    'Trimestre 1': ['Le corps humain : respiration, circulation'],
    'Trimestre 2': ['Les énergies renouvelables'],
    'Trimestre 3': ['Préservation de l\'environnement']
  },
  'Education Civique-CM2': {
    'Trimestre 1': ['La Constitution'],
    'Trimestre 2': ['Citoyenneté et engagement'],
    'Trimestre 3': ['Les enjeux du développement durable']
  },

  'Mathématiques-6ème': {
    'Trimestre 1': ['Nombres décimaux', 'Opérations de base'],
    'Trimestre 2': ['Fractions simples', 'Géométrie : droites, angles'],
    'Trimestre 3': ['Proportionnalité', 'Aires et périmètres']
  },
  'Français-6ème': {
    'Trimestre 1': ['Classes grammaticales', 'Le récit'],
    'Trimestre 2': ['Conjugaison : révisions', 'La poésie'],
    'Trimestre 3': ['Orthographe', 'Le théâtre']
  },
  'Anglais-6ème': {
    'Trimestre 1': ['Greetings and introductions', 'Simple present'],
    'Trimestre 2': ['Family and friends', 'There is/There are'],
    'Trimestre 3': ['Daily routines', 'Present continuous']
  },
  'SVT-6ème': {
    'Trimestre 1': ['L\'environnement proche'],
    'Trimestre 2': ['Les êtres vivants et leur milieu'],
    'Trimestre 3': ['La biodiversité']
  },
  'Physique-Chimie-6ème': {
    'Trimestre 1': ['Mélanges et solutions'],
    'Trimestre 2': ['États de la matière'],
    'Trimestre 3': ['L\'eau dans notre environnement']
  },
  'Histoire-Géo-6ème': {
    'Trimestre 1': ['L\'Orient ancien'],
    'Trimestre 2': ['La Grèce antique'],
    'Trimestre 3': ['Rome']
  },
  'EPS-6ème': {
    'Trimestre 1': ['Athlétisme : course et saut'],
    'Trimestre 2': ['Sports collectifs : football'],
    'Trimestre 3': ['Gymnastique de base']
  },
  'Mathématiques-5ème': {
    'Trimestre 1': ['Nombres relatifs', 'Opérations sur les relatifs'],
    'Trimestre 2': ['Fractions : opérations', 'Triangles et parallélogrammes'],
    'Trimestre 3': ['Proportionnalité', 'Statistiques']
  },
  'Français-5ème': {
    'Trimestre 1': ['Fonctions grammaticales', 'Le roman d\'aventure'],
    'Trimestre 2': ['La phrase complexe', 'La nouvelle'],
    'Trimestre 3': ['Vocabulaire : sens propre et figuré', 'Poésie lyrique']
  },
  'Anglais-5ème': {
    'Trimestre 1': ['Past simple', 'Describing people'],
    'Trimestre 2': ['Food and meals', 'Comparatives'],
    'Trimestre 3': ['Sports and hobbies', 'Modal verbs (can, must)']
  },
  'SVT-5ème': {
    'Trimestre 1': ['Respiration et occupation des milieux'],
    'Trimestre 2': ['Fonctionnement de l\'organisme'],
    'Trimestre 3': ['Géologie externe']
  },
  'Physique-Chimie-5ème': {
    'Trimestre 1': ['Électricité : circuits'],
    'Trimestre 2': ['La lumière : sources et propagation'],
    'Trimestre 3': ['Mélanges homogènes et hétérogènes']
  },
  'Histoire-Géo-5ème': {
    'Trimestre 1': ['Le Moyen Âge : islam et chrétienté'],
    'Trimestre 2': ['La Renaissance'],
    'Trimestre 3': ['Géographie : ressources et développement']
  },
  'EPS-5ème': {
    'Trimestre 1': ['Athlétisme : course de vitesse'],
    'Trimestre 2': ['Sports collectifs : basketball'],
    'Trimestre 3': ['Gymnastique acrobatique']
  },
  'Mathématiques-4ème': {
    'Trimestre 1': ['Calcul littéral', 'Équations'],
    'Trimestre 2': ['Théorème de Pythagore', 'Triangles égaux et semblables'],
    'Trimestre 3': ['Proportionnalité et pourcentages', 'Probabilités']
  },
  'Français-4ème': {
    'Trimestre 1': ['Propositions subordonnées', 'La lettre'],
    'Trimestre 2': ['Discours direct et indirect', 'La nouvelle fantastique'],
    'Trimestre 3': ['Temps du récit', 'Le portrait']
  },
  'Anglais-4ème': {
    'Trimestre 1': ['Present perfect', 'Travel and tourism'],
    'Trimestre 2': ['Passive voice', 'Technology'],
    'Trimestre 3': ['Conditional sentences', 'Environment']
  },
  'SVT-4ème': {
    'Trimestre 1': ['La reproduction humaine'],
    'Trimestre 2': ['Le système nerveux'],
    'Trimestre 3': ['Géologie : séismes et volcans']
  },
  'Physique-Chimie-4ème': {
    'Trimestre 1': ['L\'air qui nous entoure'],
    'Trimestre 2': ['Les combustions'],
    'Trimestre 3': ['Lois de l\'électricité']
  },
  'Histoire-Géo-4ème': {
    'Trimestre 1': ['Les grandes découvertes'],
    'Trimestre 2': ['Les révolutions du XVIIIe siècle'],
    'Trimestre 3': ['Géographie : mondialisation']
  },
  'EPS-4ème': {
    'Trimestre 1': ['Course de demi-fond'],
    'Trimestre 2': ['Sports collectifs : handball'],
    'Trimestre 3': ['Natation']
  },
  'Mathématiques-3ème': {
    'Trimestre 1': ['Racines carrées', 'Équations et inéquations'],
    'Trimestre 2': ['Théorème de Thalès', 'Trigonométrie'],
    'Trimestre 3': ['Fonctions affines', 'Probabilités et statistiques']
  },
  'Français-3ème': {
    'Trimestre 1': ['Analyse logique complète', 'L\'autobiographie'],
    'Trimestre 2': ['L\'argumentation', 'Le théâtre classique'],
    'Trimestre 3': ['Préparation au brevet', 'Poésie engagée']
  },
  'Anglais-3ème': {
    'Trimestre 1': ['All tenses review', 'Future forms'],
    'Trimestre 2': ['Reported speech', 'Job and career'],
    'Trimestre 3': ['Relative clauses', 'Global issues']
  },
  'SVT-3ème': {
    'Trimestre 1': ['Génétique et hérédité'],
    'Trimestre 2': ['Évolution des espèces'],
    'Trimestre 3': ['Responsabilité humaine en santé et environnement']
  },
  'Physique-Chimie-3ème': {
    'Trimestre 1': ['Électricité : puissance et énergie'],
    'Trimestre 2': ['Chimie : acides, bases, pH'],
    'Trimestre 3': ['Mécanique et énergie']
  },
  'Histoire-Géo-3ème': {
    'Trimestre 1': ['Les deux guerres mondiales'],
    'Trimestre 2': ['La Guerre froide'],
    'Trimestre 3': ['Géographie : l\'Union Européenne et la France']
  },
  'EPS-3ème': {
    'Trimestre 1': ['Course d\'orientation'],
    'Trimestre 2': ['Sports collectifs : volley-ball'],
    'Trimestre 3': ['Préparation physique au brevet']
  },

  'Français-2nde A': {
    'Trimestre 1': ['Le roman et le récit', 'Grammaire : analyse de la phrase', 'Étude d\'œuvres littéraires'],
    'Trimestre 2': ['La poésie classique', 'L\'argumentation', 'Techniques de dissertation'],
    'Trimestre 3': ['Le théâtre', 'Commentaire de texte', 'Expression écrite']
  },
  'Français-1ère A': {
    'Trimestre 1': ['Le roman du XIXe siècle', 'Commentaire composé', 'Les figures de style'],
    'Trimestre 2': ['La poésie moderne', 'L\'essai littéraire', 'Dissertation littéraire'],
    'Trimestre 3': ['Le théâtre contemporain', 'Techniques d\'écriture', 'Analyse stylistique']
  },
  'Français-Terminale A': {
    'Trimestre 1': ['Littérature du XXe siècle', 'Dissertation philosophique', 'Analyse critique'],
    'Trimestre 2': ['Le récit moderne', 'L\'autobiographie', 'Techniques argumentatives'],
    'Trimestre 3': ['Préparation au BAC', 'Synthèse littéraire', 'Commentaire composé avancé']
  },
  'Philosophie-2nde A': {
    'Trimestre 1': ['Introduction à la réflexion philosophique', 'Qu\'est-ce que philosopher?', 'Les grands courants'],
    'Trimestre 2': ['La conscience de soi', 'La perception', 'Le langage'],
    'Trimestre 3': ['La culture', 'L\'art', 'La technique']
  },
  'Philosophie-1ère A': {
    'Trimestre 1': ['La conscience', 'L\'inconscient', 'Autrui'],
    'Trimestre 2': ['Le désir', 'L\'existence et le temps', 'La liberté'],
    'Trimestre 3': ['Le devoir', 'Le bonheur', 'La morale']
  },
  'Philosophie-Terminale A': {
    'Trimestre 1': ['La vérité', 'La raison et le réel', 'Théorie et expérience'],
    'Trimestre 2': ['La démonstration', 'L\'interprétation', 'Le vivant'],
    'Trimestre 3': ['La matière et l\'esprit', 'La société', 'La justice et le droit']
  },
  'Histoire-Géo-2nde A': {
    'Trimestre 1': ['L\'Europe et le monde au XIXe siècle', 'La Révolution industrielle'],
    'Trimestre 2': ['Les grandes puissances européennes', 'Géographie : population mondiale'],
    'Trimestre 3': ['Les transformations sociales', 'Développement durable']
  },
  'Histoire-Géo-1ère A': {
    'Trimestre 1': ['La Première Guerre mondiale', 'La Révolution russe'],
    'Trimestre 2': ['L\'entre-deux-guerres', 'Géographie : mondialisation'],
    'Trimestre 3': ['La Seconde Guerre mondiale', 'Les enjeux énergétiques']
  },
  'Histoire-Géo-Terminale A': {
    'Trimestre 1': ['La Guerre froide', 'Décolonisation'],
    'Trimestre 2': ['Le monde depuis 1991', 'Géographie : puissances mondiales'],
    'Trimestre 3': ['Les conflits contemporains', 'L\'Afrique dans le monde']
  },
  'Mathématiques-2nde A': {
    'Trimestre 1': ['Fonctions numériques', 'Équations du premier degré'],
    'Trimestre 2': ['Statistiques descriptives', 'Géométrie plane'],
    'Trimestre 3': ['Proportionnalité', 'Trigonométrie de base']
  },
  'Mathématiques-1ère A': {
    'Trimestre 1': ['Suites numériques', 'Fonctions de référence'],
    'Trimestre 2': ['Dérivation', 'Probabilités'],
    'Trimestre 3': ['Statistiques', 'Géométrie analytique']
  },
  'Mathématiques-Terminale A': {
    'Trimestre 1': ['Fonctions logarithmes', 'Primitives'],
    'Trimestre 2': ['Intégrales', 'Probabilités conditionnelles'],
    'Trimestre 3': ['Suites et limites', 'Préparation au BAC']
  },
  'Anglais-2nde A': {
    'Trimestre 1': ['Grammar fundamentals', 'Reading comprehension', 'Vocabulary building'],
    'Trimestre 2': ['Writing skills', 'Oral expression', 'British culture'],
    'Trimestre 3': ['Literature introduction', 'Debate and discussion', 'American culture']
  },
  'Anglais-1ère A': {
    'Trimestre 1': ['Advanced grammar', 'Essay writing', 'Literary analysis'],
    'Trimestre 2': ['British literature', 'Argumentation', 'Translation'],
    'Trimestre 3': ['American literature', 'Presentation skills', 'Critical thinking']
  },
  'Anglais-Terminale A': {
    'Trimestre 1': ['Literary criticism', 'Advanced writing', 'Shakespeare studies'],
    'Trimestre 2': ['Contemporary issues', 'Debate preparation', 'Poetry analysis'],
    'Trimestre 3': ['BAC preparation', 'Public speaking', 'Cultural studies']
  },
  'Espagnol-2nde A': {
    'Trimestre 1': ['Gramática básica', 'Comprensión lectora', 'Vocabulario cotidiano'],
    'Trimestre 2': ['Expresión escrita', 'Conversación', 'Cultura hispana'],
    'Trimestre 3': ['Literatura introducción', 'Debate', 'Civilización española']
  },
  'Espagnol-1ère A': {
    'Trimestre 1': ['Gramática avanzada', 'Redacción', 'Literatura española'],
    'Trimestre 2': ['Argumentación', 'Literatura latinoamericana', 'Traducción'],
    'Trimestre 3': ['Análisis literario', 'Presentaciones', 'Cultura contemporánea']
  },
  'Espagnol-Terminale A': {
    'Trimestre 1': ['Crítica literaria', 'Escritura avanzada', 'Cervantes'],
    'Trimestre 2': ['Temas contemporáneos', 'Debate avanzado', 'Poesía'],
    'Trimestre 3': ['Preparación BAC', 'Expresión oral', 'Estudios culturales']
  },

  'Mathématiques-2nde C': {
    'Trimestre 1': ['Ensembles et applications', 'Nombres et calculs'],
    'Trimestre 2': ['Fonctions numériques', 'Géométrie analytique'],
    'Trimestre 3': ['Statistiques', 'Vecteurs']
  },
  'Mathématiques-1ère C': {
    'Trimestre 1': ['Nombres complexes', 'Suites numériques'],
    'Trimestre 2': ['Fonctions et limites', 'Dérivées'],
    'Trimestre 3': ['Probabilités', 'Géométrie dans l\'espace']
  },
  'Mathématiques-Terminale C': {
    'Trimestre 1': ['Fonctions exponentielles et logarithmes', 'Primitives et intégrales'],
    'Trimestre 2': ['Équations différentielles', 'Nombres complexes avancés'],
    'Trimestre 3': ['Calcul intégral', 'Probabilités continues']
  },
  'Physique-Chimie-2nde C': {
    'Trimestre 1': ['Mécanique : cinématique', 'Électricité : circuits'],
    'Trimestre 2': ['Optique géométrique', 'Chimie : atome et molécule'],
    'Trimestre 3': ['Forces et mouvement', 'Réactions chimiques']
  },
  'Physique-Chimie-1ère C': {
    'Trimestre 1': ['Dynamique : lois de Newton', 'Électromagnétisme'],
    'Trimestre 2': ['Thermodynamique', 'Chimie organique'],
    'Trimestre 3': ['Optique ondulatoire', 'Cinétique chimique']
  },
  'Physique-Chimie-Terminale C': {
    'Trimestre 1': ['Mécanique du solide', 'Électricité avancée'],
    'Trimestre 2': ['Ondes et vibrations', 'Chimie : acides et bases'],
    'Trimestre 3': ['Physique nucléaire', 'Chimie organique avancée']
  },
  'SVT-2nde C': {
    'Trimestre 1': ['La cellule', 'Organisation du vivant'],
    'Trimestre 2': ['Nutrition et métabolisme', 'Génétique de base'],
    'Trimestre 3': ['Écologie', 'Géologie']
  },
  'SVT-1ère C': {
    'Trimestre 1': ['Génétique moléculaire', 'Physiologie animale'],
    'Trimestre 2': ['Évolution', 'Immunologie'],
    'Trimestre 3': ['Géologie : tectonique', 'Écosystèmes']
  },
  'SVT-Terminale C': {
    'Trimestre 1': ['Génétique des populations', 'Biologie cellulaire avancée'],
    'Trimestre 2': ['Neurobiologie', 'Géologie : magmatisme'],
    'Trimestre 3': ['Biotechnologies', 'Enjeux environnementaux']
  },
  'Français-2nde C': {
    'Trimestre 1': ['Le roman et le récit', 'Grammaire avancée'],
    'Trimestre 2': ['La poésie', 'L\'argumentation'],
    'Trimestre 3': ['Le théâtre', 'Dissertation']
  },
  'Français-1ère C': {
    'Trimestre 1': ['Le roman du XIXe siècle', 'Commentaire composé'],
    'Trimestre 2': ['La poésie moderne', 'L\'essai'],
    'Trimestre 3': ['Le théâtre contemporain', 'Techniques d\'écriture']
  },
  'Philosophie-1ère C': {
    'Trimestre 1': ['Introduction à la philosophie', 'La conscience'],
    'Trimestre 2': ['La perception', 'Autrui'],
    'Trimestre 3': ['Le désir', 'L\'existence']
  },
'Philosophie-Terminale C': {
    'Trimestre 1': ['La vérité', 'La raison et le réel'],
    'Trimestre 2': ['La morale', 'La liberté'],
    'Trimestre 3': ['Le devoir', 'La politique']
  },
  'Anglais-2nde C': {
    'Trimestre 1': ['Grammar review', 'Reading comprehension'],
    'Trimestre 2': ['Writing skills', 'Oral expression'],
    'Trimestre 3': ['Literature introduction', 'Vocabulary expansion']
  },
  'Anglais-1ère C': {
    'Trimestre 1': ['Advanced grammar', 'Essay writing'],
    'Trimestre 2': ['British literature', 'Debate and discussion'],
    'Trimestre 3': ['American literature', 'Presentation skills']
  },
  'Anglais-Terminale C': {
    'Trimestre 1': ['Literary analysis', 'Advanced writing'],
    'Trimestre 2': ['Contemporary issues', 'Translation'],
    'Trimestre 3': ['Exam preparation', 'Public speaking']
  },

  'Mathématiques-2nde D': {
    'Trimestre 1': ['Ensembles et applications', 'Nombres et calculs'],
    'Trimestre 2': ['Fonctions numériques', 'Géométrie analytique'],
    'Trimestre 3': ['Statistiques', 'Vecteurs']
  },
  'Mathématiques-1ère D': {
    'Trimestre 1': ['Nombres complexes', 'Suites numériques'],
    'Trimestre 2': ['Fonctions et limites', 'Dérivées'],
    'Trimestre 3': ['Probabilités', 'Géométrie dans l\'espace']
  },
  'Mathématiques-Terminale D': {
    'Trimestre 1': ['Fonctions exponentielles et logarithmes', 'Primitives et intégrales'],
    'Trimestre 2': ['Équations différentielles', 'Nombres complexes avancés'],
    'Trimestre 3': ['Calcul intégral', 'Probabilités continues']
  },
  'Physique-Chimie-2nde D': {
    'Trimestre 1': ['Mécanique : cinématique', 'Électricité : circuits'],
    'Trimestre 2': ['Optique géométrique', 'Chimie : atome et molécule'],
    'Trimestre 3': ['Forces et mouvement', 'Réactions chimiques']
  },
  'Physique-Chimie-1ère D': {
    'Trimestre 1': ['Dynamique : lois de Newton', 'Électromagnétisme'],
    'Trimestre 2': ['Thermodynamique', 'Chimie organique'],
    'Trimestre 3': ['Optique ondulatoire', 'Cinétique chimique']
  },
  'Physique-Chimie-Terminale D': {
    'Trimestre 1': ['Mécanique du solide', 'Électricité avancée'],
    'Trimestre 2': ['Ondes et vibrations', 'Chimie : acides et bases'],
    'Trimestre 3': ['Physique nucléaire', 'Chimie organique avancée']
  },
  'SVT-2nde D': {
    'Trimestre 1': ['La cellule', 'Organisation du vivant'],
    'Trimestre 2': ['Nutrition et métabolisme', 'Génétique de base'],
    'Trimestre 3': ['Écologie', 'Géologie']
  },
  'SVT-1ère D': {
    'Trimestre 1': ['Génétique moléculaire', 'Physiologie animale'],
    'Trimestre 2': ['Évolution', 'Immunologie'],
    'Trimestre 3': ['Géologie : tectonique', 'Écosystèmes']
  },
  'SVT-Terminale D': {
    'Trimestre 1': ['Génétique des populations', 'Biologie cellulaire avancée'],
    'Trimestre 2': ['Neurobiologie', 'Géologie : magmatisme'],
    'Trimestre 3': ['Biotechnologies', 'Enjeux environnementaux']
  },
  'Français-2nde D': {
    'Trimestre 1': ['Le roman et le récit', 'Grammaire avancée'],
    'Trimestre 2': ['La poésie', 'L\'argumentation'],
    'Trimestre 3': ['Le théâtre', 'Dissertation']
  },
  'Français-1ère D': {
    'Trimestre 1': ['Le roman du XIXe siècle', 'Commentaire composé'],
    'Trimestre 2': ['La poésie moderne', 'L\'essai'],
    'Trimestre 3': ['Le théâtre contemporain', 'Techniques d\'écriture']
  },
  'Philosophie-1ère D': {
    'Trimestre 1': ['Introduction à la philosophie', 'La conscience'],
    'Trimestre 2': ['La perception', 'Autrui'],
    'Trimestre 3': ['Le désir', 'L\'existence']
  },
  'Philosophie-Terminale D': {
    'Trimestre 1': ['La vérité', 'La raison et le réel'],
    'Trimestre 2': ['La morale', 'La liberté'],
    'Trimestre 3': ['Le devoir', 'La politique']
  },
  'Anglais-2nde D': {
    'Trimestre 1': ['Grammar review', 'Reading comprehension'],
    'Trimestre 2': ['Writing skills', 'Oral expression'],
    'Trimestre 3': ['Literature introduction', 'Vocabulary expansion']
  },
  'Anglais-1ère D': {
    'Trimestre 1': ['Advanced grammar', 'Essay writing'],
    'Trimestre 2': ['British literature', 'Debate and discussion'],
    'Trimestre 3': ['American literature', 'Presentation skills']
  },
  'Anglais-Terminale D': {
    'Trimestre 1': ['Literary analysis', 'Advanced writing'],
    'Trimestre 2': ['Contemporary issues', 'Translation'],
    'Trimestre 3': ['Exam preparation', 'Public speaking']
  },

  'Mathématiques-2nde F1': {
    'Trimestre 1': ['Calcul numérique et algébrique', 'Fonctions linéaires'],
    'Trimestre 2': ['Géométrie plane', 'Trigonométrie'],
    'Trimestre 3': ['Statistiques', 'Vecteurs']
  },
  'Mathématiques-1ère F1': {
    'Trimestre 1': ['Suites numériques', 'Dérivées'],
    'Trimestre 2': ['Fonctions polynômes', 'Probabilités'],
    'Trimestre 3': ['Géométrie dans l\'espace', 'Équations différentielles simples']
  },
  'Mathématiques-Terminale F1': {
    'Trimestre 1': ['Calcul intégral', 'Nombres complexes'],
    'Trimestre 2': ['Équations différentielles', 'Statistiques avancées'],
    'Trimestre 3': ['Mathématiques appliquées', 'Préparation BAC']
  },
  'Physique-2nde F1': {
    'Trimestre 1': ['Mécanique : forces et mouvements', 'Statique'],
    'Trimestre 2': ['Dynamique', 'Travail et énergie'],
    'Trimestre 3': ['Électricité : circuits DC', 'Résistances']
  },
  'Physique-1ère F1': {
    'Trimestre 1': ['Cinématique', 'Lois de Newton'],
    'Trimestre 2': ['Électromagnétisme', 'Circuits AC'],
    'Trimestre 3': ['Thermodynamique', 'Optique géométrique']
  },
  'Physique-Terminale F1': {
    'Trimestre 1': ['Mécanique des fluides', 'Électricité industrielle'],
    'Trimestre 2': ['Ondes', 'Machines électriques'],
    'Trimestre 3': ['Automatismes', 'Préparation BAC']
  },
  'Technologie-2nde F1': {
    'Trimestre 1': ['Initiation aux systèmes mécaniques', 'Outils et mesures'],
    'Trimestre 2': ['Matériaux et leurs propriétés', 'Procédés de fabrication'],
    'Trimestre 3': ['Dessin technique de base', 'Sécurité en atelier']
  },
  'Technologie-1ère F1': {
    'Trimestre 1': ['Systèmes mécaniques avancés', 'Résistance des matériaux'],
    'Trimestre 2': ['Machines-outils', 'CAO introduction'],
    'Trimestre 3': ['Maintenance industrielle', 'Automatisation']
  },
  'Technologie-Terminale F1': {
    'Trimestre 1': ['Conception mécanique', 'Étude de fabrication'],
    'Trimestre 2': ['Systèmes automatisés', 'Gestion de production'],
    'Trimestre 3': ['Projet technique', 'Préparation BAC']
  },
  'Dessin Technique-2nde F1': {
    'Trimestre 1': ['Normes de dessin', 'Projections orthogonales'],
    'Trimestre 2': ['Coupes et sections', 'Cotation'],
    'Trimestre 3': ['Perspective', 'Lecture de plans']
  },
  'Dessin Technique-1ère F1': {
    'Trimestre 1': ['Dessin d\'ensemble', 'Dessin de définition'],
    'Trimestre 2': ['Schémas cinématiques', 'DAO'],
    'Trimestre 3': ['Tolérances et ajustements', 'Plans de montage']
  },
  'Dessin Technique-Terminale F1': {
    'Trimestre 1': ['CAO avancée', 'Modélisation 3D'],
    'Trimestre 2': ['Plans d\'exécution', 'Nomenclatures'],
    'Trimestre 3': ['Dossier technique complet', 'Préparation BAC']
  },
  'Français-2nde F1': {
    'Trimestre 1': ['Communication professionnelle', 'Compte-rendu technique'],
    'Trimestre 2': ['Correspondance administrative', 'Rapport de stage'],
    'Trimestre 3': ['Expression orale professionnelle', 'Note de synthèse']
  },
  'Français-1ère F1': {
    'Trimestre 1': ['Rédaction technique', 'Documentation professionnelle'],
    'Trimestre 2': ['Argumentation', 'Présentation orale'],
    'Trimestre 3': ['Dossier professionnel', 'Communication en entreprise']
  },
  'Français-Terminale F1': {
    'Trimestre 1': ['Rapport de projet', 'Communication technique'],
    'Trimestre 2': ['Synthèse documentaire', 'Soutenance de projet'],
    'Trimestre 3': ['Préparation BAC', 'Insertion professionnelle']
  },

  'Mathématiques-2nde F2': {
    'Trimestre 1': ['Calcul numérique', 'Algèbre de base'],
    'Trimestre 2': ['Fonctions', 'Trigonométrie'],
    'Trimestre 3': ['Nombres complexes introduction', 'Vecteurs']
  },
  'Mathématiques-1ère F2': {
    'Trimestre 1': ['Nombres complexes', 'Suites'],
    'Trimestre 2': ['Dérivation', 'Fonctions exponentielles'],
    'Trimestre 3': ['Équations différentielles', 'Probabilités']
  },
  'Mathématiques-Terminale F2': {
    'Trimestre 1': ['Intégrales', 'Transformées'],
    'Trimestre 2': ['Mathématiques pour l\'électronique', 'Statistiques'],
    'Trimestre 3': ['Applications pratiques', 'Préparation BAC']
  },
  'Physique-2nde F2': {
    'Trimestre 1': ['Électricité de base', 'Loi d\'Ohm'],
    'Trimestre 2': ['Circuits électriques', 'Puissance électrique'],
    'Trimestre 3': ['Magnétisme', 'Électromagnétisme']
  },
  'Physique-1ère F2': {
    'Trimestre 1': ['Circuits AC', 'Impédance'],
    'Trimestre 2': ['Transformateurs', 'Machines électriques'],
    'Trimestre 3': ['Électronique analogique', 'Semiconducteurs']
  },
  'Physique-Terminale F2': {
    'Trimestre 1': ['Électronique de puissance', 'Filtres'],
    'Trimestre 2': ['Amplificateurs', 'Oscillateurs'],
    'Trimestre 3': ['Systèmes électroniques', 'Préparation BAC']
  },
  'Électronique-2nde F2': {
    'Trimestre 1': ['Composants passifs', 'Diodes'],
    'Trimestre 2': ['Transistors', 'Circuits de base'],
    'Trimestre 3': ['Amplification', 'Alimentation']
  },
  'Électronique-1ère F2': {
    'Trimestre 1': ['Amplificateurs opérationnels', 'Filtres actifs'],
    'Trimestre 2': ['Oscillateurs', 'Modulation'],
    'Trimestre 3': ['Électronique numérique', 'Logique combinatoire']
  },
  'Électronique-Terminale F2': {
    'Trimestre 1': ['Circuits intégrés', 'Microcontrôleurs'],
    'Trimestre 2': ['Systèmes embarqués', 'Programmation'],
    'Trimestre 3': ['Projet électronique', 'Préparation BAC']
  },
  'Technologie-2nde F2': {
    'Trimestre 1': ['Technologie des composants', 'Lecture de schémas'],
    'Trimestre 2': ['Montage électronique', 'Soudure'],
    'Trimestre 3': ['Mesures électroniques', 'Oscilloscope']
  },
  'Technologie-1ère F2': {
    'Trimestre 1': ['Systèmes électroniques', 'CAO électronique'],
    'Trimestre 2': ['Circuits imprimés', 'Tests et mesures'],
    'Trimestre 3': ['Maintenance électronique', 'Diagnostic de pannes']
  },
  'Technologie-Terminale F2': {
    'Trimestre 1': ['Conception de systèmes', 'Prototypage'],
    'Trimestre 2': ['Automatisation', 'Interfaçage'],
    'Trimestre 3': ['Projet technique', 'Préparation BAC']
  },
  'Français-2nde F2': {
    'Trimestre 1': ['Communication technique', 'Documentation'],
    'Trimestre 2': ['Rapport technique', 'Correspondance'],
    'Trimestre 3': ['Expression professionnelle', 'Compte-rendu']
  },
  'Français-1ère F2': {
    'Trimestre 1': ['Rédaction technique', 'Note de synthèse'],
    'Trimestre 2': ['Argumentation', 'Présentation orale'],
    'Trimestre 3': ['Dossier technique', 'Communication']
  },
  'Français-Terminale F2': {
    'Trimestre 1': ['Rapport de projet', 'Documentation technique'],
    'Trimestre 2': ['Synthèse', 'Soutenance'],
    'Trimestre 3': ['Préparation BAC', 'Communication professionnelle']
  },

  'Mathématiques-2nde F3': {
    'Trimestre 1': ['Calcul pour l\'électricité', 'Algèbre appliquée'],
    'Trimestre 2': ['Trigonométrie pour l\'électrotechnique', 'Nombres complexes'],
    'Trimestre 3': ['Vecteurs de Fresnel', 'Statistiques']
  },
  'Mathématiques-1ère F3': {
    'Trimestre 1': ['Nombres complexes en électricité', 'Suites'],
    'Trimestre 2': ['Dérivation', 'Fonctions sinusoïdales'],
    'Trimestre 3': ['Équations différentielles', 'Transformées']
  },
  'Mathématiques-Terminale F3': {
    'Trimestre 1': ['Calcul vectoriel', 'Intégrales'],
    'Trimestre 2': ['Mathématiques pour l\'électrotechnique', 'Fourier'],
    'Trimestre 3': ['Applications pratiques', 'Préparation BAC']
  },
  'Électricité-2nde F3': {
    'Trimestre 1': ['Électricité de base', 'Lois fondamentales'],
    'Trimestre 2': ['Circuits électriques', 'Analyse de circuits'],
    'Trimestre 3': ['Puissance électrique', 'Facteur de puissance']
  },
  'Électricité-1ère F3': {
    'Trimestre 1': ['Régimes sinusoïdaux', 'Triphasé'],
    'Trimestre 2': ['Transformateurs', 'Machines électriques'],
    'Trimestre 3': ['Distribution électrique', 'Protection']
  },
  'Électricité-Terminale F3': {
    'Trimestre 1': ['Électrotechnique industrielle', 'Automatismes électriques'],
    'Trimestre 2': ['Variation de vitesse', 'Électronique de puissance'],
    'Trimestre 3': ['Installation électrique', 'Préparation BAC']
  },
  'Électronique-2nde F3': {
    'Trimestre 1': ['Composants électroniques', 'Semiconducteurs'],
    'Trimestre 2': ['Circuits électroniques de base', 'Amplification'],
    'Trimestre 3': ['Alimentation électronique', 'Redressement']
  },
  'Électronique-1ère F3': {
    'Trimestre 1': ['Électronique de puissance', 'Thyristors'],
    'Trimestre 2': ['Variateurs électroniques', 'Commande'],
    'Trimestre 3': ['Régulation', 'Asservissement']
  },
  'Électronique-Terminale F3': {
    'Trimestre 1': ['Systèmes de commande', 'Automates'],
    'Trimestre 2': ['Supervision', 'Communication industrielle'],
    'Trimestre 3': ['Projet électrotechnique', 'Préparation BAC']
  },
  'Technologie-2nde F3': {
    'Trimestre 1': ['Technologie des installations', 'Schémas électriques'],
    'Trimestre 2': ['Appareillage électrique', 'Câblage'],
    'Trimestre 3': ['Mesures électriques', 'Sécurité électrique']
  },
  'Technologie-1ère F3': {
    'Trimestre 1': ['Installations industrielles', 'Distribution'],
    'Trimestre 2': ['Automatismes', 'Commande'],
    'Trimestre 3': ['Maintenance électrique', 'Diagnostic']
  },
  'Technologie-Terminale F3': {
    'Trimestre 1': ['Conception d\'installations', 'Dimensionnement'],
    'Trimestre 2': ['Gestion de l\'énergie', 'Qualité de l\'énergie'],
    'Trimestre 3': ['Projet d\'installation', 'Préparation BAC']
  },
  'Français-2nde F3': {
    'Trimestre 1': ['Communication technique', 'Vocabulaire professionnel'],
    'Trimestre 2': ['Rapport d\'intervention', 'Compte-rendu'],
    'Trimestre 3': ['Expression professionnelle', 'Documentation']
  },
  'Français-1ère F3': {
    'Trimestre 1': ['Rédaction technique', 'Dossier technique'],
    'Trimestre 2': ['Argumentation', 'Présentation'],
    'Trimestre 3': ['Communication en entreprise', 'Rapport']
  },
  'Français-Terminale F3': {
    'Trimestre 1': ['Rapport de projet', 'Documentation technique'],
    'Trimestre 2': ['Note de synthèse', 'Soutenance'],
    'Trimestre 3': ['Préparation BAC', 'Insertion professionnelle']
  },

  'Économie-2nde G': {
    'Trimestre 1': ['Introduction à l\'économie', 'Les agents économiques'],
    'Trimestre 2': ['Le marché', 'La production'],
    'Trimestre 3': ['La consommation', 'L\'épargne']
  },
  'Économie-1ère G': {
    'Trimestre 1': ['Microéconomie', 'La concurrence'],
    'Trimestre 2': ['Macroéconomie', 'Croissance économique'],
    'Trimestre 3': ['Commerce international', 'Monnaie et crédit']
  },
  'Économie-Terminale G': {
    'Trimestre 1': ['Politiques économiques', 'Développement économique'],
    'Trimestre 2': ['Économie internationale', 'Mondialisation'],
    'Trimestre 3': ['Économie du développement', 'Préparation BAC']
  },
  'Comptabilité-2nde G': {
    'Trimestre 1': ['Introduction à la comptabilité', 'Le bilan'],
    'Trimestre 2': ['Le compte de résultat', 'Les opérations courantes'],
    'Trimestre 3': ['La TVA', 'Les salaires']
  },
  'Comptabilité-1ère G': {
    'Trimestre 1': ['Comptabilité approfondie', 'Les immobilisations'],
    'Trimestre 2': ['Les stocks', 'Les provisions'],
    'Trimestre 3': ['Comptabilité analytique', 'Calcul des coûts']
  },
  'Comptabilité-Terminale G': {
    'Trimestre 1': ['Analyse financière', 'Les ratios'],
    'Trimestre 2': ['Gestion budgétaire', 'Contrôle de gestion'],
    'Trimestre 3': ['Audit comptable', 'Préparation BAC']
  },
  'Mathématiques-2nde G': {
    'Trimestre 1': ['Mathématiques financières', 'Pourcentages'],
    'Trimestre 2': ['Proportionnalité', 'Statistiques'],
    'Trimestre 3': ['Fonctions', 'Graphiques']
  },
  'Mathématiques-1ère G': {
    'Trimestre 1': ['Intérêts simples et composés', 'Annuités'],
    'Trimestre 2': ['Amortissements', 'Probabilités'],
    'Trimestre 3': ['Statistiques descriptives', 'Indices']
  },
  'Mathématiques-Terminale G': {
    'Trimestre 1': ['Mathématiques appliquées à la gestion', 'Programmation linéaire'],
    'Trimestre 2': ['Statistiques inférentielles', 'Échantillonnage'],
    'Trimestre 3': ['Recherche opérationnelle', 'Préparation BAC']
  },
  'Droit-2nde G': {
    'Trimestre 1': ['Introduction au droit', 'Les sources du droit'],
    'Trimestre 2': ['Les personnes', 'La capacité juridique'],
    'Trimestre 3': ['Les biens', 'La propriété']
  },
  'Droit-1ère G': {
    'Trimestre 1': ['Droit civil', 'Les contrats'],
    'Trimestre 2': ['Droit commercial', 'Les sociétés'],
    'Trimestre 3': ['Droit du travail', 'Le contrat de travail']
  },
  'Droit-Terminale G': {
    'Trimestre 1': ['Droit des affaires', 'Droit fiscal'],
    'Trimestre 2': ['Droit social avancé', 'Droit de la concurrence'],
    'Trimestre 3': ['Contentieux', 'Préparation BAC']
  },
  'Français-2nde G': {
    'Trimestre 1': ['Communication professionnelle', 'Correspondance commerciale'],
    'Trimestre 2': ['Le rapport', 'La note de service'],
    'Trimestre 3': ['Expression écrite professionnelle', 'Compte-rendu']
  },
  'Français-1ère G': {
    'Trimestre 1': ['Rédaction administrative', 'Le procès-verbal'],
    'Trimestre 2': ['Argumentation commerciale', 'Présentation orale'],
    'Trimestre 3': ['Communication d\'entreprise', 'Dossier professionnel']
  },
  'Français-Terminale G': {
    'Trimestre 1': ['Communication managériale', 'Négociation'],
    'Trimestre 2': ['Synthèse documentaire', 'Soutenance'],
    'Trimestre 3': ['Préparation BAC', 'Techniques de communication']
  },

  // ===== UNIVERSITÉ - DROIT =====
  'Droit-Licence 1': {
    'Semestre 1': ['Introduction / Initiation au droit', 'Histoire du droit', 'Droit constitutionnel 1', 'Histoire du droit romain'],
    'Semestre 2': ['Droit civil 2 (la famille)', 'Droit constitutionnel 2', 'Institutions communautaires']
  },
  'Droit-Licence 2': {
    'Semestre 1': ['Droit administratif 1', 'Droit pénal / Droit civil', 'Histoire du droit colonial'],
    'Semestre 2': ['Droit administratif 2', 'Procédure pénale / Procédure civile', 'Droit des contrats']
  },
  'Droit-Licence 3 (Droit Public)': {
    'Semestre 1': ['Droit public général', 'Finances publiques', 'Relations internationales'],
    'Semestre 2': ['Droit administratif des biens', 'Libertés publiques', 'Institutions judiciaires']
  },
  'Droit-Licence 3 (Droit Privé)': {
    'Semestre 1': ['Droit des affaires', 'Droit du travail', 'Voies d\'exécution'],
    'Semestre 2': ['Droit commercial', 'Droit des sociétés', 'Procédures collectives']
  },
  'Droit-Master 1 (Public)': {
    'Semestre 1': ['Droit public général approfondi', 'Finances publiques avancées', 'Relations internationales'],
    'Semestre 2': ['Contentieux administratif', 'Droit de l\'urbanisme', 'Droit de l\'environnement']
  },
  'Droit-Master 1 (Privé)': {
    'Semestre 1': ['Droit des affaires avancé', 'Droit social approfondi', 'Propriété intellectuelle'],
    'Semestre 2': ['Droit bancaire', 'Droit des assurances', 'Arbitrage commercial']
  },

  'Médecine-1ère Année': {
    'Semestre 1': ['Anatomie générale', 'Biologie cellulaire', 'Biochimie', 'Physique médicale'],
    'Semestre 2': ['Anatomie systémique', 'Physiologie', 'Histologie', 'Embryologie']
  },
  'Médecine-2ème Année': {
    'Semestre 1': ['Sémiologie médicale', 'Pathologie générale', 'Microbiologie', 'Parasitologie'],
    'Semestre 2': ['Pharmacologie générale', 'Immunologie', 'Anatomie pathologique', 'Radiologie']
  },
  'Médecine-3ème Année': {
    'Semestre 1': ['Pathologie cardiovasculaire', 'Pathologie respiratoire', 'Pathologie digestive'],
    'Semestre 2': ['Pathologie rénale', 'Endocrinologie', 'Hématologie', 'Dermatologie']
  },

  'Ingénierie Informatique-Licence 1': {
    'Semestre 1': ['Algorithmique et programmation', 'Architecture des ordinateurs', 'Mathématiques discrètes', 'Algèbre linéaire'],
    'Semestre 2': ['Programmation orientée objet', 'Structures de données', 'Systèmes d\'exploitation', 'Probabilités et statistiques']
  },
  'Ingénierie Informatique-Licence 2': {
    'Semestre 1': ['Base de données', 'Réseaux informatiques', 'Programmation web', 'Théorie des graphes'],
    'Semestre 2': ['Génie logiciel','Compilation', 'Intelligence artificielle', 'Analyse numérique']
  },
  'Ingénierie Informatique-Licence 3': {
    'Semestre 1': ['Développement mobile', 'Sécurité informatique', 'Cloud computing', 'Big Data'],
    'Semestre 2': ['Machine Learning', 'Systèmes distribués', 'Architecture logicielle', 'Projet de fin d\'études']
  },
  'Ingénierie Informatique-Master 1': {
    'Semestre 1': ['Deep Learning', 'Blockchain', 'DevOps', 'IoT'],
    'Semestre 2': ['Traitement d\'images', 'Réalité virtuelle', 'Cybersécurité avancée', 'Recherche opérationnelle']
  },

  'Économie et Gestion-Licence 1': {
    'Semestre 1': ['Microéconomie 1', 'Macroéconomie 1', 'Mathématiques pour économistes', 'Comptabilité générale'],
    'Semestre 2': ['Microéconomie 2', 'Macroéconomie 2', 'Statistiques descriptives', 'Gestion d\'entreprise']
  },
  'Économie et Gestion-Licence 2': {
    'Semestre 1': ['Économétrie', 'Finance d\'entreprise', 'Marketing', 'Droit des affaires'],
    'Semestre 2': ['Théorie des organisations', 'Gestion des ressources humaines', 'Contrôle de gestion', 'Commerce international']
  },
  'Économie et Gestion-Licence 3': {
    'Semestre 1': ['Stratégie d\'entreprise', 'Finance de marché', 'Audit et contrôle', 'Entrepreneuriat'],
    'Semestre 2': ['Gestion de projet', 'E-commerce', 'Management international', 'Stage professionnel']
  },
  'Économie et Gestion-Master 1': {
    'Semestre 1': ['Finance internationale', 'Management stratégique avancé', 'Innovation et R&D', 'Analyse financière approfondie'],
    'Semestre 2': ['Gestion des risques', 'Private equity', 'Supply chain management', 'Business intelligence']
  },

  'Pharmacie-1ère Année': {
    'Semestre 1': ['Chimie générale et minérale', 'Biologie cellulaire', 'Physique appliquée', 'Mathématiques'],
    'Semestre 2': ['Chimie organique', 'Biochimie', 'Anatomie', 'Physiologie']
  },
  'Pharmacie-2ème Année': {
    'Semestre 1': ['Pharmacologie générale', 'Pharmacognosie', 'Chimie analytique', 'Microbiologie'],
    'Semestre 2': ['Galénique', 'Toxicologie', 'Immunologie', 'Parasitologie']
  },
  'Pharmacie-3ème Année': {
    'Semestre 1': ['Pharmacologie spéciale', 'Pharmacie clinique', 'Chimie thérapeutique', 'Biopharmacie'],
    'Semestre 2': ['Pharmacocinétique', 'Pharmacovigilance', 'Législation pharmaceutique', 'Gestion officinale']
  },
  'Pharmacie-4ème Année': {
    'Semestre 1': ['Thérapeutique', 'Pharmaco-économie', 'Assurance qualité', 'Phytothérapie'],
    'Semestre 2': ['Stage hospitalier', 'Conseil pharmaceutique', 'Médicaments génériques', 'Homéopathie']
  },

  'Génie Civil-Licence 1': {
    'Semestre 1': ['Mathématiques pour ingénieurs', 'Physique générale', 'Mécanique des solides', 'Dessin technique'],
    'Semestre 2': ['Résistance des matériaux', 'Topographie', 'Matériaux de construction', 'Informatique appliquée']
  },
  'Génie Civil-Licence 2': {
    'Semestre 1': ['Béton armé 1', 'Mécanique des fluides', 'Géotechnique', 'Construction métallique'],
    'Semestre 2': ['Béton armé 2', 'Hydraulique', 'Routes et voiries', 'Calcul des structures']
  },
  'Génie Civil-Licence 3': {
    'Semestre 1': ['Béton précontraint', 'Ponts et ouvrages d\'art', 'Assainissement', 'Gestion de chantier'],
    'Semestre 2': ['Dynamique des structures', 'Bâtiments', 'Métrés et devis', 'Projet de fin d\'études']
  },
  'Génie Civil-Master 1': {
    'Semestre 1': ['Structures en béton avancées', 'Génie parasismique', 'Calcul par éléments finis', 'BIM (Building Information Modeling)'],
    'Semestre 2': ['Réhabilitation des structures', 'Géotechnique avancée', 'Environnement et développement durable', 'Management de projets']
  },

  'Lettres Modernes-Licence 1': {
    'Semestre 1': ['Littérature française du Moyen Âge', 'Grammaire française', 'Linguistique générale', 'Latin'],
    'Semestre 2': ['Littérature française du XVIe siècle', 'Stylistique', 'Phonétique et phonologie', 'Langue ancienne']
  },
  'Lettres Modernes-Licence 2': {
    'Semestre 1': ['Littérature française du XVIIe siècle', 'Littérature comparée', 'Sémantique', 'Ancien français'],
    'Semestre 2': ['Littérature française du XVIIIe siècle', 'Théories littéraires', 'Sociolinguistique', 'Littérature francophone']
  },
  'Lettres Modernes-Licence 3': {
    'Semestre 1': ['Littérature française du XIXe siècle', 'Narratologie', 'Lexicologie', 'Littératures francophones d\'Afrique'],
    'Semestre 2': ['Littérature française du XXe siècle', 'Critique littéraire', 'Analyse du discours', 'Mémoire de recherche']
  },
  'Lettres Modernes-Master 1': {
    'Semestre 1': ['Poétique moderne', 'Histoire de la langue française', 'Littérature et société', 'Méthodologie de la recherche'],
    'Semestre 2': ['Littérature contemporaine', 'Linguistique textuelle', 'Édition et critique génétique', 'Séminaire de recherche']
  }
};