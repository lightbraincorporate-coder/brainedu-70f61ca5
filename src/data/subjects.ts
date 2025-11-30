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
      'Les nombres de 0 à 5',
      'Compter et dénombrer jusqu\'à 5',
      'Écriture des chiffres 0 à 5',
      'Comparaison de quantités',
      'Plus grand, plus petit',
      'Les formes : carré et cercle',
      'Se repérer dans l\'espace',
      'Gauche et droite'
    ],
    'Trimestre 2': [
      'Les nombres de 6 à 10',
      'Écriture des chiffres 6 à 10',
      'Addition simple (0 à 5)',
      'Décomposition des nombres',
      'Les formes : triangle et rectangle',
      'Reproduction de figures simples',
      'Ranger dans l\'ordre croissant',
      'Les tableaux à double entrée'
    ],
    'Trimestre 3': [
      'Révision des nombres 0 à 10',
      'Soustraction simple',
      'Problèmes simples d\'addition',
      'Problèmes simples de soustraction',
      'Les formes géométriques : révision',
      'Mesurer avec ses mains',
      'Long et court',
      'Lourd et léger'
    ]
  },
'Français-CP1': {
    'Trimestre 1': [
      'L\'alphabet (lettres A à M)',
      'Les voyelles : a, e, i, o, u',
      'Sons simples : a, i, o',
      'Reconnaissance des lettres',
      'Écriture des lettres en majuscules',
      'Les prénoms de la classe',
      'Écoute et compréhension d\'histoires',
      'Expression orale : se présenter'
    ],
    'Trimestre 2': [
      'L\'alphabet (lettres N à Z)',
      'Lecture de syllabes simples',
      'Sons : m, l, r, s',
      'Formation de mots simples',
      'Écriture cursive (initiation)',
      'Lecture de phrases courtes',
      'Compréhension de textes très simples',
      'Raconter une histoire avec ses mots'
    ],
    'Trimestre 3': [
      'Lecture de mots simples',
      'Sons complexes : ou, on, an',
      'Écriture de lettres minuscules',
      'Écriture de mots simples',
      'Copie de phrases',
      'Le point et la majuscule',
      'Lecture autonome de courtes phrases',
      'Production d\'une phrase simple'
    ]
  },
  'Sciences-CP1': {
    'Trimestre 1': [
      'Mon corps : la tête',
      'Mon corps : les bras et les jambes',
      'Les 5 sens : la vue',
      'Les 5 sens : l\'ouïe',
      'Les 5 sens : le toucher',
      'Hygiène du corps',
      'Se laver les mains',
      'Les dangers à la maison'
    ],
    'Trimestre 2': [
      'Les animaux familiers : le chat',
      'Les animaux familiers : le chien',
      'Les oiseaux',
      'Les poissons',
      'Où vivent les animaux ?',
      'Que mangent les animaux ?',
      'Les bébés animaux',
      'Respecter les animaux'
    ],
    'Trimestre 3': [
      'Les plantes autour de moi',
      'Les arbres',
      'Les fleurs',
      'Les fruits et légumes',
      'De quoi a besoin une plante ?',
      'Planter une graine',
      'L\'eau dans la nature',
      'Économiser l\'eau'
    ]
  },
'Education Civique-CP1': {
    'Trimestre 1': [
      'Vivre ensemble à l\'école',
      'Les règles de la classe',
      'Dire bonjour et au revoir',
      'Lever la main pour parler',
      'Respecter le matériel',
      'Les adultes de l\'école',
      'Le rôle de la maîtresse',
      'Jouer ensemble sans se disputer'
    ],
    'Trimestre 2': [
      'Le respect des camarades',
      'Ne pas se moquer',
      'Aider un camarade',
      'Partager',
      'Dire pardon et merci',
      'Écouter les autres',
      'Accepter les différences',
      'Jouer avec tout le monde'
    ],
    'Trimestre 3': [
      'Les règles de propreté',
      'Jeter les déchets à la poubelle',
      'Garder la classe propre',
      'Se moucher correctement',
      'Les toilettes : propreté',
      'Ranger ses affaires',
      'Respecter l\'environnement',
      'Économiser le papier'
    ]
  },

  'Mathématiques-CP2': {
    'Trimestre 1': [
      'Les nombres de 0 à 20',
      'Écriture en lettres jusqu\'à 20',
      'Décomposition des nombres',
      'Addition sans retenue (0 à 10)',
      'La droite numérique',
      'Comparer et ranger',
      'Les dizaines',
      'Problèmes additifs simples'
    ],
    'Trimestre 2': [
      'Les nombres de 20 à 50',
      'Dizaines et unités',
      'Soustraction sans retenue',
      'Addition avec retenue',
      'La monnaie (initiation)',
      'Mesure de longueurs',
      'La règle graduée',
      'Problèmes soustractifs'
    ],
    'Trimestre 3': [
      'Les nombres jusqu\'à 100',
      'Les doubles',
      'Les moitiés',
      'Introduction à la multiplication',
      'Table de 2',
      'Symétrie',
      'Reproduction sur quadrillage',
      'Lire l\'heure (heures entières)'
    ]
  },
 'Français-CP2': {
    'Trimestre 1': [
      'Lecture de phrases simples',
      'Les sons complexes : ch, ou, on',
      'Le son [oi]',
      'Le son [an]/[en]',
      'Le son [in]',
      'L\'écriture cursive',
      'La phrase : majuscule et point',
      'Comprendre une consigne écrite'
    ],
    'Trimestre 2': [
      'Compréhension de textes courts',
      'Les sons : gu, gn',
      'Les sons : è, ê, ai, ei',
      'Le masculin et le féminin',
      'Le singulier et le pluriel',
      'Les articles : le, la, les, un, une, des',
      'Production de phrases',
      'Raconter une histoire lue'
    ],
    'Trimestre 3': [
      'Conjugaison : présent simple (être, avoir)',
      'Les verbes du 1er groupe au présent',
      'La phrase négative',
      'La phrase interrogative',
      'Les accents : é, è, ê',
      'Les lettres muettes',
      'Écrire une courte histoire',
      'Réciter un poème'
    ]
  },
  'Sciences-CP2': {
    'Trimestre 1': [
      'L\'eau dans la nature',
      'Les états de l\'eau',
      'Le cycle de l\'eau (simplifié)',
      'L\'eau potable',
      'Les rivières et les lacs',
      'La mer et l\'océan',
      'Économiser l\'eau',
      'Expérience : l\'eau coule'
    ],
    'Trimestre 2': [
      'Le cycle de vie des plantes',
      'La germination',
      'Les parties d\'une plante',
      'De quoi a besoin une plante ?',
      'Les fruits et les légumes',
      'L\'arbre au fil des saisons',
      'Planter et observer',
      'Les jardins et la nature'
    ],
    'Trimestre 3': [
      'Les saisons : le printemps',
      'Les saisons : l\'été',
      'Les saisons : l\'automne',
      'Les saisons : l\'hiver',
      'Le temps qu\'il fait',
      'Le soleil et la chaleur',
      'La météo',
      'S\'habiller selon la saison'
    ]
  },
  'Education Civique-CP2': {
    'Trimestre 1': [
      'Mes droits et devoirs à l\'école',
      'Le droit d\'apprendre',
      'Le devoir de travailler',
      'Le droit d\'être respecté',
      'Le devoir de respecter',
      'Mes droits à la maison',
      'Mes devoirs à la maison',
      'Les règles de vie commune'
    ],
'Trimestre 2': [
      'La sécurité à l\'école',
      'Les dangers dans la cour',
      'Ne pas courir dans les couloirs',
      'Les exercices d\'évacuation',
      'Les numéros d\'urgence',
      'La sécurité routière',
      'Traverser au passage piéton',
      'Porter un casque à vélo'
    ],
    'Trimestre 3': [
      'Aider les autres',
      'L\'entraide en classe',
      'Consoler un camarade',
      'Prêter ses affaires',
      'Aider à la maison',
      'La générosité',
      'Le bénévolat (notion simple)',
      'Être gentil et serviable'
    ]
  },
     'Mathématiques-CE1': {
    'Trimestre 1': [
      'Les nombres jusqu\'à 100',
      'Lire et écrire les nombres',
      'Comparer et ranger',
      'Addition posée sans retenue',
      'Addition posée avec retenue',
      'Les nombres pairs et impairs',
      'La droite graduée',
      'Résolution de problèmes additifs',
      'Les polygones'
    ],
    'Trimestre 2': [
      'Soustraction posée sans retenue',
      'Soustraction posée avec retenue',
      'Tables de multiplication : x2',
      'Tables de multiplication : x5',
      'Tables de multiplication : x10',
      'Problèmes multiplicatifs simples',
      'Mesure de longueurs : cm, m',
      'Les angles droits',
      'Symétrie axiale'
    ],
    'Trimestre 3': [
      'Introduction à la division',
      'Partage équitable',
      'Les moitiés et les quarts',
      'Lire l\'heure : heures et demi-heures',
      'La monnaie : euros',
      'Périmètre de figures simples',
      'Aires (introduction)',
      'Les solides : cube, pavé',
      'Tableaux et graphiques simples'
    ]
  },
  'Français-CE1': {
    'Trimestre 1': [
      'Lecture fluide de textes courts',
      'Compréhension de textes narratifs',
      'Le nom commun',
      'Le nom propre',
      'Les articles définis et indéfinis',
      'Le genre des noms',
      'Le nombre des noms',
      'L\'accord dans le groupe nominal',
      'Vocabulaire : les synonymes',
      'Production d\'un court texte'
    ],
    'Trimestre 2': [
      'Le verbe : identification',
      'Le sujet du verbe',
      'L\'infinitif du verbe',
      'Conjugaison : présent des verbes être et avoir',
      'Présent des verbes du 1er groupe',
      'Le futur simple : être et avoir',
      'Futur des verbes du 1er groupe',
      'Les phrases affirmatives et négatives',
      'Vocabulaire : les contraires',
      'Écrire une lettre simple'
    ],
    'Trimestre 3': [
      'L\'adjectif qualificatif',
      'Accord de l\'adjectif',
      'Place de l\'adjectif',
      'L\'imparfait : être et avoir',
      'Imparfait des verbes du 1er groupe',
      'Le passé composé (introduction)',
      'Les types de phrases',
      'La ponctuation',
      'Production de textes courts',
      'Réciter et comprendre un poème'
    ]
  },
  'Histoire-Géographie-CE1': {
    'Trimestre 1': [
      'Se repérer dans le temps : hier, aujourd\'hui, demain',
      'Les jours de la semaine',
      'Les mois de l\'année',
      'Le calendrier',
      'Ma journée : avant/après',
      'Les générations : parents, grands-parents',
      'L\'arbre généalogique',
      'Les photos anciennes'
    ],
    'Trimestre 2': [
      'Mon école : les différentes classes',
      'Les lieux de l\'école',
      'Mon quartier : les rues',
      'Les commerces du quartier',
      'Les services publics',
      'Le plan de mon quartier',
      'Se déplacer en sécurité',
      'Les moyens de transport'
    ],
    'Trimestre 3': [
      'Ma ville : où j\'habite',
      'Les monuments de ma ville',
      'La mairie',
      'Mon pays',
      'Le drapeau de mon pays',
      'L\'hymne national',
      'La carte de mon pays',
      'Les grandes villes de mon pays'
    ]
  },
'Sciences-CE1': {
    'Trimestre 1': [
      'Le corps humain : le squelette',
      'Les os principaux',
      'Les articulations',
      'Les muscles',
      'Bouger : comment ?',
      'Protéger son corps',
      'Les blessures courantes',
      'Les gestes de premiers secours',
      'La croissance'
    ],
    'Trimestre 2': [
      'L\'alimentation : les familles d\'aliments',
      'Les fruits et légumes',
      'Les produits laitiers',
      'Les viandes et poissons',
      'Les féculents',
      'Une alimentation équilibrée',
      'L\'eau : indispensable',
      'Les repas de la journée',
      'Les dangers du sucre'
    ],
    'Trimestre 3': [
      'L\'air autour de nous',
      'L\'air existe : expériences',
      'Le vent',
      'La respiration',
      'Inspirer et expirer',
      'Protéger l\'air',
      'La pollution de l\'air',
      'Les arbres : nos poumons',
      'Bien respirer'
    ]
  },
  'Education Civique-CE1': {
    'Trimestre 1': [
      'Les règles de vie collective',
      'Respecter les règles de la classe',
      'La politesse',
      'L\'écoute',
      'Le respect mutuel',
      'Vivre ensemble',
      'La coopération',
      'Résoudre les conflits',
      'Le délégué de classe'
    ],
    'Trimestre 2': [
      'Le respect de l\'environnement',
      'Ne pas jeter par terre',
      'Trier les déchets',
      'Économiser l\'eau',
      'Économiser l\'électricité',
      'Protéger les plantes',
      'Protéger les animaux',
      'Les espaces verts',
      'Les gestes éco-citoyens'
    ],
    'Trimestre 3': [
      'Les symboles de mon pays',
      'Le drapeau national',
      'L\'hymne national',
      'Les couleurs du drapeau',
      'La fête nationale',
      'Le président de la République',
      'Les institutions',
      'Être fier de son pays',
      'Respecter les symboles'
    ]
  },
'Mathématiques-CE2': {
    'Trimestre 1': [
      'Les nombres jusqu\'à 1000',
      'Lire et écrire les grands nombres',
      'Décomposer les nombres',
      'Comparer et ranger',
      'Addition de grands nombres',
      'Soustraction de grands nombres',
      'Toutes les tables de multiplication',
      'Multiplication posée (1 chiffre)',
      'Problèmes à étapes',
      'Les unités de mesure'
    ],
    'Trimestre 2': [
      'Division simple : partage',
      'Division euclidienne',
      'Division posée (introduction)',
      'Les fractions simples : 1/2',
      'Les fractions simples : 1/4, 1/3',
      'Comparer des fractions',
      'Mesures de masse : g, kg',
      'Mesures de contenances : L, cL',
      'Problèmes de mesures',
      'Lire l\'heure : minutes'
    ],
    'Trimestre 3': [
      'Géométrie : les triangles',
      'Géométrie : les quadrilatères',
      'Le carré',
      'Le rectangle',
      'Le losange',
      'Tracer des perpendiculaires',
      'Tracer des parallèles',
      'Périmètre du carré et rectangle',
      'Aire du carré et rectangle',
      'Les solides : reconnaissance'
    ]
  },
  'Français-CE2': {
    'Trimestre 1': [
      'La phrase simple',
      'La phrase complexe',
      'Les types de phrases',
      'Les formes de phrases',
      'Le groupe nominal',
      'Les déterminants',
      'Les adjectifs qualificatifs',
      'Les accords dans le GN',
      'Vocabulaire : les familles de mots',
      'Lecture : comprendre un récit'
    ],
    'Trimestre 2': [
      'Conjugaison : présent de l\'indicatif',
      'Le passé composé',
      'L\'imparfait de l\'indicatif',
      'Conjuguer être et avoir',
      'Les verbes du 1er groupe',
      'Les verbes du 2ème groupe',
      'Quelques verbes du 3ème groupe',
      'L\'orthographe des sons [s] et [z]',
      'Vocabulaire : préfixes et suffixes',
      'Écrire un récit court'
    ],
    'Trimestre 3': [
      'Le complément du nom',
      'Les compléments du verbe',
      'Le COD',
      'Le COI',
      'Les compléments circonstanciels',
      'Le dialogue dans un texte',
      'La ponctuation du dialogue',
      'Rédaction : décrire un personnage',
      'Rédaction : raconter un événement',
      'Lire et comprendre un texte documentaire'
    ]
  },
  'Histoire-Géographie-CE2': {
    'Trimestre 1': [
      'Les grandes périodes de l\'histoire',
      'La Préhistoire',
      'L\'Antiquité',
      'Le Moyen Âge',
      'Les Temps modernes',
      'L\'époque contemporaine',
      'La frise chronologique',
      'Compter les siècles',
      'Les sources historiques'
    ],
    'Trimestre 2': [
      'La Préhistoire : les premiers hommes',
      'Les hommes préhistoriques',
      'La découverte du feu',
      'Les outils préhistoriques',
      'L\'art préhistorique',
      'Les grottes ornées',
      'La chasse et la cueillette',
      'L\'invention de l\'agriculture',
      'Les premiers villages'
    ],
    'Trimestre 3': [
      'Cartes et paysages de mon pays',
      'Lire une carte',
    ],
},
  'Sciences-CE2': {
    'Trimestre 1': [
      'Les états de la matière : solide',
      'Les états de la matière : liquide',
      'Les états de la matière : gaz',
      'Les changements d\'état',
      'La fusion',
      'La solidification',
      'L\'évaporation',
      'La condensation',
      'Expériences sur les états de l\'eau'
    ],
    'Trimestre 2': [
      'Les animaux : classification',
      'Les vertébrés',
      'Les mammifères',
      'Les oiseaux',
      'Les reptiles',
      'Les amphibiens',
      'Les poissons',
      'Les invertébrés',
      'Les chaînes alimentaires'
    ],
    'Trimestre 3': [
      'Le cycle de l\'eau dans la nature',
      'L\'évaporation de l\'eau',
      'Les nuages',
      'Les précipitations',
      'Le ruissellement',
      'Les nappes phréatiques',
      'L\'eau douce et l\'eau salée',
      'Protéger l\'eau',
      'La pollution de l\'eau'
    ]
  },
  'Education Civique-CE2': {
    'Trimestre 1': [
      'Égalité filles-garçons',
      'Les mêmes droits',
      'Les mêmes devoirs',
      'Combattre les stéréotypes',
      'Respecter tout le monde',
      'La mixité',
      'Les métiers pour tous',
      'Partager les tâches',
      'L\'égalité à l\'école'
    ],
    'Trimestre 2': [
      'La solidarité',
      'Aider les personnes en difficulté',
      'Le partage',
      'La générosité',
      'Les associations caritatives',
      'Le bénévolat',
      'Les personnes handicapées',
      'L\'accessibilité',
      'Être solidaire au quotidien'
    ],
    'Trimestre 3': [
      'Les dangers domestiques',
      'Les dangers électriques',
      'Les dangers du feu',
      'Les produits toxiques',
      'Les chutes',
      'Les brûlures',
      'Les coupures',
      'Les numéros d\'urgence',
      'Prévenir les accidents'
    ] 
},
'Mathématiques-CM1': {
    'Trimestre 1': [
      'Les grands nombres : jusqu\'à 1 000 000',
      'Lire et écrire les grands nombres',
      'Comparer et ranger',
      'Décomposer les grands nombres',
      'Addition de grands nombres',
      'Soustraction de grands nombres',
      'Multiplication à 2 chiffres',
      'Les multiples',
      'Les nombres décimaux : introduction',
      'Lire et écrire les décimaux'
    ],
    
    'Trimestre 2': [
      'Addition de nombres décimaux',
      'Soustraction de nombres décimaux',
      'Multiplication de décimaux',
      'Division euclidienne',
      'Division décimale (introduction)',
      'Les fractions : écriture',
      'Les fractions : comparaison',
      'Fractions et décimaux',
      'Proportionnalité simple',
      'Tableaux de proportionnalité'
    ],
    'Trimestre 3': [
      'Géométrie : les cercles',
      'Le compas',
      'Les polygones',
      'Les triangles : classification',
      'Les quadrilatères particuliers',
      'Les angles',
      'Mesurer des angles',
      'Périmètre de polygones',
      'Aires : carré, rectangle',
      'Volumes et capacités'
    ]
  },
  'Français-CM1': {
    'Trimestre 1': [
      'Analyse grammaticale complète',
      'Les classes grammaticales',
      'Les fonctions dans la phrase',
      'Le sujet du verbe',
      'Les compléments d\'objet : COD',
      'Les compléments d\'objet : COI',
      'Le complément du nom',
      'Les propositions',
      'Vocabulaire : sens propre et figuré',
      'Les figures de style simples'
    ],
    'Trimestre 2': [
      'Tous les temps de l\'indicatif',
      'Le présent de l\'indicatif',
      'L\'imparfait',
      'Le futur simple',
      'Le passé composé',
      'Le passé simple (introduction)',
      'Le plus-que-parfait',
      'Orthographe : les homophones',
      'Orthographe : les accords complexes',
      'L\'accord du participe passé'
    ],
    'Trimestre 3': [
      'Rédaction : le récit',
      'Rédaction : la description',
      'Le portrait physique',
      'Le portrait moral',
      'Le dialogue',
      'Ponctuer un dialogue',
      'Vocabulaire enrichi : les connecteurs',
      'Les substituts',
      'Écrire une histoire complète',
      'Comprendre un texte long'
    ]
  },
'Histoire-Géographie-CM1': {
    'Trimestre 1': [
      'L\'Antiquité : définition',
      'L\'Égypte ancienne',
      'Les pharaons',
      'Les pyramides',
      'L\'écriture : les hiéroglyphes',
      'La Grèce antique',
      'Les dieux grecs',
      'Les Jeux Olympiques antiques',
      'La démocratie athénienne'
    ],
    'Trimestre 2': [
      'Le Moyen Âge : les dates',
      'Les invasions barbares',
      'Clovis et les Francs',
      'Charlemagne',
      'Les châteaux forts',
      'Les seigneurs et les chevaliers',
      'Les paysans au Moyen Âge',
      'L\'Église au Moyen Âge',
      'Les cathédrales'
    ],
    'Trimestre 3': [
      'Géographie : les continents',
      'L\'Afrique',
      'L\'Europe',
      'L\'Asie',
      'L\'Amérique',
      'L\'Océanie',
      'Les océans',
      'Les climats du monde',
      'Les grandes zones climatiques'
    ]
  },
  'Sciences-CM1': {
    'Trimestre 1': [
      'Le système solaire',
      'Le Soleil : notre étoile',
      'Les planètes',
      'La Terre',
      'La Lune',
      'Les phases de la Lune',
      'Le jour et la nuit',
      'Les saisons',
      'Les éclipses'
    ],
    'Trimestre 2': [
      'L\'énergie : définition',
      'Les sources d\'énergie',
      'Les énergies renouvelables',
      'Les énergies non renouvelables',
      'L\'électricité',
      'Les circuits électriques',
      'Conducteurs et isolants',
      'Économiser l\'énergie',
      'Les dangers de l\'électricité'
    ],
    'Trimestre 3': [
      'Les écosystèmes',
      'La forêt tropicale',
      'La savane',
      'Le désert',
      'La mer et l\'océan',
      'Les chaînes alimentaires',
      'Les réseaux alimentaires',
      'La biodiversité',
      'Protéger les écosystèmes'
    ]
  },
  'Education Civique-CM1': {
    'Trimestre 1': [
      'Les institutions de mon pays',
      'Le président de la République',
      'Le gouvernement',
      'L\'Assemblée nationale',
      'Le Sénat',
      'Les élections',
      'Le droit de vote',
      'Le rôle des élus',
      'La Constitution'
    ],
    'Trimestre 2': [
      'La démocratie',
      'Qu\'est-ce que la démocratie ?',
      'La liberté d\'expression',
      'Le débat démocratique',
      'Respecter l\'opinion des autres',
      'Les élections de délégués',
      'Le rôle du délégué',
      'La participation citoyenne',
      'Les droits et devoirs du citoyen'
    ],
    'Trimestre 3': [
      'Les droits de l\'enfant',
      'La Convention internationale',
      'Le droit à l\'éducation',
      'Le droit à la santé',
      'Le droit à la protection',
      'Le droit aux loisirs',
      'Lutter contre le travail des enfants',
      'Les enfants dans le monde',
      'UNICEF et les organisations'
    ]
  },
'Mathématiques-CM2': {
    'Trimestre 1': [
      'Les nombres jusqu\'au milliard',
      'Lire et écrire les très grands nombres',
      'Les puissances de 10',
      'Calcul mental avancé',
      'Les quatre opérations',
      'Problèmes complexes',
      'Division de nombres décimaux',
      'Multiplication de décimaux',
      'Les nombres relatifs (introduction)',
      'Se repérer sur une droite graduée'
    ],
    'Trimestre 2': [
      'Les fractions : opérations',
      'Addition de fractions',
      'Soustraction de fractions',
      'Fractions et pourcentages',
      'Calculer un pourcentage',
      'Les échelles',
      'La proportionnalité',
      'Tableaux et graphiques',
      'Les statistiques',
      'La moyenne'
    ],
    'Trimestre 3': [
      'Géométrie plane : révisions',
      'Les triangles : propriétés',
      'Les quadrilatères : propriétés',
      'Aire du triangle',
      'Aire du disque',
      'Géométrie dans l\'espace',
      'Les solides : cube, pavé',
      'Le cylindre et la sphère',
      'Volume du cube et du pavé',
      'Préparation au collège'
    ]
  },
  'Français-CM2': {
    'Trimestre 1': [
      'Analyse logique : les propositions',
      'La proposition indépendante',
      'La proposition principale',
      'La proposition subordonnée',
      'Les propositions relatives',
      'Les propositions conjonctives',
      'Conjugaison : le subjonctif (introduction)',
      'Le conditionnel présent',
      'Le conditionnel passé',
      'Les modes et les temps'
    ],
    'Trimestre 2': [
      'Orthographe : les homophones grammaticaux',
      'a/à, et/est, son/sont',
      'ce/se, ces/ses',
      'ou/où, la/là/l\'a',
      'Vocabulaire : les préfixes',
      'Vocabulaire : les suffixes',
      'Les synonymes',
      'Les antonymes',
      'Le sens des mots en contexte',
      'Le dictionnaire'
    ],
'Trimestre 3': [
      'Rédaction : l\'argumentation',
      'Défendre un point de vue',
      'Les connecteurs logiques',
      'Rédaction : la lettre',
      'La lettre officielle',
      'La lettre amicale',
      'Le compte-rendu',
      'La synthèse de documents',
      'Écrire un texte long et structuré',
      'Préparation à la 6ème'
    ]
  },
  'Histoire-Géographie-CM2': {
    'Trimestre 1': [
      'Les Temps modernes : définition',
      'Les grandes découvertes',
      'Christophe Colomb',
      'La Renaissance',
      'François Ier',
      'Léonard de Vinci',
      'L\'imprimerie',
      'La Réforme protestante',
      'Les guerres de religion'
    ],
    'Trimestre 2': [
      'Le XIXe siècle',
      'La Révolution industrielle',
      'Les progrès techniques',
      'Le train',
      'L\'école obligatoire',
      'Le XXe siècle',
      'Les deux guerres mondiales',
      'La colonisation',
      'La décolonisation'
    ],
    'Trimestre 3': [
      'Géographie : mon pays dans le monde',
      'Mon pays dans le monde',
      'Les pays voisins',
      'Les ressources de mon pays',
      'Les forêts',
      'Les mines',
      'L\'économie de mon pays',
      'Les défis de mon pays',
      'Mon pays et son ensemble régional'
    ]
  },
  'Sciences-CM2': {
    'Trimestre 1': [
      'Le corps humain : la respiration',
      'Les poumons',
      'Le trajet de l\'air',
      'Les échanges gazeux',
      'La circulation sanguine',
      'Le cœur',
      'Les vaisseaux sanguins',
      'Le sang',
      'Le rythme cardiaque'
    ],
    'Trimestre 2': [
      'Les énergies renouvelables',
      'L\'énergie solaire',
      'L\'énergie éolienne',
      'L\'énergie hydraulique',
      'La biomasse',
      'La géothermie',
      'Avantages et inconvénients',
      'Produire de l\'électricité',
      'L\'avenir énergétique'
    ],
    'Trimestre 3': [
      'Préservation de l\'environnement',
      'La déforestation',
      'Le réchauffement climatique',
      'La pollution',
      'Les déchets',
      'Le recyclage',
      'Les espèces en danger',
      'Les gestes éco-responsables',
      'Agir pour la planète'
    ]
  },
  'Education Civique-CM2': {
    'Trimestre 1': [
      'La Constitution',
      'Qu\'est-ce qu\'une Constitution ?',
      'Les valeurs de la République',
      'La liberté',
      'L\'égalité',
      'La fraternité',
      'La laïcité',
      'Les symboles républicains',
      'Respecter les lois'
    ],
    'Trimestre 2': [
      'Citoyenneté et engagement',
      'Être un citoyen responsable',
      'S\'engager dans la vie de la cité',
      'Les associations',
      'Le bénévolat',
      'La solidarité internationale',
      'Les ONG',
      'Agir pour les autres',
      'Les projets citoyens'
    ],
    'Trimestre 3': [
      'Les enjeux du développement durable',
      'Le développement durable : définition',
      'L\'environnement',
      'L\'économie',
      'Le social',
      'Les objectifs du développement durable',
      'Agir localement',
      'Penser globalement',
      'L\'avenir de notre planète'
    ]
  },
'Mathématiques-6ème': {
    'Trimestre 1': [
      'Les nombres décimaux : lecture et écriture',
      'Comparer des nombres décimaux',
      'Ranger des nombres décimaux',
      'Addition de nombres décimaux',
      'Soustraction de nombres décimaux',
      'Multiplication de nombres décimaux',
      'Division de nombres décimaux',
      'Ordre de grandeur',
      'Problèmes avec les décimaux',
      'Les nombres entiers : diviseurs et multiples'
    ],
    'Trimestre 2': [
      'Les fractions : écriture',
      'Fractions égales',
      'Simplifier une fraction',
      'Comparer des fractions',
      'Addition de fractions',
      'Géométrie : les droites',
      'Droites parallèles',
      'Droites perpendiculaires',
      'Les angles : mesure',
      'Les angles : construction'
    ],
    'Trimestre 3': [
      'La proportionnalité',
      'Tableaux de proportionnalité',
      'Les pourcentages',
      'Les échelles',
      'Aires : unités',
      'Aire du rectangle',
      'Aire du triangle',
      'Périmètre du cercle',
      'Aire du disque',
      'Les solides : pavé droit'
    ]
  },
  'Français-6ème': {
    'Trimestre 1': [
      'Les classes grammaticales',
      'Le nom',
      'Les déterminants',
      'Les adjectifs',
      'Les pronoms',
      'Le verbe',
      'Les adverbes',
      'Les prépositions',
      'Le récit : structure',
      'Lecture : contes traditionnels'
    ],
    'Trimestre 2': [
      'Conjugaison : révisions',
      'Le présent de l\'indicatif',
      'L\'imparfait',
      'Le passé simple',
      'Le futur simple',
      'Le passé composé',
      'Les temps composés',
      'La poésie : les vers',
      'La poésie : les rimes',
      'Vocabulaire : la nature'
    ],
    'Trimestre 3': [
      'Orthographe : les accords',
      'Accord sujet-verbe',
      'Accord dans le groupe nominal',
      'Les homophones grammaticaux',
      'Le théâtre : découverte',
      'Les répliques et les didascalies',
      'Jouer une scène',
      'Expression écrite : le portrait',
      'Expression écrite : le dialogue',
      'Lecture cursive'
    ]
  },
  'Anglais-6ème': {
    'Trimestre 1': [
      'Greetings and introductions',
      'The alphabet',
      'Numbers 1-100',
      'Colors',
      'Days of the week',
      'Months of the year',
      'Simple present : to be',
      'Simple present : to have',
      'Personal pronouns',
      'Asking questions : What\'s your name?'
    ],
    'Trimestre 2': [
      'Family members',
      'Friends and people',
      'Describing people : physical appearance',
      'Describing people : personality',
      'There is / There are',
      'Prepositions of place',
      'My house and my room',
      'School subjects',
      'Telling the time',
      'Daily routines'
    ],
    'Trimestre 3': [
      'Daily activities',
      'Hobbies and free time',
      'Sports',
      'Present continuous',
      'Present simple vs present continuous',
      'Food and drinks',
      'Likes and dislikes',
      'Can for ability',
      'Describing animals',
      'Weather'
    ]
  },
'SVT-6ème': {
    'Trimestre 1': [
      'L\'environnement proche',
      'Observer le paysage',
      'Les composantes du paysage',
      'Les êtres vivants',
      'Les éléments non vivants',
      'Les interactions',
      'La classification des êtres vivants',
      'Les végétaux',
      'Les animaux',
      'Les micro-organismes'
    ],
    'Trimestre 2': [
      'Les êtres vivants et leur milieu',
      'Les besoins des végétaux',
      'Les besoins des animaux',
      'L\'adaptation au milieu',
      'Les relations alimentaires',
      'Les chaînes alimentaires',
      'Les réseaux alimentaires',
      'Les producteurs',
      'Les consommateurs',
      'Les décomposeurs'
    ],
    'Trimestre 3': [
      'La biodiversité',
      'Qu\'est-ce que la biodiversité ?',
      'La diversité des espèces',
      'La diversité des milieux',
      'Les menaces sur la biodiversité',
      'La déforestation',
      'La pollution',
      'Les espèces menacées',
      'Protéger la biodiversité',
      'Les actions de conservation'
    ]
  },
  'Physique-Chimie-6ème': {
    'Trimestre 1': [
      'Mélanges et solutions',
      'Mélanger des liquides',
      'Mélanges homogènes',
      'Mélanges hétérogènes',
      'La dissolution',
      'Les solutions',
      'La solubilité',
      'Séparer les constituants d\'un mélange',
      'La filtration',
      'La décantation'
    ],
    'Trimestre 2': [
      'Les états de la matière',
      'L\'état solide',
      'L\'état liquide',
      'L\'état gazeux',
      'Les changements d\'état',
      'La fusion',
      'La solidification',
      'La vaporisation',
      'La liquéfaction',
      'La sublimation'
    ],
    'Trimestre 3': [
      'L\'eau dans notre environnement',
      'L\'eau dans la nature',
      'Le cycle de l\'eau',
      'Les changements d\'état de l\'eau',
      'L\'eau et la vie',
      'L\'eau potable',
      'Le traitement de l\'eau',
      'La pollution de l\'eau',
      'Économiser l\'eau',
      'L\'importance de l\'eau'
    ]
  },
  'Histoire-Géo-6ème': {
    'Trimestre 1': [
      'L\'Orient ancien',
      'Les premières civilisations',
      'La Mésopotamie',
      'L\'invention de l\'écriture',
      'Les ziggourats',
      'L\'Égypte ancienne',
      'Les pharaons',
      'Les pyramides',
      'Les hiéroglyphes',
      'La religion égyptienne'
    ],
    'Trimestre 2': [
      'La Grèce antique',
      'Les cités grecques',
      'Athènes',
      'Sparte',
      'La démocratie athénienne',
      'Les dieux grecs',
      'La mythologie',
      'Les Jeux Olympiques',
      'Le théâtre grec',
      'Alexandre le Grand'
    ],
    'Trimestre 3': [
      'Rome',
      'La fondation de Rome',
      'La République romaine',
      'L\'Empire romain',
      'Jules César',
      'Auguste',
      'La société romaine',
      'Les conquêtes romaines',
      'Les gladiateurs',
      'La chute de l\'Empire romain'
    ]
  },
'EPS-6ème': {
    'Trimestre 1': [
      'Athlétisme : course de vitesse',
      'Le départ',
      'La course',
      'L\'arrivée',
      'Athlétisme : saut en longueur',
      'L\'élan',
      'L\'impulsion',
      'La réception',
      'Échauffement',
      'Étirements'
    ],
    'Trimestre 2': [
      'Sports collectifs : football',
      'Les règles du jeu',
      'Dribbler',
      'Passer',
      'Tirer',
      'Se placer',
      'Défendre',
      'Attaquer',
      'Le jeu en équipe',
      'Fair-play'
    ],
    'Trimestre 3': [
      'Gymnastique de base',
      'La roulade avant',
      'La roulade arrière',
      'L\'équilibre',
      'La roue',
      'Le poirier',
      'Les enchaînements',
      'La souplesse',
      'La coordination',
      'La sécurité'
    ]
  },

  'Mathématiques-5ème': {
    'Trimestre 1': [
      'Les nombres relatifs',
      'Nombres positifs et négatifs',
      'La droite graduée',
      'Comparer des nombres relatifs',
      'Addition de nombres relatifs',
      'Soustraction de nombres relatifs',
      'Règles des signes',
      'Distance entre deux nombres',
      'Problèmes avec les relatifs',
      'Calcul mental'
    ],
    'Trimestre 2': [
      'Les fractions : opérations',
      'Addition de fractions',
      'Soustraction de fractions',
      'Multiplication de fractions',
      'Division de fractions',
      'Problèmes avec fractions',
      'Les triangles',
      'Triangles particuliers',
      'Construction de triangles',
      'Les parallélogrammes'
    ],
    'Trimestre 3': [
      'La proportionnalité',
      'Reconnaître la proportionnalité',
      'Tableaux de proportionnalité',
      'Coefficient de proportionnalité',
      'Pourcentages',
      'Échelles',
      'Les statistiques',
      'Moyenne',
      'Diagrammes',
      'Graphiques'
    ]
  },
  'Français-5ème': {
    'Trimestre 1': [
      'Les fonctions grammaticales',
      'Le sujet',
      'Les compléments d\'objet',
      'Les compléments circonstanciels',
      'L\'attribut du sujet',
      'Le complément du nom',
      'L\'apposition',
      'Le roman d\'aventure',
      'Les personnages',
      'Les péripéties'
    ],
    'Trimestre 2': [
      'La phrase complexe',
      'Propositions indépendantes',
      'Propositions principales',
      'Propositions subordonnées',
      'Les relatives',
      'Les conjonctives',
      'La nouvelle',
      'Structure de la nouvelle',
      'La chute',
      'Écrire une nouvelle'
    ],
    'Trimestre 3': [
      'Vocabulaire : sens propre et figuré',
      'Les comparaisons',
      'Les métaphores',
      'Les expressions imagées',
      'Poésie lyrique',
      'Les thèmes lyriques',
      'L\'expression des sentiments',
      'Les figures de style',
      'Analyser un poème',
      'Écrire un poème'
    ]
  },
  'Anglais-5ème': {
    'Trimestre 1': [
      'Past simple : regular verbs',
      'Past simple : irregular verbs',
      'Past simple : questions and negatives',
      'Time expressions',
      'Describing people : physical appearance',
      'Describing people : personality',
      'Describing people : clothes',
      'Comparative adjectives',
      'Talking about the past',
      'Biography'
    ],
    'Trimestre 2': [
      'Food and meals',
      'At the restaurant',
      'Recipes',
      'Countable and uncountable nouns',
      'Some and any',
      'Much and many',
      'Comparatives',
      'Superlatives',
      'Expressing preferences',
      'Healthy eating'
    ],
    'Trimestre 3': [
      'Sports and hobbies',
      'Playing and doing',
      'Going + -ing',
      'Frequency adverbs',
      'Modal verbs : can',
      'Modal verbs : must',
      'Modal verbs : should',
      'Giving advice',
      'Expressing ability',
      'Expressing obligation'
    ]
  },
'SVT-5ème': {
    'Trimestre 1': [
      'Respiration et occupation des milieux',
      'La respiration des animaux',
      'Les organes respiratoires',
      'Respiration aquatique',
      'Respiration aérienne',
      'La respiration des végétaux',
      'Les échanges gazeux',
      'L\'adaptation au milieu',
      'L\'occupation des milieux',
      'Les migrations'
    ],
    'Trimestre 2': [
      'Fonctionnement de l\'organisme',
      'La digestion',
      'Le tube digestif',
      'Les nutriments',
      'L\'absorption intestinale',
      'La circulation sanguine',
      'Le cœur',
      'Les vaisseaux sanguins',
      'Le sang',
      'L\'élimination des déchets'
    ],
    'Trimestre 3': [
      'Géologie externe',
      'Le paysage : évolution',
      'L\'érosion',
      'Le transport',
      'La sédimentation',
      'Les roches sédimentaires',
      'Les fossiles',
      'L\'action de l\'eau',
      'L\'action du vent',
      'L\'action humaine'
    ]
  },
  'Physique-Chimie-5ème': {
    'Trimestre 1': [
      'Électricité : les circuits',
      'Le circuit électrique simple',
      'Circuit en série',
      'Circuit en dérivation',
      'Les dipôles',
      'Les générateurs',
      'Les récepteurs',
      'Court-circuit',
      'La sécurité électrique',
      'Les dangers du courant'
    ],
    'Trimestre 2': [
      'La lumière : sources',
      'Sources primaires',
      'Sources secondaires',
      'Propagation de la lumière',
      'La lumière se propage en ligne droite',
      'Ombres et pénombre',
      'Les éclipses',
      'La vitesse de la lumière',
      'Les couleurs',
      'La lumière blanche'
    ],
    'Trimestre 3': [
      'Mélanges homogènes et hétérogènes',
      'Identifier un mélange',
      'Mélange et corps pur',
      'Miscibilité',
      'Solubilité',
      'Saturation d\'une solution',
      'Techniques de séparation',
      'La distillation',
      'La chromatographie',
      'Applications pratiques'
    ]
  },
  'Histoire-Géo-5ème': {
    'Trimestre 1': [
      'Le Moyen Âge : islam et chrétienté',
      'La naissance de l\'islam',
      'Mahomet',
      'Les conquêtes musulmanes',
      'La civilisation islamique',
      'La chrétienté médiévale',
      'L\'Église catholique',
      'Les croisades',
      'Les contacts entre civilisations',
      'Échanges culturels'
    ],
    'Trimestre 2': [
      'La Renaissance',
      'Les grandes découvertes',
      'Christophe Colomb',
      'Vasco de Gama',
      'Magellan',
      'La Renaissance artistique',
      'Léonard de Vinci',
      'Michel-Ange',
      'L\'humanisme',
      'L\'imprimerie'
    ],
    'Trimestre 3': [
      'Géographie : ressources et développement',
      'Les ressources naturelles',
      'L\'eau',
      'L\'énergie',
      'Les ressources alimentaires',
      'Le développement',
      'Les inégalités',
      'Le développement durable',
      'Préserver les ressources',
      'Les enjeux du XXIe siècle'
    ]
  },
  'EPS-5ème': {
    'Trimestre 1': [
      'Athlétisme : course de vitesse',
      'Technique de course',
      'Les starting-blocks',
      'Le 100 mètres',
      'Les relais',
      'Passer le témoin',
      'Chronométrage',
      'Améliorer sa performance',
      'L\'entraînement',
      'La récupération'
    ],
    'Trimestre 2': [
      'Sports collectifs : basketball',
      'Les règles du jeu',
      'Le dribble',
      'La passe',
      'Le tir',
      'Le lay-up',
      'La défense',
      'L\'attaque',
      'Les tactiques de jeu',
      'L\'esprit d\'équipe'
    ],
    'Trimestre 3': [
      'Gymnastique acrobatique',
      'Les figures au sol',
      'Les appuis',
      'Les équilibres',
      'Les portés',
      'Les pyramides',
      'La chorégraphie',
      'La synchronisation',
      'L\'expression corporelle',
      'La présentation'
    ]
  },

  'Mathématiques-4ème': {
    'Trimestre 1': [
      'Calcul littéral',
      'Réduire une expression',
      'Développer une expression',
      'Factoriser une expression',
      'Double distributivité',
      'Identités remarquables',
      'Équations du premier degré',
      'Résoudre une équation',
      'Problèmes avec équations',
      'Inéquations'
    ],
    'Trimestre 2': [
      'Théorème de Pythagore',
      'Dans le triangle rectangle',
      'Calculer une longueur',
      'Réciproque du théorème',
      'Vérifier si un triangle est rectangle',
      'Triangles égaux',
      'Triangles semblables',
      'Théorème de Thalès',
      'Configuration de Thalès',
      'Applications'
    ],
'Trimestre 3': [
      'Proportionnalité et pourcentages',
      'Situations de proportionnalité',
      'Coefficient de proportionnalité',
      'Représentation graphique',
      'Calculer un pourcentage',
      'Augmentation et réduction',
      'Probabilités',
      'Expériences aléatoires',
      'Calculer des probabilités',
      'Arbres de probabilités'
    ]
  },
  'Français-4ème': {
    'Trimestre 1': [
      'Les propositions subordonnées',
      'Les subordonnées relatives',
      'Les subordonnées conjonctives',
      'Les subordonnées complétives',
      'Les subordonnées circonstancielles',
      'La lettre',
      'Lettre formelle',
      'Lettre informelle',
      'Structure d\'une lettre',
      'Formules de politesse'
    ],
    'Trimestre 2': [
      'Discours direct et indirect',
      'Transformer le discours',
      'Les verbes introducteurs',
      'La concordance des temps',
      'La nouvelle fantastique',
      'Les caractéristiques du fantastique',
      'L\'atmosphère',
      'Le doute et l\'hésitation',
      'Analyser une nouvelle',
      'Écrire du fantastique'
    ],
    'Trimestre 3': [
      'Les temps du récit',
      'Imparfait et passé simple',
      'La valeur des temps',
      'Le système des temps',
      'Le portrait',
      'Portrait physique',
      'Portrait moral',
      'Portrait en action',
      'Les registres de langue',
      'Expression écrite argumentative'
    ]
  },
  'Anglais-4ème': {
    'Trimestre 1': [
      'Present perfect',
      'Formation du present perfect',
      'Ever and never',
      'Already, yet, just',
      'For and since',
      'Present perfect vs past simple',
      'Travel and tourism',
      'At the airport',
      'At the hotel',
      'Asking for directions'
    ],
    'Trimestre 2': [
      'Passive voice',
      'Formation of the passive',
      'Passive in different tenses',
      'By + agent',
      'Technology',
      'Computers and internet',
      'Social media',
      'Mobile phones',
      'Advantages and disadvantages',
      'Future technologies'
    ],
    'Trimestre 3': [
      'Conditional sentences',
      'Zero conditional',
      'First conditional',
      'Second conditional',
      'Environment',
      'Climate change',
      'Pollution',
      'Endangered species',
      'Recycling',
      'Protecting the environment'
    ]
  },
  'SVT-4ème': {
    'Trimestre 1': [
      'La reproduction humaine',
      'L\'appareil reproducteur masculin',
      'L\'appareil reproducteur féminin',
      'La puberté',
      'Les gamètes',
      'La fécondation',
      'Le développement embryonnaire',
      'La grossesse',
      'L\'accouchement',
      'La contraception'
    ],
    'Trimestre 2': [
      'Le système nerveux',
      'Les organes des sens',
      'Les récepteurs sensoriels',
      'Les nerfs',
      'Le cerveau',
      'La moelle épinière',
      'Le message nerveux',
      'La communication nerveuse',
      'Les réflexes',
      'Les drogues et le système nerveux'
    ],
    'Trimestre 3': [
      'Géologie : séismes et volcans',
      'Les séismes',
      'L\'origine des séismes',
      'Les ondes sismiques',
      'Mesurer un séisme',
      'Prévenir les risques sismiques',
      'Les volcans',
      'Les éruptions volcaniques',
      'Les types de volcans',
      'Le risque volcanique'
    ]
  },
  'Physique-Chimie-4ème': {
    'Trimestre 1': [
      'L\'air qui nous entoure',
      'Composition de l\'air',
      'Le dioxygène',
      'Le diazote',
      'Les autres gaz',
      'La pression atmosphérique',
      'Mesurer la pression',
      'Propriétés de l\'air',
      'Volume et masse de l\'air',
      'La pollution de l\'air'
    ],
    'Trimestre 2': [
      'Les combustions',
      'Qu\'est-ce qu\'une combustion ?',
      'Combustibles et comburants',
      'Les produits de combustion',
      'Combustions complètes',
      'Combustions incomplètes',
      'Le triangle du feu',
      'Dangers des combustions',
      'Prévenir les incendies',
      'Éteindre un feu'
    ],
    'Trimestre 3': [
      'Lois de l\'électricité',
      'L\'intensité du courant',
      'Mesurer l\'intensité',
      'Loi d\'unicité de l\'intensité',
      'Loi d\'additivité des intensités',
      'La tension électrique',
      'Mesurer la tension',
      'Loi d\'unicité de la tension',
      'Loi d\'additivité des tensions',
      'Résistance électrique'
    ]
  },
 'Histoire-Géo-4ème': {
    'Trimestre 1': [
      'Les grandes découvertes',
      'Les motivations des explorateurs',
      'Les progrès techniques',
      'Christophe Colomb et l\'Amérique',
      'Les conquistadors',
      'Les empires coloniaux',
      'L\'esclavage et la traite',
      'Les échanges',
      'Le commerce triangulaire',
      'Les conséquences'
    ],
    'Trimestre 2': [
      'Les révolutions du XVIIIe siècle',
      'Les Lumières',
      'Les philosophes',
      'Les idées nouvelles',
      'La Révolution française',
      '1789 : l\'année décisive',
      'La Déclaration des droits',
      'La Terreur',
      'Napoléon Bonaparte',
      'L\'Empire'
    ],
    'Trimestre 3': [
      'Géographie : la mondialisation',
      'Qu\'est-ce que la mondialisation ?',
      'Les acteurs de la mondialisation',
      'Les flux',
      'Les échanges commerciaux',
      'Les migrations',
      'Les firmes multinationales',
      'Les inégalités',
      'Les territoires dans la mondialisation',
      'Les métropoles mondiales'
    ]
  },
  'EPS-4ème': {
    'Trimestre 1': [
      'Course de demi-fond',
      'L\'endurance',
      'Le souffle',
      'Gérer son effort',
      'L\'allure de course',
      'Le 1000 mètres',
      'Le 1500 mètres',
      'Le cross-country',
      'L\'entraînement en endurance',
      'Récupération et hydratation'
    ],
    'Trimestre 2': [
      'Sports collectifs : handball',
      'Les règles du handball',
      'La manipulation du ballon',
      'Le dribble',
      'La passe',
      'Le tir en course',
      'Le tir en suspension',
      'Le gardien de but',
      'Les tactiques défensives',
      'Les tactiques offensives'
    ],
    'Trimestre 3': [
      'Natation',
      'La respiration aquatique',
      'La flottaison',
      'Les battements de jambes',
      'Les mouvements de bras',
      'Le crawl',
      'La brasse',
      'Le dos crawlé',
      'Le plongeon',
      'La sécurité aquatique'
    ]
  },

  'Mathématiques-3ème': {
    'Trimestre 1': [
      'Les racines carrées',
      'Définition de la racine carrée',
      'Calculer une racine carrée',
      'Simplifier une racine carrée',
      'Opérations avec les racines',
      'Équations du premier degré',
      'Équations produits',
      'Inéquations',
      'Systèmes d\'équations',
      'Résolution par substitution'
    ],
    'Trimestre 2': [
      'Théorème de Thalès',
      'Configuration de Thalès',
      'Calcul de longueurs',
      'Réciproque du théorème',
      'Agrandissement et réduction',
      'Trigonométrie',
      'Cosinus d\'un angle aigu',
      'Sinus d\'un angle aigu',
      'Tangente d\'un angle aigu',
      'Calculs trigonométriques'
    ],
    'Trimestre 3': [
      'Les fonctions affines',
      'Notion de fonction',
      'Représentation graphique',
      'Fonction linéaire',
      'Fonction affine',
      'Coefficient directeur',
      'Équation de droite',
      'Probabilités',
      'Arbre de probabilités',
      'Statistiques : moyenne, médiane, étendue'
    ]
  },
  'Français-3ème': {
    'Trimestre 1': [
      'Analyse logique complète',
      'Les propositions',
      'Nature des propositions',
      'Fonction des propositions',
      'L\'autobiographie',
      'Les caractéristiques',
      'Le pacte autobiographique',
      'Mémoires et souvenirs',
      'Analyser un texte autobiographique',
      'Écrire un récit autobiographique'
    ],
    'Trimestre 2': [
      'L\'argumentation',
      'Thèse et arguments',
      'Les exemples',
      'Les connecteurs logiques',
      'Convaincre et persuader',
      'Le théâtre classique',
      'Les règles du théâtre',
      'La tragédie',
      'La comédie',
      'Analyser une scène'
    ],
    'Trimestre 3': [
      'Préparation au brevet',
      'La dictée',
      'Les questions sur texte',
      'La réécriture',
      'La rédaction',
      'Argumentation écrite',
      'Récit d\'imagination',
      'Poésie engagée',
      'La poésie de résistance',
      'Analyser un poème engagé'
    ]
  },
  'Anglais-3ème': {
    'Trimestre 1': [
      'All tenses review',
      'Present simple and continuous',
      'Past simple and continuous',
      'Present perfect',
      'Past perfect',
      'Future forms',
      'Will and going to',
      'Present continuous for future',
      'Future continuous',
      'Mixed tenses exercises'
    ],
'Trimestre 2': [
      'Reported speech',
      'Statements',
      'Questions',
      'Commands',
      'Time expressions changes',
      'Job and career',
      'Jobs and professions',
      'Skills and qualifications',
      'Job interviews',
      'Writing a CV'
    ],
    'Trimestre 3': [
      'Relative clauses',
      'Defining relative clauses',
      'Non-defining relative clauses',
      'Relative pronouns',
      'Global issues',
      'Poverty',
      'Education',
      'Human rights',
      'Peace and war',
      'Making a difference'
    ]
  },
  'SVT-3ème': {
    'Trimestre 1': [
      'Génétique et hérédité',
      'Les chromosomes',
      'L\'ADN',
      'Les gènes',
      'La division cellulaire',
      'La mitose',
      'La méiose',
      'L\'information génétique',
      'La transmission des caractères',
      'Les arbres généalogiques'
    ],
    'Trimestre 2': [
      'Évolution des espèces',
      'La théorie de l\'évolution',
      'Darwin et la sélection naturelle',
      'Les preuves de l\'évolution',
      'Les fossiles',
      'L\'anatomie comparée',
      'Les parentés',
      'La classification phylogénétique',
      'L'évolution humaine',
      'Homo sapiens'
],
'Trimestre 3': [
'Responsabilité humaine en santé',
'Le système immunitaire',
'Les microbes',
'Les réactions immunitaires',
'Les vaccins',
'Les antibiotiques',
'Responsabilité environnementale',
'Le développement durable',
'Les énergies renouvelables',
'Préserver la biodiversité'
]
},
'Physique-Chimie-3ème': {
'Trimestre 1': [
'Électricité : puissance et énergie',
'La puissance électrique',
'Relation P = U × I',
'L'énergie électrique',
'Relation E = P × t',
'Le coût de l'énergie',
'Économiser l'énergie',
'Les appareils électriques',
'La sécurité électrique',
'Les fusibles et disjoncteurs'
],
'Trimestre 2': [
'Chimie : acides, bases, pH',
'Les solutions acides',
'Les solutions basiques',
'Les solutions neutres',
'Le pH',
'Mesurer le pH',
'Les indicateurs colorés',
'Les ions',
'Les réactions acide-base',
'Dilution et concentration'
],
'Trimestre 3': [
'Mécanique et énergie',
'La vitesse',
'Calculer une vitesse',
'La gravitation',
'Le poids',
'L'énergie cinétique',
'L'énergie potentielle',
'La conservation de l'énergie',
'Les transferts d'énergie',
'Les sources d'énergie'
]
},
'Histoire-Géo-3ème': {
'Trimestre 1': [
'Les deux guerres mondiales',
'La Première Guerre mondiale',
'Les causes',
'Le déroulement',
'Les conséquences',
'Le génocide arménien',
'La Seconde Guerre mondiale',
'Les causes',
'Le déroulement',
'La Shoah'
],
'Trimestre 2': [
'La Guerre froide',
'L'opposition Est-Ouest',
'Le bloc de l'Ouest',
'Le bloc de l'Est',
'Le mur de Berlin',
'La crise de Cuba',
'La course aux armements',
'La décolonisation',
'Les indépendances',
'Les nouveaux États'
],
'Trimestre 3': [
'Géographie : l'Union Européenne',
'La construction européenne',
'Les institutions',
'L'euro',
'La France',
'Les territoires français',
'Les régions',
'L'aménagement du territoire',
'Les défis de la France',
'Préparation au brevet'
]
},
'EPS-3ème': {
'Trimestre 1': [
'Course d'orientation',
'Lire une carte',
'Les symboles',
'L'échelle',
'La boussole',
'S'orienter',
'Les azimuts',
'Établir un itinéraire',
'Les balises',
'Stratégies de course'
],
'Trimestre 2': [
'Sports collectifs : volley-ball',
'Les règles du volley',
'La touche de balle',
'Le service',
'La manchette',
'La passe',
'Le smash',
'Le contre',
'Les rotations',
'Les tactiques'
],
'Trimestre 3': [
'Préparation physique au brevet',
'Course d'endurance',
'Natation de distance',
'Les épreuves du brevet',
'S'entraîner efficacement',
'L'alimentation du sportif',
'L'hydratation',
'Gérer son stress',
'La récupération',
'Objectif brevet'
]
},
'Français-2nde A': {
    'Trimestre 1': [
      'Le roman et le récit du XIXe siècle',
      'Le roman réaliste',
      'Balzac : Le Père Goriot',
      'Stendhal : Le Rouge et le Noir',
      'Le roman naturaliste',
      'Zola et le naturalisme',
      'Grammaire : l\'analyse de la phrase',
      'Les propositions subordonnées',
      'Les fonctions grammaticales',
      'Méthodologie : la lecture analytique'
    ],
    'Trimestre 2': [
      'La poésie du XIXe au XXe siècle',
      'Le romantisme : Lamartine, Hugo',
      'Le symbolisme : Baudelaire',
      'Les Fleurs du mal',
      'Rimbaud et Verlaine',
      'L\'argumentation',
      'Convaincre et persuader',
      'Les procédés argumentatifs',
      'Techniques de dissertation',
      'Le plan dialectique'
    ],
    'Trimestre 3': [
      'Le théâtre du XVIIe au XXIe siècle',
      'La tragédie classique',
      'Racine : Phèdre',
      'La comédie classique',
      'Molière : Le Misanthrope',
      'Le théâtre moderne',
      'Le commentaire de texte',
      'Introduction et conclusion',
      'Expression écrite',
      'L\'essai littéraire'
    ]
  },
  'Français-1ère A': {
    'Trimestre 1': [
      'Le roman du XIXe siècle',
      'Le roman psychologique',
      'Madame Bovary de Flaubert',
      'L\'étude des personnages',
      'Les techniques narratives',
      'Le point de vue narratif',
      'Le commentaire composé',
      'L\'introduction rédigée',
      'Les axes d\'analyse',
      'Les figures de style avancées'
    ],
    'Trimestre 2': [
      'La poésie moderne et contemporaine',
      'Apollinaire : Alcools',
      'Le surréalisme',
      'Paul Éluard',
      'L\'essai littéraire',
      'Montaigne : Les Essais',
      'L\'autobiographie',
      'Rousseau : Les Confessions',
      'La dissertation littéraire',
      'Le plan thématique'
    ],
    'Trimestre 3': [
      'Le théâtre contemporain',
      'Le théâtre de l\'absurde',
      'Ionesco : La Cantatrice chauve',
      'Beckett : En attendant Godot',
      'Les techniques d\'écriture',
      'L\'écriture d\'invention',
      'L\'analyse stylistique',
      'Les registres littéraires',
      'Préparation aux épreuves',
      'Méthodologie complète'
    ]
  },
  'Français-Terminale A': {
    'Trimestre 1': [
      'Littérature du XXe siècle',
      'Le nouveau roman',
      'Sartre : La Nausée',
      'Camus : L\'Étranger',
      'L\'existentialisme',
      'La dissertation philosophique',
      'Problématiser un sujet',
      'Argumenter efficacement',
      'Analyse critique',
      'Les œuvres au programme'
    ],
    'Trimestre 2': [
      'Le récit moderne',
      'Proust : Du côté de chez Swann',
      'La mémoire involontaire',
      'L\'autobiographie moderne',
      'Marguerite Duras',
      'Les techniques argumentatives',
      'La rhétorique',
      'Les sophismes',
      'L\'éloquence',
      'L\'oral du bac'
    ],
    'Trimestre 3': [
      'Préparation au BAC',
      'Révision des œuvres',
      'Les mouvements littéraires',
      'Du classicisme au contemporain',
      'Le commentaire composé avancé',
      'La dissertation complète',
      'L\'écriture d\'invention créative',
      'L\'entretien oral',
      'Gestion du temps',
      'Stratégies d\'examen'
    ]
  },
'Philosophie-2nde A': {
    'Trimestre 1': [
      'Introduction à la réflexion philosophique',
      'Qu\'est-ce que philosopher ?',
      'Les origines de la philosophie',
      'Socrate et la maïeutique',
      'Platon et les Idées',
      'Aristote et la logique',
      'Les grands courants philosophiques',
      'Le rationalisme',
      'L\'empirisme',
      'L\'existentialisme'
    ],
    'Trimestre 2': [
      'La conscience de soi',
      'Descartes : le cogito',
      'La conscience et l\'inconscient',
      'Freud et la psychanalyse',
      'La perception',
      'Les sens et la connaissance',
      'L\'illusion et l\'erreur',
      'Le langage',
      'Le langage et la pensée',
      'Communication et expression'
    ],
    'Trimestre 3': [
      'La culture',
      'Nature et culture',
      'L\'art',
      'Qu\'est-ce que l\'art ?',
      'Le beau et l\'utile',
      'L\'œuvre d\'art',
      'La technique',
      'L\'homme et l\'outil',
      'Progrès technique',
      'Technique et éthique'
    ]
  },
  'Philosophie-1ère A': {
    'Trimestre 1': [
      'La conscience',
      'Conscience immédiate et réflexive',
      'La conscience de soi',
      'La conscience morale',
      'L\'inconscient',
      'L\'hypothèse de l\'inconscient',
      'Le ça, le moi, le surmoi',
      'Autrui',
      'La reconnaissance',
      'L\'altérité'
    ],
    'Trimestre 2': [
      'Le désir',
      'Désir et besoin',
      'Le manque et la satisfaction',
      'Épicure et le bonheur',
      'L\'existence et le temps',
      'Être et temps',
      'La finitude',
      'La liberté',
      'Liberté et déterminisme',
      'Le libre arbitre'
    ],
    'Trimestre 3': [
      'Le devoir',
      'L\'obligation morale',
      'Kant et l\'impératif catégorique',
      'Le bonheur',
      'Qu\'est-ce que le bonheur ?',
      'Bonheur et plaisir',
      'La morale',
      'Morale et éthique',
      'Les fondements de la morale',
      'Dissertation philosophique'
    ]
  },
  'Philosophie-Terminale A': {
    'Trimestre 1': [
      'La vérité',
      'Vérité et opinion',
      'Les critères de vérité',
      'La raison et le réel',
      'Raison et expérience',
      'Théorie et expérience',
      'La démonstration',
      'Mathématiques et vérité',
      'L\'interprétation',
      'Sens et interprétation'
    ],
    'Trimestre 2': [
      'Le vivant',
      'La vie et la matière',
      'L\'âme et le corps',
      'La matière et l\'esprit',
      'Le dualisme cartésien',
      'Le matérialisme',
      'La société',
      'L\'état de nature',
      'Le contrat social',
      'Hobbes et Rousseau'
    ],
    'Trimestre 3': [
      'La justice et le droit',
      'Justice et égalité',
      'Le droit naturel',
      'Le droit positif',
      'L\'État',
      'Légitimité du pouvoir',
      'La démocratie',
      'Préparation intensive au BAC',
      'Révision des notions',
      'Méthodologie de la dissertation'
    ]
  },
  'Histoire-Géo-2nde A': {
    'Trimestre 1': [
      'L\'Europe et le monde au XIXe siècle',
      'L\'industrialisation',
      'La Révolution industrielle en Europe',
      'Les transformations économiques',
      'Les transformations sociales',
      'La bourgeoisie',
      'Le prolétariat',
      'Les grandes puissances européennes',
      'L\'Empire britannique',
      'La France au XIXe'
    ],
    'Trimestre 2': [
      'Géographie : population mondiale',
      'La croissance démographique',
      'La transition démographique',
      'Les migrations internationales',
      'L\'urbanisation',
      'Les métropoles',
      'Les mégapoles',
      'Développement durable',
      'Les ressources',
      'Les défis environnementaux'
    ],
    'Trimestre 3': [
      'Les transformations sociales',
      'Le mouvement ouvrier',
      'Le socialisme',
      'Les luttes sociales',
      'L\'évolution de la famille',
      'La place des femmes',
      'L\'instruction publique',
      'Les loisirs',
      'Culture de masse',
      'La Belle Époque'
    ]
  },
  'Histoire-Géo-1ère A': {
    'Trimestre 1': [
      'La Première Guerre mondiale',
      'Les causes du conflit',
      'La guerre de mouvement',
      'La guerre de tranchées',
      'La guerre totale',
      'Le génocide arménien',
      'La Révolution russe de 1917',
      'Lénine et les bolcheviks',
      'La guerre civile',
      'La naissance de l\'URSS'
    ],
    'Trimestre 2': [
      'L\'entre-deux-guerres',
      'Les traités de paix',
      'La SDN',
      'La crise de 1929',
      'Les régimes totalitaires',
      'Stalinisme',
      'Nazisme',
      'Géographie : la mondialisation',
      'Les acteurs',
      'Les flux'
    ],
    'Trimestre 3': [
      'La Seconde Guerre mondiale',
      'Les causes',
      'Les phases du conflit',
      'La France dans la guerre',
      'Vichy et la Résistance',
      'Le génocide juif',
      'Les enjeux énergétiques',
      'Les hydrocarbures',
      'Les énergies renouvelables',
      'Géopolitique de l\'énergie'
    ]
  },
  'Histoire-Géo-Terminale A': {
    'Trimestre 1': [
      'La Guerre froide',
      'La bipolarisation du monde',
      'Le plan Marshall',
      'Le blocus de Berlin',
      'La guerre de Corée',
      'La crise de Cuba',
      'La coexistence pacifique',
      'La décolonisation',
      'L\'indépendance de l\'Inde',
      'Les guerres d\'indépendance'
    ],
    'Trimestre 2': [
      'Le monde depuis 1991',
      'La chute du mur de Berlin',
      'La fin de l\'URSS',
      'L\'hyperpuissance américaine',
      'Les nouvelles puissances',
      'La Chine',
      'Géographie : les puissances mondiales',
      'Les États-Unis',
      'L\'Union Européenne',
      'Les puissances émergentes'
    ],
    'Trimestre 3': [
      'Les conflits contemporains',
      'Le Moyen-Orient',
      'Les conflits en Afrique',
      'Le terrorisme',
      'L\'Afrique dans le monde',
      'Les défis du continent',
      'Les opportunités',
      'L\'intégration régionale',
      'Préparation au BAC',
      'Composition et étude de documents'
    ]
  },
'Mathématiques-2nde A': {
    'Trimestre 1': [
      'Les fonctions numériques',
      'Notion de fonction',
      'Domaine de définition',
      'Image et antécédent',
      'Représentation graphique',
      'Lecture graphique',
      'Équations du premier degré',
      'Résolution d\'équations',
      'Inéquations',
      'Systèmes d\'équations'
    ],
    'Trimestre 2': [
      'Les fonctions de référence',
      'Fonction linéaire',
      'Fonction affine',
      'Fonction carré',
      'Fonction inverse',
      'Variations de fonctions',
      'Statistiques descriptives',
      'Moyenne, médiane, quartiles',
      'Diagrammes',
      'Géométrie plane'
    ],
    'Trimestre 3': [
      'Proportionnalité',
      'Situations de proportionnalité',
      'Pourcentages',
      'Échelles',
      'Trigonométrie de base',
      'Cosinus, sinus, tangente',
      'Résolution de triangles',
      'Vecteurs',
      'Coordonnées',
      'Opérations sur les vecteurs'
    ]
  },
  'Mathématiques-1ère A': {
    'Trimestre 1': [
      'Les suites numériques',
      'Définition d\'une suite',
      'Suites arithmétiques',
      'Suites géométriques',
      'Sens de variation',
      'Les fonctions de référence',
      'Fonction polynôme du second degré',
      'Fonction racine carrée',
      'Fonction valeur absolue',
      'Transformations de fonctions'
    ],
    'Trimestre 2': [
      'La dérivation',
      'Nombre dérivé',
      'Fonction dérivée',
      'Dérivées des fonctions usuelles',
      'Opérations sur les dérivées',
      'Applications de la dérivée',
      'Étude de variations',
      'Les probabilités',
      'Probabilités conditionnelles',
      'Indépendance'
    ],
    'Trimestre 3': [
      'Les statistiques',
      'Variables statistiques',
      'Paramètres de position',
      'Paramètres de dispersion',
      'La géométrie analytique',
      'Équations de droites',
      'Systèmes linéaires',
      'Vecteurs du plan',
      'Produit scalaire',
      'Applications géométriques'
    ]
  },
  'Mathématiques-Terminale A': {
    'Trimestre 1': [
      'Les fonctions logarithmes',
      'Fonction logarithme népérien',
      'Propriétés algébriques',
      'Dérivée',
      'Étude de fonctions',
      'Les primitives',
      'Primitives usuelles',
      'Calcul de primitives',
      'Intégration par parties',
      'Changement de variable'
    ],
    'Trimestre 2': [
      'Les intégrales',
      'Intégrale définie',
      'Calcul d\'aires',
      'Valeur moyenne',
      'Probabilités conditionnelles',
      'Formule des probabilités totales',
      'Formule de Bayes',
      'Variables aléatoires',
      'Loi binomiale',
      'Espérance et variance'
    ],
    'Trimestre 3': [
      'Suites et limites',
      'Limite d\'une suite',
      'Opérations sur les limites',
      'Suites convergentes',
      'Comportement asymptotique',
      'Préparation intensive au BAC',
      'Exercices types',
      'Problèmes de synthèse',
      'Stratégies de résolution',
      'Gestion du temps'
    ]
  },
  'Anglais-2nde A': {
    'Trimestre 1': [
      'Grammar fundamentals',
      'Tenses review',
      'Present perfect continuous',
      'Past perfect',
      'Future perfect',
      'Reading comprehension',
      'Analyzing texts',
      'Literary devices',
      'Vocabulary building',
      'Idiomatic expressions'
    ],
    'Trimestre 2': [
      'Writing skills',
      'Essay structure',
      'Paragraphing',
      'Linking words',
      'Oral expression',
      'Presentations',
      'Debates',
      'British culture',
      'History and traditions',
      'British literature'
    ],
    'Trimestre 3': [
      'Literature introduction',
      'Short stories',
      'Poetry analysis',
      'Shakespeare introduction',
      'Debate and discussion',
      'Expressing opinions',
      'Agreeing and disagreeing',
      'American culture',
      'US history',
      'American way of life'
    ]
  },
  'Anglais-1ère A': {
    'Trimestre 1': [
      'Advanced grammar',
      'Modal verbs advanced',
      'Subjunctive',
      'Conditionals review',
      'Reported speech advanced',
      'Essay writing',
      'Argumentative essay',
      'Descriptive writing',
      'Narrative writing',
      'Literary analysis'
    ],
    'Trimestre 2': [
      'British literature',
      'Victorian literature',
      'Charles Dickens',
      'The Brontë sisters',
      'Romantic poetry',
      'William Wordsworth',
      'Argumentation',
      'Persuasive techniques',
      'Translation',
      'Version and thème'
    ],
    'Trimestre 3': [
      'American literature',
      'Mark Twain',
      'Edgar Allan Poe',
      'F. Scott Fitzgerald',
      'Presentation skills',
      'Public speaking',
      'Body language',
      'Critical thinking',
      'Analyzing arguments',
      'Debate skills'
    ]
  },
  'Anglais-Terminale A': {
    'Trimestre 1': [
      'Literary criticism',
      'Critical approaches',
      'Formalism',
      'Structuralism',
      'Post-colonialism',
      'Advanced writing',
      'Academic writing',
      'Research papers',
      'Shakespeare studies',
      'Hamlet analysis'
    ],
    'Trimestre 2': [
      'Contemporary issues',
      'Globalization',
      'Environmental challenges',
      'Social justice',
      'Debate preparation',
      'Advanced debating',
      'Refutation techniques',
      'Poetry analysis',
      'Metaphysical poets',
      'Modern poetry'
    ],
    'Trimestre 3': [
      'BAC preparation',
      'Exam strategies',
      'Time management',
      'Public speaking',
      'Oral exam preparation',
      'Cultural studies',
      'Commonwealth literature',
      'Postcolonial writers',
      'Mock exams',
      'Final revision'
    ]
  },
'Espagnol-2nde A': {
    'Trimestre 1': [
      'Gramática básica',
      'Los tiempos verbales',
      'Presente de indicativo',
      'Pretérito perfecto',
      'Pretérito indefinido',
      'Comprensión lectora',
      'Textos narrativos',
      'Textos descriptivos',
      'Vocabulario cotidiano',
      'La familia'
    ],
    'Trimestre 2': [
      'Expresión escrita',
      'La carta',
      'El diario',
      'La descripción',
      'Conversación',
      'Diálogos cotidianos',
      'Expresar opiniones',
      'Cultura hispana',
      'España',
      'América Latina'
    ],
    'Trimestre 3': [
      'Literatura introducción',
      'El cuento',
      'La poesía',
      'Autores hispanos',
      'Debate',
      'Argumentar en español',
      'Defender un punto de vista',
      'Civilización española',
      'Historia de España',
      'Tradiciones'
    ]
  },
  'Espagnol-1ère A': {
    'Trimestre 1': [
      'Gramática avanzada',
      'El subjuntivo',
      'Usos del subjuntivo',
      'Imperativo',
      'Condicional',
      'Redacción',
      'El ensayo',
      'La argumentación',
      'Literatura española',
      'El Siglo de Oro'
    ],
    'Trimestre 2': [
      'Argumentación',
      'Conectores lógicos',
      'Técnicas argumentativas',
      'Literatura latinoamericana',
      'García Márquez',
      'Realismo mágico',
      'Traducción',
      'Versión',
      'Tema',
      'Técnicas de traducción'
    ],
    'Trimestre 3': [
      'Análisis literario',
      'Comentario de texto',
      'Figuras retóricas',
      'Presentaciones',
      'Expresión oral avanzada',
      'Cultura contemporánea',
      'Cine hispano',
      'Música latina',
      'Arte español',
      'Preparación exámenes'
    ]
  },
  'Espagnol-Terminale A': {
    'Trimestre 1': [
      'Crítica literaria',
      'Análisis crítico',
      'Movimientos literarios',
      'Escritura avanzada',
      'El ensayo académico',
      'Investigación',
      'Cervantes',
      'Don Quijote',
      'La novela picaresca',
      'Literatura del exilio'
    ],
    'Trimestre 2': [
      'Temas contemporáneos',
      'La inmigración',
      'Desigualdades sociales',
      'Ecología',
      'Debate avanzado',
      'Retórica',
      'Poesía',
      'Generación del 27',
      'García Lorca',
      'Poesía contemporánea'
    ],
    'Trimestre 3': [
      'Preparación BAC',
      'Estrategias de examen',
      'Expresión oral',
      'El oral del BAC',
      'Estudios culturales',
      'Hispanoamérica',
      'Identidad cultural',
      'Exámenes blancos',
      'Revisión final',
      'Metodología'
    ]
  },

  'Mathématiques-2nde C': {
    'Trimestre 1': [
      'Ensembles et applications',
      'Ensembles de nombres',
      'Opérations sur les ensembles',
      'Applications',
      'Injection, surjection, bijection',
      'Nombres et calculs',
      'Calcul numérique',
      'Puissances',
      'Racines carrées',
      'Valeur absolue'
    ],
    'Trimestre 2': [
      'Fonctions numériques',
      'Généralités sur les fonctions',
      'Fonctions de référence',
      'Fonction affine',
      'Fonction carré',
      'Fonction inverse',
      'Géométrie analytique',
      'Repère du plan',
      'Équations de droites',
      'Systèmes d\'équations'
    ],
    'Trimestre 3': [
      'Statistiques',
      'Paramètres de position',
      'Paramètres de dispersion',
      'Représentations graphiques',
      'Vecteurs',
      'Opérations sur les vecteurs',
      'Colinéarité',
      'Coordonnées',
      'Géométrie vectorielle',
      'Applications'
    ]
  },
  'Mathématiques-1ère C': {
    'Trimestre 1': [
      'Nombres complexes',
      'Forme algébrique',
      'Opérations',
      'Conjugué',
      'Module',
      'Forme trigonométrique',
      'Suites numériques',
      'Suites arithmétiques',
      'Suites géométriques',
      'Limite d\'une suite'
    ],
    'Trimestre 2': [
      'Fonctions et limites',
      'Limite d\'une fonction',
      'Limites et opérations',
      'Asymptotes',
      'Continuité',
      'Dérivées',
      'Dérivées usuelles',
      'Opérations sur les dérivées',
      'Étude de fonctions',
      'Théorème des valeurs intermédiaires'
    ],
    'Trimestre 3': [
      'Probabilités',
      'Dénombrement',
      'Combinaisons',
      'Arrangements',
      'Probabilités conditionnelles',
      'Indépendance',
      'Géométrie dans l\'espace',
      'Droites et plans',
      'Orthogonalité',
      'Produit scalaire'
    ]
  },
  'Mathématiques-Terminale C': {
    'Trimestre 1': [
      'Fonctions exponentielles et logarithmes',
      'Fonction exponentielle',
      'Propriétés',
      'Dérivée',
      'Fonction logarithme népérien',
      'Propriétés algébriques',
      'Primitives et intégrales',
      'Primitives usuelles',
      'Intégrale définie',
      'Calcul d\'aires'
    ],
    'Trimestre 2': [
      'Équations différentielles',
      'Équations du premier ordre',
      'Équations linéaires',
      'Solutions générales',
      'Solutions particulières',
      'Nombres complexes avancés',
      'Forme exponentielle',
      'Formule de Moivre',
      'Racines n-ièmes',
      'Applications géométriques'
    ],
    'Trimestre 3': [
      'Calcul intégral',
      'Intégration par parties',
      'Changement de variable',
      'Calcul d\'aires',
      'Calcul de volumes',
      'Probabilités continues',
      'Loi normale',
      'Loi exponentielle',
      'Préparation BAC',
      'Problèmes de synthèse'
    ]
  },
'Physique-Chimie-2nde C': {
    'Trimestre 1': [
      'Mécanique : cinématique',
      'Le mouvement',
      'Trajectoire',
      'Vitesse moyenne',
      'Vitesse instantanée',
      'Mouvement rectiligne uniforme',
      'Mouvement rectiligne uniformément varié',
      'Électricité : circuits',
      'Loi d\'Ohm',
      'Résistances en série et en dérivation'
    ],
    'Trimestre 2': [
      'Optique géométrique',
      'Propagation de la lumière',
      'Réflexion',
      'Lois de la réflexion',
      'Miroirs plans',
      'Réfraction',
      'Lois de Snell-Descartes',
      'Chimie : atome et molécule',
      'Structure de l\'atome',
      'Configuration électronique'
    ],
    'Trimestre 3': [
      'Forces et mouvement',
      'Les forces',
      'Principe d\'inertie',
      'Centre de gravité',
      'Équilibre d\'un solide',
      'Réactions chimiques',
      'Équation de réaction',
      'Conservation de la masse',
      'Bilan de matière',
      'Stœchiométrie'
    ]
  },
  'Physique-Chimie-1ère C': {
    'Trimestre 1': [
      'Dynamique : lois de Newton',
      'Première loi de Newton',
      'Deuxième loi de Newton',
      'Troisième loi de Newton',
      'Applications',
      'Mouvement dans un champ de pesanteur',
      'Électromagnétisme',
      'Champ magnétique',
      'Force de Laplace',
      'Loi de Lenz'
    ],
    'Trimestre 2': [
      'Thermodynamique',
      'Température et chaleur',
      'Transferts thermiques',
      'Premier principe',
      'Travail et énergie interne',
      'Transformations',
      'Chimie organique',
      'Hydrocarbures',
      'Alcanes',
      'Alcènes'
    ],
    'Trimestre 3': [
      'Optique ondulatoire',
      'Nature ondulatoire de la lumière',
      'Interférences',
      'Diffraction',
      'Dispersion',
      'Cinétique chimique',
      'Vitesse de réaction',
      'Facteurs cinétiques',
      'Catalyse',
      'Mécanismes réactionnels'
    ]
  },
  'Physique-Chimie-Terminale C': {
    'Trimestre 1': [
      'Mécanique du solide',
      'Moment d\'une force',
      'Théorème du moment cinétique',
      'Rotation d\'un solide',
      'Énergie cinétique de rotation',
      'Pendule simple',
      'Électricité avancée',
      'Dipôles RC',
      'Dipôles RL',
      'Oscillations électriques'
    ],
    'Trimestre 2': [
      'Ondes et vibrations',
      'Ondes mécaniques',
      'Ondes progressives',
      'Ondes stationnaires',
      'Ondes sonores',
      'Effet Doppler',
      'Chimie : acides et bases',
      'pH et pKa',
      'Couples acide-base',
      'Titrages acido-basiques'
    ],
    'Trimestre 3': [
      'Physique nucléaire',
      'Radioactivité',
      'Lois de conservation',
      'Décroissance radioactive',
      'Réactions nucléaires',
      'Chimie organique avancée',
      'Fonctions organiques',
      'Réactions en chimie organique',
      'Mécanismes',
      'Préparation BAC'
    ]
  },
  'SVT-2nde C': {
    'Trimestre 1': [
      'La cellule',
      'La théorie cellulaire',
      'La cellule eucaryote',
      'La cellule procaryote',
      'Les organites cellulaires',
      'Le noyau',
      'Les mitochondries',
      'Organisation du vivant',
      'Niveaux d\'organisation',
      'Unicellulaires et pluricellulaires'
    ],
    'Trimestre 2': [
      'Nutrition et métabolisme',
      'La nutrition cellulaire',
      'Le métabolisme',
      'Anabolisme',
      'Catabolisme',
      'Les enzymes',
      'Génétique de base',
      'L\'ADN',
      'Les chromosomes',
      'Les gènes'
    ],
    'Trimestre 3': [
      'Écologie',
      'Les écosystèmes',
      'Flux de matière',
      'Flux d\'énergie',
      'Cycles biogéochimiques',
      'Géologie',
      'Structure de la Terre',
      'Les roches',
      'Le cycle des roches',
      'Tectonique des plaques (introduction)'
    ]
  },
  'SVT-1ère C': {
    'Trimestre 1': [
      'Génétique moléculaire',
      'Structure de l\'ADN',
      'Réplication de l\'ADN',
      'Transcription',
      'Traduction',
      'Code génétique',
      'Mutations',
      'Physiologie animale',
      'La digestion',
      'L\'absorption'
    ],
    'Trimestre 2': [
      'Évolution',
      'Théories de l\'évolution',
      'Sélection naturelle',
      'Dérive génétique',
      'Spéciation',
      'Immunologie',
      'Le système immunitaire',
      'Immunité innée',
      'Immunité adaptative',
      'Réponse immunitaire'
    ],
    'Trimestre 3': [
      'Géologie : tectonique',
      'Structure interne de la Terre',
      'La lithosphère',
      'Les plaques tectoniques',
      'Les limites de plaques',
      'Dorsales océaniques',
      'Zones de subduction',
      'Écosystèmes',
      'Dynamique des populations',
      'Relations interspécifiques'
    ]
  },
  'SVT-Terminale C': {
    'Trimestre 1': [
      'Génétique des populations',
      'Fréquences alléliques',
      'Loi de Hardy-Weinberg',
      'Facteurs d\'évolution',
      'Migration',
      'Sélection',
      'Biologie cellulaire avancée',
      'Le cycle cellulaire',
      'Mitose',
      'Méiose'
    ],
    'Trimestre 2': [
      'Neurobiologie',
      'Le neurone',
      'Le potentiel d\'action',
      'La synapse',
      'Neurotransmetteurs',
      'Systèmes nerveux',
      'Géologie : magmatisme',
      'Formation des magmas',
      'Types de magmas',
      'Roches magmatiques'
    ],
    'Trimestre 3': [
      'Biotechnologies',
      'Génie génétique',
      'OGM',
      'Clonage',
      'PCR',
      'Séquençage',
      'Enjeux environnementaux',
      'Biodiversité et conservation',
      'Changements climatiques',
      'Préparation BAC'
    ]
  },
'Français-2nde C': {
    'Trimestre 1': [
      'Le roman et le récit',
      'Le récit du XIXe siècle',
      'Balzac',
      'Stendhal',
      'Le réalisme',
      'Grammaire avancée',
      'Analyse de la phrase complexe',
      'Les propositions',
      'Les fonctions',
      'Lecture analytique'
    ],
    'Trimestre 2': [
      'La poésie',
      'Poésie du XIXe siècle',
      'Le romantisme',
      'Le symbolisme',
      'Baudelaire',
      'L\'argumentation',
      'Thèse et arguments',
      'Convaincre et persuader',
      'Les procédés',
      'La dissertation'
    ],
    'Trimestre 3': [
      'Le théâtre',
      'Théâtre classique',
      'Racine',
      'Molière',
      'Théâtre moderne',
      'Dissertation',
      'Méthodologie',
      'Plan dialectique',
      'Plan thématique',
      'Expression écrite'
    ]
  },
  'Français-1ère C': {
    'Trimestre 1': [
      'Le roman du XIXe siècle',
      'Flaubert : Madame Bovary',
      'Le réalisme',
      'Le naturalisme',
      'Zola',
      'Commentaire composé',
      'Axes d\'analyse',
      'Introduction',
      'Développement',
      'Conclusion'
    ],
    'Trimestre 2': [
      'La poésie moderne',
      'Apollinaire',
      'Le surréalisme',
      'Éluard',
      'L\'essai',
      'Montaigne',
      'Les Essais',
      'Argumentation directe',
      'Dissertation littéraire',
      'Problématique'
    ],
    'Trimestre 3': [
      'Le théâtre contemporain',
      'Ionesco',
      'Beckett',
      'Le théâtre de l\'absurde',
      'Techniques d\'écriture',
      'Le commentaire',
      'La dissertation',
      'L\'écriture d\'invention',
      'Préparation aux épreuves',
      'Méthodologie complète'
    ]
  },
  'Philosophie-1ère C': {
    'Trimestre 1': [
      'Introduction à la philosophie',
      'Qu\'est-ce que philosopher ?',
      'Les grands philosophes',
      'Socrate',
      'Platon',
      'Aristote',
      'La conscience',
      'Conscience et inconscient',
      'Descartes',
      'Freud'
    ],
    'Trimestre 2': [
      'La perception',
      'Les sens et la connaissance',
      'L\'illusion',
      'La vérité perceptive',
      'Autrui',
      'La reconnaissance',
      'Le regard d\'autrui',
      'Sartre',
      'L\'altérité',
      'Être-pour-autrui'
    ],
    'Trimestre 3': [
      'Le désir',
      'Désir et besoin',
      'Platon : le mythe de la caverne',
      'Spinoza',
      'L\'existence',
      'Être et existence',
      'Heidegger',
      'Sartre : l\'existentialisme',
      'Dissertation',
      'Méthodologie'
    ]
  },
  'Philosophie-Terminale C': {
    'Trimestre 1': [
      'La vérité',
      'Vérité et opinion',
      'Les critères de vérité',
      'La science et la vérité',
      'La raison et le réel',
      'Rationalisme',
      'Empirisme',
      'Kant',
      'Théorie et expérience',
      'La démonstration'
    ],
    'Trimestre 2': [
      'La morale',
      'Les fondements de la morale',
      'Kant : l\'impératif catégorique',
      'L\'utilitarisme',
      'La liberté',
      'Déterminisme et libre arbitre',
      'Sartre : liberté et responsabilité',
      'Le devoir',
      'Obligation morale',
      'Conscience morale'
    ],
    'Trimestre 3': [
      'La politique',
      'L\'État',
      'Le contrat social',
      'Hobbes',
      'Rousseau',
      'La démocratie',
      'Justice et droit',
      'Préparation intensive au BAC',
      'Révision des notions',
      'Dissertations types'
    ]
  },
  'Anglais-2nde C': {
    'Trimestre 1': [
      'Grammar review',
      'Tenses overview',
      'Present perfect',
      'Past perfect',
      'Future forms',
      'Reading comprehension',
      'Scientific texts',
      'Technical vocabulary',
      'Vocabulary expansion',
      'Academic vocabulary'
    ],
    'Trimestre 2': [
      'Writing skills',
      'Essay writing',
      'Scientific reports',
      'Description of experiments',
      'Oral expression',
      'Presentations',
      'Scientific debates',
      'Literature introduction',
      'Short stories',
      'Science fiction'
    ],
    'Trimestre 3': [
      'Advanced reading',
      'Analyzing texts',
      'Critical reading',
      'Inferencing',
      'Debate and discussion',
      'Expressing opinions',
      'Scientific controversies',
      'Technology vocabulary',
      'Innovation',
      'Discoveries'
    ]
  },
  'Anglais-1ère C': {
    'Trimestre 1': [
      'Advanced grammar',
      'Complex sentences',
      'Relative clauses',
      'Passive voice',
      'Essay writing',
      'Argumentative essays',
      'Research papers',
      'British literature',
      'Victorian era',
      'Scientific revolution'
    ],
    'Trimestre 2': [
      'Scientific English',
      'Technical vocabulary',
      'Reading scientific articles',
      'Abstract writing',
      'Debate and discussion',
      'Scientific ethics',
      'Environmental issues',
      'Translation',
      'Technical translation',
      'Version and thème'
    ],
    'Trimestre 3': [
      'American literature',
      'Science fiction',
      'Isaac Asimov',
      'Arthur C. Clarke',
      'Presentation skills',
      'Scientific presentations',
      'Critical thinking',
      'Analyzing data',
      'Statistics',
      'Graphs and charts'
    ]
  },
  'Anglais-Terminale C': {
    'Trimestre 1': [
      'Literary analysis',
      'Science in literature',
      'Frankenstein',
      'Brave New World',
      'Advanced writing',
      'Scientific papers',
      'Literature review',
      'Research methodology',
      'Citations',
      'References'
    ],
    'Trimestre 2': [
      'Contemporary issues',
      'Biotechnology',
      'Artificial intelligence',
      'Climate change',
      'Debate preparation',
      'Advanced argumentation',
      'Refutation',
      'Public speaking',
      'Scientific conferences',
      'Poster presentations'
    ],
    'Trimestre 3': [
      'BAC preparation',
      'Exam strategies',
      'Scientific texts',
      'Technical vocabulary review',
      'Oral exam',
      'Presenting research',
      'Mock exams',
      'Time management',
      'Final revision',
      'Success strategies'
    ]
  },

  'Mathématiques-2nde D': {
    'Trimestre 1': [
      'Ensembles et applications',
      'Ensembles de nombres',
      'Opérations ensemblistes',
      'Applications',
      'Injections et surjections',
      'Nombres et calculs',
      'Calcul algébrique',
      'Puissances',
      'Radicaux',
      'Valeur absolue'
    ],
    'Trimestre 2': [
      'Fonctions numériques',
      'Définition et généralités',
      'Domaine de définition',
      'Image',
      'Fonctions de référence',
      'Fonction affine',
      'Géométrie analytique',
      'Repérage dans le plan',
      'Équations de droites',
      'Systèmes linéaires'
    ],
    'Trimestre 3': [
      'Statistiques',
      'Séries statistiques',
      'Paramètres de position',
      'Paramètres de dispersion',
      'Vecteurs',
      'Définition',
      'Opérations',
      'Coordonnées',
      'Colinéarité',
      'Applications géométriques'
    ]
  },
  'Mathématiques-1ère D': {
    'Trimestre 1': [
      'Nombres complexes',
      'Forme algébrique',
      'Opérations',
      'Conjugué et module',
      'Forme trigonométrique',
      'Argument',
      'Suites numériques',
      'Suites arithmétiques',
      'Suites géométriques',
      'Limite'
    ],
    'Trimestre 2': [
      'Fonctions et limites',
      'Limite d\'une fonction',
      'Continuité',
      'Asymptotes',
      'Dérivées',
      'Dérivées usuelles',
      'Dérivées composées',
      'Étude de fonctions',
      'Variations',
      'Extremums'
    ],
    'Trimestre 3': [
      'Probabilités',
      'Dénombrement',
      'Arrangements',
      'Combinaisons',
      'Probabilités',
      'Probabilités conditionnelles',
      'Géométrie dans l\'espace',
      'Droites et plans',
      'Vecteurs de l\'espace',
      'Produit scalaire'
    ]
  },
  'Mathématiques-Terminale D': {
    'Trimestre 1': [
      'Fonctions exponentielles et logarithmes',
      'Fonction exponentielle',
      'Propriétés',
      'Dérivée',
      'Fonction logarithme népérien',
      'Propriétés du logarithme',
      'Primitives et intégrales',
      'Primitives usuelles',
      'Calcul intégral',
      'Applications'
    ],
    'Trimestre 2': [
      'Équations différentielles',
      'Équations du premier ordre',
      'Équations linéaires',
      'Solutions',
      'Nombres complexes avancés',
      'Forme exponentielle',
      'Formules d\'Euler',
      'Applications',
      'Racines n-ièmes',
      'Résolution d\'équations'
    ],
    'Trimestre 3': [
      'Calcul intégral',
      'Intégration par parties',
      'Changement de variable',
      'Calcul d\'aires',
      'Probabilités continues',
      'Variables aléatoires continues',
      'Loi normale',
      'Loi exponentielle',
      'Préparation BAC',
      'Exercices de synthèse'
    ]
  },
'Physique-Chimie-2nde D': {
    'Trimestre 1': [
      'Mécanique : cinématique',
      'Position et trajectoire',
      'Vitesse',
      'Accélération',
      'Mouvements rectilignes',
      'Mouvements circulaires',
      'Électricité : circuits',
      'Circuits en série',
      'Circuits en dérivation',
      'Loi d\'Ohm'
    ],
    'Trimestre 2': [
      'Optique géométrique',
      'Propagation rectiligne',
      'Réflexion',
      'Miroirs',
      'Réfraction',
      'Lois de Snell-Descartes',
      'Chimie : atome et molécule',
      'Structure atomique',
      'Tableau périodique',
      'Liaisons chimiques'
    ],
    'Trimestre 3': [
      'Forces et mouvement',
      'Les forces',
      'Principe d\'inertie',
      'Centre de gravité',
      'Équilibre',
      'Réactions chimiques',
      'Équation-bilan',
      'Conservation',
      'Stœchiométrie',
      'Réactions acido-basiques'
    ]
  },
  'Physique-Chimie-1ère D': {
    'Trimestre 1': [
      'Dynamique : lois de Newton',
      'Première loi',
      'Deuxième loi',
      'Troisième loi',
      'Applications',
      'Chute libre',
      'Électromagnétisme',
      'Champ magnétique',
      'Force de Laplace',
      'Induction'
    ],
    'Trimestre 2': [
      'Thermodynamique',
      'Température',
      'Chaleur',
      'Premier principe',
      'Transformations',
      'Machines thermiques',
      'Chimie organique',
      'Hydrocarbures',
      'Nomenclature',
      'Réactions'
    ],
    'Trimestre 3': [
      'Optique ondulatoire',
      'Nature ondulatoire',
      'Interférences',
      'Diffraction',
      'Cinétique chimique',
      'Vitesse de réaction',
      'Facteurs cinétiques',
      'Catalyse',
      'Mécanismes',
      'Équilibre chimique'
    ]
  },
  'Physique-Chimie-Terminale D': {
    'Trimestre 1': [
      'Mécanique du solide',
      'Moment d\'une force',
      'Moment cinétique',
      'Rotation',
      'Pendule',
      'Électricité avancée',
      'Circuits RC',
      'Circuits RL',
      'Oscillations',
      'Circuit RLC'
    ],
    'Trimestre 2': [
      'Ondes et vibrations',
      'Ondes mécaniques',
      'Ondes progressives',
      'Ondes stationnaires',
      'Ondes sonores',
      'Chimie : acides et bases',
      'pH',
      'pKa',
      'Titrages',
      'Indicateurs colorés'
    ],
    'Trimestre 3': [
      'Physique nucléaire',
      'Noyau atomique',
      'Radioactivité',
      'Lois de conservation',
      'Énergie nucléaire',
      'Chimie organique avancée',
      'Fonctions organiques',
      'Réactivité',
      'Synthèses',
      'Préparation BAC'
    ]
  },
  'SVT-2nde D': {
    'Trimestre 1': [
      'La cellule',
      'Cellule eucaryote',
      'Cellule procaryote',
      'Organites',
      'Membrane plasmique',
      'Organisation du vivant',
      'Niveaux d\'organisation',
      'Tissus',
      'Organes',
      'Systèmes'
    ],
    'Trimestre 2': [
      'Nutrition et métabolisme',
      'Nutrition cellulaire',
      'Métabolisme',
      'Respiration cellulaire',
      'Photosynthèse',
      'Génétique de base',
      'ADN',
      'Gènes',
      'Chromosomes',
      'Caryotype'
    ],
    'Trimestre 3': [
      'Écologie',
      'Écosystèmes',
      'Chaînes alimentaires',
      'Réseaux trophiques',
      'Cycles',
      'Géologie',
      'Structure terrestre',
      'Roches',
      'Minéraux',
      'Tectonique'
    ]
  },
  'SVT-1ère D': {
    'Trimestre 1': [
      'Génétique moléculaire',
      'Structure ADN',
      'Réplication',
      'Transcription',
      'Traduction',
      'Code génétique',
      'Physiologie animale',
      'Digestion',
      'Circulation',
      'Respiration'
    ],
    'Trimestre 2': [
      'Évolution',
      'Théories',
      'Sélection naturelle',
      'Adaptation',
      'Spéciation',
      'Immunologie',
      'Système immunitaire',
      'Immunité innée',
      'Immunité acquise',
      'Vaccins'
    ],
    'Trimestre 3': [
      'Géologie : tectonique',
      'Structure interne Terre',
      'Plaques lithosphériques',
      'Limites de plaques',
      'Séismes',
      'Volcans',
      'Écosystèmes',
      'Dynamique',
      'Successions écologiques',
      'Biodiversité'
    ]
  },
  'SVT-Terminale D': {
    'Trimestre 1': [
      'Génétique des populations',
      'Fréquences alléliques',
      'Hardy-Weinberg',
      'Dérive génétique',
      'Sélection',
      'Migration',
      'Biologie cellulaire avancée',
      'Cycle cellulaire',
      'Mitose',
      'Méiose'
    ],
    'Trimestre 2': [
      'Neurobiologie',
      'Neurone',
      'Potentiel d\'action',
      'Synapse',
      'Neurotransmetteurs',
      'Systèmes nerveux',
      'Géologie : magmatisme',
      'Formation magmas',
      'Types de magmas',
      'Roches magmatiques'
    ],
    'Trimestre 3': [
      'Biotechnologies',
      'Génie génétique',
      'OGM',
      'Clonage',
      'Applications',
      'Enjeux environnementaux',
      'Conservation',
      'Changements climatiques',
      'Développement durable',
      'Préparation BAC'
    ]
  },
  'Français-2nde D': {
    'Trimestre 1': [
      'Le roman et le récit',
      'Le réalisme',
      'Le naturalisme',
      'Auteurs du XIXe',
      'Analyse narrative',
      'Grammaire avancée',
      'Phrase complexe',
      'Propositions',
      'Fonctions',
      'Méthodologie'
    ],
    'Trimestre 2': [
      'La poésie',
      'Romantisme',
      'Symbolisme',
      'Versification',
      'Figures de style',
      'L\'argumentation',
      'Convaincre',
      'Persuader',
      'Procédés',
      'Dissertation'
    ],
    'Trimestre 3': [
      'Le théâtre',
      'Théâtre classique',
      'Tragédie',
      'Comédie',
      'Mise en scène',
      'Dissertation',
      'Plans',
      'Développement',
      'Expression écrite',
      'Commentaire'
    ]
  },
  'Français-1ère D': {
    'Trimestre 1': [
      'Le roman du XIXe siècle',
      'Madame Bovary',
      'Techniques narratives',
      'Personnages',
      'Commentaire composé',
      'Axes',
      'Introduction',
      'Développement',
      'Conclusion',
      'Transitions'
    ],
    'Trimestre 2': [
      'La poésie moderne',
      'Apollinaire',
      'Surréalisme',
      'Analyse poétique',
      'L\'essai',
      'Montaigne',
      'Argumentation',
      'Dissertation',
      'Problématique',
      'Plan'
    ],
    'Trimestre 3': [
      'Le théâtre contemporain',
      'Absurde',
      'Ionesco',
      'Beckett',
      'Techniques d\'écriture',
      'Commentaire',
      'Dissertation',
      'Invention',
      'Préparation épreuves',
      'Méthodologie'
    ]
  },
  'Philosophie-1ère D': {
    'Trimestre 1': [
      'Introduction à la philosophie',
      'Philosopher',
      'Grands philosophes',
      'Antiquité',
      'Modernité',
      'La conscience',
      'Conscience de soi',
      'Inconscient',
      'Descartes',
      'Freud'
    ],
    'Trimestre 2': [
      'La perception',
      'Sens et connaissance',
      'Illusion',
      'Vérité perceptive',
      'Autrui',
      'Reconnaissance',
      'Regard d\'autrui',
      'Intersubjectivité',
      'Sartre',
      'Levinas'
    ],
    'Trimestre 3': [
      'Le désir',
      'Désir et besoin',
      'Manque',
      'Satisfaction',
      'L\'existence',
      'Être',
      'Essence',
      'Existentialisme',
      'Dissertation',
      'Méthodologie'
    ]
  },
  'Philosophie-Terminale D': {
    'Trimestre 1': [
      'La vérité',
      'Vérité et opinion',
      'Science et vérité',
      'Critères',
      'La raison et le réel',
      'Rationalisme',
      'Empirisme',
      'Kant',
      'Théorie et expérience',
      'Démonstration'
    ],
    'Trimestre 2': [
      'La morale',
      'Fondements',
      'Kant',
      'Utilitarisme',
      'La liberté',
      'Libre arbitre',
      'Déterminisme',
      'Sartre',
      'Le devoir',
      'Obligation'
    ],
    'Trimestre 3': [
      'La politique',
      'L\'État',
      'Contrat social',
      'Hobbes',
      'Rousseau',
      'Démocratie',
      'Justice',
      'Préparation BAC',
      'Révisions',
      'Dissertations'
    ]
  },
  'Anglais-2nde D': {
    'Trimestre 1': [
      'Grammar review',
      'All tenses',
      'Perfect tenses',
      'Future forms',
      'Reading comprehension',
      'Scientific texts',
      'Vocabulary',
      'Academic words',
      'Technical terms',
      'Word formation'
    ],
      'Trimestre 2': [
      'Writing skills',
    'Essays',
'Reports',
'Descriptions',
'Oral expression',
'Presentations',
'Debates',
'Literature',
'Short stories',
'Poetry'
],
'Trimestre 3': [
'Advanced reading',
'Text analysis',
'Critical reading',
'Discussion',
'Opinions',
'Arguments',
'Technology',
'Science',
'Environment',
'Society'
]
},
'Anglais-1ère D': {
'Trimestre 1': [
'Advanced grammar',
'Complex structures',
'Conditionals',
'Modals',
'Essay writing',
'Structure',
'Argumentation',
'British literature',
'Victorian',
'Modern'
],
'Trimestre 2': [
'Scientific English',
'Vocabulary',
'Reading articles',
'Writing abstracts',
'Debate',
'Ethics',
'Environment',
'Translation',
'Technical',
'Academic'
],
'Trimestre 3': [
'American literature',
'Science fiction',
'Contemporary',
'Presentations',
'Scientific',
'Critical thinking',
'Analysis',
'Data',
'Graphs',
'Statistics'
]
},
'Anglais-Terminale D': {
'Trimestre 1': [
'Literary analysis',
'Science themes',
'Classic sci-fi',
'Modern sci-fi',
'Advanced writing',
'Research papers',
'Methodology',
'Citations',
'References',
'Academic style'
],
'Trimestre 2': [
'Contemporary issues',
'Biotechnology',
'AI',
'Climate',
'Debate',
'Argumentation',
'Refutation',
'Public speaking',
'Conferences',
'Posters'
],
'Trimestre 3': [
'BAC preparation',
'Strategies',
'Scientific texts',
'Vocabulary review',
'Oral exam',
'Presentation',
'Mock exams',
'Time management',
'Revision',
'Success tips'
]
},
'Mathématiques-2nde F1': {
    'Trimestre 1': [
      'Calcul numérique et algébrique',
      'Opérations sur les nombres',
      'Fractions',
      'Puissances',
      'Racines carrées',
      'Calcul littéral',
      'Identités remarquables',
      'Fonctions linéaires',
      'Représentation graphique',
      'Applications techniques'
    ],
    'Trimestre 2': [
      'Géométrie plane',
      'Figures géométriques',
      'Triangles',
      'Quadrilatères',
      'Cercle',
      'Trigonométrie',
      'Cosinus, sinus, tangente',
      'Résolution de triangles',
      'Applications en mécanique',
      'Calculs d\'angles'
    ],
    'Trimestre 3': [
      'Statistiques',
      'Séries statistiques',
      'Moyenne, médiane',
      'Représentations graphiques',
      'Vecteurs',
      'Définition',
      'Opérations',
      'Applications en mécanique',
      'Forces',
      'Résultante'
    ]
  },
  'Mathématiques-1ère F1': {
    'Trimestre 1': [
      'Suites numériques',
      'Suites arithmétiques',
      'Suites géométriques',
      'Applications',
      'Progressions',
      'Dérivées',
      'Nombre dérivé',
      'Fonction dérivée',
      'Applications cinématiques',
      'Vitesse et accélération'
    ],
    'Trimestre 2': [
      'Fonctions polynômes',
      'Fonction du second degré',
      'Équations',
      'Factorisation',
      'Résolution graphique',
      'Probabilités',
      'Dénombrement',
      'Calcul de probabilités',
      'Applications',
      'Fiabilité'
    ],
    'Trimestre 3': [
      'Géométrie dans l\'espace',
      'Droites et plans',
      'Positions relatives',
      'Volumes',
      'Équations différentielles simples',
      'Équations du premier ordre',
      'Résolution',
      'Applications mécaniques',
      'Mouvement',
      'Oscillations'
    ]
  },
  'Mathématiques-Terminale F1': {
    'Trimestre 1': [
      'Calcul intégral',
      'Primitives',
      'Intégrales',
      'Calcul d\'aires',
      'Applications',
      'Nombres complexes',
      'Forme algébrique',
      'Forme trigonométrique',
      'Applications en électricité',
      'Impédance'
    ],
    'Trimestre 2': [
      'Équations différentielles',
      'Équations linéaires',
      'Solutions',
      'Applications mécaniques',
      'Oscillateurs',
      'Statistiques avancées',
      'Séries doubles',
      'Corrélation',
      'Régression linéaire',
      'Ajustement affine'
    ],
    'Trimestre 3': [
      'Mathématiques appliquées',
      'Calculs techniques',
      'Résistance des matériaux',
      'Calculs de structures',
      'Dimensionnement',
      'Préparation BAC',
      'Exercices types',
      'Problèmes de synthèse',
      'Applications industrielles',
      'Projets techniques'
    ]
  },
  'Physique-2nde F1': {
    'Trimestre 1': [
      'Mécanique : forces et mouvements',
      'Les forces',
      'Représentation vectorielle',
      'Composition de forces',
      'Résultante',
      'Statique',
      'Équilibre d\'un solide',
      'Moment d\'une force',
      'Théorème des moments',
      'Applications pratiques'
    ],
    'Trimestre 2': [
      'Dynamique',
      'Principe fondamental',
      'Lois de Newton',
      'Mouvement rectiligne',
      'Chute libre',
      'Travail et énergie',
      'Travail d\'une force',
      'Énergie cinétique',
      'Énergie potentielle',
      'Conservation de l\'énergie'
    ],
    'Trimestre 3': [
      'Électricité : circuits DC',
      'Courant continu',
      'Loi d\'Ohm',
      'Résistances',
      'Associations de résistances',
      'Lois de Kirchhoff',
      'Puissance électrique',
      'Effet Joule',
      'Rendement',
      'Applications industrielles'
    ]
  },
  'Physique-1ère F1': {
    'Trimestre 1': [
      'Cinématique',
      'Mouvement rectiligne',
      'Mouvement circulaire',
      'Vitesse angulaire',
      'Accélération',
      'Lois de Newton',
      'Dynamique du point',
      'Frottement',
      'Plan incliné',
      'Applications mécaniques'
    ],
    'Trimestre 2': [
      'Électromagnétisme',
      'Champ magnétique',
      'Force de Laplace',
      'Induction électromagnétique',
      'Loi de Lenz',
      'Circuits AC',
      'Courant alternatif',
      'Valeur efficace',
      'Déphasage',
      'Puissance en AC'
    ],
    'Trimestre 3': [
      'Thermodynamique',
      'Température et chaleur',
      'Transferts thermiques',
      'Dilatation',
      'Premier principe',
      'Optique géométrique',
      'Lentilles',
      'Formation d\'images',
      'Instruments optiques',
      'Applications'
    ]
  },
  'Physique-Terminale F1': {
    'Trimestre 1': [
      'Mécanique des fluides',
      'Hydrostatique',
      'Pression',
      'Principe d\'Archimède',
      'Hydrodynamique',
      'Équation de Bernoulli',
      'Électricité industrielle',
      'Transformateurs',
      'Redressement',
      'Moteurs électriques'
    ],
    'Trimestre 2': [
      'Ondes',
      'Ondes mécaniques',
      'Propagation',
      'Ondes sonores',
      'Acoustique',
      'Machines électriques',
      'Moteurs',
      'Génératrices',
      'Rendement',
      'Maintenance'
    ],
    'Trimestre 3': [
      'Automatismes',
      'Systèmes automatisés',
      'Capteurs',
      'Actionneurs',
      'Régulation',
      'Préparation BAC',
      'Exercices appliqués',
      'Études de cas',
      'Projets techniques',
      'Dossier professionnel'
    ]
  },
'Technologie-2nde F1': {
    'Trimestre 1': [
      'Initiation aux systèmes mécaniques',
      'Les machines simples',
      'Leviers',
      'Poulies',
      'Plans inclinés',
      'Outils et mesures',
      'Instruments de mesure',
      'Pied à coulisse',
      'Micromètre',
      'Lectures de mesures'
    ],
    'Trimestre 2': [
      'Matériaux et leurs propriétés',
      'Matériaux métalliques',
      'Aciers',
      'Alliages',
      'Propriétés mécaniques',
      'Procédés de fabrication',
      'Moulage',
      'Forgeage',
      'Usinage',
      'Soudage'
    ],
    'Trimestre 3': [
      'Dessin technique de base',
      'Normes de dessin',
      'Traits',
      'Échelles',
      'Vues',
      'Sécurité en atelier',
      'Règles de sécurité',
      'EPI',
      'Prévention des risques',
      'Premiers secours'
    ]
  },
  'Technologie-1ère F1': {
    'Trimestre 1': [
      'Systèmes mécaniques avancés',
      'Transmission de mouvement',
      'Engrenages',
      'Courroies',
      'Chaînes',
      'Résistance des matériaux',
      'Contraintes',
      'Déformations',
      'Traction',
      'Compression'
    ],
    'Trimestre 2': [
      'Machines-outils',
      'Tour',
      'Fraiseuse',
      'Perceuse',
      'Rectifieuse',
      'CAO introduction',
      'Logiciels de DAO',
      'Modélisation 2D',
      'Cotation',
      'Mise en plan'
    ],
    'Trimestre 3': [
      'Maintenance industrielle',
      'Maintenance préventive',
      'Maintenance corrective',
      'Diagnostic de pannes',
      'Automatisation',
      'Vérins pneumatiques',
      'Électrovannes',
      'Circuits pneumatiques',
      'Grafcet',
      'Programmation'
    ]
  },
  'Technologie-Terminale F1': {
    'Trimestre 1': [
      'Conception mécanique',
      'Cahier des charges',
      'Analyse fonctionnelle',
      'Solutions constructives',
      'Choix des matériaux',
      'Étude de fabrication',
      'Gamme de fabrication',
      'Temps de fabrication',
      'Coûts',
      'Optimisation'
    ],
    'Trimestre 2': [
      'Systèmes automatisés',
      'Automates programmables',
      'Capteurs industriels',
      'Actionneurs',
      'Supervision',
      'Gestion de production',
      'Ordonnancement',
      'Planning',
      'Stocks',
      'Qualité'
    ],
    'Trimestre 3': [
      'Projet technique',
      'Définition du projet',
      'Étude préliminaire',
      'Conception',
      'Réalisation',
      'Tests',
      'Préparation BAC',
      'Dossier technique',
      'Soutenance',
      'Présentation orale'
    ]
  },
  'Dessin Technique-2nde F1': {
    'Trimestre 1': [
      'Normes de dessin',
      'Format des feuilles',
      'Cartouche',
      'Échelles normalisées',
      'Traits',
      'Projections orthogonales',
      'Vue de face',
      'Vue de dessus',
      'Vue de gauche',
      'Correspondance des vues'
    ],
    'Trimestre 2': [
      'Coupes et sections',
      'Plans de coupe',
      'Coupes simples',
      'Demi-coupes',
      'Sections',
      'Cotation',
      'Cotation linéaire',
      'Cotation angulaire',
      'Cotation de diamètres',
      'Cotation fonctionnelle'
    ],
    'Trimestre 3': [
      'Perspective',
      'Perspective cavalière',
      'Perspective isométrique',
      'Croquis',
      'Lecture de plans',
      'Analyse de plans',
      'Nomenclature',
      'Repérage',
      'Interprétation',
      'Réalisation de croquis'
    ]
  },
  'Dessin Technique-1ère F1': {
    'Trimestre 1': [
      'Dessin d\'ensemble',
      'Représentation complète',
      'Assemblages',
      'Liaisons mécaniques',
      'Nomenclature',
      'Dessin de définition',
      'Pièce isolée',
      'Cotation complète',
      'Spécifications',
      'États de surface'
    ],
    'Trimestre 2': [
      'Schémas cinématiques',
      'Symbolisation',
      'Liaisons',
      'Mouvements',
      'Graphe des liaisons',
      'DAO',
      'Logiciels DAO',
      'Dessin assisté',
      'Modification',
      'Bibliothèques'
    ],
    'Trimestre 3': [
      'Tolérances et ajustements',
      'Tolérances dimensionnelles',
      'Ajustements',
      'Système ISO',
      'Choix des ajustements',
      'Plans de montage',
      'Ordre de montage',
      'Instructions',
      'Vue éclatée',
      'Documentation technique'
    ]
  },
  'Dessin Technique-Terminale F1': {
    'Trimestre 1': [
      'CAO avancée',
      'Modélisation 3D',
      'Solides',
      'Assemblages 3D',
      'Contraintes',
      'Modélisation 3D',
      'Surfaces',
      'Volumes',
      'Rendus',
      'Animations'
    ],
    'Trimestre 2': [
      'Plans d\'exécution',
      'Plans de détails',
      'Plans d\'implantation',
      'Plans de fabrication',
      'Nomenclatures',
      'Listes de pièces',
      'Matières premières',
      'Coûts',
      'Approvisionnement'
    ],
    'Trimestre 3': [
      'Dossier technique complet',
      'Analyse fonctionnelle',
      'Dessins d\'ensemble',
      'Dessins de définition',
      'Schémas',
      'Préparation BAC',
      'Constitution du dossier',
      'Présentation',
      'Défense du projet',
      'Méthodologie'
    ]
  },
'Français-2nde F1': {
    'Trimestre 1': [
      'Communication professionnelle',
      'Expression écrite professionnelle',
      'La lettre professionnelle',
      'Le courriel',
      'Compte-rendu technique',
      'Structure',
      'Rédaction',
      'Clarté',
      'Précision',
      'Vocabulaire technique'
    ],
    'Trimestre 2': [
      'Correspondance administrative',
      'Demandes',
      'Réclamations',
      'Réponses',
      'Rapport de stage',
      'Structure du rapport',
      'Introduction',
      'Développement',
      'Conclusion',
      'Présentation'
    ],
    'Trimestre 3': [
      'Expression orale professionnelle',
      'Présentation orale',
      'Exposé technique',
      'Argumentation',
      'Note de synthèse',
      'Analyse de documents',
      'Synthèse',
      'Rédaction',
      'Objectivité',
      'Concision'
    ]
  },
  'Français-1ère F1': {
    'Trimestre 1': [
      'Rédaction technique',
      'Le rapport technique',
      'Analyse',
      'Description',
      'Préconisations',
      'Documentation professionnelle',
      'Notice technique',
      'Mode d\'emploi',
      'Cahier des charges',
      'Spécifications'
    ],
    'Trimestre 2': [
      'Argumentation',
      'Thèse',
      'Arguments',
      'Exemples',
      'Présentation orale',
      'Préparer un exposé',
      'Supports visuels',
      'Expression',
      'Gestuelle',
      'Interaction'
    ],
    'Trimestre 3': [
      'Dossier professionnel',
      'Projet technique',
      'Rédaction',
      'Organisation',
      'Communication en entreprise',
      'Relations professionnelles',
      'Travail en équipe',
      'Réunions',
      'Comptes-rendus',
      'Efficacité'
    ]
  },
  'Français-Terminale F1': {
    'Trimestre 1': [
      'Rapport de projet',
      'Projet de fin d\'études',
      'Méthodologie',
      'Rédaction',
      'Argumentation',
      'Communication technique',
      'Vocabulaire spécialisé',
      'Schémas',
      'Graphiques',
      'Annexes'
    ],
    'Trimestre 2': [
      'Synthèse documentaire',
      'Recherche documentaire',
      'Analyse',
      'Synthèse',
      'Soutenance de projet',
      'Préparation',
      'Diaporama',
      'Oral',
      'Questions',
      'Défense'
    ],
    'Trimestre 3': [
      'Préparation BAC',
      'Résumé de texte',
      'Discussion',
      'Argumentation',
      'Insertion professionnelle',
      'CV',
      'Lettre de motivation',
      'Entretien',
      'Projet professionnel',
      'Orientation'
    ]
  },

  'Mathématiques-2nde F2': {
    'Trimestre 1': [
      'Calcul numérique',
      'Opérations',
      'Fractions',
      'Puissances',
      'Racines',
      'Algèbre de base',
      'Équations',
      'Inéquations',
      'Systèmes',
      'Applications électroniques'
    ],
    'Trimestre 2': [
      'Fonctions',
      'Définition',
      'Représentation graphique',
      'Fonction affine',
      'Applications',
      'Trigonométrie',
      'Cercle trigonométrique',
      'Fonctions circulaires',
      'Déphasage',
      'Signaux sinusoïdaux'
    ],
    'Trimestre 3': [
      'Nombres complexes introduction',
      'Forme algébrique',
      'Opérations',
      'Représentation',
      'Applications en électricité',
      'Vecteurs',
      'Vecteurs de Fresnel',
      'Impédance complexe',
      'Calculs en AC',
      'Diagrammes'
    ]
  },
  'Mathématiques-1ère F2': {
    'Trimestre 1': [
      'Nombres complexes',
      'Forme algébrique',
      'Forme trigonométrique',
      'Module et argument',
      'Applications',
      'Suites',
      'Arithmétiques',
      'Géométriques',
      'Progressions',
      'Applications'
    ],
    'Trimestre 2': [
      'Dérivation',
      'Nombre dérivé',
      'Fonction dérivée',
      'Applications',
      'Étude de signaux',
      'Fonctions exponentielles',
      'Propriétés',
      'Dérivée',
      'Croissance',
      'Décroissance'
    ],
    'Trimestre 3': [
      'Équations différentielles',
      'Premier ordre',
      'Solutions',
      'Applications en électronique',
      'Circuits RC, RL',
      'Probabilités',
      'Calculs',
      'Lois de probabilité',
      'Fiabilité',
      'Composants'
    ]
  },
  'Mathématiques-Terminale F2': {
    'Trimestre 1': [
      'Intégrales',
      'Primitives',
      'Calcul intégral',
      'Applications',
      'Signaux',
      'Transformées',
      'Transformée de Fourier',
      'Transformée de Laplace',
      'Applications',
      'Filtrage'
    ],
    'Trimestre 2': [
      'Mathématiques pour l\'électronique',
      'Calculs d\'impédances',
      'Fonction de transfert',
      'Diagrammes de Bode',
      'Résonance',
      'Statistiques',
      'Séries statistiques',
      'Ajustement',
      'Corrélation',
      'Mesures'
    ],
    'Trimestre 3': [
      'Applications pratiques',
      'Résolution de problèmes',
      'Circuits électroniques',
      'Amplificateurs',
      'Filtres',
      'Préparation BAC',
      'Exercices types',
      'Problèmes de synthèse',
      'Applications',
      'Projets'
    ]
  }, 
'Physique-2nde F2': {
    'Trimestre 1': [
      'Électricité de base',
      'Courant électrique',
      'Tension',
      'Intensité',
      'Loi d\'Ohm',
      'Résistance',
      'Code des couleurs',
      'Puissance',
      'Énergie',
      'Applications'
    ],
    'Trimestre 2': [
      'Circuits électriques',
      'Circuits série',
      'Circuits parallèle',
      'Lois de Kirchhoff',
      'Diviseurs',
      'Puissance électrique',
      'Calcul de puissance',
      'Rendement',
      'Effet Joule',
      'Dissipation thermique'
    ],
    'Trimestre 3': [
      'Magnétisme',
      'Champ magnétique',
      'Aimants',
      'Bobines',
      'Électromagnétisme',
      'Force de Laplace',
      'Induction',
      'Loi de Lenz',
      'Transformateurs',
      'Applications'
    ]
  },
  'Physique-1ère F2': {
    'Trimestre 1': [
      'Circuits AC',
      'Courant alternatif',
      'Valeur efficace',
      'Fréquence',
      'Période',
      'Impédance',
      'Résistance',
      'Réactance',
      'Déphasage',
      'Calculs'
    ],
    'Trimestre 2': [
      'Transformateurs',
      'Principe',
      'Rapport de transformation',
      'Rendement',
      'Applications',
      'Machines électriques',
      'Moteurs',
      'Génératrices',
      'Fonctionnement',
      'Caractéristiques'
    ],
    'Trimestre 3': [
      'Électronique analogique',
      'Diodes',
      'Redressement',
      'Filtrage',
      'Semiconducteurs',
      'Transistors',
      'Polarisation',
      'Amplification',
      'Montages de base',
      'Applications'
    ]
  },
  'Physique-Terminale F2': {
    'Trimestre 1': [
      'Électronique de puissance',
      'Redresseurs',
      'Thyristors',
      'Triacs',
      'Hacheurs',
      'Filtres',
      'Filtres passifs',
      'Filtres actifs',
      'Fonction de transfert',
      'Diagrammes de Bode'
    ],
    'Trimestre 2': [
      'Amplificateurs',
      'Amplificateurs opérationnels',
      'Montages de base',
      'Applications',
      'Oscillateurs',
      'Principe',
      'Oscillateurs sinusoïdaux',
      'Oscillateurs à relaxation',
      'Fréquence',
      'Stabilité'
    ],
    'Trimestre 3': [
      'Systèmes électroniques',
      'Alimentations',
      'Régulateurs',
      'Convertisseurs',
      'Préparation BAC',
      'Études de systèmes',
      'Diagnostic',
      'Mesures',
      'Projets',
      'Dossier technique'
    ]
  },
  'Électronique-2nde F2': {
    'Trimestre 1': [
      'Composants passifs',
      'Résistances',
      'Condensateurs',
      'Bobines',
      'Associations',
      'Diodes',
      'Diode à jonction',
      'Caractéristiques',
      'Redressement',
      'Régulation Zener'
    ],
    'Trimestre 2': [
      'Transistors',
      'Transistor bipolaire',
      'Structure',
      'Fonctionnement',
      'Polarisation',
      'Circuits de base',
      'Montage émetteur commun',
      'Montage collecteur commun',
      'Montage base commune',
      'Applications'
    ],
    'Trimestre 3': [
      'Amplification',
      'Principe',
      'Gain',
      'Bande passante',
      'Distorsion',
      'Alimentation',
      'Alimentation linéaire',
      'Transformateur',
      'Redressement',
      'Filtrage'
    ]
  },
  'Électronique-1ère F2': {
    'Trimestre 1': [
      'Amplificateurs opérationnels',
      'Structure',
      'Caractéristiques',
      'Montage inverseur',
      'Montage non inverseur',
      'Filtres actifs',
      'Filtre passe-bas',
      'Filtre passe-haut',
      'Filtre passe-bande',
      'Applications'
    ],
    'Trimestre 2': [
      'Oscillateurs',
      'Oscillateur à pont de Wien',
      'Oscillateur à déphasage',
      'Stabilité',
      'Modulation',
      'Modulation d\'amplitude',
      'Modulation de fréquence',
      'Démodulation',
      'Applications',
      'Télécommunications'
    ],
    'Trimestre 3': [
      'Électronique numérique',
      'Systèmes de numération',
      'Algèbre de Boole',
      'Portes logiques',
      'Logique combinatoire',
      'Tables de vérité',
      'Simplification',
      'Circuits combinatoires',
      'Additionneur',
      'Décodeur'
    ]
  },
  'Électronique-Terminale F2': {
    'Trimestre 1': [
      'Circuits intégrés',
      'Technologies',
      'Familles logiques',
      'TTL, CMOS',
      'Microcontrôleurs',
      'Architecture',
      'Mémoires',
      'Ports d\'entrée/sortie',
      'Timers',
      'Interruptions'
    ],
    'Trimestre 2': [
      'Systèmes embarqués',
      'Conception',
      'Programmation',
      'Assembleur',
      'Langage C',
      'Applications',
      'Capteurs',
      'Actionneurs',
      'Communication',
      'Protocoles'
    ],
    'Trimestre 3': [
      'Projet électronique',
      'Cahier des charges',
      'Conception',
      'Schémas',
      'Réalisation',
      'Tests',
      'Préparation BAC',
      'Dossier technique',
      'Soutenance',
      'Présentation'
    ]
  },
  'Technologie-2nde F2': {
    'Trimestre 1': [
      'Technologie des composants',
      'Résistances',
      'Condensateurs',
      'Semi-conducteurs',
      'Circuits intégrés',
      'Lecture de schémas',
      'Symboles',
      'Schémas de principe',
      'Schémas de montage',
      'Nomenclature'
    ],
    'Trimestre 2': [
      'Montage électronique',
      'Circuits imprimés',
      'Plaques d\'essai',
      'Composants CMS',
      'Soudure',
      'Techniques de soudure',
      'Fer à souder',
      'Station de soudage',
      'Dessoudage',
      'Qualité'
    ],
    'Trimestre 3': [
      'Mesures électroniques',
      'Multimètre',
      'Oscilloscope',
      'Utilisation',
      'Mesures',
      'Générateur de fonctions',
      'Signaux',
      'Fréquence',
      'Amplitude',
      'Documentation'
    ]
  },
  'Technologie-1ère F2': {
    'Trimestre 1': [
      'Systèmes électroniques',
      'Analyse fonctionnelle',
      'Blocs fonctionnels',
      'Interfaces',
      'CAO électronique',
      'Logiciels',
      'Saisie de schémas',
      'Simulation',
      'Routage',
      'Fabrication'
    ],
    'Trimestre 2': [
      'Circuits imprimés',
      'Conception',
      'Simple face',
      'Double face',
      'Tests et mesures',
      'Protocoles de test',
      'Vérification',
      'Validation',
      'Caractérisation',
      'Rapport'
    ],
    'Trimestre 3': [
      'Maintenance électronique',
      'Diagnostic',
      'Méthodes',
      'Outils',
      'Diagnostic de pannes',
      'Localisation',
      'Réparation',
      'Remplacement',
      'Tests',
      'Documentation'
    ]
  },
  'Technologie-Terminale F2': {
    'Trimestre 1': [
      'Conception de systèmes',
      'Analyse du besoin',
      'Spécifications',
      'Architecture',
      'Choix technologiques',
      'Prototypage',
      'Maquette',
      'Prototype',
      'Tests préliminaires',
      'Améliorations'
    ],
    'Trimestre 2': [
      'Automatisation',
      'Systèmes automatisés',
      'Capteurs',
      'Act ionneurs',
      'Commande',
      'Interfaçage',
      'Acquisition de données',
      'Conversion A/N',
      'Traitement',
      'Communication série'
    ],
    'Trimestre 3': [
      'Projet technique',
      'Projet de fin d\'études',
      'Étude préalable',
      'Réalisation',
      'Tests et validation',
      'Préparation BAC',
      'Dossier projet',
      'Documentation',
      'Soutenance',
      'Évaluation'
    ]
  },
  'Français-2nde F2': {
    'Trimestre 1': [
      'Communication technique',
      'Vocabulaire technique',
      'Expression écrite',
      'Clarté',
      'Précision',
      'Documentation',
      'Notice technique',
      'Fiche technique',
      'Spécifications',
      'Normes'
    ],
    'Trimestre 2': [
      'Rapport technique',
      'Structure',
      'Introduction',
      'Développement',
      'Conclusion',
      'Correspondance',
      'Lettre professionnelle',
      'Courriel',
      'Demande',
      'Réponse'
    ],
    'Trimestre 3': [
      'Expression professionnelle',
      'Présentation orale',
      'Supports visuels',
      'Argumentation',
      'Compte-rendu',
      'Réunion',
      'Intervention',
      'Observation',
      'Synthèse',
      'Diffusion'
    ]
  },
  'Français-1ère F2': {
    'Trimestre 1': [
      'Rédaction technique',
      'Rapport d\'étude',
      'Analyse',
      'Résultats',
      'Interprétation',
      'Note de synthèse',
      'Documents techniques',
      'Analyse',
      'Synthèse',
      'Recommandations'
    ],
    'Trimestre 2': [
      'Argumentation',
      'Convaincre',
      'Persuader',
      'Exemples techniques',
      'Présentation orale',
      'Exposé technique',
      'Démonstration',
      'Questions-réponses',
      'Débat',
      'Discussion technique'
    ],
    'Trimestre 3': [
      'Dossier technique',
      'Organisation',
      'Présentation',
      'Annexes',
      'Communication',
      'Travail en équipe',
      'Coordination',
      'Échanges',
      'Documentation partagée',
      'Efficacité'
    ]
  },
  'Français-Terminale F2': {
    'Trimestre 1': [
      'Rapport de projet',
      'Projet électronique',
      'Méthodologie',
      'Rédaction technique',
      'Schémas',
      'Documentation technique',
      'Cahier des charges',
      'Documentation complète',
      'Manuel d\'utilisation',
      'Maintenance'
    ],
    'Trimestre 2': [
      'Synthèse',
      'Analyse documentaire',
      'Veille technologique',
      'Synthèse technique',
      'Soutenance',
      'Préparation',
      'Présentation PowerPoint',
      'Argumentation orale',
      'Défense du projet',
      'Gestion du temps'
    ],
    'Trimestre 3': [
      'Préparation BAC',
      'Méthodologie',
      'Exercices types',
      'Entraînement',
      'Communication professionnelle',
      'CV technique',
      'Portfolio',
      'Entretien d\'embauche',
      'Projet professionnel',
      'Insertion'
    ]
  },

  'Mathématiques-2nde F3': {
    'Trimestre 1': [
      'Calcul pour l\'électricité',
      'Nombres complexes en électricité',
      'Impédances',
      'Calculs de circuits',
      'Loi d\'Ohm généralisée',
      'Algèbre appliquée',
      'Équations',
      'Systèmes linéaires',
      'Applications',
      'Résolution de circuits'
    ],
    'Trimestre 2': [
      'Trigonométrie pour l\'électrotechnique',
      'Angles et déphasages',
      'Fonctions sinusoïdales',
      'Représentation de Fresnel',
      'Nombres complexes',
      'Forme algébrique',
      'Forme trigonométrique',
      'Opérations',
      'Applications en AC',
      'Puissance complexe'
    ],
    'Trimestre 3': [
      'Vecteurs de Fresnel',
      'Représentation vectorielle',
      'Diagrammes',
      'Somme vectorielle',
      'Applications',
      'Statistiques',
      'Mesures électriques',
      'Séries de mesures',
      'Moyenne',
      'Incertitudes'
    ]
  },
  'Mathématiques-1ère F3': {
    'Trimestre 1': [
      'Nombres complexes en électricité',
      'Impédance complexe',
      'Admittance',
      'Calculs en régime AC',
      'Puissance',
      'Suites',
      'Progressions',
      'Applications',
      'Phénomènes périodiques',
      'Harmoniques'
    ],
    'Trimestre 2': [
      'Dérivation',
      'Dérivées usuelles',
      'Applications',
      'Variation de courant',
      'Variation de tension',
      'Fonctions sinusoïdales',
      'Amplitude',
      'Fréquence',
      'Déphasage',
      'Valeur efficace'
    ],
    'Trimestre 3': [
      'Équations différentielles',
      'Premier ordre',
      'Circuits RC, RL',
      'Régime transitoire',
      'Transformées',
      'Transformée de Laplace',
      'Applications',
      'Analyse de circuits',
      'Fonction de transfert',
      'Réponse fréquentielle'
    ]
  },
  'Mathématiques-Terminale F3': {
    'Trimestre 1': [
      'Calcul vectoriel',
      'Vecteurs tournants',
      'Champ magnétique',
      'Force électromagnétique',
      'Intégrales',
      'Primitives',
      'Calcul intégral',
      'Valeur moyenne',
      'Valeur efficace',
      'Puissance moyenne'
    ],
    'Trimestre 2': [
      'Mathématiques pour l\'électrotechnique',
      'Calculs de puissance',
      'Facteur de puissance',
      'Rendement',
      'Pertes',
      'Fourier',
      'Série de Fourier',
      'Analyse harmonique',
      'Distorsion',
      'THD'
    ],
    'Trimestre 3': [
      'Applications pratiques',
      'Dimensionnement',
      'Calculs de section',
      'Chute de tension',
      'Court-circuit',
      'Préparation BAC',
      'Problèmes de synthèse',
      'Installations électriques',
      'Normes',
      'Sécurité'
    ]
  },
'Électricité-2nde F3': {
    'Trimestre 1': [
      'Électricité de base',
      'Courant électrique',
      'Tension',
      'Résistance',
      'Lois fondamentales',
      'Loi d\'Ohm',
      'Loi de Joule',
      'Lois de Kirchhoff',
      'Loi des nœuds',
      'Loi des mailles'
    ],
    'Trimestre 2': [
      'Circuits électriques',
      'Circuits série',
      'Circuits parallèle',
      'Circuits mixtes',
      'Analyse de circuits',
      'Méthodes de résolution',
      'Théorème de Thévenin',
      'Théorème de Norton',
      'Superposition',
      'Millman'
    ],
    'Trimestre 3': [
      'Puissance électrique',
      'Puissance active',
      'Puissance réactive',
      'Puissance apparente',
      'Facteur de puissance',
      'Triangle des puissances',
      'Compensation',
      'Rendement',
      'Pertes',
      'Économie d\'énergie'
    ]
  },
  'Électricité-1ère F3': {
    'Trimestre 1': [
      'Régimes sinusoïdaux',
      'Courant alternatif',
      'Valeurs instantanées',
      'Valeurs efficaces',
      'Déphasage',
      'Triphasé',
      'Systèmes triphasés',
      'Couplage étoile',
      'Couplage triangle',
      'Puissance en triphasé'
    ],
    'Trimestre 2': [
      'Transformateurs',
      'Principe',
      'Rapport de transformation',
      'Essais',
      'Rendement',
      'Machines électriques',
      'Machines à courant continu',
      'Moteurs',
      'Génératrices',
      'Caractéristiques'
    ],
    'Trimestre 3': [
      'Distribution électrique',
      'Réseaux',
      'Schémas',
      'Calculs',
      'Protection',
      'Fusibles',
      'Disjoncteurs',
      'Relais',
      'Différentiels',
      'Sélectivité'
    ]
  },
  'Électricité-Terminale F3': {
    'Trimestre 1': [
      'Électrotechnique industrielle',
      'Machines asynchrones',
      'Principe',
      'Démarrage',
      'Variation de vitesse',
      'Automatismes électriques',
      'Contacteurs',
      'Relais',
      'Temporisateurs',
      'Schémas de commande'
    ],
    'Trimestre 2': [
      'Variation de vitesse',
      'Variateurs électroniques',
      'Convertisseurs',
      'Onduleurs',
      'Électronique de puissance',
      'Redresseurs',
      'Hacheurs',
      'Gradateurs',
      'Applications',
      'Commande de moteurs'
    ],
    'Trimestre 3': [
      'Installation électrique',
      'Conception',
      'Dimensionnement',
      'Protection',
      'Réalisation',
      'Préparation BAC',
      'Études de cas',
      'Normes NF C 15-100',
      'Schémas électriques',
      'Projet d\'installation'
    ]
  },
  'Électronique-2nde F3': {
    'Trimestre 1': [
      'Composants électroniques',
      'Diodes',
      'Redressement',
      'Régulation',
      'Semiconducteurs',
      'Structure',
      'Dopage',
      'Jonction PN',
      'Caractéristiques',
      'Applications'
    ],
    'Trimestre 2': [
      'Circuits électroniques de base',
      'Alimentation',
      'Transformateur',
      'Redressement',
      'Filtrage',
      'Amplification',
      'Transistors',
      'Polarisation',
      'Montages',
      'Gain'
    ],
    'Trimestre 3': [
      'Alimentation électronique',
      'Alimentation linéaire',
      'Régulateurs',
      'Protection',
      'Redressement',
      'Simple alternance',
      'Double alternance',
      'Pont de Graetz',
      'Filtrage',
      'Ondulation'
    ]
  },
  'Électronique-1ère F3': {
    'Trimestre 1': [
      'Électronique de puissance',
      'Thyristors',
      'Amorçage',
      'Blocage',
      'Applications',
      'Redressement commandé',
      'Variateurs électroniques',
      'Gradateurs',
      'Hacheurs',
      'Commande',
      'Variation de vitesse'
    ],
    'Trimestre 2': [
      'Commande',
      'Circuits de commande',
      'Optocoupleurs',
      'Drivers',
      'Régulation',
      'Régulation de tension',
      'Régulation de courant',
      'Régulation de vitesse',
      'Asservissement',
      'Boucle fermée'
    ],
    'Trimestre 3': [
      'Régulation',
      'PID',
      'Correcteurs',
      'Stabilité',
      'Asservissement',
      'Capteurs',
      'Traitement du signal',
      'Commande de moteurs',
      'Applications industrielles',
      'Systèmes asservis'
    ]
  },
  'Électronique-Terminale F3': {
    'Trimestre 1': [
      'Systèmes de commande',
      'Commande par relais',
      'Commande électronique',
      'Interfaces de puissance',
      'Automates',
      'Automates programmables',
      'Programmation',
      'Ladder',
      'Grafcet',
      'Applications'
    ],
    'Trimestre 2': [
      'Supervision',
      'IHM',
      'SCADA',
      'Monitoring',
      'Communication industrielle',
      'Protocoles',
      'Modbus',
      'Profibus',
      'Ethernet industriel',
      'Réseaux'
    ],
    'Trimestre 3': [
      'Projet électrotechnique',
      'Installation automatisée',
      'Conception',
      'Réalisation',
      'Programmation',
      'Préparation BAC',
      'Dossier technique',
      'Schémas',
      'Programmes',
      'Soutenance'
    ]
  },
  'Technologie-2nde F3': {
    'Trimestre 1': [
      'Technologie des installations',
      'Composants électriques',
      'Appareillage',
      'Matériel',
      'Schémas électriques',
      'Symboles normalisés',
      'Schémas de principe',
      'Schémas de câblage',
      'Plans',
      'Lecture de schémas'
    ],
    'Trimestre 2': [
      'Appareillage électrique',
      'Interrupteurs',
      'Contacteurs',
      'Relais',
      'Disjoncteurs',
      'Câblage',
      'Conducteurs',
      'Sections',
      'Cheminements',
      'Raccordements'
    ],
    'Trimestre 3': [
      'Mesures électriques',
      'Multimètre',
      'Pince ampèremétrique',
      'Wattmètre',
      'Oscilloscope',
      'Sécurité électrique',
      'Risques',
      'Habilitation',
      'EPI',
      'Consignation'
    ]
  },
  'Technologie-1ère F3': {
    'Trimestre 1': [
      'Installations industrielles',
      'Tableaux électriques',
      'Armoires',
      'Câblage',
      'Distribution',
      'Distribution BT',
      'Schémas unifilaires',
      'Protection',
      'Sélectivité',
      'Filiation'
    ],
    'Trimestre 2': [
      'Automatismes',
      'Circuits de commande',
      'Circuits de puissance',
      'Démarreurs',
      'Commande',
      'Commande manuelle',
      'Commande automatique',
      'Capteurs',
      'Détecteurs',
      'Fin de course'
    ],
    'Trimestre 3': [
      'Maintenance électrique',
      'Maintenance préventive',
      'Maintenance corrective',
      'Diagnostic',
      'Recherche de pannes',
      'Mesures',
      'Tests',
      'Réparation',
      'Remplacement',
      'Compte-rendu'
    ]
  },
  'Technologie-Terminale F3': {
    'Trimestre 1': [
      'Conception d\'installations',
      'Cahier des charges',
      'Schémas',
      'Calculs',
      'Dimensionnement',
      'Sections de câbles',
      'Protection',
      'Disjoncteurs',
      'Fusibles',
      'Sélectivité'
    ],
    'Trimestre 2': [
      'Gestion de l\'énergie',
      'Comptage',
      'Tarification',
      'Économies',
      'Qualité de l\'énergie',
      'Harmoniques',
      'Compensation',
      'Filtrage',
      'Stabilité',
      'Continuité'
    ],
    'Trimestre 3': [
      'Projet d\'installation',
      'Étude complète',
      'Plans',
      'Devis',
      'Réalisation',
      'Préparation BAC',
      'Dossier professionnel',
      'Schémas électriques',
      'Notice technique',
      'Soutenance'
    ]
  },
'Français-2nde F3': {
    'Trimestre 1': [
      'Communication technique',
      'Vocabulaire professionnel',
      'Termes électriques',
      'Normes',
      'Expression écrite',
      'Vocabulaire professionnel',
      'Rapport d\'intervention',
      'Structure',
      'Rédaction',
      'Précision'
    ],
    'Trimestre 2': [
      'Rapport d\'intervention',
      'Contexte',
      'Description',
      'Actions',
      'Résultats',
      'Compte-rendu',
      'Observations',
      'Mesures',
      'Anomalies',
      'Recommandations'
    ],
    'Trimestre 3': [
      'Expression professionnelle',
      'Communication orale',
      'Explications techniques',
      'Consignes',
      'Documentation',
      'Notice d\'utilisation',
      'Fiche technique',
      'Plan',
      'Schéma annoté',
      'Légende'
    ]
  },
  'Français-1ère F3': {
    'Trimestre 1': [
      'Rédaction technique',
      'Rapport de chantier',
      'Descriptif',
      'Bilan',
      'Dossier technique',
      'Constitution',
      'Organisation',
      'Présentation',
      'Annexes',
      'Schémas'
    ],
    'Trimestre 2': [
      'Argumentation',
      'Justification technique',
      'Choix de solutions',
      'Comparaison',
      'Présentation',
      'Exposé technique',
      'Supports',
      'Démonstration',
      'Questions',
      'Débat'
    ],
    'Trimestre 3': [
      'Communication en entreprise',
      'Relations clients',
      'Devis',
      'Factures',
      'Rapport',
      'Rapport d\'activité',
      'Bilan de stage',
      'Réalisations',
      'Compétences',
      'Projet professionnel'
    ]
  },
  'Français-Terminale F3': {
    'Trimestre 1': [
      'Rapport de projet',
      'Projet d\'installation',
      'Étude préalable',
      'Réalisation',
      'Bilan',
      'Documentation technique',
      'Dossier d\'installation',
      'Plans',
      'Schémas',
      'Notice'
    ],
    'Trimestre 2': [
      'Note de synthèse',
      'Veille technologique',
      'Analyse',
      'Synthèse',
      'Soutenance',
      'Préparation',
      'Diaporama',
      'Présentation orale',
      'Argumentation',
      'Défense'
    ],
    'Trimestre 3': [
      'Préparation BAC',
      'Méthodologie',
      'Entraînement',
      'Révisions',
      'Insertion professionnelle',
      'CV',
      'Lettre de motivation',
      'Portfolio',
      'Entretien',
      'Projet professionnel'
    ]
  },

  'Économie-2nde G': {
    'Trimestre 1': [
      'Introduction à l\'économie',
      'Qu\'est-ce que l\'économie ?',
      'Besoins et ressources',
      'Rareté',
      'Choix économiques',
      'Les agents économiques',
      'Ménages',
      'Entreprises',
      'État',
      'Reste du monde'
    ],
    'Trimestre 2': [
      'Le marché',
      'Offre et demande',
      'Prix d\'équilibre',
      'Élasticité',
      'La production',
      'Facteurs de production',
      'Productivité',
      'Rendements',
      'Coûts de production',
      'Profit'
    ],
    'Trimestre 3': [
      'La consommation',
      'Fonction de consommation',
      'Propension à consommer',
      'Déterminants',
      'L\'épargne',
      'Fonction d\'épargne',
      'Motifs d\'épargne',
      'Placement',
      'Investissement',
      'Circuit économique'
    ]
  },
  'Économie-1ère G': {
    'Trimestre 1': [
      'Microéconomie',
      'Comportement du consommateur',
      'Utilité',
      'Courbes d\'indifférence',
      'La concurrence',
      'Concurrence pure et parfaite',
      'Monopole',
      'Oligopole',
      'Concurrence monopolistique',
      'Structures de marché'
    ],
    'Trimestre 2': [
      'Macroéconomie',
      'Agrégats économiques',
      'PIB',
      'PNB',
      'Revenu national',
      'Croissance économique',
      'Indicateurs',
      'Sources',
      'Facteurs',
      'Développement'
    ],
    'Trimestre 3': [
      'Commerce international',
      'Théories du commerce',
      'Avantages comparatifs',
      'Balance commerciale',
      'Monnaie et crédit',
      'Fonctions de la monnaie',
      'Création monétaire',
      'Banques',
      'Politique monétaire',
      'Inflation'
    ]
  },
  'Économie-Terminale G': {
    'Trimestre 1': [
      'Politiques économiques',
      'Politique budgétaire',
      'Politique monétaire',
      'Politique de l\'emploi',
      'Développement économique',
      'Croissance et développement',
      'Sous-développement',
      'Indicateurs de développement',
      'Stratégies',
      'Aide au développement'
    ],
    'Trimestre 2': [
      'Économie internationale',
      'Balance des paiements',
      'Taux de change',
      'Systèmes monétaires',
      'Mondialisation',
      'Globalisation',
      'OMC',
      'FMI',
      'Banque mondiale',
      'Intégration régionale'
    ],
    'Trimestre 3': [
      'Économie du développement',
      'Pays en développement',
      'Pays émergents',
      'Défis',
      'Opportunités',
      'Préparation BAC',
      'Révisions',
      'Dissertations',
      'Études de cas',
      'Actualité économique'
    ]
  },
  'Comptabilité-2nde G': {
    'Trimestre 1': [
      'Introduction à la comptabilité',
      'Rôle de la comptabilité',
      'Principes comptables',
      'Normalisation',
      'Le bilan',
      'Actif',
      'Passif',
      'Équation comptable',
      'Patrimoine',
      'Situation nette'
    ],
    'Trimestre 2': [
      'Le compte de résultat',
      'Charges',
      'Produits',
      'Résultat',
      'Les opérations courantes',
      'Achats',
      'Ventes',
      'Règlements',
      'Comptes de tiers',
      'Comptes de trésorerie'
    ],
    'Trimestre 3': [
      'La TVA',
      'Principe',
      'TVA collectée',
      'TVA déductible',
      'Déclaration',
      'Les salaires',
      'Bulletin de paie',
      'Charges sociales',
      'Comptabilisation',
      'Déclarations sociales'
    ]
  },
  'Comptabilité-1ère G': {
    'Trimestre 1': [
      'Comptabilité approfondie',
      'Opérations de fin d\'exercice',
      'Amortissements',
      'Provisions',
      'Les immobilisations',
      'Acquisitions',
      'Amortissements',
      'Cessions',
      'Réévaluations',
      'Dépréciation'
    ],
    'Trimestre 2': [
      'Les stocks',
      'Évaluation',
      'Inventaire',
      'Méthodes de valorisation',
      'Les provisions',
      'Provisions pour risques',
      'Provisions pour charges',
      'Provisions réglementées',
      'Comptabilisation',
      'Ajustements'
    ],
    'Trimestre 3': [
      'Comptabilité analytique',
      'Coûts complets',
      'Coûts partiels',
      'Seuil de rentabilité',
      'Calcul des coûts',
      'Coût d\'achat',
      'Coût de production',
      'Coût de revient',
      'Marges',
      'Résultats analytiques'
    ]
  },
  'Comptabilité-Terminale G': {
    'Trimestre 1': [
      'Analyse financière',
      'Bilan fonctionnel',
      'Fonds de roulement',
      'BFR',
      'Trésorerie',
      'Les ratios',
      'Ratios de structure',
      'Ratios de gestion',
      'Ratios de rentabilité',
      'Interprétation'
    ],
    'Trimestre 2': [
      'Gestion budgétaire',
      'Budgets',
      'Prévisions',
      'Écarts',
      'Contrôle de gestion',
      'Tableaux de bord',
      'Indicateurs',
      'Suivi',
      'Analyse des écarts',
      'Actions correctives'
    ],
    'Trimestre 3': [
      'Audit comptable',
      'Contrôle interne',
      'Audit externe',
      'Certification',
      'Préparation BAC',
      'Études de cas',
      'Synthèses',
      'Analyses',
      'Recommandations',
      'Présentation'
    ]
  },
'Mathématiques-2nde G': {
    'Trimestre 1': [
      'Mathématiques financières',
      'Intérêts simples',
      'Calcul d\'intérêts',
      'Taux',
      'Durée',
      'Pourcentages',
      'Calculs commerciaux',
      'Remises',
      'Escomptes',
      'TVA'
    ],
    'Trimestre 2': [
      'Proportionnalité',
      'Règle de trois',
      'Partages proportionnels',
      'Échelles',
      'Statistiques',
      'Séries statistiques',
      'Paramètres',
      'Représentations',
      'Interprétation',
      'Applications commerciales'
    ],
    'Trimestre 3': [
      'Fonctions',
      'Fonction affine',
      'Fonction du second degré',
      'Représentation',
      'Graphiques',
      'Diagrammes',
      'Histogrammes',
      'Courbes',
      'Lecture',
      'Interprétation'
    ]
  },
  'Mathématiques-1ère G': {
    'Trimestre 1': [
      'Intérêts simples et composés',
      'Formules',
      'Calculs',
      'Applications',
      'Annuités',
      'Valeur acquise',
      'Valeur actuelle',
      'Emprunts',
      'Remboursements',
      'Tableau d\'amortissement'
    ],
    'Trimestre 2': [
      'Amortissements',
      'Amortissement linéaire',
      'Amortissement dégressif',
      'Tableaux',
      'Probabilités',
      'Calcul de probabilités',
      'Arbres',
      'Lois de probabilité',
      'Espérance',
      'Applications commerciales'
    ],
    'Trimestre 3': [
      'Statistiques descriptives',
      'Séries à deux variables',
      'Corrélation',
      'Régression',
      'Indices',
      'Indices simples',
      'Indices synthétiques',
      'Évolution',
      'Taux de variation',
      'Applications économiques'
    ]
  },
  'Mathématiques-Terminale G': {
    'Trimestre 1': [
      'Mathématiques appliquées à la gestion',
      'Calculs financiers avancés',
      'Actualisation',
      'Rentabilité',
      'Programmation linéaire',
      'Modélisation','Optimisation',
      'Contraintes',
      'Solutions optimales',
      'Applications gestion'
    ],
    'Trimestre 2': [
      'Statistiques inférentielles',
      'Échantillonnage',
      'Estimation',
      'Tests d\'hypothèses',
      'Intervalles de confiance',
      'Échantillonnage',
      'Méthodes',
      'Sondages',
      'Représentativité',
      'Marges d\'erreur'
    ],
    'Trimestre 3': [
      'Recherche opérationnelle',
      'Programmation linéaire',
      'Graphes',
      'Ordonnancement',
      'PERT',
      'Préparation BAC',
      'Problèmes de gestion',
      'Études de cas',
      'Optimisation',
      'Décisions'
    ]
  },
  'Droit-2nde G': {
    'Trimestre 1': [
      'Introduction au droit',
      'Définition du droit',
      'Rôle du droit',
      'Branches du droit',
      'Les sources du droit',
      'Loi',
      'Règlements',
      'Jurisprudence',
      'Coutume',
      'Hiérarchie des normes'
    ],
    'Trimestre 2': [
      'Les personnes',
      'Personne physique',
      'Personne morale',
      'Identification',
      'La capacité juridique',
      'Capacité de jouissance',
      'Capacité d\'exercice',
      'Incapacités',
      'Protection',
      'Représentation'
    ],
    'Trimestre 3': [
      'Les biens',
      'Classification',
      'Biens meubles',
      'Biens immeubles',
      'La propriété',
      'Droit de propriété',
      'Attributs',
      'Démembrements',
      'Usufruit',
      'Servitudes'
    ]
  },
  'Droit-1ère G': {
    'Trimestre 1': [
      'Droit civil',
      'Obligations',
      'Sources des obligations',
      'Classification',
      'Les contrats',
      'Formation',
      'Conditions de validité',
      'Effets',
      'Exécution',
      'Inexécution'
    ],
    'Trimestre 2': [
      'Droit commercial',
      'Actes de commerce',
      'Commerçants',
      'Obligations',
      'Les sociétés',
      'Définition',
      'Classification',
      'Constitution',
      'Fonctionnement',
      'Dissolution'
    ],
    'Trimestre 3': [
      'Droit du travail',
      'Relations individuelles',
      'Le contrat de travail',
      'Formation',
      'Exécution',
      'Rupture',
      'Relations collectives',
      'Syndicats',
      'Conventions collectives',
      'Conflits',
      'Négociation'
    ]
  },
  'Droit-Terminale G': {
    'Trimestre 1': [
      'Droit des affaires',
      'Contrats commerciaux',
      'Vente commerciale',
      'Bail commercial',
      'Droit fiscal',
      'Impôts directs',
      'Impôts indirects',
      'TVA',
      'Déclarations',
      'Contentieux'
    ],
    'Trimestre 2': [
      'Droit social avancé',
      'Protection sociale',
      'Sécurité sociale',
      'Accidents du travail',
      'Droit de la concurrence',
      'Pratiques anticoncurrentielles',
      'Concentrations',
      'Règles',
      'Sanctions',
      'Autorités'
    ],
    'Trimestre 3': [
      'Contentieux',
      'Procédures',
      'Juridictions',
      'Voies de recours',
      'Préparation BAC',
      'Cas pratiques',
      'Dissertations juridiques',
      'Commentaires d\'arrêts',
      'Méthodologie',
      'Actualité juridique'
    ]
  },
  'Français-2nde G': {
    'Trimestre 1': [
      'Communication professionnelle',
      'Expression écrite',
      'Style professionnel',
      'Clarté',
      'Correspondance commerciale',
      'La lettre commerciale',
      'Structure',
      'Formules',
      'Objet',
      'Références'
    ],
    'Trimestre 2': [
      'Le rapport',
      'Rapport d\'activité',
      'Rapport de stage',
      'Structure',
      'Présentation',
      'La note de service',
      'Rédaction',
      'Diffusion',
      'Objectif',
      'Concision',
      'Efficacité'
    ],
    'Trimestre 3': [
      'Expression écrite professionnelle',
      'Le compte-rendu',
      'Réunion',
      'Visite',
      'Synthèse',
      'Compte-rendu',
      'Prise de notes',
      'Organisation',
      'Rédaction',
      'Objectivité',
      'Exactitude'
    ]
  },
  'Français-1ère G': {
    'Trimestre 1': [
      'Rédaction administrative',
      'Documents administratifs',
      'Demandes',
      'Réclamations',
      'Le procès-verbal',
      'Assemblée',
      'Réunion',
      'Délibérations',
      'Votes',
      'Signature'
    ],
    'Trimestre 2': [
      'Argumentation commerciale',
      'Lettre de prospection',
      'Argumentaire',
      'Conviction',
      'Présentation orale',
      'Pitch commercial',
      'Négociation',
      'Objections',
      'Conclusion',
      'Suivi'
    ],
    'Trimestre 3': [
      'Communication d\'entreprise',
      'Communication interne',
      'Communication externe',
      'Image',
      'Dossier professionnel',
      'Portfolio',
      'CV',
      'Lettre de motivation',
      'Entretien',
      'Présentation'
    ]
  },
  'Français-Terminale G': {
    'Trimestre 1': [
      'Communication managériale',
      'Leadership',
      'Motivation',
      'Conduite de réunion',
      'Négociation',
      'Techniques de négociation',
      'Préparation',
      'Stratégies',
      'Compromis',
      'Accords'
    ],
    'Trimestre 2': [
      'Synthèse documentaire',
      'Analyse de documents',
      'Confrontation',
      'Synthèse',
      'Soutenance',
      'Préparation orale',
      'Supports',
      'Présentation',
      'Argumentation',
      'Questions'
    ],
    'Trimestre 3': [
      'Préparation BAC',
      'Méthodologie',
      'Exercices types',
      'Entraînement',
      'Techniques de communication',
      'Communication écrite',
      'Communication orale',
      'Gestion du stress',
      'Efficacité',
      'Professionnalisme'
    ]
  },