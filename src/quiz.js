export const quiz = {
  "titre": "Quiz soirée amusante – Parents & Ados (Jokers & Thèmes)",
  "description": "40 questions QCM avec jokers et bascule de thème (Halloween / Noël).",
  "langue": "fr",
  "version": "2.4-js",
  "timer": {
    "duration_seconds": 30,
    "warning_last_seconds": 10,
    "warning_color": "red",
    "display": {
      "type": "countdown",
      "format": "SS",
      "blink_on_warning": true
    }
  },
  "jokers": {
    "available": [
      {
        "id": "5050",
        "label": "50/50",
        "description": "Supprime 2 mauvaises réponses."
      },
      {
        "id": "+10s",
        "label": "+10s",
        "description": "Ajoute 10 secondes au timer."
      },
      {
        "id": "indice",
        "label": "Indice",
        "description": "Affiche un indice pour la question."
      }
    ],
    "per_game_total_limit": 5
  },
  "questions": [
    {
      "id": 1,
      "categorie": "Vie quotidienne",
      "question": "À quelle température l’eau bout au niveau de la mer ?",
      "options": [
        "100 °C",
        "90 °C",
        "80 °C",
        "120 °C"
      ],
      "bonne_reponse": 0,
      "difficulte": "facile",
      "indice": "Valeur ronde en degrés Celsius.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 2,
      "categorie": "Technologie",
      "question": "Quel raccourci clavier sert à copier ?",
      "options": [
        "Ctrl+C",
        "Ctrl+V",
        "Ctrl+X",
        "Ctrl+Z"
      ],
      "bonne_reponse": 0,
      "difficulte": "facile",
      "indice": "On colle avec V, on copie avec…",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 3,
      "categorie": "Sport",
      "question": "Combien de joueurs par équipe en volley-ball sur le terrain ?",
      "options": [
        "5",
        "7",
        "6",
        "8"
      ],
      "bonne_reponse": 2,
      "difficulte": "facile",
      "indice": "Deux rangées de trois joueurs.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 4,
      "categorie": "Musique",
      "question": "Quel instrument possède généralement 88 touches ?",
      "options": [
        "Piano",
        "Guitare",
        "Batterie",
        "Saxophone"
      ],
      "bonne_reponse": 0,
      "difficulte": "facile",
      "indice": "Instrument à clavier.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 5,
      "categorie": "Géographie",
      "question": "Quel est le plus long fleuve de France ?",
      "options": [
        "La Seine",
        "La Loire",
        "La Garonne",
        "Le Rhône"
      ],
      "bonne_reponse": 1,
      "difficulte": "moyen",
      "indice": "Il traverse Orléans et Nantes.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 6,
      "categorie": "Histoire",
      "question": "En quelle année a eu lieu le débarquement en Normandie ?",
      "options": [
        "1939",
        "1942",
        "1944",
        "1945"
      ],
      "bonne_reponse": 2,
      "difficulte": "moyen",
      "indice": "Pendant la Seconde Guerre mondiale, en juin.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 7,
      "categorie": "Cinéma",
      "question": "Qui a réalisé le film ‘Titanic’ ?",
      "options": [
        "James Cameron",
        "Steven Spielberg",
        "Christopher Nolan",
        "Ridley Scott"
      ],
      "bonne_reponse": 0,
      "difficulte": "facile",
      "indice": "Il a aussi réalisé Avatar.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 8,
      "categorie": "Culture pop",
      "question": "Quel Pokémon est la mascotte la plus connue ?",
      "options": [
        "Pikachu",
        "Bulbizarre",
        "Évoli",
        "Salamèche"
      ],
      "bonne_reponse": 0,
      "difficulte": "facile",
      "indice": "Petit Pokémon jaune électrique.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 9,
      "categorie": "Sciences",
      "question": "Quelle planète est surnommée la ‘planète rouge’ ?",
      "options": [
        "Mars",
        "Vénus",
        "Jupiter",
        "Mercure"
      ],
      "bonne_reponse": 0,
      "difficulte": "facile",
      "indice": "Couleur due à l’oxyde de fer.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 10,
      "categorie": "Cuisine",
      "question": "Quelle pâte utilise-t-on pour un mille-feuille ?",
      "options": [
        "Feuilletée",
        "Brisée",
        "Sablée",
        "Filo"
      ],
      "bonne_reponse": 0,
      "difficulte": "facile",
      "indice": "Pâte en couches croustillantes.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 11,
      "categorie": "Environnement",
      "question": "Quel gaz contribue le plus au réchauffement climatique ?",
      "options": [
        "Ozone",
        "Dioxyde de carbone",
        "Azote",
        "Hydrogène"
      ],
      "bonne_reponse": 1,
      "difficulte": "moyen",
      "indice": "CO₂.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 12,
      "categorie": "Langue",
      "question": "Quel est le pluriel de ‘hibou’ ?",
      "options": [
        "Hibous",
        "Hiboux",
        "Hibouxs",
        "Hibousx"
      ],
      "bonne_reponse": 1,
      "difficulte": "facile",
      "indice": "Comme ‘bijou’, ‘caillou’…",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 13,
      "categorie": "Technologie",
      "question": "À quoi sert principalement un QR code ?",
      "options": [
        "Augmenter la batterie",
        "Ouvrir rapidement un lien ou une info",
        "Rendre une photo plus nette",
        "Bloquer la pub"
      ],
      "bonne_reponse": 1,
      "difficulte": "facile",
      "indice": "On scanne pour accéder à une URL.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 14,
      "categorie": "Vie quotidienne",
      "question": "Quel appareil compte vos pas dans la journée ?",
      "options": [
        "Altimètre",
        "Podomètre",
        "Baromètre",
        "Tachymètre"
      ],
      "bonne_reponse": 1,
      "difficulte": "facile",
      "indice": "Souvent intégré au smartphone ou montre.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 15,
      "categorie": "Culture générale",
      "question": "Combien de côtés a un hexagone ?",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "bonne_reponse": 1,
      "difficulte": "facile",
      "indice": "‘Hexa’…",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 16,
      "categorie": "Jeux vidéo",
      "question": "Dans Mario, quel power-up rend le personnage géant ?",
      "options": [
        "Fleur de feu",
        "Étoile",
        "Champignon",
        "Feuille"
      ],
      "bonne_reponse": 2,
      "difficulte": "facile",
      "indice": "Objet rouge et blanc.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 17,
      "categorie": "Sciences",
      "question": "Que mange un herbivore ?",
      "options": [
        "Viande",
        "Poisson",
        "Plantes",
        "Tout"
      ],
      "bonne_reponse": 2,
      "difficulte": "facile",
      "indice": "Herbe, feuilles…",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 18,
      "categorie": "Géographie",
      "question": "Quelle est la capitale du Canada ?",
      "options": [
        "Toronto",
        "Montréal",
        "Ottawa",
        "Vancouver"
      ],
      "bonne_reponse": 2,
      "difficulte": "moyen",
      "indice": "Ville fédérale en Ontario.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 19,
      "categorie": "Musique",
      "question": "En 4/4, une noire vaut combien de temps ?",
      "options": [
        "1 temps",
        "2 temps",
        "0,5 temps",
        "4 temps"
      ],
      "bonne_reponse": 0,
      "difficulte": "moyen",
      "indice": "La croche vaut 0,5.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 20,
      "categorie": "Cinéma",
      "question": "Quel héros manie le marteau Mjölnir ?",
      "options": [
        "Loki",
        "Thor",
        "Odin",
        "Hulk"
      ],
      "bonne_reponse": 1,
      "difficulte": "facile",
      "indice": "Dieu nordique des tonnerres.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 21,
      "categorie": "Sport",
      "question": "Quel trophée reçoit le vainqueur de Roland-Garros (simple messieurs) ?",
      "options": [
        "Coupe Davis",
        "Coupe des Mousquetaires",
        "Coupe du Monde",
        "Ballon d’Or"
      ],
      "bonne_reponse": 1,
      "difficulte": "moyen",
      "indice": "Nom en hommage aux célèbres joueurs français.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 22,
      "categorie": "Énigmes",
      "question": "Si tu en as un, tu veux le partager. Si tu le partages, tu ne l’as plus. Qu’est-ce ?",
      "options": [
        "Argent",
        "Secret",
        "Temps",
        "Nourriture"
      ],
      "bonne_reponse": 1,
      "difficulte": "moyen",
      "indice": "Chut…",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 23,
      "categorie": "Sciences",
      "question": "Où se trouvent les électrons dans un atome ?",
      "options": [
        "Au centre",
        "Autour du noyau",
        "Dans le noyau",
        "Dans les protons"
      ],
      "bonne_reponse": 1,
      "difficulte": "moyen",
      "indice": "Ils gravitent sur des couches.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 24,
      "categorie": "Technologie",
      "question": "Quelle extension correspond à une image compressée courante ?",
      "options": [
        ".docx",
        ".mp3",
        ".jpg",
        ".pptx"
      ],
      "bonne_reponse": 2,
      "difficulte": "facile",
      "indice": "Format photo très répandu.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 25,
      "categorie": "Vie quotidienne",
      "question": "Sur un feu tricolore, quelle couleur signifie ‘stop’ ?",
      "options": [
        "Vert",
        "Orange",
        "Rouge",
        "Bleu"
      ],
      "bonne_reponse": 2,
      "difficulte": "facile",
      "indice": "La plus chaude des trois…",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 26,
      "categorie": "Histoire",
      "question": "Qui était Jeanne d’Arc ?",
      "options": [
        "Une reine d’Angleterre",
        "Une scientifique du XVIIIe siècle",
        "Une héroïne française de la guerre de Cent Ans",
        "Une impératrice romaine"
      ],
      "bonne_reponse": 2,
      "difficulte": "moyen",
      "indice": "Originaire de Lorraine.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 27,
      "categorie": "Culture pop",
      "question": "Quelle série met en scène Sabrina, une jeune sorcière ?",
      "options": [
        "Les Nouvelles Aventures de Sabrina",
        "Buffy contre les vampires",
        "Wednesday",
        "Charmed"
      ],
      "bonne_reponse": 0,
      "difficulte": "moyen",
      "indice": "Sur Netflix, ambiance sombre.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 28,
      "categorie": "Musique",
      "question": "Quelle lettre indique un volume faible en notation musicale ?",
      "options": [
        "f",
        "mf",
        "p",
        "ff"
      ],
      "bonne_reponse": 2,
      "difficulte": "moyen",
      "indice": "Initiale de ‘piano’.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 29,
      "categorie": "Cuisine",
      "question": "Quel est l’ingrédient principal du guacamole ?",
      "options": [
        "Tomate",
        "Avocat",
        "Poivron",
        "Concombre"
      ],
      "bonne_reponse": 1,
      "difficulte": "facile",
      "indice": "Fruit vert et crémeux.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 30,
      "categorie": "Géographie",
      "question": "Quel pays a un drapeau rouge avec une croix blanche centrée ?",
      "options": [
        "Danemark",
        "Suisse",
        "Autriche",
        "Angleterre"
      ],
      "bonne_reponse": 1,
      "difficulte": "moyen",
      "indice": "Pays alpin.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 31,
      "categorie": "Sport",
      "question": "Au football, qui peut toucher le ballon avec les mains ?",
      "options": [
        "Tout joueur",
        "Personne",
        "Seul le gardien dans sa surface",
        "Seuls les défenseurs"
      ],
      "bonne_reponse": 2,
      "difficulte": "facile",
      "indice": "Règle de base du jeu.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 32,
      "categorie": "Sciences",
      "question": "Un kilogramme correspond à combien de grammes ?",
      "options": [
        "100 g",
        "1000 g",
        "10 000 g",
        "500 g"
      ],
      "bonne_reponse": 1,
      "difficulte": "facile",
      "indice": "Un ordre de grandeur mille.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 33,
      "categorie": "Technologie",
      "question": "Quel mode réduit la lumière bleue le soir sur un smartphone ?",
      "options": [
        "Mode avion",
        "Mode nuit / Confort",
        "Mode silencieux",
        "Mode développeur"
      ],
      "bonne_reponse": 1,
      "difficulte": "facile",
      "indice": "Active un ton plus chaud.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 34,
      "categorie": "Culture générale",
      "question": "Combien de lettres compte l’alphabet français ?",
      "options": [
        "24",
        "25",
        "26",
        "27"
      ],
      "bonne_reponse": 2,
      "difficulte": "facile",
      "indice": "Comme l’anglais.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 35,
      "categorie": "Cinéma",
      "question": "Dans ‘Matrix’, que prend Néo pour connaître la vérité ?",
      "options": [
        "La pilule bleue",
        "La pilule rouge",
        "La pilule verte",
        "La pilule noire"
      ],
      "bonne_reponse": 1,
      "difficulte": "facile",
      "indice": "Choix décisif proposé par Morpheus.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 36,
      "categorie": "Musique",
      "question": "Quel groupe a interprété ‘Bohemian Rhapsody’ ?",
      "options": [
        "Queen",
        "The Beatles",
        "U2",
        "Coldplay"
      ],
      "bonne_reponse": 0,
      "difficulte": "facile",
      "indice": "Freddie Mercury au chant.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 37,
      "categorie": "Environnement",
      "question": "Quelle action réduit les plastiques à usage unique ?",
      "options": [
        "Utiliser des gobelets jetables",
        "Acheter plus de bouteilles",
        "Utiliser une gourde réutilisable",
        "Imprimer plus de papiers"
      ],
      "bonne_reponse": 2,
      "difficulte": "facile",
      "indice": "Solution durable pour s’hydrater.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 38,
      "categorie": "Vie quotidienne",
      "question": "Quelle date est associée à la galette des rois en France ?",
      "options": [
        "25 décembre",
        "31 décembre",
        "6 janvier",
        "14 juillet"
      ],
      "bonne_reponse": 2,
      "difficulte": "moyen",
      "indice": "Épiphanie.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 39,
      "categorie": "Culture pop",
      "question": "Quel super-héros protège Gotham City ?",
      "options": [
        "Superman",
        "Spider-Man",
        "Batman",
        "Iron Man"
      ],
      "bonne_reponse": 2,
      "difficulte": "facile",
      "indice": "Chevalier noir.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    },
    {
      "id": 40,
      "categorie": "Jeux & société",
      "question": "Quel objet n’est pas une arme dans ‘Cluedo’ ?",
      "options": [
        "Poignard",
        "Bougeoir",
        "Chaise",
        "Revolver"
      ],
      "bonne_reponse": 2,
      "difficulte": "moyen",
      "indice": "Objet de mobilier.",
      "timer": {
        "duration_seconds": 30,
        "warning_last_seconds": 10,
        "warning_color": "red"
      }
    }
  ]
};
export default quiz;
