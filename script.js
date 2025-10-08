/** @format */

// --- Données du quiz ---
const questions = {
  partie1: [
    {
      q: '1.	Comment l’analyse du territoire influence-t-elle vos choix d’accompagnement ?',
      a: '1.	L’analyse du territoire oriente mes priorités (freins mobilité/illettrisme → partenaires clés, modalités d’entretien adaptées, offres réalistes).',
    },
    {
      q: '2.	Quels indicateurs utilisez-vous pour évaluer la réalité socio-économique d’un bassin d’emploi ?',
      a: '2.	Indicateurs : taux de chômage, offres/tensions métiers, niveau de diplôme, taux NEET, accès mobilité/logement/santé, démographie.',
    },
    {
      q: '3.	Quelles différences faites-vous entre veille documentaire et veille partenariale ?',
      a: '3.	Veille documentaire = infos (textes, chiffres) ; veille partenariale = infos “terrain” (procédures, places, contacts, pratiques).',
    },
    {
      q: '4.	Comment prioriser les informations issues de la veille pour qu’elles soient utiles aux jeunes?',
      a: '4.	Je hiérarchise selon l’utilité immédiate pour les publics suivis, l’actualité des infos et les dispositifs réellement accessibles localement.',
    },
    {
      q: '5.	Comment assurez-vous la mise à jour régulière de vos connaissances sur les dispositifs d’insertion ?',
      a: '5.	Rituel mensuel : sites institutionnels, newsletters, réunions partenaires, retours de collègues, mise à jour d’un répertoire partagé.',
    },
    {
      q: '6.	Quelle est la valeur ajoutée d’une analyse multiculturelle dans un territoire comme la Guyane ?',
      a: '6.	En contexte multiculturel, j’adapte langage, supports visuels, médiation linguistique et je valorise les codes socio-pro.',
    },
    {
      q: '7.	Comment formalisez-vous vos échanges avec les partenaires pour capitaliser l’information ?',
      a: '7.	Je formalise (CR, mails, fiches liaison, drive partagé) pour capitaliser et sécuriser la continuité.',
    },
    {
      q: '8.	Quels risques peut-on rencontrer si la veille est insuffisante ou mal exploitée ?',
      a: '8.	Risques : mauvaise orientation, perte de temps, démotivation des jeunes, image dégradée auprès des partenaires.',
    },
    {
      q: '9.	Donnez un exemple d’innovation partenariale observée ou proposée durant votre stage.',
      a: '9.	Ex. innovation : “circuit court” rendez-vous partagé PSAD–France Services–CIO sur une même demi-journée pour lever plusieurs freins d’un coup.',
    },
    {
      q: '10.	En quoi le réseau professionnel constitue-t-il une ressource dans l’accompagnement, mais aussi un levier de légitimité pour le CIP ?',
      a: '10.	Le réseau crédibilise le CIP (légitimité) et accélère l’accès aux solutions (efficacité).',
    },
  ],
  partie2: [
    { q: '', a: '' },
    { q: '', a: '' },
    { q: '', a: '' },
    { q: '', a: '' },
    { q: '', a: '' },
    { q: '', a: '' },
    { q: '', a: '' },
    { q: '', a: '' },
    { q: '', a: '' },
    { q: '', a: '' },
  ],
  partie3: [
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
  ],
  partie4: [
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
  ],
  partie5: [
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
  ],
  partie6: [
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
  ],
  partie7: [
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
    { q: ' ', a: '' },
  ],
};

// --- Variables globales ---
let currentPart = '';
let currentIndex = 0;
let currentQuestions = [];

// --- Références DOM ---
const partSelect = document.getElementById('partSelect');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const showAnswerBtn = document.getElementById('showAnswer');
const nextBtn = document.getElementById('nextQuestion');

// --- Changement de partie ---
partSelect.addEventListener('change', () => {
  const questionBox = document.getElementById('question-box');
  console.log(questionBox, 'questionBox');

  currentPart = partSelect.value;
  if (!currentPart) return;

  currentQuestions = [...questions[currentPart]];
  currentIndex = 0;
  showQuestion();
});

// --- Afficher une question ---
function showQuestion() {
  if (currentIndex >= currentQuestions.length) {
    questionEl.textContent = '🎉 Tu as terminé cette partie !';
    answerEl.style.display = 'none';
    showAnswerBtn.classList.add('hidden');
    nextBtn.classList.add('hidden');
    return;
  }

  const { q } = currentQuestions[currentIndex];
  questionEl.textContent = q;
  answerEl.textContent = currentQuestions[currentIndex].a;
  answerEl.style.display = 'none';
  showAnswerBtn.classList.remove('hidden');
  nextBtn.classList.add('hidden');
}

// --- Afficher la réponse ---
showAnswerBtn.addEventListener('click', () => {
  answerEl.style.display = 'block';
  showAnswerBtn.classList.add('hidden');
  nextBtn.classList.remove('hidden');
});

// --- Question suivante ---
nextBtn.addEventListener('click', () => {
  currentIndex++;
  showQuestion();
});
