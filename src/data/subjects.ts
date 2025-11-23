
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