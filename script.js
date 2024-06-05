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
    /* <img src='https://fs.opisto.fr/Pictures/5881/2022_12/Piece-Commande-de-reglage-hauteur-de-phare-RENAULT-CLIO-5-1.0i--12V-TURBO-TCE-90-HYBRID-2875248e2d9a239ca8b64bf60c2e7e3a1a52a3d9da7f63e2cbb4c884c29dd458.jpg' alt='Commande de réglage de hauteur des feux'> */
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
