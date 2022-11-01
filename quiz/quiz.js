
const container = document.querySelector(".container");
const button = document.getElementById("button");
const h1 = document.createElement("h1");
const newDivTarget = document.querySelector("question-container");
const span = document.createElement("span");
const spanTarget = document.querySelector("span");
const newlistTarget = document.querySelector("answer-container");
const newDiv = document.createElement("div");
document.body.onload = Load;
const pushes = [];
const randomQuestion = Math.floor(Math.random() * 5);
const questions = [{question: "How many days had 1945?", answers:["244","365","111","364"],correct: "365"},
                   {question: "When did Jan Paweł II die",answers: ["1936","1966","2005","2001"],correct: "2005"},
                   {question: "What's 5 times 31", answers:["155","121","135","93"],correct: "155"},
                   {question: "How many people lives in Europe", answers:["30 000","70 000","150 000","1 200 000"],correct: "1 200 000"}];
const answers = questions[randomQuestion].answers;
const correctAnswer = questions[randomQuestion].correct;
const questionContent = `${questions[randomQuestion].question}`;

function Load(){

  const createNext = () => {
    span.classList.add("wrong-answers");
    span.textContent = "Next";
    button.appendChild(span)
 }
 
  let pointer = 1;
  const newSpan = document.createElement("span");
  const point = () => {
  newSpan.classList.add("wrong-answers-span");
  newSpan.textContent = ` ${pointer}/2`;
  newDiv.appendChild(newSpan);
  return;
  }
    const newDiv = document.createElement("div");
    newDiv.classList.add("question-container");
    container.appendChild(newDiv);
    h1.textContent = `${questions[randomQuestion].question}`;
    h1.classList.add("question");
    newDiv.appendChild(h1);

        const newlist = document.createElement("div");
        newlist.classList.add("answer-container");
        container.appendChild(newlist);
        const ul = document.createElement("ul")
        newlist.appendChild(ul);
        let index = 0;

          answers.forEach(answer => {
            const li = document.createElement("li");
            ul.appendChild(li);
            li.textContent = `${questions[randomQuestion].answers[index]}`;
            index++;
            li.addEventListener("click",(e) => {
              let y = e.target.textContent;
              if(y == correctAnswer){
                  e.target.style.background = "#17B169";
                  pushes.push(y);
                  if(pushes.length == 1){
                    point();
                  }
                  if(pushes.length == 2){
                    newSpan.remove();
                    pointer = 2;
                    point();
                    container.classList.toggle("shake");
                    createNext();
                }
              } else {
                  e.target.style.background = "#CC0000";
                  pushes.push(y);
                  if(pushes.length == 1){
                    point();
                  }
                  if(pushes.length == 2){
                    newSpan.remove();
                    pointer = 2;
                    point();
                    container.classList.toggle("shake");
                    createNext();
                }
              }
            });
        });
}






