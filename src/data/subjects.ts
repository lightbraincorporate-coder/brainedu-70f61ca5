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
      'L'hydrographie de mon pays',
      'Le fleuve principal de mon pays',
      'Les forêts',
      'La savane',
      'Les montagnes',
      'Les villes principales',
      'Les régions de mon pays'
    ]
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
'L'anatomie comparée',
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