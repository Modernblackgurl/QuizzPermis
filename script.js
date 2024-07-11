/** @format */

document.addEventListener('DOMContentLoaded', function () {
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const nextButton = document.getElementById('next');
  const previousButton = document.getElementById('previous');

  const quizData = [
    //1
    {
      category: '1/ Vérification Intérieure',
      question: 'Montrez la commande de réglage de hauteur des feux.',
      correctAnswer:
        "Dispositif situé en général à gauche du volant. <img src='https://fs.opisto.fr/Pictures/5881/2022_12/Piece-Commande-de-reglage-hauteur-de-phare-RENAULT-CLIO-5-1.0i--12V-TURBO-TCE-90-HYBRID-2875248e2d9a239ca8b64bf60c2e7e3a1a52a3d9da7f63e2cbb4c884c29dd458.jpg' alt='Commande de réglage de hauteur des feux'>",
    },
    {
      category: '1/ Sécurité Routière',
      question: 'Pourquoi doit-on régler la hauteur des feux ?',
      correctAnswer: 'Pour ne pas éblouir les autres usagers.',
    },
    {
      category: '1/ Premiers Secours',
      question: "Comment et pourquoi protéger une zone de danger en cas d'accident de la route ?",
      correctAnswer:
        'En délimitant clairement et largement la zone de danger de façon visible pour protéger les victimes et éviter un sur-accident.',
    },
    //2
    {
      category: '2/ Vérification Extérieure',
      question: "Montrez où s'effectue le remplissage du produit lave-glace.",
      correctAnswer:
        "Ouvrir le capot et montrer l'orifice de remplissage. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fc3ZYI_TmSeM%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=def90a79937a4d54abde11c7f4df95cc89a9014799350b4d7a1470285f3283e2&ipo=images' alt='Orifice du produit lave-glace.'>",
    },
    {
      category: '2/ Sécurité Routière',
      question: "Pourquoi est-il préférable d'utiliser un liquide spécial en hiver ?",
      correctAnswer: 'Pour éviter le gel du liquide.',
    },
    {
      category: '2/ Premiers Secours',
      question:
        "Quels comportements adopter en cas de diffusion du signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) ?",
      correctAnswer: "- Se mettre en sécurité - S'informer grâce aux médias des autorités - Respecter les consignes des autorités",
    },
    //3
    {
      category: '3/ Vérification Intérieure',
      question: "Mettez le rétroviseur intérieur en position 'nuit'.",
      correctAnswer: "Si le véhicule possède un système automatique de mise en position 'nuit' du rétroviseur intérieur, on l'indique.",
    },
    {
      category: '3/ Sécurité Routière',
      question: "Quel est l'intérêt de la position nuit du rétroviseur ?",
      correctAnswer: 'Ne pas être ébloui par les feux du véhicule suiveur.',
    },
    {
      category: '3/ Premiers Secours',
      question:
        "Comment est composé le signal d'alerte du système d'Alerte et d'Information des Populations (SAIP) diffusé par les sirènes ?",
      correctAnswer:
        "De deux codes distincts : - le Signal National d'Alerte (SNA), variation du signal sur trois cycles successifs. - Le signal de fin d'alerte, signal continu.",
    },
    //4
    {
      category: '4/ Vérification Extérieure',
      question: "Contrôlez l'état du flanc sur l'un des pneumatiques.",
      correctAnswer:
        "En bon état (toute anomalie doit être signalée). <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sucyconduites.com%2Fwp-content%2Fdocs%2FPNEU-1024x851.jpg&f=1&nofb=1&ipt=4a6814e3f6b3e382403356988cd58bb5ee50a1ba332402dadd91afa3ebe9e79f&ipo=images' alt='Commande de réglage de hauteur des feux'>",
    },
    {
      category: '4/ Sécurité Routière',
      question: "Citez un endroit où l'on peut trouver les pressions préconisées pour les pneumatiques ?",
      correctAnswer:
        "Sont indiquées : - soit sur une plaque sur une portière. - soit dans la notice d'utilisation du véhicule. - soit au niveau de la trappe à carburant.",
    },
    {
      category: '4/ Premiers Secours',
      question: "Sur autoroute, comment indiquer avec précision les lieux de l'accident depuis un téléphone portable ?",
      correctAnswer: "En indiquant le numéro de l'autoroute, le sens de circulation et le point kilométrique",
    },
    //5
    {
      category: '5/ Vérification Intérieure',
      question: 'Faites fonctionner les essuie-glaces avants du véhicule sur la position la plus rapide.',
      correctAnswer:
        "<img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Forleansconduite.com%2Fwp-content%2Fuploads%2F2018%2F01%2Fessuie-glace-Q5-Q69.jpg&f=1&nofb=1&ipt=229289aaf72a91fe098ba9dda46005932791112c0bf6c42fc780c93bc2ffe535&ipo=images' alt='Commande des essuie-glaces'>",
    },
    {
      category: '5/ Sécurité Routière',
      question: "Comment détecter l'usure des essuie-glaces en circulation ?",
      correctAnswer: "En cas de pluie, lorsqu'ils laissent des traces sur le pare-brise.",
    },
    {
      category: '5/ Premiers Secours',
      question: "Comment vérifier la respiration d'une victime ?",
      correctAnswer: "Regarder si le ventre et la poitrine se soulèvent et sentir de l'air à l'expiration.",
    },
    //6
    {
      category: '6/ Vérification Extérieure',
      question: "Vérifiez l'état et la propreté des plaques d'immatriculation.",
      correctAnswer: "Vérification des plaques à l'avant et à l'arrière, propres et en bon état (toute anomalie doit être signalée).",
    },
    {
      category: '6/ Sécurité Routière',
      question: "Quelles sont les précautions à prendre en cas d'installation d'un porte vélo ?",
      correctAnswer: "La plaque d'immatriculation et les feux doivent être visibles.",
    },
    {
      category: '6/ Premiers Secours',
      question: "Qu'est ce qu'une perte de connaissance ?",
      correctAnswer: "C'est lorsque la victime ne répond pas et ne réagit pas mais respire.",
    },
    //7
    {
      category: '7/ Vérification Intérieure',
      question: 'Vérifiez la présence du gilet de haute visibilité.',
      correctAnswer: 'Indiquer où se trouve le gilet sans obligation de le sortir.',
    },
    {
      category: '7/ Sécurité Routière',
      question: "En cas de panne ou d'accident, quel autre accessoire de sécurité est obligatoire ?",
      correctAnswer: 'Le triangle de pré-signalisation.',
    },
    {
      category: '7/ Premiers Secours',
      question: "Si un dégagement d'urgence de la victime est nécessaire, où doit-elle être déplacée ?",
      correctAnswer: 'Dans un endroit suffisamment éloigné du danger et de ses conséquences.',
    },
    //8
    {
      category: '8/ Vérification Extérieure',
      question: "Montrez où s'effectue le contrôle du niveau du liquide de frein.",
      correctAnswer:
        "On montre que le niveau est entre le mini et le maxi. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcodedelaroute.io%2Fblog%2Fcontent%2Fimages%2Fsize%2Fw1000%2F2021%2F06%2FLiquide-de-frein.jpeg&f=1&nofb=1&ipt=e0d36b2782e6043134c3311dcd4419e55a70603b0a6663dd6ae5f0507a7ad5b5&ipo=images' alt='Liquide de frein'>",
    },
    {
      category: '8/ Sécurité Routière',
      question: "Quelle est la conséquence d'un niveau insuffisant du liquide de frein ?",
      correctAnswer: "Une perte d'éfficacité du freinage.",
    },
    {
      category: '8/ Premiers Secours',
      question: "En cas de panne ou d'accident, quel équipement de sécurité doit être porté avant de quitter le véhicule",
      correctAnswer: 'Il faut porter le gilet de haute visibilité avant de sortir du véhicule.',
    },
    //9
    {
      category: '9/ Vérification Intérieure',
      question: "Vérifiez la présence du certificat d'immatriculation du véhicule (ou carte grise).",
      correctAnswer:
        "Demander à l'enseignant pour le jour de l'examen (généralement dans la boîte à gants ou bien le vide poches). <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fxpformalites.fr%2Fwp-content%2Fuploads%2F2019%2F03%2Fcarte_grise_info.jpg&f=1&nofb=1&ipt=8d576dcd1d14da8ecbe803bbf2d446e381c84999df9426d8150a9479bd53fffd&ipo=images' alt='Certificat d'immatriculation du véhicule (ou carte grise)'>",
    },
    {
      category: '9/ Sécurité Routière',
      question: "Quels sont les deux autres documents obligatoires à présenter en cas de contrôle par les forces de l'ordre ?",
      correctAnswer: "L'attestation d'assurance et le permis de conduire.",
    },
    {
      category: '9/ Premiers Secours',
      question: "Pourquoi l'alerte auprès des services de secours doit-elle être rapide et précise ?",
      correctAnswer: "Pour permettre aux services de secours d'apporter les moyens adaptés aux victimes dans le délai le plus court.",
    },
    //10
    {
      category: '10/ Vérification Extérieure',
      question: "Contrôlez l'état de tous les balais d'essuie-glace du véhicule.",
      correctAnswer: "Vérifier les balais d'essuie-glace avants et arrière",
    },
    {
      category: '10/ Sécurité Routière',
      question: "Quel est le risque de circuler avec des balais d'essuie glace défectueux ?",
      correctAnswer: "Une mauvaise visibilité en cas d'intempéries.",
    },
    {
      category: '10/ Premiers Secours',
      question: "Quels sont les numéros d'urgence à composer ?",
      correctAnswer: "- 18 sapeurs pompiers - 15 SAMU - 112 pour les appels d'urgence et valide dans l'ensemble de l'UE",
    },
    //11
    {
      category: '11/ Vérification Intérieure',
      question: "Montrez l'indicateur de niveau de carburant.",
      correctAnswer:
        "Dispositif visible sur le tableau de bord. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1FZf7lKqEmC9iE-JS9T3rAHaDK%26pid%3DApi&f=1&ipt=70469f9275fc08a5204044f7e8913d951c2fa1736e4fcf6cf7e3f7724778fe1f&ipo=images' alt='Indicateur de niveau de carburant'>",
    },
    {
      category: '11/ Sécurité Routière',
      question: 'Quelles sont les précautions à prendre lors du remplissage du réservoir ?',
      correctAnswer: 'Arrêter le moteur, ne pas fumer, ne pas téléphoner.',
    },
    {
      category: '11/ Premiers Secours',
      question: "Quels comportements adopter en présence d'une victime qui ne répond pas et ne réagit pas, mais respire ?",
      correctAnswer:
        "- La placer en position stable sur le côté ou position latérale de sécurité. - Alerter les secours. - Surveiller la respiration de la victime jusqu'à l'arrivée des secours.",
    },
    //12
    {
      category: '12/ Vérification Extérieure',
      question: "Montrez où s'effectue le remplissage du liquide de refroidissement.",
      correctAnswer:
        "Le candidat ouvre le capot et montre le bocal. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.holtsauto.com%2Ffr%2Fwp-content%2Fuploads%2Fsites%2F7%2F2017%2F06%2FFotolia_108444686_S-640x427.jpg&f=1&nofb=1&ipt=d452342174a674eb58f2b4b822d3b584e2a0aae7068af550213fe10a889f786c&ipo=images' alt='Indicateur de niveau de carburant'>",
    },
    {
      category: '12/ Sécurité Routière',
      question: "Quel est le danger si l'on complète le niveau du liquide de refroidissement lorsque le moteur est chaud ?",
      correctAnswer: 'Un risque de brûlure.',
    },
    {
      category: '12/ Premiers Secours',
      question: 'Comment arrêter une hémorragie ?',
      correctAnswer:
        "En appuyant fortement sur l'endroit qui saigne avec les doigts ou avec la paume de la main en mettant un tissu propre sur la plaie.",
    },
    //13
    {
      category: '13/ Vérification Intérieure',
      question: 'Actionnez le dégivrage de la lunette arrière et montrez le voyant ou le repère correspondant.',
      correctAnswer:
        "2.  <img src='https://fr.e-guide.renault.com/sites/default/files/uas/fra/BJA/ud71440_4_1.jpg' alt='Commande dégivrage de la lunette arrière'> <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mn5oNyzH-mVIDqvJFntpZwHaFj%26pid%3DApi&f=1&ipt=ec53277b054b8760470b71c6813a29df48787c9a1a92c66147f1dbc008fe51ad&ipo=images' alt='Voyant dégivrage lunette arrière'>",
    },
    {
      category: '13/ Sécurité Routière',
      question: "Quelle peut-être la conséquence d'une panne de dégivrage de la lunette arrière ?",
      correctAnswer: "Une insuffisance ou une absence de visibilité vers l'arrière.",
    },
    {
      category: '13/ Premiers Secours',
      question: "Hors autoroute ou endroit dangereux, en cas de panne ou d'accident, où doit-être placé le triangle de pré-signalisation ?",
      correctAnswer:
        "Le triangle de pré-signalisation doit être placé à une distance d'environ 30 m de la panne ou de l'accident, ou avant un virage, ou un sommet de côte.",
    },
    //14
    {
      category: '14/ Vérification Extérieure',
      question: "Contrôlez l'état, la propreté et le fonctionnement de tous les clignotants côté trottoir.",
      correctAnswer:
        "Mettez le contact, actionnez les clignotants côté trottoir. Ensuite allez vérifier les feux correspondants, c'est-à-dire devant, derrière et au milieu pour les répétiteurs latéraux s'il y en a un, du côté droit de la voiture. Indiquez s'ils sont : propre, en bon état, fonctionne et signaler toute anomalie pour chaque feu.",
    },
    {
      category: '14/ Sécurité Routière',
      question: "Quelle est la signification d'un clignotement plus rapide ?",
      correctAnswer: "Non fonctionnement de l'une des ampoules.",
    },
    {
      category: '14/ Premiers Secours',
      question:
        "Quelles sont les conditions pour réaliser le dégagement d'urgence d'une victime en présence d'un danger réel, immédiat et non contrôlable ?",
      correctAnswer:
        'La victime doit être visible, facile à atteindre et rien ne doit gêner son dégagement. Il faut être sûre de pouvoir réaliser le dégagement de la victime.',
    },
    //15
    {
      category: '15/ Vérification Intérieure',
      question: "Montrez le voyant d'alerte signalant une pression insuffisante d'huile dans le moteur.",
      correctAnswer:
        "<img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frivegaucheblois.fr%2Fwp-content%2Fuploads%2F2020%2F05%2Fimage-5.png&f=1&nofb=1&ipt=99d474b1c49ab4a1004df269793db8f03b2d2b4a8cb6abb3f0e64479141abcc6&ipo=images' alt='Pression insuffisante d'huile dans le moteur'>",
    },
    {
      category: '15/ Sécurité Routière',
      question: "Quelles sont les conditions à respecter pour contrôler le niveau d'huile ?",
      correctAnswer: 'Moteur froid et sur un terrain plat.',
    },
    {
      category: '15/ Premiers Secours',
      question: 'Quelles sont les 3 informations à transmettre aux services de secours ?',
      correctAnswer: "Le numéro de téléphone à partir duquel l'appel est émis, la nature et la localisation la plus précise du problème.",
    },
    //16
    {
      category: '16/ Vérification Extérieure',
      question: "Contrôlez l'état, la propreté et le fonctionnement du ou des feux de brouillard arrière.",
      correctAnswer:
        "Mettez le contact, et actionnez-le ou les feux de brouillard arrière (pensez à actionner les feux de croisement avant). Ensuite allez vérifier les feux correspondants, c'est-à-dire à l'arrière de la voiture. Indiquez s'ils sont : propre, en bon état, fonctionne et signaler toute anomalie pour chaque feu.<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprismic-io.s3.amazonaws.com%2Fornikar%2F70b6fb9343761737555f647c441d1357dce906b6_brouillard-arriere.jpg&f=1&nofb=1&ipt=4afbe9aca5be818a4881d9bd0f0cd682706c67b74c5a1d692fd4910f08a0bf54&ipo=images' alt='Feux de brouillard arrière.'>",
    },
    {
      category: '16/ Sécurité Routière',
      question: 'Dans quel cas on utilise les feux de brouillard arrière ?',
      correctAnswer: 'Par temps de brouillard et neige.',
    },
    {
      category: '16/ Premiers Secours',
      question: "Par quels moyens doit être réalisée l'alerte des secours ?",
      correctAnswer:
        "L'alerte doit être donnée à l'aide d'un téléphone portable ou, à défaut, d'un téléphone fixe ou d'une borne d'appel d'urgence.",
    },
    //17
    {
      category: '17/ Vérification Intérieure',
      question: "Vérifiez la présence de l'éthylotest.",
      correctAnswer: "Voir avec le moniteur où est l'éthylotest.",
    },
    {
      category: '17/ Sécurité Routière',
      question: "A partir de quel taux d'alcoolémie, en période de permis probatoire, est-on en infraction ?",
      correctAnswer: "0.2 g/l, c'est à dire 0 verre, car dès le 1er verre ce seuil peut être dépassé.",
    },
    {
      category: '17/ Premiers Secours',
      question: "Quel comportement doit-on adopter en présence d'une victime en arrêt cardique ?",
      correctAnswer:
        '- ALERTER: alerter immédiatement les secours. - MASSER: pratiquer une réanimation cardio-pulmonaire. - DEFIBRILLER: utiliser un défibrillateur automatique (DAE) si possible.',
    },
    //18
    {
      category: '18/ Vérification Extérieure',
      question: "Contrôlez l'état, la propreté et le fonctionnement des feux de détresse à l'avant et à l'arrière.",
      correctAnswer:
        "Vérification des feux, propres, en bon état et fonctionnement (toute anomalie doit être signalée). <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faaautocarelv.com%2Fwp-content%2Fuploads%2F2018%2F03%2FAA-Auto-Care.jpg&f=1&nofb=1&ipt=3bbfe1d559a58ba14554a0e5222cee7f289a6c0fa5e3578cafa609a57794ef2b&ipo=images' alt='Feux de détresse'>",
    },
    {
      category: '18/ Sécurité Routière',
      question: 'Dans quel cas doit-on utiliser les feux de détresse?',
      correctAnswer: "En cas de panne, d'accident ou de ralentissement important.",
    },
    {
      category: '18/ Premiers Secours',
      question: 'Dans quel cas peut-on positionner une victime en Position Latérale de Sécurité (PLS) ?',
      correctAnswer: 'Si la victime ne répond pas, ne réagit pas et respire.',
    },
    //19
    {
      category: '19/ Vérification Intérieure',
      question: 'Montrez la commande de réglage du volant.',
      correctAnswer: "Le candidat montre l'emplacement. Il ne lui est pas demandé de changer son réglage.",
    },
    {
      category: '19/ Sécurité Routière',
      question: 'Pourquoi est-il important de bien régler son volant? Citez deux exemples.',
      correctAnswer:
        "- Le confort de conduite. - L'accessibilité aux commandes. - La visibilité du tableau de bord. - L'efficacité des airbags.",
    },
    {
      category: '19/ Premiers Secours',
      question: 'Dans quelle situation peut-on déplacer une victime ?',
      correctAnswer: "En présence d'un danger réel, immédiat, non contrôlable. Le déplacement de la victime doit rester exceptionnel.",
    },
    //20
    {
      category: '20/ Vérification Extérieure',
      question: "Contrôlez l'état, la propreté et le fonctionnement des feux de route.",
      correctAnswer:
        "Actionnez les feux de route. Ensuite allez vérifier les feux correspondants, c'est-à-dire devant et derrière de chaque côté de la voiture. Indiquez s'ils sont : propre, en bon état, fonctionne et signaler toute anomalie pour chaque feu. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bWyW2ubtZiuisvR0_OdMKwHaE8%26pid%3DApi&f=1&ipt=e93d2925d233f5e07821228b77734601a090c32c0c0a7b0bfac9ea6ec6318299&ipo=images' alt='Feux de route'>",
    },
    {
      category: '20/ Sécurité Routière',
      question: "Citez un cas d'utilisation de l'appel lumineux",
      correctAnswer: "- Pour avertir de son approche. - En cas de danger. - A la place de l'avertisseur sonore.",
    },
    {
      category: '20/ Premiers Secours',
      question: "En cas de panne ou d'accident, quel équipement de sécurité doit être porté avant de quitter le véhicule ?",
      correctAnswer:
        "Il faut porter le gilet de haute visibilité avant de sortir du véhicule. Le terme 'gilet jaune' peut être utilisé par le candidat.",
    },
    //21
    {
      category: '21/ Vérification Intérieure',
      question: "Positionnez la commande pour diriger l'air vers le pare-brise.",
      correctAnswer:
        "Tournez 1 en position <img class='pictoImg' src=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.VLlilIgx752wfrmhvhxxfgHaDJ%26pid%3DApi&f=1&ipt=b998fb918f58e14b3f8a7f638bd0e90f8147bbd9a00cc436b3bf60c13af0dd28&ipo=images' alt='Picto désembuage'>, tournez 2 en position 4 et tournez 3 en position « chaud ». <img src='https://fr.e-guide.renault.com/sites/default/files/uas/fra/BJA/ud62806_3_1.jpg' alt='Feux de route'>",
    },
    {
      category: '21/ Sécurité Routière',
      question: 'Citez deux éléments complémentaires permettant un désembuage efficace.',
      correctAnswer: "- La commande de vitesse de ventilation. - La commande d'air chaud. - La climatisation.",
    },
    {
      category: '21/ Premiers Secours',
      question: "Quel est l'objectif du Signal d'Alerte et d'Information des Populations (SAIP) ?",
      correctAnswer: "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire.",
    },
    //22
    {
      category: '22/ Vérification Extérieure',
      question: "Montrez où doit s'effectuer le contrôle du niveau d'huile moteur.",
      correctAnswer:
        "Le candidat montre la jauge. Pas de manipulation exigée. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbardahl.fr%2Fgetmedia%2F69d91063-6475-46ce-beb0-8e2176998d54%2FBardahl_Niveau_Huile.jpg%3B.aspx%3Fext%3D.jpg%26width%3D993&f=1&nofb=1&ipt=223d470ef0f5e02fff4b155e938ea9339b249c71e6cbfb7ea915aa8fae5dba7f&ipo=images' alt='Jauge huile moteur'>",
    },
    {
      category: '22/ Sécurité Routière',
      question: "Quel est le principal risque d'un manque d'huile moteur ?",
      correctAnswer: 'Un risque de détérioration ou de casse du moteur.',
    },
    {
      category: '22/ Premiers Secours',
      question: "Comment est diffusée l'alerte émise par le Signal d'Alerte et d'Information aux Populations (SAIP) ?",
      correctAnswer: "Grâce aux sirènes, aux médias tels que Radio France et France Télévision ou encore grâce à l'application SAIP.",
    },
    //23
    {
      category: '23/ Vérification Intérieure',
      question: "Montrez le voyant d'alerte signalant un défaut de batterie.",
      correctAnswer:
        "Le candidat montre la jauge. Pas de manipulation exigée. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MrrtusiyteLLcN3QKseMLgHaEC%26pid%3DApi&f=1&ipt=5556dc191696a0490acb6bed42a7f3baea2ddcd361239f3e0407d828a098e6c1&ipo=images' alt='Voyant défaut de batterie'>",
    },
    {
      category: '23/ Sécurité Routière',
      question: "Qu'est-ce qui peut provoquer la décharge de la batterie, moteur éteint ?",
      correctAnswer: 'Les feux ou accessoires électriques en fonctionnement.',
    },
    {
      category: '23/ Premiers Secours',
      question: 'A partir de quel âge peut-on suivre une formation aux premiers secours ?',
      correctAnswer: 'A partir de 10 ans.',
    },
    //24
    {
      category: '24/ Vérification Extérieure',
      question: "Montrez l'emplacement de la batterie du véhicule.",
      correctAnswer:
        "<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F5wuksq1Fdxk%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=f7d0fe47d3870c62fba4ceefaf35cde12f3d04a05f0b66afc7bd799ed5f35b32&ipo=images' alt='Batterie du véhicule'>",
    },
    {
      category: '24/ Sécurité Routière',
      question: 'Quelle est la solution en cas de panne de batterie pour démarrer le véhicule sans le déplacer ?',
      correctAnswer: 'Brancher une deuxième batterie en parallèle (ou les + ensemble et les - ensemble) ou la remplacer.',
    },
    {
      category: '24/ Premiers Secours',
      question: 'Pourquoi faut-il pratiquer immédiatement une réanimation cardio-pulmonaire sur une victime en arrêt cardique ?',
      correctAnswer: 'Car les lésions du cerveau, surviennent dès les premières minutes.',
    },
    //25
    {
      category: '25/ Vérification Intérieure',
      question: 'De quelle couleur est le voyant qui indique une défaillance du système de freinage ?',
      correctAnswer:
        "Rouge. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.-aQ1072SdkyNeQJvz3cYiQHaE7%26pid%3DApi&f=1&ipt=e99146ae9aeb879855e06d024259a082b00424ed47c526ea8bae60361ae6f0b9&ipo=images' alt='Voyant de défaillance du système de freinage'>",
    },
    {
      category: '25/ Sécurité Routière',
      question: 'Quel est le risque de circuler avec un frein de parking mal desserré ?',
      correctAnswer: 'Une dégradation du système de freinage.',
    },
    {
      category: '25/ Premiers Secours',
      question: "Hors autoroute ou endroit dangereux, en cas de panne ou d'accident, où doit être placé le triangle de pré-signalisation ?",
      correctAnswer:
        "Le triangle de pré-signalisation doit être placé à une distance d'environ 30 m de la panne ou de l'accident, ou avant un virage, ou un sommet de côte.",
    },
    //26
    {
      category: '26/ Vérification Extérieure',
      question: "Contrôlez l'état, la propreté et le fonctionnement des feux de croisement.",
      correctAnswer:
        "Allumer les feux de croisement. Vérification des feux, propres en bon état et fonctionnent (toute anomalie doit être signalée). <img src='https://fr.e-guide.renault.com/sites/default/files/uas/fra/BJA/ud56150_1_1.jpg' alt='Feux de croisement'>",
    },
    {
      category: '26/ Sécurité Routière',
      question: "Quelles sont les conséquences d'un mauvais réglage des feux de croisement.",
      correctAnswer: "Une mauvaise vision vers l'avant et un risque d'éblouissement des autres usagers.",
    },
    {
      category: '26/ Premiers Secours',
      question: 'Dans quelle situation peut-on déplacer une victime ?',
      correctAnswer: "En présence d'un danger réel, immédiat, non contrôlable. Le déplacement de la victime doit rester exceptionnel.",
    },
    //27
    {
      category: '27/ Vérification Intérieure',
      question: "Montrez le voyant d'alerte signalant une température trop élevée du liquide de refroidissement.",
      correctAnswer:
        "<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.prismic.io%2Fornikar%2Fc8e71fc360514d1721540bcf19b1e324415dceb4_voyant-liquide-refroidissement.jpg%3Fauto%3Dcompress%2Cformat&f=1&nofb=1&ipt=3411af983cb2f5c64709c4adcd6880ab5a5f3f8962d8767b63089b915926dbf7&ipo=images' alt='Voyant liquide de refroidissement'>",
    },
    {
      category: '27/ Sécurité Routière',
      question: "Quelle est la conséquence d'une température trop élevée du liquide de refroidissement.",
      correctAnswer: 'Une surchauffe ou une casse du moteur.',
    },
    {
      category: '27/ Premiers Secours',
      question:
        "Lors d'un appel avec les services de secours, pourquoi devez-vous attendre que votre correspondant vous autorise à raccrocher ?",
      correctAnswer:
        "Car il peut nous conseiller ou nous guider dans la réalisation des gestes à faire, ou ne pas faire, jusqu'à l'arrivée des secours.",
    },
    //28
    {
      category: '28/ Vérification Extérieure',
      question: "Vérifiez l'état et la propreté des dispositifs réfléchissants.",
      correctAnswer:
        "<img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Forleansconduite.com%2Fwp-content%2Fuploads%2F2018%2F01%2FQ28.jpg&f=1&nofb=1&ipt=3541d83172694c4f438c713f8771cdbc345321c3a338252ac06a67082f5b73ec&ipo=images' alt='dispositifs réfléchissants'>",
    },
    {
      category: '28/ Sécurité Routière',
      question: "Quelle est l'utilité des dispositifs réfléchissants ?",
      correctAnswer: 'Rendre visible le véhicule la nuit',
    },
    {
      category: '28/ Premiers Secours',
      question: 'A quel moment pouvez-vous mettre fin à un appel avec les secours?',
      correctAnswer: 'Uniquement lorsque notre correspondant nous invite à le faire.',
    },
    //29
    {
      category: '29/ Vérification Intérieure',
      question: "Montrez le voyant signalant la mauvaise fermeture d'une portière.",
      correctAnswer:
        "<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fevs-strapi-images-prod.imgix.net%2F0043c_H_65fb5d1295.jpg%3Fw%3D1080%26q%3D75&f=1&nofb=1&ipt=d580b39b1467aba06e927372a05c1db0cf7fb884ac62b3d9113cc62d18b096c4&ipo=images' alt='Voyant signalant la mauvaise fermeture d'une portière'>",
    },
    {
      category: '29/ Sécurité Routière',
      question: "Quelle précaution dois-je prendre pour que les enfants installés à l'arrière ne puissent pas ouvrir leur portière ?",
      correctAnswer: 'Actionner la sécurité enfant sur les deux portières arrière.',
    },
    {
      category: '29/ Premiers Secours',
      question: "Citez les 3 manières d'évaluer l'état de conscience d'une victime.",
      correctAnswer:
        "- Lui poser des questions simples ('Comment ça va ?', 'vous m'entendez ?'). - Lui secouer doucement les épaules. - Lui prendre la main en lui demandant d'exécuter un geste simple ('serrez-moi la main').",
    },
    //30
    {
      category: '30/ Vérification Extérieure',
      question: "Contrôlez l'état, la propreté et le fonctionnement des feux de position à l'avant et à l'arrière du véhicule.",
      correctAnswer: 'Les actionner et vérifier si ils sont propres, en bon état et fonctionnent (toute anomalie doit être signalée).',
    },
    {
      category: '30/ Sécurité Routière',
      question: 'Par temps clair, à quelle distance doivent les feux de position être visibles ?',
      correctAnswer: 'A 150 mètres.',
    },
    {
      category: '30/ Premiers Secours',
      question: 'Quels sont les risques pour une personne en perte de connaissance qui est allongée sur le dos ?',
      correctAnswer: "L'arrêt respiratoire et l'arrêt cardiaque.",
    },
    //31
    {
      category: '31/ Vérification Intérieure',
      question: 'Actionnez les feux de détresse.',
      correctAnswer: 'Les actionner et vérifier si les feux sont propres, en bon état et fonctionnent (toute anomalie doit être signalée).',
    },
    {
      category: '31/ Sécurité Routière',
      question: 'Quand doit-on utiliser les feux de détresse ?',
      correctAnswer: "En cas de panne, d'accident ou de ralentissement important.",
    },
    {
      category: '31/ Premiers Secours',
      question:
        "Quels comportements adopter en cas de diffusion du signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) ?",
      correctAnswer: "- Se mettre en sécurité - S'informer grâce aux médias des autorités - Respecter les consignes des autorités",
    },
    //32
    {
      category: '32/ Vérification Extérieure',
      question: "Sur le flanc d'un pneumatique, désignez le repère du témoin d'usure de la bande de roulement.",
      correctAnswer:
        "<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sucyconduites.com%2Fwp-content%2Fdocs%2Fle-rep%25C3%25A8re-du-t%25C3%25A9moin-dusure-de-la-bande-de-roulement.jpg&f=1&nofb=1&ipt=b249ec38645d86e64e339ad7ab9aa7071357945affa5790e387eacb19ec16f52&ipo=images' alt='témoin d'usure de la bande de roulement'> ",
    },
    {
      category: '32/ Sécurité Routière',
      question: "Qu'est-ce que l'aquaplanage, et quelle peut être sa conséquence ?",
      correctAnswer: "La présence d'un film d'eau entre le pneumatique et la chaussée pouvant entraîner une perte de contrôle du véhicule.",
    },
    {
      category: '32/ Premiers Secours',
      question: "Si un dégagement d'urgence de la victime est nécessaire, où doit-elle être déplacée ?",
      correctAnswer: 'Dans un endroit suffisamment éloigné du danger et de ses conséquences.',
    },
    //33
    {
      category: '33/ Vérification Intérieure',
      question: "Montrez la commande permettant d'actionner le régulateur de vitesse.",
      correctAnswer:
        "<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fevs-profilepics.s3.amazonaws.com%2Fproduction%2Fcdr%2Fimages%2Fattachments%2F000%2F005%2F550%2Foriginal%2F0054cA.jpg%3F1543304517&f=1&nofb=1&ipt=b6ed499da8d303df5503efe2a54454bc924b774a7e1bd8b3b8a2952287dccf72&ipo=images' alt='Commande de régulateur de vitesse.'> ",
    },
    {
      category: '33/ Sécurité Routière',
      question: 'Sans actionner la commande du régulateur, comment le désactiver rapidement ?',
      correctAnswer: "En appuyant sur la pédale de frein ou d'embrayage.",
    },
    {
      category: '33/ Premiers Secours',
      question: "Sur autoroute, comment indiquer avec précision les lieux de l'accident depuis un téléphone portable ?",
      correctAnswer: "En indiquant le numéro de l'autoroute, le sens de circulation et le point kilométrique",
    },
    //34
    {
      category: '34/ Vérification Extérieure',
      question: 'Ouvrez la trappe à carburant et/ou vérifiez la bonne fermeture du bouchon.',
      correctAnswer: '',
    },
    {
      category: '34/ Sécurité Routière',
      question: 'Quelles sont les précautions à prendre lors du remplissage du réservoir ?',
      correctAnswer: 'Arrêter le moteur, ne pas fumer, ne pas téléphoner',
    },
    {
      category: '34/ Premiers Secours',
      question: "Pourquoi l'alerte auprès des services de secours doit-elle être rapide et précise ?",
      correctAnswer: "Pour permettre aux services de secours d'apporter les moyens adaptés aux victimes dans le délai le plus court.",
    },
    //35
    {
      category: '35/ Vérification Intérieure',
      question: "Sans l'actionner, montrez la commande de l'avertisseur sonore.",
      correctAnswer: '',
    },
    {
      category: '35/ Sécurité Routière',
      question: "Dans quel cas peut-on utiliser l'avertisseur sonore en agglomération ?",
      correctAnswer: 'En cas de danger immédiat.',
    },
    {
      category: '35/ Premiers Secours',
      question: 'Pourquoi ne faut-il pas laisser une personne en perte de connaissance allongée sur le dos ?',
      correctAnswer: 'Car elle risque un étouffement par: - Des liquides présents dans la gorge. - La chute de la langue en arrière.',
    },
    //36
    {
      category: '36/ Vérification Extérieure',
      question: "Montrez où s'effectue le remplissage de l'huile moteur.",
      correctAnswer:
        "<img src='http://verificationpermis.free.fr/images/huile-moteur-emplacement.jpg' alt='bouchon de remplissage de l'huile moteur'>",
    },
    {
      category: '36/ Sécurité Routière',
      question: "Quel est le risque d'un manque d'huile moteur ?",
      correctAnswer: 'Un risque de détérioration ou de casse du moteur.',
    },
    {
      category: '36/ Premiers Secours',
      question:
        "L'utilisation d'un Défibrillateur Automatisé (DAE) sur une victime qui n'est pas en arrêt cardique présente-t-elle un risque ?",
      correctAnswer: 'Non, car le défibrillateur se déclenche uniquement quand la victime est en arrêt cardique.',
    },
    //37
    {
      category: '37/ Vérification Intérieure',
      question: "Montrez la commande permettant de désactiver l'airbag du passager avant.",
      correctAnswer:
        "<img src='https://www.bfrauto.net/images/books/862/1/index.83.jpg' alt='commande pour désactiver l'airbag du passager avant.'>",
    },
    {
      category: '37/ Sécurité Routière',
      question: "Dans quelle situation doit-on désactiver l'airbag du passager avant ?",
      correctAnswer: "Lors du transport d'un enfant à l'avant dans un siège auto, dos à la route.",
    },
    {
      category: '37/ Premiers Secours',
      question:
        "Quelles sont les conditions pour réaliser le dégagement d'urgence d'une victime en présence d'un danger réel, immédiat et non contrôlable ?",
      correctAnswer:
        'La victime doit être visible, facile à atteindre et rien ne doit gêner son dégagement. Il faut être sûre de pouvoir réaliser le dégagement de la victime.',
    },
    //38
    {
      category: '38/ Vérification Extérieure',
      question: "A l'aide de la plaque indicative, donnez la pression précononisée pour les pneumatiques arrières, véhicule chargé.",
      correctAnswer:
        "Si vous devez vérifier la pression lorsque les pneus sont chauds, ajoutez 0,2 à 0,3 bar à la pression recommandée. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.puretyre.co.uk%2Fwp-content%2Fuploads%2F2017%2F09%2FRenault-Clio-Tyre-Pressure-Placard.jpg&f=1&nofb=1&ipt=17b86b577922071e3a14a94e27b70a02fead3f0a58e33f14c030f9702613379b&ipo=images' alt='Pression recommandée pneu arrière.'>",
    },
    {
      category: '38/ Sécurité Routière',
      question: 'A quelle fréquence est-il préconisé de vérifier la pression des pneus ?',
      correctAnswer: 'Chaque mois, pour une utilisation normale de son véhicule, et avant chaque long trajet.',
    },
    {
      category: '38/ Premiers Secours',
      question: "Comment et pourquoi protéger une zone de danger en cas d'accident de la route ?",
      correctAnswer:
        'En délimitant clairement et largement la zone de danger de façon visible pour protéger les victimes et éviter un sur-accident.',
    },
    //39
    {
      category: '39/ Vérification Intérieure',
      question: "Montrez le voyant signalant l'absence de bouclage de la ceinture de sécurité du conducteur.",
      correctAnswer:
        "Pour l'afficher il faut enlever sa ceinture de sécurité. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprismic-io.s3.amazonaws.com%2Fornikar%2F0437dad0f96f06d707a76d50aa3a18ab8e02b82d_voyant-ceinture.jpg&f=1&nofb=1&ipt=72c03d78d732823e8fe661098c2412c41f9a09c639448e0939b3067876615e73&ipo=images' alt='Voyant signalant l'absence d'une ceinture de sécurité du conducteur.'>",
    },
    {
      category: '39/ Sécurité Routière',
      question: 'En règle générale, à partir de quel âge un enfant peut-il être installé sur le siège passager avant du véhicule ?',
      correctAnswer: '10 ans.',
    },
    {
      category: '39/ Premiers Secours',
      question:
        "Comment est composé le signal d'alerte du système d'Alerte et d'Information des Populations (SAIP) diffusé par les sirènes ?",
      correctAnswer:
        "De deux codes distincts : - le Signal National d'Alerte (SNA), variation du signal sur trois cycles successifs. - Le signal de fin d'alerte, signal continu.",
    },
    //40
    {
      category: '40/ Vérification Extérieure',
      question: "Vérifiez le fonctionnement de l'éclairage de la plaque d'immatriculation à l'arrière.",
      correctAnswer:
        "Mettre en marche n'importe quel feu pour que la lumière puisse s'allumer (position ou croisement). Toute anomalie doit être signalée.",
    },
    {
      category: '40/ Sécurité Routière',
      question: "Un défaut d'éclairage de la plaque lors du contrôle technique entraîne-t-il une contre-visite ?",
      correctAnswer: "'Oui.",
    },
    {
      category: '40/ Premiers Secours',
      question: 'Quelles sont les 3 informations à transmettre aux services de secours ?',
      correctAnswer: "Le numéro de téléphone à partir duquel l'appel est émis, la nature et la localisation la plus précise du problème.",
    },
    //41
    {
      category: '41/ Vérification Intérieure',
      question: "Vérifiez la présence de l'attestation d'assurance du véhicule et de sa vignette sur le pare-brise.",
      correctAnswer: 'Dans la boîte à gant le document vert ainsi que la vignette verte sur le pare-brise.',
    },
    {
      category: '41/ Sécurité Routière',
      question: "Quels sont les deux autres documents obligatoires à présenter en cas de contrôle par les forces de l'ordre ?",
      correctAnswer: "Le certificat d'immatriculation et le permis de conduire. Le terme 'carte de grise' est accepté.",
    },
    {
      category: '41/ Premiers Secours',
      question: "Qu'est ce qu'une hémorragie ?",
      correctAnswer: "C'est une perte de sang prolongée qui ne s'arrête pas. Elle imbibe de sang un mouchoir en quelques secondes.",
    },
    //42
    {
      category: '42/ Vérification Extérieure',
      question: "Indiquez où se situe la sécurité enfant sur l'une des portières à l'arrière du véhicule.",
      correctAnswer:
        "<img src='https://fr.e-guide.renault.com/sites/default/files/uas/fra/BJA/ud59114_2_2.jpg' alt='Sécurité enfant sur l'une des portières à l'arrière'>",
    },
    {
      category: '42/ Sécurité Routière',
      question: "Si la sécurité enfant est enclenchée, est-il possible d'ouvrir la portière arrière depuis l'extérieur ?",
      correctAnswer: 'Oui.',
    },
    {
      category: '42/ Premiers Secours',
      question: "Quels sont les risques pour une personne victime d'une hémorragie ?",
      correctAnswer: 'Entraîner pour la victime une détresse circulatoire ou un arrêt cardiaque.',
    },
    //43
    {
      category: '43/ Vérification Intérieure',
      question: 'Allumez les feux de brouillard arrières et montrez le voyant correspondant.',
      correctAnswer:
        "Ouvrir le capot et montrer l'orifice de remplissage. <a href='https://www.youtube.com/watch?v=krW2HmgdZic' target='_blank'>Voir la vidéo</a> Voyant feux de brouillard arrière. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fevs-profilepics.s3.amazonaws.com%2Fproduction%2Fcdr%2Fimages%2Fattachments%2F000%2F005%2F469%2Foriginal%2F0045cF.jpg%3F1543304132&f=1&nofb=1&ipt=82dfd9acca030470671dbbe15ea503069d5cbd12d54d1768e998d4c64fcd7d0d&ipo=images' alt='Voyant feux de brouillard arrière'>",
    },
    {
      category: '43/ Sécurité Routière',
      question: 'Pouvez-vous utiliser les feux de brouillards par forte pluie ?',
      correctAnswer: 'Non.',
    },
    {
      category: '43/ Premiers Secours',
      question: "Quels sont les signes d'un arrêt cardiaque ?",
      correctAnswer: 'La victime ne répond pas, ne réagit pas et ne respire pas ou présente une respiration anormale.',
    },
    //44
    {
      category: '44/ Vérification Extérieure',
      question: "Avec l'assistance de l'accompagnateur, contrôlez l'état, la propreté et le fonctionnement du ou des feux de recul.",
      correctAnswer:
        "Lui demander d'activer la marche arrière. Vérification des feux, propres, en bon état et qui fonctionnent (toute anomalie doit être signalée). <img src='https://fr.e-guide.renault.com/sites/default/files/uas/fra/BJA/ud63280_1_4.jpg' alt='Feux de recul'>",
    },
    {
      category: '44/ Sécurité Routière',
      question: 'Quelles sont les deux utilités des feux de recul ?',
      correctAnswer: '- Eclairer la zone de recul la nuit. - Avertir les autres usagers de la manoeuvre.',
    },
    {
      category: '44/ Premiers Secours',
      question: "Qu'est ce qu'un défibrillateur automatisé externe (DAE) ?",
      correctAnswer: "C'est un appareil qui peut permettre de rétablir une activité cardiaque normale à une victime en arrêt cardiaque.",
    },
    //45
    {
      category: '45/ Vérification Intérieure',
      question: "Montrez comment régler la hauteur de l'appui-tête du siège conducteur.",
      correctAnswer:
        'On tire vers le haut pour le faire monter, on appuie sur le bouton tout en poussant vers le bas pour le faire descendre.',
    },
    {
      category: '45/ Sécurité Routière',
      question: "Quelle est l'utilité de l'appui-tête ?",
      correctAnswer: 'Permet de retenir le mouvement de la tête en cas de choc et de limiter les blessures.',
    },
    {
      category: '45/ Premiers Secours',
      question: "Par quels moyens doit être réalisée l'alerte des secours ?",
      correctAnswer:
        "L'alerte doit être donnée à l'aide d'un téléphone portable ou, à défaut, d'un téléphone fixe ou d'une borne d'appel d'urgence.",
    },
    //46
    {
      category: '46/ Vérification Extérieure',
      question: "Avec l'assistance de l'accompagnateur, contrôlez l'état, la propreté et le fonctionnement du ou des feux de stop.",
      correctAnswer:
        "Demander à l'accompagnateur d'appuyer sur la pédale de frein. Vérifier si propres, en bon état et fonctionnent bien.'>",
    },
    {
      category: '46/ Sécurité Routière',
      question: ' Quelle est la conséquence en cas de panne des feux de stop ?',
      correctAnswer: "Un manque d'information pour les usagers suiveurs et un risque de collision.",
    },
    {
      category: '46/ Premiers Secours',
      question:
        "Lors d'un appel avec les services de secours, pourquoi devez-vous attendre que votre correspondant vous autorise à raccrocher ?",
      correctAnswer:
        "Car il peut nous conseiller ou nous guider dans la réalisation des gestes à faire, ou ne pas faire, jusqu'à l'arrivée des secours.",
    },
    //47
    {
      category: '47/ Vérification Intérieure',
      question: 'De quelle couleur est le voyant qui indique au conducteur que le feu de brouillard arrière est allumé ?',
      correctAnswer:
        "Orange. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fevs-profilepics.s3.amazonaws.com%2Fproduction%2Fcdr%2Fimages%2Fattachments%2F000%2F005%2F469%2Foriginal%2F0045cF.jpg%3F1543304132&f=1&nofb=1&ipt=82dfd9acca030470671dbbe15ea503069d5cbd12d54d1768e998d4c64fcd7d0d&ipo=images' alt='Voyant feu de brouillard arrière'>",
    },
    {
      category: '47/ Sécurité Routière',
      question: 'Quelle est la différence entre un voyant orange et un voyant rouge ?',
      correctAnswer: '- Rouge: Une anomalie de fonctionnement ou un danger. - Orange: un élément important.',
    },
    {
      category: '47/ Premiers Secours',
      question: "Qu'est ce qu'un arrêt cardiaque ?",
      correctAnswer: "Le coeur ne fonctionne plus ou fonctionne d'une façon anarchique.",
    },
    //48
    {
      category: '48/ Vérification Extérieure',
      question: 'Ouvrez et refermez le capot, puis vérifiez sa bonne fermeture.',
      correctAnswer:
        "Tire la manette dans l'habitacle situé généralement sous le volant très proche de la portière et tu entendras un 'Clac'. Là le capot se soulève légèrement. Ensuite passe la main sous le capot pour chercher une barrette et soulève le capot. Puis referme le capot en laissant tomber de quelques centimètres de hauteur. Montre sa bonne fermeture en essayant de le soulever.",
    },
    {
      category: '48/ Sécurité Routière',
      question: "En roulant, quel est le risque d'une mauvaise fermeture du capot ?",
      correctAnswer: "Un risque d'ouverture du capot pouvant entraîner un accident.",
    },
    {
      category: '48/ Premiers Secours',
      question: "Quel est le risque principal d'un arrêt cardiaque sans intervention des secours ?",
      correctAnswer: 'La mort de la victime qui survient en quelques minutes',
    },
    //49
    {
      category: '49/ Vérification Intérieure',
      question: "Montrez la commande de recyclage de l'air.",
      correctAnswer:
        "4. <img src='https://fr.e-guide.renault.com/sites/default/files/uas/fra/BJA/ud71440_4_1.jpg' alt='Commande de recyclage de l'air'>",
    },
    {
      category: '49/ Sécurité Routière',
      question: "Quel peut être le risque de maintenir le recyclage de l'air de manière prolongée ?",
      correctAnswer: "Un risque de mauvaise visibilité par l'apparition de buée sur les surfaces vitrées.",
    },
    {
      category: '49/ Premiers Secours',
      question: 'Quels sont les risques pour une personne en perte de connaissance qui est allongée sur le dos ?',
      correctAnswer: "L'arrêt respiratoire et l'arrêt cardiaque.",
    },
    //50
    {
      category: '50/ Vérification Extérieure',
      question: "Montrez l'orifice de remplissage du produit lave-glace.",
      correctAnswer:
        "Ouvrir le capot et montrer l'orifice de remplissage. <a href='https://www.youtube.com/watch?v=krW2HmgdZic' target='_blank'>Voir la vidéo</a> Voyant feux de route. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.CCfBH8pYYMQQZ21IQc4VUAHaDa%26pid%3DApi&f=1&ipt=caff6ce0739258f29c03bf7c779a65e485e016a306814f6c0064a108384a3014&ipo=images' alt='Voyant feux de route'>",
    },
    {
      category: '50/ Sécurité Routière',
      question: "Quel est le principal risque d'une absence de liquide lave-glace ?",
      correctAnswer: "Un risque d'éblouissement des autres usagers.",
    },
    {
      category: '50/ Premiers Secours',
      question: "Quel est l'objectif du Signal d'Alerte et d'Information des Populations (SAIP) ?",
      correctAnswer: "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire.",
    },
    //51
    {
      category: '51/ Vérification Intérieure',
      question: 'Allumez les feux de route et montrez le voyant correspondant.',
      correctAnswer:
        "<a href='https://www.youtube.com/watch?v=krW2HmgdZic' target='_blank'>Voir la vidéo</a> Voyant feux de route. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.CCfBH8pYYMQQZ21IQc4VUAHaDa%26pid%3DApi&f=1&ipt=caff6ce0739258f29c03bf7c779a65e485e016a306814f6c0064a108384a3014&ipo=images' alt='Voyant feux de route'>",
    },
    {
      category: '51/ Sécurité Routière',
      question: "Quel est le risque de maintenir les feux de route lors d'un croisement avec d'autres usagers ?",
      correctAnswer: "Un risque d'éblouissement des autres usagers.",
    },
    {
      category: '51/ Premiers Secours',
      question: "Quel est l'objectif du Signal d'Alerte et d'Information des Populations (SAIP) ?",
      correctAnswer: "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire.",
    },
    //52
    {
      category: '52/ Vérification Extérieure',
      question: "Vérifiez l'état, la propreté et le fonctionnement des feux diurnes.",
      correctAnswer:
        "Mettre le contact ou le moteur en marche pour les allumer. Vérification des feux, propres, en bon état et qui fonctionnent (toute anomalie doit être signalée). <img src='https://www.largus.fr/actualite-automobile/tarifs-renault-clio-5-prix-moteurs-equipements-options-9709399-11701382-photos.html' alt='Feux diurnes'>",
    },
    {
      category: '52/ Sécurité Routière',
      question: "Quelle est l'utilité des feux diurnes ?",
      correctAnswer: 'Rendre le véhicule plus visible le jour.',
    },
    {
      category: '52/ Premiers Secours',
      question: 'A quel moment pouvez-vous mettre fin à un appel avec les secours ?',
      correctAnswer: 'Uniquement lorsque notre correspondant nous invite à le faire.',
    },
    //53
    {
      category: '53/ Vérification Intérieure',
      question: 'Vérifiez la présence du constat amiable dans le véhicule.',
      correctAnswer:
        "Demander au moniteur le jour de l'examen. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1syos9fsbz8ei.cloudfront.net%2FImages%2FBlogImages%2Fconstat-amiable_17469.png&f=1&nofb=1&ipt=4b6af64e1a18d75a71d78b43ff5408d23ee6dd877f51c0f14db6e06e91a92f56&ipo=images' alt='Constat amiable'>",
    },
    {
      category: '53/ Sécurité Routière',
      question: "En cas d'accident, dans quel délai doit-il être transmis à l'assureur ?",
      correctAnswer: '5 Jours.',
    },
    {
      category: '53/ Premiers Secours',
      question: "Quel est le risque principal d'un arrêt cardiaque sans intervention des secours ?",
      correctAnswer: 'La mort de la victime qui survient en quelques minutes.',
    },
    //54
    {
      category: '54/ Vérification Extérieure',
      question: 'Vérifiez la présence du triangle de pré-signalisation.',
      correctAnswer: "Demander au moniteur le jour de l'examen mais souvent dans le coffre.",
    },
    {
      category: '54/ Sécurité Routière',
      question: 'Utilise-t-on le triangle de pré-signalisation sur autoroute ?',
      correctAnswer: 'Non.',
    },
    {
      category: '54/ Premiers Secours',
      question: "Quel comportement doit-on adopter en présence d'une victime en arrêt cardique ?",
      correctAnswer:
        '- ALERTER: alerter immédiatement les secours. - MASSER: pratiquer une réanimation cardio-pulmonaire. - DEFIBRILLER: utiliser un défibrillateur automatique (DAE) si possible.',
    },
    //55
    {
      category: '55/ Vérification Intérieure',
      question: 'De quelle couleur est le voyant qui indique une défaillance du système de freinage ?',
      correctAnswer:
        "Rouge. <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.-aQ1072SdkyNeQJvz3cYiQHaE7%26pid%3DApi&f=1&ipt=e99146ae9aeb879855e06d024259a082b00424ed47c526ea8bae60361ae6f0b9&ipo=images' alt='Voyant défaillance du système de freinage'>",
    },
    {
      category: '55/ Sécurité Routière',
      question: 'Quel est le risque de circuler avec un frein de parking mal desserré ?',
      correctAnswer: 'Une dégradation du système de freinage.',
    },
    {
      category: '55/ Premiers Secours',
      question: 'Comment arrêter une hémorragie ?',
      correctAnswer:
        "En appuyant fortement sur l'endroit qui saigne avec les doigts ou avec la paume de la main en mettant un tissu propre sur la plaie.",
    },
    //56
    {
      category: '56/ Vérification Extérieure',
      question: "Montrez où s'effectue le changement d'une ampoule à l'avant du véhicule.",
      correctAnswer:
        "Se fait par l'arrière du bloc optique. <img src='https://tse4.mm.bing.net/th?id=OIP.1_qsHDoCUygN5wD-E0D_qQHaFj&pid=Api&P=0&h=180' alt='Emplacement ampoule à l'avant du véhicule'>",
    },
    {
      category: '56/ Sécurité Routière',
      question: "Quelles sont les conséquences en cas de panne d'un feu de croisement ?",
      correctAnswer: "Une mauvaise visibilité et le risque d'être confondu avec un deux roues",
    },
    {
      category: '56/ Premiers Secours',
      question: "Citez les 3 manières d'évaluer l'état de conscience d'une victime.",
      correctAnswer:
        "- Lui poser des questions simples ('Comment ça va ?', 'vous m'entendez ?'). - Lui secouer doucement les épaules. - Lui prendre la main en lui demandant d'exécuter un geste simple ('serrez-moi la main').",
    },
    //57
    {
      category: '57/ Vérification Intérieure',
      question: 'Si le véhicule en est équipé, montrez la commande du limiteur de vitesse.',
      correctAnswer:
        "1. <img src='https://ch.e-guide.renault.com/sites/default/files/uas/fra/BJA/ud68953_5_2.jpg' alt='Commande limiteur de vitesse'> 2. <img src='https://tse2.mm.bing.net/th?id=OIP.lSllvjOw0e5U8QBBsPFbpAHaEJ&pid=Api&P=0&h=180' alt='Commande limiteur de vitesse'>",
    },
    {
      category: '57/ Sécurité Routière',
      question: "Quelle est l'utilité d'un limiteur de vitesse ?",
      correctAnswer: 'Ne pas dépasser la vitesse programmée par le conducteur.',
    },
    {
      category: '57/ Premiers Secours',
      question: "Quels sont les numéros d'urgence à composer ?",
      correctAnswer: "- 18 sapeurs pompiers - 15 SAMU - 112 pour les appels d'urgence et valide dans l'ensemble de l'UE",
    },
    //58
    {
      category: '58/ Vérification Extérieure',
      question: "Montrez où s'effectue le changement d'une ampoule à l'arrière du véhicule.",
      correctAnswer:
        "<a href='https://fr.e-guide.renault.com/fra/Clio-5/FEUX-ARRIERE-ET-LATERAUX-remplacement-des-lampes' target='_blank'>Page de Renault</a>",
    },
    {
      category: '58/ Sécurité Routière',
      question: "Quelles sont les conséquences en cas de panne d'un feu de position arrière ?",
      correctAnswer: 'Être mal vu et un risque de collision.',
    },
    {
      category: '58/ Premiers Secours',
      question: "Comment est diffusée l'alerte émise par le Signal d'Alerte et d'Information aux Populations (SAIP) ?",
      correctAnswer: "Grâce aux sirènes, aux médias tels que Radio France et France Télévision ou encore grâce à l'application SAIP.",
    },
    //59
    {
      category: '59/ Vérification Intérieure',
      question: "Faites fonctionner l'essuie-glace arrière du véhicule.",
      correctAnswer:
        "On tourne le bout de la manette de droite d'un cran en avant. <img src='https://r.search.yahoo.com/_ylt=AwrijXegWY5mTysPhH9lAQx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzY1NmRmNzJiMjBhZjQxN2EyMTRlMjhlNjBhNmExZDEyBGdwb3MDMTkEaXQDYmluZw--/RV=2/RE=1720633889/RO=11/RU=https%3a%2f%2fwww.auto-pieces-79.fr%2fpiece-detachee%2f57020195%2fcommodo-dessuie-glaces-renault-clio-4-phase-1-diesel/RK=2/RS=Sh70uWf62Rv_oXqiaWmftMMkdUw-' alt='Commande essuie-glace arrière du véhicule'> *",
    },
    //
    {
      category: '59/ Sécurité Routière',
      question:
        "Pour une bonne visibilité vers l'arrière, en plus de l'utilisation de l'essuie-glace, quelle commande pouvez-vous actionner par temps de pluie ?",
      correctAnswer: 'La commande de désembuage arrière. Le terme dégivrage peut remplacer celui de désembuage.',
    },
    {
      category: '59/ Premiers Secours',
      question: "Quels comportements adopter en présence d'une victime qui ne répond pas et ne réagit pas, mais respire ?",
      correctAnswer:
        "- La placer en position stable sur le côté ou position latérale de sécurité. - Alerter les secours. - Surveiller la respiration de la victime jusqu'à l'arrivée des secours.",
    },
    //60
    {
      category: '60/ Vérification Extérieure',
      question: 'Ouvrez et refermez le coffre, puis vérifiez sa bonne fermeture.',
      correctAnswer: "<a href='https://fr.e-guide.renault.com/fra/Clio-5/COFFRE-BAGAGES' target='_blank'>Page de Renault</a>",
    },
    {
      category: '60/ Sécurité Routière',
      question:
        "Lorsque vous transportez un poids important dans le coffre, quelles sont les précautions à prendre en ce qui concerne les pneumatiques et l'éclairage avant ?",
      correctAnswer: 'Augmenter la pression des pneumatiques et régler la hauteur des feux avants.',
    },
    {
      category: '60/ Premiers Secours',
      question:
        "L'utilisation d'un Défibrillateur Automatisé (DAE) sur une victime qui n'est pas en arrêt cardique présente-t-elle un risque ?",
      correctAnswer: 'Non, car le défibrillateur se déclenche uniquement quand la victime est en arrêt cardique.',
    },
    //61
    {
      category: '61/ Vérification Intérieure',
      question: 'Indiquez où se situe les attaches de type Isofix dans le véhicule.',
      correctAnswer:
        "Obligatoire depuis 2011. <a href='https://fr.e-guide.renault.com/fra/Clio-5/SECURITE-ENFANTS-choix-de-la-fixation-du-siege-enfant' target='_blank'>Page de Renault</a>",
    },
    {
      category: '61/ Sécurité Routière',
      question: 'Peut-on fixer tous les sièges enfant sur des attaches de type Isofix ?',
      correctAnswer: "Non (uniquement ceux compatibles avec ce type d'attache).",
    },
    {
      category: '61/ Premiers Secours',
      question: "Comment vérifier la respiration d'une victime ?",
      correctAnswer: "Regarder si le ventre et la poitrine se soulèvent et sentir de l'air à l'expiration.",
    },
    //62
    {
      category: '62/ Vérification Extérieure',
      question: 'Ouvrez et refermez le coffre, puis vérifiez sa bonne fermeture.',
      correctAnswer: "<a href='https://fr.e-guide.renault.com/fra/Clio-5/COFFRE-BAGAGES' target='_blank'>Page de Renault</a>",
    },
    {
      category: '62/ Sécurité Routière',
      question: 'Quels sont les risques de circuler avec des objets sur la plage arrière ?',
      correctAnswer: "Une mauvaise visibilité vers l'arrière et un risque de projection en cas de freinage brusque ou de choc.",
    },
    {
      category: '62/ Premiers Secours',
      question: "Qu'est ce qu'une hémorragie ?",
      correctAnswer: "C'est une perte de sang prolongée qui ne s'arrête pas. Elle imbibe de sang un mouchoir en quelques secondes.",
    },
    //63
    {
      category: '63/ Vérification Intérieure',
      question: "Montrez sur le tableau de bord le voyant indiquant une baisse de pression d'air d'un pneumatique.",
      correctAnswer:
        "Obligatoire sue tous les véhicules depuis le 1er novembre 2014. <img src='https://1.bp.blogspot.com/-5q70ZndBKR4/WAJ2iKbYUQI/AAAAAAAAdek/I0WmDX9hfqEZFmHLxtMXsr-t9CaZJKqYACLcB/w1200-h630-p-k-no-nu/avertissement-de-pression-des-pneus.jpg' alt='Voyant indiquant une baisse de la pression d'air d'un pneumatique'>",
    },
    {
      category: '63/ Sécurité Routière',
      question: "A quelle fréquence est-il préconisé de vérifier la pression d'air des pneumatiques ?",
      correctAnswer: 'Tous les mois.',
    },
    {
      category: '63/ Premiers Secours',
      question: "Qu'est ce qu'un arrêt cardiaque ?",
      correctAnswer: "Le coeur ne fonctionne plus ou fonctionne d'une façon anarchique.",
    },
    //64
    {
      category: '64/ Vérification Extérieure',
      question: "Procédez à l'ouverture du capot puis à sa fermeture en vous assurant de son verrouillage.",
      correctAnswer: "<a href='https://fr.e-guide.renault.com/fra/Clio-5/CAPOT-MOTEUR' target='_blank'>Page de Renault</a>",
    },
    {
      category: '64/ Sécurité Routière',
      question: "Pour un capot s'ouvrant depuis l'avant du véhicule, quelle est l'utilité du dipositif de sécurité ?",
      correctAnswer: "Empêcher l'ouverture du capot en circulation en cas de mauvais verrouillage.",
    },
    {
      category: '64/ Premiers Secours',
      question: "Quels sont les risques pour une personne victime d'une hémorragie ?",
      correctAnswer: 'Entraîner pour la victime une détresse circulatoire ou un arrêt cardiaque.',
    },
    //65
    {
      category: '65/ Vérification Intérieure',
      question: 'Montrez la commande de réglage de hauteur des feux.',
      correctAnswer:
        "img src='https://fs.opisto.fr/Pictures/5881/2022_12/Piece-Commande-de-reglage-hauteur-de-phare-RENAULT-CLIO-5-1.0i--12V-TURBO-TCE-90-HYBRID-2875248e2d9a239ca8b64bf60c2e7e3a1a52a3d9da7f63e2cbb4c884c29dd458.jpg' alt='Commande de réglage de hauteur des feux'>",
    },
    {
      category: '65/ Sécurité Routière',
      question: 'Pourquoi doit-on régler la hauteur des feux ?',
      correctAnswer: 'Pour ne pas éblouir les autres usagers.',
    },
    {
      category: '65/ Premiers Secours',
      question: "Comment et pourquoi protéger une zone de danger en cas d'accident de la route ?",
      correctAnswer:
        'En délimitant clairement et largement la zone de danger de façon visible pour protéger les victimes et éviter un sur-accident',
    },
    //66
    {
      category: '66/ Vérification Extérieure',
      question: 'Montrez où se situent les gicleurs de lave-glace avant.',
      correctAnswer: 'Sur le capot en direction du pare-brise.',
    },
    {
      category: '66/ Sécurité Routière',
      question: "Quelle est la principale conséquence d'un dispositif de lave-glace défaillant ?",
      correctAnswer: "Une mauvaise visibilité due à l'impossibilité de nettoyer le pare-brise.",
    },
    {
      category: '66/ Premiers Secours',
      question: "Qu'est ce qu'un défibrillateur automatisé externe (DAE) ?",
      correctAnswer: "C'est un appareil qui peut permettre de rétablir une activité cardiaque normale à une victime en arrêt cardiaque.",
    },
  ];

  let userAnswers = [];
  let currentQuestionIndex = 0;

  function buildQuiz() {
    const output = [];
    const start = currentQuestionIndex;
    const end = Math.min(currentQuestionIndex + 3, quizData.length);

    for (let i = start; i < end; i++) {
      const currentQuestion = quizData[i];
      output.push(
        `<span><strong>${currentQuestion.category}</strong></span>
        <div class="question">${currentQuestion.question}</div>
              <button class="reveal-answer">Afficher la réponse</button>
              <div class="correct-answer hidden">${currentQuestion.correctAnswer}</div>
              <div class="answer-buttons">
                  <button class="yes" data-question="${i}"><i class="fa fa-thumbs-up" aria-hidden="true"></i></button>
                  <button class="no" data-question="${i}"><i class="fa fa-thumbs-down" aria-hidden="true"></i></button>
              </div>`,
      );
    }

    quizContainer.innerHTML = output.join('');
  }

  function showResults() {
    let numCorrect = 0;
    const start = currentQuestionIndex;
    const end = Math.min(currentQuestionIndex + 3, quizData.length);

    for (let i = start; i < end; i++) {
      const userAnswer = userAnswers[i];

      if (userAnswer === 'yes') {
        numCorrect++;
      }
    }

    resultsContainer.innerHTML = `${numCorrect} sur ${end - start} correct`;
  }

  function nextQuestions() {
    // Passer aux trois questions suivantes ou recommencer à zéro
    currentQuestionIndex += 3;
    if (currentQuestionIndex >= quizData.length) {
      currentQuestionIndex = 0; // Recommencer à zéro si nous avons atteint la fin
    }
    resultsContainer.innerHTML = ``;

    // Reconstruire le quiz avec les trois questions suivantes ou les premières questions si nous avons atteint la fin
    buildQuiz();
  }

  function previousQuestions() {
    currentQuestionIndex -= 3;
    if (currentQuestionIndex < 0) {
      currentQuestionIndex = Math.max(quizData.length - 3, 0); // Aller à la fin des questions si nous sommes au début
    }
    resultsContainer.innerHTML = ``;

    buildQuiz();
  }

  buildQuiz();

  quizContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('reveal-answer')) {
      const answerElement = event.target.nextElementSibling;
      answerElement.classList.toggle('hidden');
    }

    if (event.target.classList.contains('yes') || event.target.classList.contains('no')) {
      const questionNumber = event.target.getAttribute('data-question');
      const selectedButton = event.target;
      const buttons = event.target.parentElement.querySelectorAll('button');

      buttons.forEach((button) => {
        button.classList.remove('selected');
      });

      selectedButton.classList.add('selected');

      if (selectedButton.classList.contains('yes')) {
        userAnswers[questionNumber] = 'yes';
      } else {
        userAnswers[questionNumber] = 'no';
      }
    }
  });

  submitButton.addEventListener('click', showResults);
  nextButton.addEventListener('click', nextQuestions);
  previousButton.addEventListener('click', previousQuestions);
});
