// Modify the below quizData to create/delete new set of question and respective options with correct answer 
const quizData = [
    {
        questionType: "radio",
        question: "Why is web or browser programming broken up into three parts? ",
        a: "to execute as quickly as possible",
        b: "to accommodate multiple programming style",
        c: "to be resilient to changes in technology",
        d: "to be robust with respect to dates and years",
        correct: "c",
    },
    {
        questionType: "checkbox",
        question: "Choose all header tags?",
        a: "<h3></h3>",
        b: "<h1></h1>",
        c: "<hr></hr>",
        d: "<p></p>",
        correct: "ab",
    },
    {
        questionType: "radio",
        question: "Which is the most powerful and fragile of the browser programming languages? ",
        a: "HTML",
        b: "CSS",
        c: "PHP",
        d: "JavaScript",
        correct: "d",
    },
    {
        questionType: "radio",
        question: "What happens when HTML is broken because of a bug in the code? ",
        a: "The browser replaces the broken HTML with a generic DIV element. ",
        b: "The browser stops rendering the HTML and waits until it's fixed. ",
        c: "The browser ignores that part of the code and jumps past it to the next thing it recognizes.",
        d: "The browser guesses what you meant, and does its best to fix the bug itself. ",
        correct: "d",
    }, 
    {
        questionType: "checkbox",
        question: "Which of these are using JavaScript?",
        a: "React",
        b: "Angular",
        c: "Laravel",
        d: "Vue",
        correct: "abd",
    },
    {
        questionType: "checkbox",
        question: "Which of these can be used to hide the tag for the User?",
        a: "display: none;",
        b: "overflow: hidden;",
        c: "display: hidden",
        d: "visibility: hidden;",
        correct: "ad",
    },
];

const quizContent= document.getElementById('quiz-content')
const quizNumber= document.getElementById('quiz-number')
const answerData= document.querySelectorAll('.form__radio-input')
const quizQuestion= document.getElementById('quiz-question')
const answerNumber1= document.getElementById('answer-number-1')
const quizOption1= document.getElementById('quiz-option-1')
const quizCheckOption1= document.getElementById('quiz-check-option-1')
const answerNumber2= document.getElementById('answer-number-2')
const quizOption2= document.getElementById('quiz-option-2')
const quizCheckOption2= document.getElementById('quiz-check-option-2')
const answerNumber3= document.getElementById('answer-number-3')
const quizOption3= document.getElementById('quiz-option-3')
const quizCheckOption3= document.getElementById('quiz-check-option-3')
const answerNumber4= document.getElementById('answer-number-4')
const quizOption4= document.getElementById('quiz-option-4')
const quizCheckOption4= document.getElementById('quiz-check-option-4')
const submitAnswer= document.getElementById('start-btn') 
const checkboxContent = document.getElementById("checkbox");
const radioContent = document.getElementById("radio");
const checkboxes = document.getElementsByName('checkbox');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentQuestion = 0
let Totalscore = 0
sessionStorage.setItem("TotalScore", 0)

const path = window.location.pathname
path.includes("quiz.html");
console.log(path.includes("quiz.html"))
if(path.includes("quiz.html")) {
    loadQuiz()
    function loadQuiz() {
        deselectAnswer()
        const currentQuestionData = quizData[currentQuestion]
        quizQuestion.innerText = currentQuestionData.question
        quizNumber.innerText = `${currentQuestion+1}.`
        if(currentQuestionData.questionType === "radio")
        {
            checkboxContent.classList.add("hidden");
            radioContent.classList.remove("hidden");

            if(currentQuestionData.a)
            { 
                quizOption1.parentNode.classList.remove("hidden")
                quizOption1.innerText = currentQuestionData.a 
            } else {
                quizOption1.parentNode.classList.add("hidden")
            }

            if(currentQuestionData.b)
            { 
                quizOption2.parentNode.classList.remove("hidden")
                quizOption2.innerText = currentQuestionData.b 
            } else {
                quizOption2.parentNode.classList.add("hidden")
            } 
            
            if(currentQuestionData.c)
            { 
                quizOption3.parentNode.classList.remove("hidden")
                quizOption3.innerText = currentQuestionData.c 
            } else {
                quizOption3.parentNode.classList.add("hidden")
            }  
            
            if(currentQuestionData.d){
                quizOption4.parentNode.classList.remove("hidden")
                quizOption4.innerText = currentQuestionData.d 
            } else {
                quizOption4.parentNode.classList.add("hidden")
            } 

        } else{
            radioContent.classList.add("hidden");
            checkboxContent.classList.remove("hidden");
            
            if(currentQuestionData.a)
            { 
                quizCheckOption1.parentNode.classList.remove("hidden")
                quizCheckOption1.innerText = currentQuestionData.a 
            } else {
                quizCheckOption1.parentNode.classList.add("hidden")
            }

            if(currentQuestionData.b)
            { 
                quizCheckOption2.parentNode.classList.remove("hidden")
                quizCheckOption2.innerText = currentQuestionData.b 
            } else {
                quizCheckOption2.parentNode.classList.add("hidden")
            } 
            
            if(currentQuestionData.c)
            { 
                quizCheckOption3.parentNode.classList.remove("hidden")
                quizCheckOption3.innerText = currentQuestionData.c 
            } else {
                quizCheckOption3.parentNode.classList.add("hidden")
            }  
            
            if(currentQuestionData.d){
                quizCheckOption4.parentNode.classList.remove("hidden")
                quizCheckOption4.innerText = currentQuestionData.d 
            } else {
                quizCheckOption4.parentNode.classList.add("hidden")
            } 
    }

    }
    function deselectAnswer() {
        answerData.forEach(answerEl => answerEl.checked = false)
        
        checkboxes.forEach ( checkboxValue =>{
            if (checkboxValue.checked) {
                checkboxValue.checked = false 
            }
        })
    }

    function getRadioAnswer() {
        let radioAnswer=""
        answerData.forEach(radioValue => {
            if(radioValue.checked) {
                radioAnswer = radioValue.id
            }
        })
        
        return radioAnswer
    } 

    function getCheckboxAnswer() {
        let checkboxAnswer=""
        
        checkboxes.forEach ( checkboxValue =>{
            if (checkboxValue.checked) {
                checkboxAnswer += checkboxValue.value 
            }
        })
        return checkboxAnswer
    } 

    submitAnswer.addEventListener('click', () => {
        let answer
        answer = (quizData[currentQuestion].questionType==="radio")? getRadioAnswer() : getCheckboxAnswer() 
        console.log(answer, "answer")
        sessionStorage.setItem("answer", answer);
        if(answer) {
            if(answer === quizData[currentQuestion].correct) {
                Totalscore++
                sessionStorage.setItem("TotalScore", `${(Totalscore/quizData.length)*100}`);
            }
            console.log(answer, "answer")
            currentQuestion++

            if(currentQuestion < quizData.length) { 
                loadQuiz()
            } else {
                setTimeout(window.location.href = "./result.html", 2000);
                
            }

        }
        }
    )
    
    prevBtn.addEventListener('click',() =>{
        if(!currentQuestion>0){
            setTimeout(window.location.href = "./objective.html", 2000);
        } else{
            currentQuestion--
            loadQuiz()
        }
    })
} 
 
const startBtn = document.getElementById('start-btn');

// startBtn.addEventListener('click',()=>{
//         window.history.replaceState("",  "Page", "./objective.html");
// }) 

var elem = document.getElementById("quiz");
function openFullscreen() { 
    elem.classList.add("mystyle");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
   
}
document.addEventListener('fullscreenchange', onFullScreenChange, false);
document.addEventListener('webkitfullscreenchange', onFullScreenChange, false);
document.addEventListener('mozfullscreenchange', onFullScreenChange, false);

function onFullScreenChange() {
  let fullscreenElement =
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement;
    if(!fullscreenElement){
        let element = document.getElementById("quiz");
        element.classList.remove("mystyle");
        location.reload()
    } 
}


