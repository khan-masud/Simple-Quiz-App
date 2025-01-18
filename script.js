const questions = [
    {
        question : "Who will have to pay the ultimate price?",
        answer : [
            { text : "Yunus Sarkar", correct : false },
            { text : "Hasina Apa", correct : false },
            { text : "Yusuf Sarkar", correct : true },
            { text : "Zia Madam", correct : false }
        ]
    },
    {
        question : "What is the name of husband of Porimoni?",
        answer : [
            { text : "Ismail Hossain Samaddar", correct : false },
            { text : "Shariful Raj", correct : false },
            { text : "Kamruzzman Roni", correct : false },
            { text : "Me", correct : true }
        ]
    },
    {
        question: "Who is the unofficial 'King of Service' in Bangladesh?",
        answer: [
            { text: "Service Alom", correct: true },
            { text: "Hero Alom", correct: false },
            { text: "Bangladesh Civil Service (BCS)", correct: false },
            { text: "Ashraf Bhai", correct: false }
        ]
    },
    {
        question: "What is the first thing a Bangladeshi says after seeing heavy traffic?",
        answer: [
            { text: "Areh, bhalo jam lagche!", correct: false },
            { text: "Hala shobai rastay neme porse!", correct: true },
            { text: "Ekhon ki korbo?", correct: false },
            { text: "Oi mama na plz!", correct: false }
        ]
    },
    {
        question: "What is the favorite excuse of a Bangladeshi student for not doing homework?",
        answer: [
            { text: "Nanur mara gechilo sir!", correct: false },
            { text: "Current chilo na sir!", correct: false },
            { text: "Korechi sir kintu basay rekhe aschi!", correct: true },
            { text: "Osustho chilam sir!", correct: false }
        ]
    },
    {
        question: "What is the national excuse of avoiding marriage proposals in Bangladesh?",
        answer: [
            { text: "Ami ekhono porashona kortesi!", correct: false },
            { text: "Amar biye korar ichcha nai!", correct: false },
            { text: "Biye korbo, kintu ekta shundor girlfriend/boyfriend paile!", correct: false },
            { text: "Age nijer paye darai!", correct: true }
        ]
    },
    {
        question: "What does every Bangladeshi take with them while traveling?",
        answer: [
            { text: "Umbrella.", correct: false },
            { text: "Snacks.", correct: false },
            { text: "Plastic bag.", correct: true },
            { text: "Extra clothes.", correct: false }
        ]
    },
    {
        question: "What’s the unofficial solution to all technical problems in Bangladesh?",
        answer: [
            { text: "Turn it off and on.", correct: true },
            { text: "Call a friend.", correct: false },
            { text: "Blame the device.", correct: false },
            { text: "Pray to God.", correct: false }
        ]
    },
    {
        question: "What is the favorite way to avoid attending classes?",
        answer: [
            { text: "Ajke routine a valo kono class nai!", correct: false },
            { text: "Ei teacher amake pochondo kore na!", correct: false },
            { text: "Ei lecture er youtube tutorial ache!", correct: false },
            { text: "Ajke ghumaite hobe prochur!", correct: true }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(ans => {
        const button = document.createElement('button');
        button.innerHTML = ans.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);

        if(ans.correct) {
            button.dataset.correct = ans.correct;
        }

        button.addEventListener("click", selectAnswer);
        });
}

function resetState() {
    nextButton.style.display = 'none';
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
            }
            button.disabled = true;
    });

    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}. `;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();