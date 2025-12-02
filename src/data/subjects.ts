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
    'Trimestre 1': [
      'Compter et dénombrer jusqu\'à 5',
      'Écriture des chiffres 0 à 5'
    ],
    'Trimestre 2': [
      'Addition simple (1 à 5)',
      'Les nombres de 1 à 10'
    ],
    'Trimestre 3': [
      'Soustraction simple',
      'Les formes géométriques'
    ]
  },
  'Français-CP1': {
    'Trimestre 1': [
      'Sons simples',
      'Alphabet de A à M'
    ],
    'Trimestre 2': [
      'L\'alphabet (lettres A à Z)',
      'Lecture de syllabes'
    ],
    'Trimestre 3': [   
      'Écriture de lettres',
      'Lecture de mots simples'
    ]
  },
  'Sciences-CP1': {
    'Trimestre 1': [
      'Mon corps et les 5 sens'
    ],
    'Trimestre 2': [
      'Les animaux familiers'
    ],
    'Trimestre 3': [
      'Les plantes autour de moi'
    ]
  },
  'Education Civique-CP1': {
    'Trimestre 1': [
      'Vivre ensemble à l\'école'
    ],
    'Trimestre 2': [
      'Le respect des camarades'
    ],
    'Trimestre 3': [
      'Les règles de propreté'
    ]
  },
  'Mathématiques-CP2': {
    'Trimestre 1': [
      'Addition sans retenue (0 à 10)',
      'Les nombres de 0 à 20'
    ],
    'Trimestre 2': [
      'Les nombres de 20 à 50',
      'La soustraction de 0 à 10'
    ],
    'Trimestre 3': [
      'Introduction à la multiplication',
      'Les doubles'
    ]
  },
  'Français-CP2': {
    'Trimestre 1': [
      'Lecture de phrases simples',
      'Les sons complexes : ch, ou, on'
    ],
    'Trimestre 2': [
      'Compréhension de textes courts',
      'L\'écriture cursive'
    ],
    'Trimestre 3': [
      'Conjugaison : présent simple (être, avoir)',
      'Ecrire une phrase'
    ]
  },
  'Sciences-CP2': {
    'Trimestre 1': [
      'L\'eau dans la nature'
    ],
    'Trimestre 2': [
      'Le cycle de vie des plantes'
    ],
    'Trimestre 3': [
      'Les saisons'
    ]
  },
  'Education Civique-CP2': {
    'Trimestre 1': [
      'Mes droits et devoirs à l\'école',
      'Le droit d\'apprendre'
    ],
    'Trimestre 2': [
      'La sécurité à l\'école',
      'Les dangers dans la cour'
    ],
    'Trimestre 3': [
      'Aider les autres',
      'L\'entraide en classe'
    ]
  },
  'Mathématiques-CE1': {
    'Trimestre 1': [
      'Les nombres jusqu\'à 100',
      'Lire et écrire les nombres'
    ],
    'Trimestre 2': [
      'Soustraction posée sans retenue',
      'Soustraction posée avec retenue'
    ],
    'Trimestre 3': [
      'Introduction à la division',
      'Partage équitable'
    ]
  },
  'Français-CE1': {
    'Trimestre 1': [
      'Lecture fluide de textes courts',
      'Compréhension de textes narratifs'
    ],
    'Trimestre 2': [
      'Le verbe : identification',
      'Le sujet du verbe'
    ],
    'Trimestre 3': [
      'L\'adjectif qualificatif',
      'Accord de l\'adjectif'
    ]
  },
  'Histoire-Géographie-CE1': {
    'Trimestre 1': [
      'Se repérer dans le temps : hier, aujourd\'hui, demain',
      'Les jours de la semaine'
    ],
    'Trimestre 2': [
      'Mon école : les différentes classes',
      'Les lieux de l\'école'
    ],
    'Trimestre 3': [
      'Ma ville : où j\'habite',
      'Les monuments de ma ville'
    ]
  },
  'Sciences-CE1': {
    'Trimestre 1': [
      'Le corps humain : le squelette',
      'Les os principaux'
    ],
    'Trimestre 2': [
      'L\'alimentation : les familles d\'aliments',
      'Les fruits et légumes'
    ],
    'Trimestre 3': [
      'L\'air autour de nous',
      'L\'air existe : expériences'
    ]
  },
  'Education Civique-CE1': {
    'Trimestre 1': [
      'Les règles de vie collective',
      'Respecter les règles de la classe'
    ],
    'Trimestre 2': [
      'Le respect de l\'environnement',
      'Ne pas jeter par terre'
    ],
    'Trimestre 3': [
      'Les symboles de mon pays',
      'Le drapeau national'
    ]
  },
  'Mathématiques-CE2': {
    'Trimestre 1': [
      'Les nombres jusqu\'à 1000',
      'Lire et écrire les grands nombres'
    ],
    'Trimestre 2': [
      'Division simple : partage',
      'Division euclidienne'
    ],
    'Trimestre 3': [
      'Géométrie : les triangles',
      'Géométrie : les quadrilatères'
    ]
  },
  'Français-CE2': {
    'Trimestre 1': [
      'La phrase simple',
      'La phrase complexe'
    ],
    'Trimestre 2': [
      'Conjugaison : présent de l\'indicatif',
      'Le passé composé'
    ],
    'Trimestre 3': [
      'Le complément du nom',
      'Les compléments du verbe'
    ]
  },
  'Histoire-Géographie-CE2': {
    'Trimestre 1': [
      'Les grandes périodes de l\'histoire',
      'La Préhistoire'
    ],
    'Trimestre 2': [
      'La Préhistoire : les premiers hommes',
      'Les hommes préhistoriques'
    ],
    'Trimestre 3': [
      'Cartes et paysages de mon pays',
      'Lire une carte'
    ]
  },
  'Sciences-CE2': {
    'Trimestre 1': [
      'Les états de la matière : solide',
      'Les états de la matière : liquide'
    ],
    'Trimestre 2': [
      'Les animaux : classification',
      'Les vertébrés'
    ],
    'Trimestre 3': [
      'Le cycle de l\'eau dans la nature',
      'L\'évaporation de l\'eau'
    ]
  },
  'Education Civique-CE2': {
    'Trimestre 1': [
      'Égalité filles-garçons',
      'Les mêmes droits'
    ],
    'Trimestre 2': [
      'La solidarité',
      'Aider les personnes en difficulté'
    ],
    'Trimestre 3': [
      'Les dangers domestiques',
      'Les dangers électriques'
    ]
  },
  'Mathématiques-CM1': {
    'Trimestre 1': [
      'Les grands nombres : jusqu\'à 1 000 000',
      'Lire et écrire les grands nombres'
    ],
    'Trimestre 2': [
      'Addition de nombres décimaux',
      'Soustraction de nombres décimaux'
    ],
    'Trimestre 3': [
      'Géométrie : les cercles',
      'Le compas'
    ]
  },
  'Français-CM1': {
    'Trimestre 1': [
      'Analyse grammaticale complète',
      'Les classes grammaticales'
    ],
    'Trimestre 2': [
      'Tous les temps de l\'indicatif',
      'Le présent de l\'indicatif'
    ],
    'Trimestre 3': [
      'Rédaction : le récit',
      'Rédaction : la description'
    ]
  },
  'Histoire-Géographie-CM1': {
    'Trimestre 1': [
      'L\'Antiquité : définition',
      'L\'Égypte ancienne'
    ],
    'Trimestre 2': [
      'Le Moyen Âge : les dates',
      'Les invasions barbares'
    ],
    'Trimestre 3': [
      'Géographie : les continents',
      'L\'Afrique'
    ]
  },
  'Sciences-CM1': {
    'Trimestre 1': [
      'Le système solaire',
      'Le Soleil : notre étoile'
    ],
    'Trimestre 2': [
      'L\'énergie : définition',
      'Les sources d\'énergie'
    ],
    'Trimestre 3': [
      'Les écosystèmes',
      'La forêt tropicale'
    ]
  },
  'Education Civique-CM1': {
    'Trimestre 1': [
      'Les institutions de mon pays',
      'Le président de la République'
    ],
    'Trimestre 2': [
      'La démocratie',
      'Qu\'est-ce que la démocratie ?'
    ],
    'Trimestre 3': [
      'Les droits de l\'enfant',
      'La Convention internationale'
    ]
  },
  'Mathématiques-CM2': {
    'Trimestre 1': [
      'Les nombres jusqu\'au milliard',
      'Lire et écrire les très grands nombres'
    ],
    'Trimestre 2': [
      'Les fractions : opérations',
      'Addition de fractions'
    ],
    'Trimestre 3': [
      'Géométrie plane : révisions',
      'Les triangles : propriétés'
    ]
  },
  'Français-CM2': {
    'Trimestre 1': [
      'Analyse logique : les propositions',
      'La proposition indépendante'
    ],
    'Trimestre 2': [
      'Orthographe : les homophones grammaticaux',
      'a/à, et/est, son/sont'
    ],
    'Trimestre 3': [
      'Rédaction : l\'argumentation',
      'Défendre un point de vue'
    ]
  },
  'Histoire-Géographie-CM2': {
    'Trimestre 1': [
      'Les Temps modernes : définition',
      'Les grandes découvertes'
    ],
    'Trimestre 2': [
      'Le XIXe siècle',
      'La Révolution industrielle'
    ],
    'Trimestre 3': [
      'Géographie : mon pays dans le monde',
      'Mon pays dans le monde'
    ]
  },
  'Sciences-CM2': {
    'Trimestre 1': [
      'Le corps humain : la respiration',
      'Les poumons'
    ],
    'Trimestre 2': [
      'Les énergies renouvelables',
      'L\'énergie solaire'
    ],
    'Trimestre 3': [
      'Préservation de l\'environnement',
      'La déforestation'
    ]
  },
  'Education Civique-CM2': {
    'Trimestre 1': [
      'La Constitution',
      'Qu\'est-ce qu\'une Constitution ?'
    ],
    'Trimestre 2': [
      'Citoyenneté et engagement',
      'Être un citoyen responsable'
    ],
    'Trimestre 3': [
      'Les enjeux du développement durable',
      'Le développement durable : définition'
    ]
  },
  'Mathématiques-6ème': {
    'Trimestre 1': [
      'Les nombres décimaux : lecture et écriture',
      'Comparer des nombres décimaux'
    ],
    'Trimestre 2': [
      'Les fractions : écriture',
      'Fractions égales'
    ],
    'Trimestre 3': [
      'La proportionnalité',
      'Tableaux de proportionnalité'
    ]
  },
  'Français-6ème': {
    'Trimestre 1': [
      'Les classes grammaticales',
      'Le nom'
    ],
    'Trimestre 2': [
      'Conjugaison : révisions',
      'Le présent de l\'indicatif'
    ],
    'Trimestre 3': [
      'Orthographe : les accords',
      'Accord sujet-verbe'
    ]
  },
  'Anglais-6ème': {
    'Trimestre 1': [
      'Greetings and introductions',
      'The alphabet'
    ],
    'Trimestre 2': [
      'Family members',
      'Friends and people'
    ],
    'Trimestre 3': [
      'Daily activities',
      'Hobbies and free time'
    ]
  },
  'SVT-6ème': {
    'Trimestre 1': [
      'L\'environnement proche',
      'Observer le paysage'
    ],
    'Trimestre 2': [
      'Les êtres vivants et leur milieu',
      'Les besoins des végétaux'
    ],
    'Trimestre 3': [
      'La biodiversité',
      'Qu\'est-ce que la biodiversité ?'
    ]
  },
  'Physique-Chimie-6ème': {
    'Trimestre 1': [
      'Mélanges et solutions',
      'Mélanger des liquides'
    ],
    'Trimestre 2': [
      'Les états de la matière',
      'L\'état solide'
    ],
    'Trimestre 3': [
      'L\'eau dans notre environnement',
      'L\'eau dans la nature'
    ]
  },
  'Histoire-Géo-6ème': {
    'Trimestre 1': [
      'L\'Orient ancien',
      'Les premières civilisations'
    ],
    'Trimestre 2': [
      'La Grèce antique',
      'Les cités grecques'
    ],
    'Trimestre 3': [
      'Rome',
      'La fondation de Rome'
    ]
  },
  'EPS-6ème': {
    'Trimestre 1': [
      'Athlétisme : course de vitesse',
      'Le départ'
    ],
    'Trimestre 2': [
      'Sports collectifs : football',
      'Les règles du jeu'
    ],
    'Trimestre 3': [
      'Gymnastique de base',
      'La roulade avant'
    ]
  },
  'Mathématiques-5ème': {
    'Trimestre 1': [
      'Les nombres relatifs',
      'Nombres positifs et négatifs'
    ],
    'Trimestre 2': [
      'Les fractions : opérations',
      'Addition de fractions'
    ],
    'Trimestre 3': [
      'La proportionnalité',
      'Reconnaître la proportionnalité'
    ]
  },
  'Français-5ème': {
    'Trimestre 1': [
      'Les fonctions grammaticales',
      'Le sujet'
    ],
    'Trimestre 2': [
      'La phrase complexe',
      'Propositions indépendantes'
    ],
    'Trimestre 3': [
      'Vocabulaire : sens propre et figuré',
      'Les comparaisons'
    ]
  },
  'Anglais-5ème': {
    'Trimestre 1': [
      'Past simple : regular verbs',
      'Past simple : irregular verbs'
    ],
    'Trimestre 2': [
      'Food and meals',
      'At the restaurant'
    ],
    'Trimestre 3': [
      'Sports and hobbies',
      'Playing and doing'
    ]
  },
  'SVT-5ème': {
    'Trimestre 1': [
      'Respiration et occupation des milieux',
      'La respiration des animaux'
    ],
    'Trimestre 2': [
      'Fonctionnement de l\'organisme',
      'La digestion'
    ],
    'Trimestre 3': [
      'Géologie externe',
      'Le paysage : évolution'
    ]
  },
  'Physique-Chimie-5ème': {
    'Trimestre 1': [
      'Électricité : les circuits',
      'Le circuit électrique simple'
    ],
    'Trimestre 2': [
      'La lumière : sources',
      'Sources primaires'
    ],
    'Trimestre 3': [
      'Mélanges homogènes et hétérogènes',
      'Identifier un mélange'
    ]
  },
  'Histoire-Géo-5ème': {
    'Trimestre 1': [
      'Le Moyen Âge : islam et chrétienté',
      'La naissance de l\'islam'
    ],
    'Trimestre 2': [
      'La Renaissance',
      'Les grandes découvertes'
    ],
    'Trimestre 3': [
      'Géographie : ressources et développement',
      'Les ressources naturelles'
    ]
  },
  'EPS-5ème': {
    'Trimestre 1': [
      'Athlétisme : course de vitesse',
      'Technique de course'
    ],
    'Trimestre 2': [
      'Sports collectifs : basketball',
      'Les règles du jeu'
    ],
    'Trimestre 3': [
      'Gymnastique acrobatique',
      'Les figures au sol'
    ]
  },
  'Mathématiques-4ème': {
    'Trimestre 1': [
      'Calcul littéral',
      'Réduire une expression'
    ],
    'Trimestre 2': [
      'Théorème de Pythagore',
      'Dans le triangle rectangle'
    ],
    'Trimestre 3': [
      'Proportionnalité et pourcentages',
      'Situations de proportionnalité'
    ]
  },
  'Français-4ème': {
    'Trimestre 1': [
      'Les propositions subordonnées',
      'Les subordonnées relatives'
    ],
    'Trimestre 2': [
      'Discours direct et indirect',
      'Transformer le discours'
    ],
    'Trimestre 3': [
      'Les temps du récit',
      'Imparfait et passé simple'
    ]
  },
  'Anglais-4ème': {
    'Trimestre 1': [
      'Present perfect',
      'Formation du present perfect'
    ],
    'Trimestre 2': [
      'Passive voice',
      'Formation of the passive'
    ],
    'Trimestre 3': [
      'Conditional sentences',
      'Zero conditional'
    ]
  },
  'SVT-4ème': {
    'Trimestre 1': [
      'La reproduction humaine',
      'L\'appareil reproducteur masculin'
    ],
    'Trimestre 2': [
      'Le système nerveux',
      'Les organes des sens'
    ],
    'Trimestre 3': [
      'Géologie : séismes et volcans',
      'Les séismes'
    ]
  },
  'Physique-Chimie-4ème': {
    'Trimestre 1': [
      'L\'air qui nous entoure',
      'Composition de l\'air'
    ],
    'Trimestre 2': [
      'Les combustions',
      'Qu\'est-ce qu\'une combustion ?'
    ],
    'Trimestre 3': [
      'Lois de l\'électricité',
      'L\'intensité du courant'
    ]
  },
  'Histoire-Géo-4ème': {
    'Trimestre 1': [
      'Les grandes découvertes',
      'Les motivations des explorateurs'
    ],
    'Trimestre 2': [
      'Les révolutions du XVIIIe siècle',
      'Les Lumières'
    ],
    'Trimestre 3': [
      'Géographie : la mondialisation',
      'Qu\'est-ce que la mondialisation ?'
    ]
  },
  'EPS-4ème': {
    'Trimestre 1': [
      'Course de demi-fond',
      'L\'endurance'
    ],
    'Trimestre 2': [
      'Sports collectifs : handball',
      'Les règles du handball'
    ],
    'Trimestre 3': [
      'Natation',
      'La respiration aquatique'
    ]
  },
  'Mathématiques-3ème': {
    'Trimestre 1': [
      'Les racines carrées',
      'Définition de la racine carrée'
    ],
    'Trimestre 2': [
      'Théorème de Thalès',
      'Configuration de Thalès'
    ],
    'Trimestre 3': [
      'Les fonctions affines',
      'Notion de fonction'
    ]
  },
  'Français-3ème': {
    'Trimestre 1': [
      'Analyse logique complète',
      'Les propositions'
    ],
    'Trimestre 2': [
      'L\'argumentation',
      'Thèse et arguments'
    ],
    'Trimestre 3': [
      'Préparation au brevet',
      'La dictée'
    ]
  },
  'Anglais-3ème': {
    'Trimestre 1': [
      'All tenses review',
      'Present simple and continuous'
    ],
    'Trimestre 2': [
      'Reported speech',
      'Statements'
    ],
    'Trimestre 3': [
      'Relative clauses',
      'Defining relative clauses'
    ]
  },
  'SVT-3ème': {
    'Trimestre 1': [
      'Génétique et hérédité',
      'Les chromosomes'
    ],
    'Trimestre 2': [
      'Évolution des espèces',
      'La théorie de l\'évolution'
    ],
    'Trimestre 3': [
      'Responsabilité humaine en santé',
      'Le système immunitaire'
    ]
  },
  'Physique-Chimie-3ème': {
    'Trimestre 1': [
      'Électricité : puissance et énergie',
      'La puissance électrique'
    ],
    'Trimestre 2': [
      'Chimie : acides, bases, pH',
      'Les solutions acides'
    ],
    'Trimestre 3': [
      'Mécanique et énergie',
      'La vitesse'
    ]
  },
  'Histoire-Géo-3ème': {
    'Trimestre 1': [
      'Les deux guerres mondiales',
      'La Première Guerre mondiale'
    ],
    'Trimestre 2': [
      'La Guerre froide',
      'L\'opposition Est-Ouest'
    ],
    'Trimestre 3': [
      'Géographie : l\'Union Européenne',
      'La construction européenne'
    ]
  },
  'EPS-3ème': {
    'Trimestre 1': [
      'Course d\'orientation',
      'Lire une carte'
    ],
    'Trimestre 2': [
      'Sports collectifs : volley-ball',
      'Les règles du volley'
    ],
    'Trimestre 3': [
      'Préparation physique au brevet',
      'Course d\'endurance'
    ]
  },
  'Français-2nde A': {
    'Trimestre 1': [
      'Le roman et le récit du XIXe siècle',
      'Balzac : Le Père Goriot'
    ],
    'Trimestre 2': [
      'La poésie du XIXe au XXe siècle',
      'Baudelaire : Les Fleurs du mal'
    ],
    'Trimestre 3': [
      'Le théâtre du XVIIe au XXIe siècle',
      'Racine : Phèdre'
    ]
  },
  'Français-1ère A': {
    'Trimestre 1': [
      'Le roman du XIXe siècle',
      'Madame Bovary de Flaubert'
    ],
    'Trimestre 2': [
      'La poésie moderne et contemporaine',
      'Apollinaire : Alcools'
    ],
    'Trimestre 3': [
      'Le théâtre contemporain',
      'Ionesco : La Cantatrice chauve'
    ]
  },
  'Français-Terminale A': {
    'Trimestre 1': [
      'Littérature du XXe siècle',
      'Camus : L\'Étranger'
    ],
    'Trimestre 2': [
      'Le récit moderne',
      'Proust : Du côté de chez Swann'
    ],
    'Trimestre 3': [
      'Préparation au BAC',
      'Révision des œuvres'
    ]
  },
  'Philosophie-2nde A': {
    'Trimestre 1': [
      'Introduction à la réflexion philosophique',
      'Socrate et la maïeutique'
    ],
    'Trimestre 2': [
      'La conscience de soi',
      'Descartes : le cogito'
    ],
    'Trimestre 3': [
      'La culture',
      'Nature et culture'
    ]
  },
  'Philosophie-1ère A': {
    'Trimestre 1': [
      'La conscience',
      'Conscience immédiate et réflexive'
    ],
    'Trimestre 2': [
      'Le désir',
      'Désir et besoin'
    ],
    'Trimestre 3': [
      'Le devoir',
      'Kant et l\'impératif catégorique'
    ]
  },
  'Philosophie-Terminale A': {
    'Trimestre 1': [
      'La vérité',
      'Vérité et opinion'
    ],
    'Trimestre 2': [
      'La morale',
      'Kant et l\'impératif catégorique'
    ],
    'Trimestre 3': [
      'La politique',
      'Le contrat social'
    ]
  },
  'Histoire-Géo-2nde A': {
    'Trimestre 1': [
      'L\'Europe et le monde au XIXe siècle',
      'La Révolution industrielle en Europe'
    ],
    'Trimestre 2': [
      'Géographie : population mondiale',
      'La croissance démographique'
    ],
    'Trimestre 3': [
      'Les transformations sociales',
      'Le mouvement ouvrier'
    ]
  },
  'Histoire-Géo-1ère A': {
    'Trimestre 1': [
      'La Première Guerre mondiale',
      'La guerre de tranchées'
    ],
    'Trimestre 2': [
      'L\'entre-deux-guerres',
      'La crise de 1929'
    ],
    'Trimestre 3': [
      'La Seconde Guerre mondiale',
      'Le génocide juif'
    ]
  },
  'Histoire-Géo-Terminale A': {
    'Trimestre 1': [
      'La Guerre froide',
      'La bipolarisation du monde'
    ],
    'Trimestre 2': [
      'Le monde depuis 1991',
      'La chute du mur de Berlin'
    ],
    'Trimestre 3': [
      'Les conflits contemporains',
      'Le Moyen-Orient'
    ]
  },
  'Mathématiques-2nde A': {
    'Trimestre 1': [
      'Les fonctions numériques',
      'Représentation graphique'
    ],
    'Trimestre 2': [
      'Les fonctions de référence',
      'Fonction affine'
    ],
    'Trimestre 3': [
      'Proportionnalité',
      'Trigonométrie de base'
    ]
  },
  'Mathématiques-1ère A': {
    'Trimestre 1': [
      'Les suites numériques',
      'Suites arithmétiques'
    ],
    'Trimestre 2': [
      'La dérivation',
      'Nombre dérivé'
    ],
    'Trimestre 3': [
      'Les statistiques',
      'Paramètres de position'
    ]
  },
  'Mathématiques-Terminale A': {
    'Trimestre 1': [
      'Les fonctions logarithmes',
      'Fonction logarithme népérien'
    ],
    'Trimestre 2': [
      'Les intégrales',
      'Intégrale définie'
    ],
    'Trimestre 3': [
      'Suites et limites',
      'Préparation intensive au BAC'
    ]
  },
  'Anglais-2nde A': {
    'Trimestre 1': [
      'Grammar fundamentals',
      'Tenses review'
    ],
    'Trimestre 2': [
      'Writing skills',
      'Essay structure'
    ],
    'Trimestre 3': [
      'Literature introduction',
      'Short stories'
    ]
  },
  'Anglais-1ère A': {
    'Trimestre 1': [
      'Advanced grammar',
      'Modal verbs advanced'
    ],
    'Trimestre 2': [
      'British literature',
      'Victorian literature'
    ],
    'Trimestre 3': [
      'American literature',
      'Mark Twain'
    ]
  },
  'Anglais-Terminale A': {
    'Trimestre 1': [
      'Literary criticism',
      'Critical approaches'
    ],
    'Trimestre 2': [
      'Contemporary issues',
      'Globalization'
    ],
    'Trimestre 3': [
      'BAC preparation',
      'Exam strategies'
    ]
  },
  'Espagnol-2nde A': {
    'Trimestre 1': [
      'Gramática básica',
      'Los tiempos verbales'
    ],
    'Trimestre 2': [
      'Expresión escrita',
      'La carta'
    ],
    'Trimestre 3': [
      'Literatura introducción',
      'El cuento'
    ]
  },
  'Espagnol-1ère A': {
    'Trimestre 1': [
      'Gramática avanzada',
      'El subjuntivo'
    ],
    'Trimestre 2': [
      'Argumentación',
      'Conectores lógicos'
    ],
    'Trimestre 3': [
      'Análisis literario',
      'Comentario de texto'
    ]
  },
  'Espagnol-Terminale A': {
    'Trimestre 1': [
      'Crítica literaria',
      'Análisis crítico'
    ],
    'Trimestre 2': [
      'Temas contemporáneos',
      'La inmigración'
    ],
    'Trimestre 3': [
      'Preparación BAC',
      'Estrategias de examen'
    ]
  },
  'Mathématiques-2nde C': {
    'Trimestre 1': [
      'Ensembles et applications',
      'Nombres et calculs'
    ],
    'Trimestre 2': [
      'Fonctions numériques',
      'Géométrie analytique'
    ],
    'Trimestre 3': [
      'Statistiques',
      'Vecteurs'
    ]
  },
  'Mathématiques-1ère C': {
    'Trimestre 1': [
      'Nombres complexes',
      'Suites numériques'
    ],
    'Trimestre 2': [
      'Fonctions et limites',
      'Dérivées'
    ],
    'Trimestre 3': [
      'Probabilités',
      'Géométrie dans l\'espace'
    ]
  },
  'Mathématiques-Terminale C': {
    'Trimestre 1': [
      'Fonctions exponentielles et logarithmes',
      'Primitives et intégrales'
    ],
    'Trimestre 2': [
      'Équations différentielles',
      'Nombres complexes avancés'
    ],
    'Trimestre 3': [
      'Calcul intégral',
      'Préparation BAC'
    ]
  },
  'Physique-Chimie-2nde C': {
    'Trimestre 1': [
      'Mécanique : cinématique',
      'Électricité : circuits'
    ],
    'Trimestre 2': [
      'Optique géométrique',
      'Chimie : atome et molécule'
    ],
    'Trimestre 3': [
      'Forces et mouvement',
      'Réactions chimiques'
    ]
  },
  'Physique-Chimie-1ère C': {
    'Trimestre 1': [
      'Dynamique : lois de Newton',
      'Électromagnétisme'
    ],
    'Trimestre 2': [
      'Thermodynamique',
      'Chimie organique'
    ],
    'Trimestre 3': [
      'Optique ondulatoire',
      'Cinétique chimique'
    ]
  },
  'Physique-Chimie-Terminale C': {
    'Trimestre 1': [
      'Mécanique du solide',
      'Électricité avancée'
    ],
    'Trimestre 2': [
      'Ondes et vibrations',
      'Chimie : acides et bases'
    ],
    'Trimestre 3': [
      'Physique nucléaire',
      'Préparation BAC'
    ]
  },
  'SVT-2nde C': {
    'Trimestre 1': [
      'La cellule',
      'Organisation du vivant'
    ],
    'Trimestre 2': [
      'Nutrition et métabolisme',
      'Génétique de base'
    ],
    'Trimestre 3': [
      'Écologie',
      'Géologie'
    ]
  },
  'SVT-1ère C': {
    'Trimestre 1': [
      'Génétique moléculaire',
      'Physiologie animale'
    ],
    'Trimestre 2': [
      'Évolution',
      'Immunologie'
    ],
    'Trimestre 3': [
      'Géologie : tectonique',
      'Écosystèmes'
    ]
  },
  'SVT-Terminale C': {
    'Trimestre 1': [
      'Génétique des populations',
      'Biologie cellulaire avancée'
    ],
    'Trimestre 2': [
      'Neurobiologie',
      'Géologie : magmatisme'
    ],
    'Trimestre 3': [
      'Biotechnologies',
      'Préparation BAC'
    ]
  },
  'Français-2nde C': {
    'Trimestre 1': [
      'Le roman et le récit',
      'Grammaire avancée'
    ],
    'Trimestre 2': [
      'La poésie',
      'L\'argumentation'
    ],
    'Trimestre 3': [
      'Le théâtre',
      'Dissertation'
    ]
  },
  'Français-1ère C': {
    'Trimestre 1': [
      'Le roman du XIXe siècle',
      'Commentaire composé'
    ],
    'Trimestre 2': [
      'La poésie moderne',
      'Dissertation littéraire'
    ],
    'Trimestre 3': [
      'Le théâtre contemporain',
      'Préparation aux épreuves'
    ]
  },
  'Philosophie-1ère C': {
    'Trimestre 1': [
      'Introduction à la philosophie',
      'La conscience'
    ],
    'Trimestre 2': [
      'La perception',
      'Autrui'
    ],
    'Trimestre 3': [
      'Le désir',
      'L\'existence'
    ]
  },
  'Philosophie-Terminale C': {
    'Trimestre 1': [
      'La vérité',
      'La raison et le réel'
    ],
    'Trimestre 2': [
      'La morale',
      'La liberté'
    ],
    'Trimestre 3': [
      'La politique',
      'Préparation BAC'
    ]
  },
  'Anglais-2nde C': {
    'Trimestre 1': [
      'Grammar review',
      'Reading comprehension'
    ],
    'Trimestre 2': [
      'Writing skills',
      'Oral expression'
    ],
    'Trimestre 3': [
      'Advanced reading',
      'Debate and discussion'
    ]
  },
  'Anglais-1ère C': {
    'Trimestre 1': [
      'Advanced grammar',
      'Essay writing'
    ],
    'Trimestre 2': [
      'Scientific English',
      'Debate and discussion'
    ],
    'Trimestre 3': [
      'American literature',
      'Presentation skills'
    ]
  },
  'Anglais-Terminale C': {
    'Trimestre 1': [
      'Literary analysis',
      'Advanced writing'
    ],
    'Trimestre 2': [
      'Contemporary issues',
      'Debate preparation'
    ],
    'Trimestre 3': [
      'BAC preparation',
      'Mock exams'
    ]
  },
  'Mathématiques-2nde D': {
    'Trimestre 1': [
      'Ensembles et applications',
      'Nombres et calculs'
    ],
    'Trimestre 2': [
      'Fonctions numériques',
      'Géométrie analytique'
    ],
    'Trimestre 3': [
      'Statistiques',
      'Vecteurs'
    ]
  },
  'Mathématiques-1ère D': {
    'Trimestre 1': [
      'Nombres complexes',
      'Suites numériques'
    ],
    'Trimestre 2': [
      'Fonctions et limites',
      'Dérivées'
    ],
    'Trimestre 3': [
      'Probabilités',
      'Géométrie dans l\'espace'
    ]
  },
  'Mathématiques-Terminale D': {
    'Trimestre 1': [
      'Fonctions exponentielles et logarithmes',
      'Primitives et intégrales'
    ],
    'Trimestre 2': [
      'Équations différentielles',
      'Nombres complexes avancés'
    ],
    'Trimestre 3': [
      'Calcul intégral',
      'Préparation BAC'
    ]
  },
  'Physique-Chimie-2nde D': {
    'Trimestre 1': [
      'Mécanique : cinématique',
      'Électricité : circuits'
    ],
    'Trimestre 2': [
      'Optique géométrique',
      'Chimie : atome et molécule'
    ],
    'Trimestre 3': [
      'Forces et mouvement',
      'Réactions chimiques'
    ]
  },
  'Physique-Chimie-1ère D': {
    'Trimestre 1': [
      'Dynamique : lois de Newton',
      'Électromagnétisme'
    ],
    'Trimestre 2': [
      'Thermodynamique',
      'Chimie organique'
    ],
    'Trimestre 3': [
      'Optique ondulatoire',
      'Cinétique chimique'
    ]
  },
  'Physique-Chimie-Terminale D': {
    'Trimestre 1': [
      'Mécanique du solide',
      'Électricité avancée'
    ],
    'Trimestre 2': [
      'Ondes et vibrations',
      'Chimie : acides et bases'
    ],
    'Trimestre 3': [
      'Physique nucléaire',
      'Préparation BAC'
    ]
  },
  'SVT-2nde D': {
    'Trimestre 1': [
      'La cellule',
      'Organisation du vivant'
    ],
    'Trimestre 2': [
      'Nutrition et métabolisme',
      'Génétique de base'
    ],
    'Trimestre 3': [
      'Écologie',
      'Géologie'
    ]
  },
  'SVT-1ère D': {
    'Trimestre 1': [
      'Génétique moléculaire',
      'Physiologie animale'
    ],
    'Trimestre 2': [
      'Évolution',
      'Immunologie'
    ],
    'Trimestre 3': [
      'Géologie : tectonique',
      'Écosystèmes'
    ]
  },
  'SVT-Terminale D': {
    'Trimestre 1': [
      'Génétique des populations',
      'Biologie cellulaire avancée'
    ],
    'Trimestre 2': [
      'Neurobiologie',
      'Géologie : magmatisme'
    ],
    'Trimestre 3': [
      'Biotechnologies',
      'Préparation BAC'
    ]
  },
  'Français-2nde D': {
    'Trimestre 1': [
      'Le roman et le récit',
      'Grammaire avancée'
    ],
    'Trimestre 2': [
      'La poésie',
      'L\'argumentation'
    ],
    'Trimestre 3': [
      'Le théâtre',
      'Dissertation'
    ]
  },
  'Français-1ère D': {
    'Trimestre 1': [
      'Le roman du XIXe siècle',
      'Commentaire composé'
    ],
    'Trimestre 2': [
      'La poésie moderne',
      'Dissertation littéraire'
    ],
    'Trimestre 3': [
      'Le théâtre contemporain',
      'Préparation épreuves'
    ]
  },
  'Philosophie-1ère D': {
    'Trimestre 1': [
      'Introduction à la philosophie',
      'La conscience'
    ],
    'Trimestre 2': [
      'La perception',
      'Autrui'
    ],
    'Trimestre 3': [
      'Le désir',
      'L\'existence'
    ]
  },
  'Philosophie-Terminale D': {
    'Trimestre 1': [
      'La vérité',
      'La raison et le réel'
    ],
    'Trimestre 2': [
      'La morale',
      'La liberté'
    ],
    'Trimestre 3': [
      'La politique',
      'Préparation BAC'
    ]
  },
  'Anglais-2nde D': {
    'Trimestre 1': [
      'Grammar review',
      'Reading comprehension'
    ],
    'Trimestre 2': [
      'Writing skills',
      'Oral expression'
    ],
    'Trimestre 3': [
      'Advanced reading',
      'Discussion'
    ]
  },
  'Anglais-1ère D': {
    'Trimestre 1': [
      'Advanced grammar',
      'Essay writing'
    ],
    'Trimestre 2': [
      'Scientific English',
      'Debate'
    ],
    'Trimestre 3': [
      'American literature',
      'Presentations'
    ]
   },
  'Anglais-Terminale D': {
    'Trimestre 1': [
      'Literary analysis',
      'Advanced writing'
    ],
    'Trimestre 2': [
      'Contemporary issues',
      'Debate'
    ],
    'Trimestre 3': [
      'BAC preparation',
      'Revision'
    ]
  },
  'Mathématiques-2nde F1': {
    'Trimestre 1': [
      'Calcul numérique et algébrique',
      'Fonctions linéaires'
    ],
    'Trimestre 2': [
      'Géométrie plane',
      'Trigonométrie'
    ],
    'Trimestre 3': [
      'Statistiques',
      'Vecteurs'
    ]
  },
  'Mathématiques-1ère F1': {
    'Trimestre 1': [
      'Suites numériques',
      'Dérivées'
    ],
    'Trimestre 2': [
      'Fonctions polynômes',
      'Probabilités'
    ],
    'Trimestre 3': [
      'Géométrie dans l\'espace',
      'Équations différentielles simples'
    ]
  },
  'Mathématiques-Terminale F1': {
    'Trimestre 1': [
      'Calcul intégral',
      'Nombres complexes'
    ],
    'Trimestre 2': [
      'Équations différentielles',
      'Statistiques avancées'
    ],
    'Trimestre 3': [
      'Mathématiques appliquées',
      'Préparation BAC'
    ]
  },
  'Physique-2nde F1': {
    'Trimestre 1': [
      'Mécanique : forces et mouvements',
      'Statique'
    ],
    'Trimestre 2': [
      'Dynamique',
      'Travail et énergie'
    ],
    'Trimestre 3': [
      'Électricité : circuits DC',
      'Loi d\'Ohm'
    ]
  },
  'Physique-1ère F1': {
    'Trimestre 1': [
      'Cinématique',
      'Lois de Newton'
    ],
    'Trimestre 2': [
      'Électromagnétisme',
      'Circuits AC'
    ],
    'Trimestre 3': [
      'Thermodynamique',
      'Optique géométrique'
    ]
  },
  'Physique-Terminale F1': {
    'Trimestre 1': [
      'Mécanique des fluides',
      'Électricité industrielle'
    ],
    'Trimestre 2': [
      'Ondes',
      'Machines électriques'
    ],
    'Trimestre 3': [
      'Automatismes',
      'Préparation BAC'
    ]
  },
  'Technologie-2nde F1': {
    'Trimestre 1': [
      'Initiation aux systèmes mécaniques',
      'Outils et mesures'
    ],
    'Trimestre 2': [
      'Matériaux et leurs propriétés',
      'Procédés de fabrication'
    ],
    'Trimestre 3': [
      'Dessin technique de base',
      'Sécurité en atelier'
    ]
  },
  'Technologie-1ère F1': {
    'Trimestre 1': [
      'Systèmes mécaniques avancés',
      'Résistance des matériaux'
    ],
    'Trimestre 2': [
      'Machines-outils',
      'CAO introduction'
    ],
    'Trimestre 3': [
      'Maintenance industrielle',
      'Automatisation'
    ]
  },
  'Technologie-Terminale F1': {
    'Trimestre 1': [
      'Conception mécanique',
      'Étude de fabrication'
    ],
    'Trimestre 2': [
      'Systèmes automatisés',
      'Gestion de production'
    ],
    'Trimestre 3': [
      'Projet technique',
      'Préparation BAC'
    ]
  },
  'Dessin Technique-2nde F1': {
    'Trimestre 1': [
      'Normes de dessin',
      'Projections orthogonales'
    ],
    'Trimestre 2': [
      'Coupes et sections',
      'Cotation'
    ],
    'Trimestre 3': [
      'Perspective',
      'Lecture de plans'
    ]
  },
  'Dessin Technique-1ère F1': {
    'Trimestre 1': [
      'Dessin d\'ensemble',
      'Dessin de définition'
    ],
    'Trimestre 2': [
      'Schémas cinématiques',
      'DAO'
    ],
    'Trimestre 3': [
      'Tolérances et ajustements',
      'Plans de montage'
    ]
  },
  'Dessin Technique-Terminale F1': {
    'Trimestre 1': [
      'CAO avancée',
      'Modélisation 3D'
    ],
    'Trimestre 2': [
      'Plans d\'exécution',
      'Nomenclatures'
    ],
    'Trimestre 3': [
      'Dossier technique complet',
      'Préparation BAC'
    ]
  },
  'Français-2nde F1': {
    'Trimestre 1': [
      'Communication professionnelle',
      'Compte-rendu technique'
    ],
    'Trimestre 2': [
      'Correspondance administrative',
      'Rapport de stage'
    ],
    'Trimestre 3': [
      'Expression orale professionnelle',
      'Note de synthèse'
    ]
  },
  'Français-1ère F1': {
    'Trimestre 1': [
      'Rédaction technique',
      'Documentation professionnelle'
    ],
    'Trimestre 2': [
      'Argumentation',
      'Présentation orale'
    ],
    'Trimestre 3': [
      'Dossier professionnel',
      'Communication en entreprise'
    ]
  },
  'Français-Terminale F1': {
    'Trimestre 1': [
      'Rapport de projet',
      'Communication technique'
    ],
    'Trimestre 2': [
      'Synthèse documentaire',
      'Soutenance de projet'
    ],
    'Trimestre 3': [
      'Préparation BAC',
      'Insertion professionnelle'
    ]
  },
  'Mathématiques-2nde F2': {
    'Trimestre 1': [
      'Calcul numérique',
      'Algèbre de base'
    ],
    'Trimestre 2': [
      'Fonctions',
      'Trigonométrie'
    ],
    'Trimestre 3': [
      'Nombres complexes introduction',
      'Vecteurs'
    ]
  },
  'Mathématiques-1ère F2': {
    'Trimestre 1': [
      'Nombres complexes',
      'Suites'
    ],
    'Trimestre 2': [
      'Dérivation',
      'Fonctions exponentielles'
    ],
    'Trimestre 3': [
      'Équations différentielles',
      'Probabilités'
    ]
  },
  'Mathématiques-Terminale F2': {
    'Trimestre 1': [
      'Intégrales',
      'Transformées'
    ],
    'Trimestre 2': [
      'Mathématiques pour l\'électronique',
      'Statistiques'
    ],
    'Trimestre 3': [
      'Applications pratiques',
      'Préparation BAC'
    ]
  },
  'Physique-2nde F2': {
    'Trimestre 1': [
      'Électricité de base',
      'Loi d\'Ohm'
    ],
    'Trimestre 2': [
      'Circuits électriques',
      'Puissance électrique'
    ],
    'Trimestre 3': [
      'Magnétisme',
      'Électromagnétisme'
    ]
  },
  'Physique-1ère F2': {
    'Trimestre 1': [
      'Circuits AC',
      'Impédance'
    ],
    'Trimestre 2': [
      'Transformateurs',
      'Machines électriques'
    ],
    'Trimestre 3': [
      'Électronique analogique',
      'Transistors'
    ]
  },
  'Physique-Terminale F2': {
    'Trimestre 1': [
      'Électronique de puissance',
      'Filtres'
    ],
    'Trimestre 2': [
      'Amplificateurs',
      'Oscillateurs'
    ],
    'Trimestre 3': [
      'Systèmes électroniques',
      'Préparation BAC'
    ]
  },
  'Électronique-2nde F2': {
    'Trimestre 1': [
      'Composants passifs',
      'Diodes'
    ],
    'Trimestre 2': [
      'Transistors',
      'Circuits de base'
    ],
    'Trimestre 3': [
      'Amplification',
      'Alimentation'
    ]
  },
  'Électronique-1ère F2': {
    'Trimestre 1': [
      'Amplificateurs opérationnels',
      'Filtres actifs'
    ],
    'Trimestre 2': [
      'Oscillateurs',
      'Modulation'
    ],
    'Trimestre 3': [
      'Électronique numérique',
      'Logique combinatoire'
    ]
  },
  'Électronique-Terminale F2': {
    'Trimestre 1': [
      'Circuits intégrés',
      'Microcontrôleurs'
    ],
    'Trimestre 2': [
      'Systèmes embarqués',
      'Programmation'
    ],
    'Trimestre 3': [
      'Projet électronique',
      'Préparation BAC'
    ]
  },
  'Technologie-2nde F2': {
    'Trimestre 1': [
      'Technologie des composants',
      'Lecture de schémas'
    ],
    'Trimestre 2': [
      'Montage électronique',
      'Soudure'
    ],
    'Trimestre 3': [
      'Mesures électroniques',
      'Oscilloscope'
    ]
  },
  'Technologie-1ère F2': {
    'Trimestre 1': [
      'Systèmes électroniques',
      'CAO électronique'
    ],
    'Trimestre 2': [
      'Circuits imprimés',
      'Tests et mesures'
    ],
    'Trimestre 3': [
      'Maintenance électronique',
      'Diagnostic de pannes'
    ]
  },
  'Technologie-Terminale F2': {
    'Trimestre 1': [
      'Conception de systèmes',
      'Prototypage'
    ],
    'Trimestre 2': [
      'Automatisation',
      'Interfaçage'
    ],
    'Trimestre 3': [
      'Projet technique',
      'Préparation BAC'
    ]
  },
  'Français-2nde F2': {
    'Trimestre 1': [
      'Communication technique',
      'Documentation'
    ],
    'Trimestre 2': [
      'Rapport technique',
      'Correspondance'
    ],
    'Trimestre 3': [
      'Expression professionnelle',
      'Compte-rendu'
    ]
  },
  'Français-1ère F2': {
    'Trimestre 1': [
      'Rédaction technique',
      'Note de synthèse'
    ],
    'Trimestre 2': [
      'Argumentation',
      'Présentation orale'
    ],
    'Trimestre 3': [
      'Dossier technique',
      'Communication'
    ]
  },
  'Français-Terminale F2': {
    'Trimestre 1': [
      'Rapport de projet',
      'Documentation technique'
    ],
    'Trimestre 2': [
      'Synthèse',
      'Soutenance'
    ],
    'Trimestre 3': [
      'Préparation BAC',
      'Communication professionnelle'
    ]
  },
  'Mathématiques-2nde F3': {
    'Trimestre 1': [
      'Calcul pour l\'électricité',
      'Algèbre appliquée'
    ],
    'Trimestre 2': [
      'Trigonométrie pour l\'électrotechnique',
      'Nombres complexes'
    ],
    'Trimestre 3': [
      'Vecteurs de Fresnel',
      'Statistiques'
    ]
  },
  'Mathématiques-1ère F3': {
    'Trimestre 1': [
      'Nombres complexes en électricité',
      'Suites'
    ],
'Trimestre 3': [
      'Équations différentielles',
      'Transformées'
    ]
  },
  'Mathématiques-Terminale F3': {
    'Trimestre 1': [
      'Calcul vectoriel',
      'Intégrales'
    ],
    'Trimestre 2': [
      'Mathématiques pour l\'électrotechnique',
      'Fourier'
    ],
    'Trimestre 3': [
      'Applications pratiques',
      'Préparation BAC'
    ]
  },
  'Électricité-2nde F3': {
    'Trimestre 1': [
      'Électricité de base',
      'Lois fondamentales'
    ],
    'Trimestre 2': [
      'Circuits électriques',
      'Analyse de circuits'
    ],
    'Trimestre 3': [
      'Puissance électrique',
      'Facteur de puissance'
    ]
  },
  'Électricité-1ère F3': {
    'Trimestre 1': [
      'Régimes sinusoïdaux',
      'Triphasé'
    ],
    'Trimestre 2': [
      'Transformateurs',
      'Machines électriques'
    ],
    'Trimestre 3': [
      'Distribution électrique',
      'Protection'
    ]
  },
  'Électricité-Terminale F3': {
    'Trimestre 1': [
      'Électrotechnique industrielle',
      'Automatismes électriques'
    ],
    'Trimestre 2': [
      'Variation de vitesse',
      'Électronique de puissance'
    ],
    'Trimestre 3': [
      'Installation électrique',
      'Préparation BAC'
    ]
  },
  'Électronique-2nde F3': {
    'Trimestre 1': [
      'Composants électroniques',
      'Semiconducteurs'
    ],
    'Trimestre 2': [
      'Circuits électroniques de base',
      'Amplification'
    ],
    'Trimestre 3': [
      'Alimentation électronique',
      'Redressement'
    ]
  },
  'Électronique-1ère F3': {
    'Trimestre 1': [
      'Électronique de puissance',
      'Redressement commandé'
    ],
    'Trimestre 2': [
      'Commande',
      'Régulation'
    ],
    'Trimestre 3': [
      'Régulation',
      'Asservissement'
    ]
  },
  'Électronique-Terminale F3': {
    'Trimestre 1': [
      'Systèmes de commande',
      'Automates'
    ],
    'Trimestre 2': [
      'Supervision',
      'Communication industrielle'
    ],
    'Trimestre 3': [
      'Projet électrotechnique',
      'Préparation BAC'
    ]
  },
  'Technologie-2nde F3': {
    'Trimestre 1': [
      'Technologie des installations',
      'Schémas électriques'
    ],
    'Trimestre 2': [
      'Appareillage électrique',
      'Câblage'
    ],
    'Trimestre 3': [
      'Mesures électriques',
      'Sécurité électrique'
    ]
  },
  'Technologie-1ère F3': {
    'Trimestre 1': [
      'Installations industrielles',
      'Distribution BT'
    ],
    'Trimestre 2': [
      'Automatismes',
      'Commande'
    ],
    'Trimestre 3': [
      'Maintenance électrique',
      'Diagnostic'
    ]
  },
  'Technologie-Terminale F3': {
    'Trimestre 1': [
      'Conception d\'installations',
      'Dimensionnement'
    ],
    'Trimestre 2': [
      'Gestion de l\'énergie',
      'Qualité de l\'énergie'
    ],
    'Trimestre 3': [
      'Projet d\'installation',
      'Préparation BAC'
    ]
  },
  'Français-2nde F3': {
    'Trimestre 1': [
      'Communication technique',
      'Rapport d\'intervention'
    ],
    'Trimestre 2': [
      'Rapport d\'intervention',
      'Compte-rendu'
    ],
    'Trimestre 3': [
      'Expression professionnelle',
      'Documentation'
    ]
  },
  'Français-1ère F3': {
    'Trimestre 1': [
      'Rédaction technique',
      'Dossier technique'
    ],
    'Trimestre 2': [
      'Argumentation',
      'Présentation'
    ],
    'Trimestre 3': [
      'Communication en entreprise',
      'Rapport'
    ]
  },
  'Français-Terminale F3': {
    'Trimestre 1': [
      'Rapport de projet',
      'Documentation technique'
    ],
    'Trimestre 2': [
      'Note de synthèse',
      'Soutenance'
    ],
    'Trimestre 3': [
      'Préparation BAC',
      'Insertion professionnelle'
    ]
  },
  'Économie-2nde G': {
    'Trimestre 1': [
      'Introduction à l\'économie',
      'Les agents économiques'
    ],
    'Trimestre 2': [
      'Le marché',
      'La production'
    ],
    'Trimestre 3': [
      'La consommation',
      'L\'épargne'
    ]
  },
  'Économie-1ère G': {
    'Trimestre 1': [
      'Microéconomie',
      'La concurrence'
    ],
    'Trimestre 2': [
      'Macroéconomie',
      'Croissance économique'
    ],
    'Trimestre 3': [
      'Commerce international',
      'Monnaie et crédit'
    ]
  },
  'Économie-Terminale G': {
    'Trimestre 1': [
      'Politiques économiques',
      'Développement économique'
    ],
    'Trimestre 2': [
      'Économie internationale',
      'Mondialisation'
    ],
    'Trimestre 3': [
      'Économie du développement',
      'Préparation BAC'
    ]
  },
  'Comptabilité-2nde G': {
    'Trimestre 1': [
      'Introduction à la comptabilité',
      'Le bilan'
    ],
    'Trimestre 2': [
      'Le compte de résultat',
      'Les opérations courantes'
    ],
    'Trimestre 3': [
      'La TVA',
      'Les salaires'
    ]
  },
  'Comptabilité-1ère G': {
    'Trimestre 1': [
      'Comptabilité approfondie',
      'Les immobilisations'
    ],
    'Trimestre 2': [
      'Les stocks',
      'Les provisions'
    ],
    'Trimestre 3': [
      'Comptabilité analytique',
      'Calcul des coûts'
    ]
  },
  'Comptabilité-Terminale G': {
    'Trimestre 1': [
      'Analyse financière',
      'Les ratios'
    ],
    'Trimestre 2': [
      'Gestion budgétaire',
      'Contrôle de gestion'
    ],
    'Trimestre 3': [
      'Audit comptable',
      'Préparation BAC'
    ]
  },
  'Mathématiques-2nde G': {
    'Trimestre 1': [
      'Mathématiques financières',
      'Pourcentages'
    ],
    'Trimestre 2': [
      'Proportionnalité',
      'Statistiques'
    ],
    'Trimestre 3': [
      'Fonctions',
      'Graphiques'
    ]
  },
  'Mathématiques-1ère G': {
    'Trimestre 1': [
      'Intérêts simples et composés',
      'Annuités'
    ],
    'Trimestre 2': [
      'Amortissements',
      'Probabilités'
    ],
    'Trimestre 3': [
      'Statistiques descriptives',
      'Indices'
    ]
  },
  'Mathématiques-Terminale G': {
    'Trimestre 1': [
      'Mathématiques appliquées à la gestion',
      'Programmation linéaire'
    ],
    'Trimestre 2': [
      'Statistiques inférentielles',
      'Échantillonnage'
    ],
    'Trimestre 3': [
      'Recherche opérationnelle',
      'Préparation BAC'
    ]
  },
  'Droit-2nde G': {
    'Trimestre 1': [
      'Introduction au droit',
      'Les sources du droit'
    ],
    'Trimestre 2': [
      'Les personnes',
      'La capacité juridique'
    ],
    'Trimestre 3': [
      'Les biens',
      'La propriété'
    ]
  },
  'Droit-1ère G': {
    'Trimestre 1': [
      'Droit civil',
      'Les contrats'
    ],
    'Trimestre 2': [
      'Droit commercial',
      'Les sociétés'
    ],
    'Trimestre 3': [
      'Droit du travail',
      'Relations collectives'
    ]
  },
  'Droit-Terminale G': {
    'Trimestre 1': [
      'Droit des affaires',
      'Droit fiscal'
    ],
    'Trimestre 2': [
      'Droit social avancé',
      'Droit de la concurrence'
    ],
    'Trimestre 3': [
      'Contentieux',
      'Préparation BAC'
    ]
  },
  'Français-2nde G': {
    'Trimestre 1': [
      'Communication professionnelle',
      'Correspondance commerciale'
    ],
    'Trimestre 2': [
      'Le rapport',
      'La note de service'
    ],
    'Trimestre 3': [
      'Expression écrite professionnelle',
      'Compte-rendu'
    ]
  },
  'Français-1ère G': {
    'Trimestre 1': [
      'Rédaction administrative',
      'Le procès-verbal'
    ],
    'Trimestre 2': [
      'Argumentation commerciale',
      'Présentation orale'
    ],
    'Trimestre 3': [
      'Communication d\'entreprise',
      'Dossier professionnel'
    ]
  },
  'Français-Terminale G': {
    'Trimestre 1': [
      'Communication managériale',
      'Négociation'
    ],
    'Trimestre 2': [
      'Synthèse documentaire',
      'Soutenance'
    ],
    'Trimestre 3': [
      'Préparation BAC',
      'Techniques de communication'
    ]
  }
};