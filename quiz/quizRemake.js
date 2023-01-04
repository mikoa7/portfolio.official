const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("answer-text"));
const button = document.getElementById("button");
const switchCon = document.getElementById("containerSecond");
const ans = document.querySelector(".answer-container")
const con = document.querySelector(".container")
const kitchen = document.getElementById("kitchenQuestions");
const world = document.getElementById("worldQuestions");
const sport = document.getElementById("sportQuestions");
const it = document.getElementById("itQuestions");

let questionsWorldUncorrect = [];
let questionsWorldCorrect = [];

let titleType = document.getElementById("titleType");

console.log(questionsWorldUncorrect)
let currentQuestion = {};
let index = 0;
let availableQuestions = [];

let limit = [];

let questionsWorld = [
    {
        question: "What Is The Official Nickname Of Texas?",
        choice1: "The Lone Star State",
        choice2: "Texan",
        choice3: "Pre-Columbian Mexico",
        correct: "The Lone Star State"
    },
    {
        question: "What Is The Driest Continent?",
        choice1: "Africa",
        choice2: "Oceania",
        choice3: "Antartica",
        correct: "Antarticae"
    },
    {
        question: "Which Two Countries Share The Longest International Border?",
        choice1: "France and Germany",
        choice2: "Canada and USA",
        choice3: "Russia and Poland",
        correct: "Canada and USA"
    },
    {
        question: "In Which Galaxy Do We Live?",
        choice1: "Europa",
        choice2: "The Milky Way",
        choice3: "Cosmos",
        correct: "The Milky Way"
    },
    {
        question: "Which Planet Is The Hottest In The Solar System?",
        choice1: "Venus",
        choice2: "Sun",
        choice3: "Mars",
        correct: "Venus"
    },
    {
    question: "How Many Teeth Does An Aardvark Have?",
    choice1: "none",
    choice2: "13",
    choice3: "7",
    correct: "none"
    }];
    let questionsSport = [
        {
            question: "In which year did Maradona score a goal with his hand?",
            choice1: "1986",
            choice2: "1979",
            choice3: "1992",
            correct: "1986"
        },
        {
            question: "How long is an Olympic swimming pool?",
            choice1: "Fifty meters",
            choice2: "Houndred meters",
            choice3: "Houndred fifty meters",
            correct: "Fifty meters"
        },
        {
            question: "How matches did Mohammed Ali lose in his career?",
            choice1: "Eleven",
            choice2: "Seven",
            choice3: "Only one",
            correct: "Only one"
        }
        ];
        let questionsIt = [
            {
                question: "How many kilobytes are there in 1 megabyte?",
                choice1: "1048",
                choice2: "1000",
                choice3: "1024",
                correct: "1024"
            },
            {
                question: "What does IT stand for?",
                choice1: "International Technology",
                choice2: "Internet Technology",
                choice3: "Information Technology",
                correct: "Information Technology"
            },
            {
                question: "Which was the first internet search engine in the world?",
                choice1: "Google",
                choice2: "Bing",
                choice3: "Archie",
                correct: "Archie"
            }
            ];
        let questionsKitchen = [
            {
                question: "What temperature is the danger zone of food? ",
                choice1: "40 - 140",
                choice2: "70 - 120",
                choice3: "20 - 90",
                correct: "40 - 140"
            },
            {
                question: "How long should you wash your hands? ",
                choice1: "50 sec",
                choice2: "1 minute",
                choice3: "20 - 30 seconds",
                correct: "20 - 30 seconds"
            },
            {
                question: "How many tablespoons are in 1 stick of butter?",
                choice1: "6",
                choice2: "9",
                choice3: "4",
                correct: "9"
            }
            ];

    startGame = () => {
        getQuestion();
    }

    availableQuestions = [...questionsKitchen];
    let questionIndex = Math.floor(Math.random() * availableQuestions.length);

    function getQuestion(){
        let number = Math.floor(Math.random() * availableQuestions.length);
        questionIndex = number
        currentQuestion = availableQuestions[number];
        question.innerText = currentQuestion.question;
        choices.forEach(choice => {
            let number = choice.dataset["number"];
            choice.innerText = currentQuestion["choice" + number];
        });
       
    }
       
const main = document.querySelector("main");
    correctAnswer = (e) => {
            const answer = e.target
            const selectedAnswer = e.target.textContent;
            if(selectedAnswer == availableQuestions[questionIndex].correct){
                answer.style.background = "#50c878";
                questionsWorldCorrect.push(selectedAnswer)
                score()
            } else{
                answer.style.background = "#b13636";
                questionsWorldUncorrect.push(selectedAnswer)
                score();
            }
            
    };

    function score(){
        if(questionsWorldUncorrect.length == 2){
            const div = document.createElement("div");
            const content = document.createTextNode("N E X T");
            div.appendChild(content);
            div.classList.add("button")
            document.body.appendChild(div);
            div.id = "button";
            if(div){
                const button = document.getElementById("button");
                button.addEventListener("click", () => {
                    getQuestion();
                    choices.forEach(choice => choice.style.background = "white");
                    switchTog(con);
                    switchTog(switchCon);
                    limit.length = 0;
                })
            }
        }
        if(questionsWorldCorrect.length == 1){
            getQuestion();
            
            questionsWorldCorrect.length = 0;
            questionsWorldUncorrect.length = 0;
            switchTog(con);
            switchTog(switchCon);

        }
    }
    function remove(param){
        param.remove();
    }
    function switchTog(param){
        param.classList.toggle("switch");
    }
    choices.forEach(choice => choice.addEventListener("click", () => {
        limit.push(choice.value)
        if(limit.length === 2){
        } 
    }));
    kitchen.addEventListener("click", () => {
        availableQuestions = [...questionsKitchen];
        getQuestion();
        titleType.textContent = "Kitchen";
        titleType.innerText;
    });

   
    world.addEventListener("click", () => {
        availableQuestions = [...questionsWorld];
        getQuestion();
        titleType.textContent = "World";
        titleType.innerText;
    });
    sport.addEventListener("click", () => {
        availableQuestions = [...questionsSport];
        getQuestion();
        titleType.textContent = "Sport";
        titleType.innerText;
    });
    it.addEventListener("click", () => {
        availableQuestions = [...questionsIt];
        getQuestion();
        titleType.textContent = "IT";
        titleType.innerText;
    });
    choices.forEach(choice => choice.addEventListener("click",correctAnswer));
    startGame();
    