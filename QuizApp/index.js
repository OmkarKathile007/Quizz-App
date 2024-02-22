


const questions=[
    {
        question:"Which  is the Largest Animal in the World ?",
        answers:[
           {  text:"Shark", correct:false},
           {  text:"BlueWhale", correct:true},
           {  text:"Elephant", correct:false},
           {  text:"Giraffee", correct:false},
           
        ]
    },
    {
        question:"Which  is the smallest country in the World ?",
        answers:[
           {  text:"Vatican", correct:true},
           {  text:"Bhutan", correct:false},
           {  text:"Nepal", correct:false},
           {  text:"Shri Lanka", correct:false},
           
        ]
    },
    {
        question:"Which  is the Largest Dessert in the World ?",
        answers:[
           {  text:"Kalhari", correct:false},
           {  text:"Gobi", correct:false},
           {  text:"Sahara", correct:true},
           {  text:"Antartica", correct:false},
           
        ]
    },
    
    {
        question:"Which  is the Smallest continent in the World ?",
        answers:[
           {  text:"Asia", correct:true},
           {  text:"Australia", correct:false},
           {  text:"Arctic", correct:false},
           {  text:"European", correct:false},
           
        ]
    }
]


const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("NextButton");


let currentQuestionIndex=0;

let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;

    questionElement.innerHTML=questionNo +". "+currentQuestion.question;

    currentQuestion.answers.forEach(ans=>{
        const button = document.createElement("button");
        button.innerHTML=ans.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(ans.correct){
            button.dataset.correct=ans.correct;
        }

        button.addEventListener("click",selectAnswer);
    })
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();

