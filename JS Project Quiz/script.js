// const btn=document.getElementById('btn')
// const mainDiv=document.getElementById('quiz')
// btn.addEventListener('click',fetchData)
// async function fetchData()
// {
//     const res=await fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple')
//     const data=await res.json()
//     displayData(data)
//     btn.style.display = 'none';
// }
// function displayData(data)
// {
//     console.log(data);
//     data.results.forEach(function(q)
//     {
//         const div = document.createElement('div')
//         div.classList.add('quizs')
//         const ques=document.createElement('h3')
//         ques.textContent=q.question
//         const op1=document.createElement('button')
//         op1.textContent=q.correct_answer
//         const op2=document.createElement('button')
//         op2.textContent=q.incorrect_answers[0]
//         const op3=document.createElement('button')
//         op3.textContent=q.incorrect_answers[1]
//         const op4=document.createElement('button')
//         op4.textContent=q.incorrect_answers[2]
//         div.append(ques,op1,op2,op3,op4)
//         mainDiv.appendChild(div)
//     })
// }
/*
const btn = document.getElementById('btn');
const mainDiv = document.getElementById('quiz');
let score = 0; // Initialize score
let currentQuestionIndex = 0; // Track current question index
let questions = []; // Store the fetched questions

btn.addEventListener('click', fetchData);

async function fetchData() {
    const res = await fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple');
    const data = await res.json();
    questions = data.results;
    btn.style.display = 'none'; // Hide the button after loading questions
    displayQuestion();
}

function displayQuestion() {
    mainDiv.innerHTML = ''; // Clear previous content

    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];

        const div = document.createElement('div');
        div.classList.add('quizs');

        const ques = document.createElement('h3');
        ques.textContent = q.question;

        const buttons = [];

        // Create buttons for correct and incorrect answers
        const correctButton = createButton(q.correct_answer, true);
        buttons.push(correctButton);

        q.incorrect_answers.forEach(incorrect_answer => {
            const incorrectButton = createButton(incorrect_answer, false);
            buttons.push(incorrectButton);
        });

        // Shuffle buttons to randomize answer positions
        shuffleArray(buttons);

        // Append question and buttons to div
        div.append(ques, ...buttons);
        mainDiv.appendChild(div);
    } else {
        // Display final score
        const scoreDiv = document.createElement('div');
        scoreDiv.id = 'scores';
        scoreDiv.textContent = `Your final score: ${score} out of ${questions.length}`;
        mainDiv.appendChild(scoreDiv);
    }
}

function createButton(answer, isCorrect) {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => {
        if (isCorrect) {
            button.style.backgroundColor = 'green';
            score++;
        } else {
            button.style.backgroundColor = 'red';
        }
        updateScore();
        setTimeout(() => {
            currentQuestionIndex++; // Move to the next question
            displayQuestion();
        }, 1000); // Wait for 1 second before displaying the next question
    });
    return button;
}

function updateScore() {
    const scoreDiv = document.getElementById('score');
    if (scoreDiv) {
        scoreDiv.textContent = `Your score: ${score}`;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
*/
const btn = document.getElementById('btn');
const mainDiv = document.getElementById('quiz');
let score = 0; // Initialize score
let currentQuestionIndex = 0; // Track current question index
let questions = []; // Store the fetched questions
let selectedCategory = ''; // Store the selected category

btn.addEventListener('click', showCategorySelection);

async function fetchData(category) {
    const res = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`);
    const data = await res.json();
    questions = data.results;
    btn.style.display = 'none'; // Hide the button after loading questions
    displayQuestion();
}

function showCategorySelection() {
    mainDiv.innerHTML = ''; // Clear previous content
    btn.style.display = 'none'; // Hide the start button

    const categories = {
        9: "General Knowledge",
        10: "Entertainment: Books",
        11: "Entertainment: Film",
        12: "Entertainment: Music",
        27: "Animals",
        17: "Science & Nature"
    };

    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category-selection');

    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = 'Choose a category';
    categoryDiv.appendChild(categoryTitle);

    for (const [key, value] of Object.entries(categories)) {
        const button = document.createElement('button');
        button.textContent = value;
        button.addEventListener('click', () => {
            selectedCategory = key;
            fetchData(selectedCategory);
        });
        categoryDiv.appendChild(button);
    }

    mainDiv.appendChild(categoryDiv);
}

function displayQuestion() {
    mainDiv.innerHTML = ''; // Clear previous content

    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];

        const div = document.createElement('div');
        div.classList.add('quizs');

        const ques = document.createElement('h3');
        ques.textContent = q.question;

        const buttons = [];

        // Create buttons for correct and incorrect answers
        const correctButton = createButton(q.correct_answer, true);
        buttons.push(correctButton);

        q.incorrect_answers.forEach(incorrect_answer => {
            const incorrectButton = createButton(incorrect_answer, false);
            buttons.push(incorrectButton);
        });

        // Shuffle buttons to randomize answer positions
        shuffleArray(buttons);

        // Append question and buttons to div
        div.append(ques, ...buttons);
        mainDiv.appendChild(div);
    } else {
        // Display final score
        const scoreDiv = document.createElement('div');
        scoreDiv.id = 'score';
        scoreDiv.textContent = `Your final score: ${score} out of ${questions.length}`;
        mainDiv.appendChild(scoreDiv);

        // Add button to start a new quiz
        const newQuizBtn = document.createElement('button');
        newQuizBtn.textContent = 'Start New Quiz';
        newQuizBtn.addEventListener('click', () => {
            score = 0;
            currentQuestionIndex = 0;
            showCategorySelection();
        });
        mainDiv.appendChild(newQuizBtn);
    }
}

function createButton(answer, isCorrect) {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => {
        if (isCorrect) {
            button.style.backgroundColor = 'green';
            score++;
        } else {
            button.style.backgroundColor = 'red';
        }
        updateScore();
        setTimeout(() => {
            currentQuestionIndex++; // Move to the next question
            displayQuestion();
        }, 1000); // Wait for 1 second before displaying the next question
    });
    return button;
}

function updateScore() {
    const scoreDiv = document.getElementById('score');
    if (scoreDiv) {
        scoreDiv.textContent = `Your score: ${score}`;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize by showing category selection
showCategorySelection();

