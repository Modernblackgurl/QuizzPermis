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
      category: '1/ Vérification intérieure',
      question: 'Montrez la commande de réglage de hauteur des feux.',
      correctAnswer:
        "Dispositif situé en général à gauche du volant. <img src='/images/Hauteur-des-feux.jpg'  alt='Commande de réglage de hauteur des feux'>",
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
        "Ouvrir le capot et montrer l'orifice de remplissage. <img src='/images/Orifice-lave-glace.jpg' alt='Orifice du produit lave-glace.'>",
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
        "En bon état (toute anomalie doit être signalée). <img src='/images/Flanc.jpg' alt='Commande de réglage de hauteur des feux'>",
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
      correctAnswer: "<img src='/images/Essuie-glace.jpg' alt='Commande des essuie-glaces'>",
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
