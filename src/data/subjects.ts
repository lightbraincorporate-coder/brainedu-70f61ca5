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
  // Série C - Mathématiques
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
  
  // Série C - Physique-Chimie
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

  // Série C - SVT
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

  // Série C - Français
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

  // Série C - Philosophie
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

  // Série C - Anglais
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

  // Série D - Mathématiques
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

  // Série D - Physique-Chimie
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

  // Série D - SVT
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

  // Série D - Français
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

  // Série D - Philosophie
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

  // Série D - Anglais
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

  // Série A
  'Français-2nde A': {
    'Trimestre 1': ['Le roman et le récit', 'Grammaire avancée'],
    'Trimestre 2': ['La poésie', 'L\'argumentation'],
    'Trimestre 3': ['Le théâtre', 'Dissertation']
  },
  'Français-1ère A': {
    'Trimestre 1': ['Littérature française du XVIIe siècle', 'Le classicisme'],
    'Trimestre 2': ['Le Siècle des Lumières', 'Essai et argumentation'],
    'Trimestre 3': ['Le romantisme', 'Commentaire littéraire']
  },
  'Français-Terminale A': {
    'Trimestre 1': ['Le roman réaliste et naturaliste', 'Analyse de texte'],
    'Trimestre 2': ['Le surréalisme et la modernité', 'Dissertation littéraire'],
    'Trimestre 3': ['Le théâtre contemporain', 'Préparation au bac']
  },

  'Philosophie-1ère A': {
    'Trimestre 1': ['Introduction à la philosophie', 'La conscience et l\'inconscient'],
    'Trimestre 2': ['La perception', 'Le langage'],
    'Trimestre 3': ['Le désir', 'L\'existence et le temps']
  },
  'Philosophie-Terminale A': {
    'Trimestre 1': ['La vérité et la raison', 'Théorie de la connaissance'],
    'Trimestre 2': ['La morale et l\'éthique', 'La liberté'],
    'Trimestre 3': ['Le devoir et la justice', 'La politique et l\'État']
  },

  'Histoire-Géo-2nde A': {
    'Trimestre 1': ['L\'Antiquité méditerranéenne', 'Les grandes civilisations'],
    'Trimestre 2': ['Le Moyen Âge européen', 'Géographie : la mondialisation'],
    'Trimestre 3': ['Les grandes découvertes', 'Dynamiques territoriales']
  },
  'Histoire-Géo-1ère A': {
    'Trimestre 1': ['Les révolutions du XVIIIe siècle', 'L\'Europe au XIXe'],
    'Trimestre 2': ['Colonisation et impérialisme', 'Géographie économique'],
    'Trimestre 3': ['La Première Guerre mondiale', 'Aménagement des territoires']
  },
  'Histoire-Géo-Terminale A': {
    'Trimestre 1': ['La Seconde Guerre mondiale', 'La décolonisation'],
    'Trimestre 2': ['La Guerre froide', 'Géopolitique contemporaine'],
    'Trimestre 3': ['Le monde depuis 1989', 'Mondialisation et territoires']
  },

  'Mathématiques-2nde A': {
    'Trimestre 1': ['Ensembles et logique', 'Nombres et calculs'],
    'Trimestre 2': ['Fonctions de référence', 'Statistiques'],
    'Trimestre 3': ['Géométrie plane', 'Probabilités']
  },
  'Mathématiques-1ère A': {
    'Trimestre 1': ['Suites numériques', 'Fonctions'],
    'Trimestre 2': ['Dérivation', 'Probabilités'],
    'Trimestre 3': ['Statistiques', 'Géométrie analytique']
  },
  'Mathématiques-Terminale A': {
    'Trimestre 1': ['Fonctions logarithmes', 'Primitives'],
    'Trimestre 2': ['Probabilités conditionnelles', 'Lois de probabilité'],
    'Trimestre 3': ['Intégration', 'Préparation au bac']
  },

  'Anglais-2nde A': {
    'Trimestre 1': ['Grammar fundamentals', 'Reading and comprehension'],
    'Trimestre 2': ['Writing essays', 'Speaking skills'],
    'Trimestre 3': ['Introduction to literature', 'Cultural studies']
  },
  'Anglais-1ère A': {
    'Trimestre 1': ['Advanced grammar structures', 'Literary analysis'],
    'Trimestre 2': ['British and American culture', 'Debate techniques'],
    'Trimestre 3': ['Creative writing', 'Oral presentations']
  },
  'Anglais-Terminale A': {
    'Trimestre 1': ['Literary movements', 'Critical analysis'],
    'Trimestre 2': ['Contemporary issues', 'Translation techniques'],
    'Trimestre 3': ['Exam preparation', 'Advanced communication']
  },

  'Espagnol-2nde A': {
    'Trimestre 1': ['Grammaire de base', 'Compréhension orale'],
    'Trimestre 2': ['Expression écrite', 'Culture hispanique'],
    'Trimestre 3': ['Conversation', 'Littérature hispanique']
  },
  'Espagnol-1ère A': {
    'Trimestre 1': ['Grammaire avancée', 'Textes littéraires'],
    'Trimestre 2': ['Civilisation espagnole et latino-américaine', 'Débat'],
    'Trimestre 3': ['Rédaction', 'Expression orale']
  },
  'Espagnol-Terminale A': {
    'Trimestre 1': ['Analyse littéraire', 'Essai argumentatif'],
    'Trimestre 2': ['Actualités hispaniques', 'Traduction'],
    'Trimestre 3': ['Préparation au bac', 'Communication avancée']
  },
  'Droit-Licence 1': {
    'Semestre 1': ['Introduction / Initiation au droit', 'Histoire du droit', 'Droit constitutionnel 1', 'Histoire du droit romain'],
    'Semestre 2': ['Droit civil 2 (la famille)', 'Droit constitutionnel 2', 'Institutions communautaires']
  },
  'Droit-Licence 2': {
    'Semestre 1': ['Droit administratif 1', 'Droit pénal / Droit civil', 'Histoire du droit colonial'],
    'Semestre 2': ['Droit administratif 2', 'Procédure pénale / Procédure civile', 'Droit des contrats']
  },
  'Droit-Licence 3 (Droit Public)': {
    'Semestre 1': ['Droit du contentieux administratif', 'Libertés et droits fondamentaux', 'Droit des collectivités territoriales', 'Droit international public'],
    'Semestre 2': ['Droit de l\'espace', 'Droit électoral', 'Droit humanitaire', 'Introduction au droit de l\'environnement et de l\'urbanisme']
  },
  'Droit-Licence 3 (Droit Privé)': {
    'Semestre 1': ['Droit du travail', 'Droit du commerce', 'Droit des sûretés'],
    'Semestre 2': ['Droit de la santé', 'Droit international privé', 'Droit fiscal']
  },
  'Droit-Master 1 (Public)': {
    'Année': ['Droit public général', 'Relations internationales', 'Finances publiques']
  },
  'Droit-Master 1 (Privé)': {
    'Année': ['Droit des affaires', 'Carrières judiciaires', 'Droit de la propriété intellectuelle']
  },
  'Médecine-Université': {
    'Semestre 1': ['Anatomie générale', 'Physiologie humaine', 'Biochimie médicale'],
    'Semestre 2': ['Histologie', 'Microbiologie', 'Pathologie générale']
  },
  'Ingénierie Informatique-Université': {
    'Semestre 1': ['Algorithmique avancée', 'Bases de données SQL/NoSQL', 'Développement web full-stack'],
    'Semestre 2': ['Intelligence artificielle', 'Réseaux et sécurité', 'Programmation objet']
  },
  'Économie et Gestion-Université': {
    'Semestre 1': ['Microéconomie avancée', 'Macroéconomie', 'Comptabilité financière'],
    'Semestre 2': ['Marketing stratégique', 'Gestion des ressources humaines', 'Finance d\'entreprise']
  },
  'Pharmacie-Université': {
    'Semestre 1': ['Chimie organique', 'Pharmacologie générale', 'Galénique'],
    'Semestre 2': ['Toxicologie', 'Biologie pharmaceutique', 'Pharmacie clinique']
  },
  'Génie Civil-Université': {
    'Semestre 1': ['Mécanique des structures', 'Béton armé', 'Calcul de structures'],
    'Semestre 2': ['Géotechnique', 'Hydraulique', 'Construction durable']
  },
  'Lettres Modernes-Université': {
    'Semestre 1': ['Littérature française du XXe siècle', 'Théorie littéraire', 'Littérature comparée'],
    'Semestre 2': ['Analyse stylistique', 'Histoire de la langue française', 'Écriture créative']
  }
};
