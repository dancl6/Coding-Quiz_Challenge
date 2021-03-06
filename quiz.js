// declare global variables
let intro = document.querySelector(".question")
let descr = document.querySelector(".question-2")
let startButton = document.querySelector('.question-3')
startButton.classList.add(".question-3:hover")
let time = 75
let countQuestions = 0
let setQuestion = 0
let score = 0
let elementList = ['list-element1','list-element2','list-element3','list-element4'];
let countCorrect = 0
var listAddition = document.createElement("UL");
listAddition.setAttribute("id", "myUL");
document.body.appendChild(listAddition);
var answerResult = ""
var timeElement = document.getElementById("time")
var interval = ""

// keep all questions , possible answers, and the correct answer in a single array
var questions = [
  {
      title: "Commonly used data types DO Not Include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
      answer: 3
  },
  {
      title: "The condition in an if / else statement is enclosed with ________.",
      options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
      answer: 3
  },
  {
      title: "Arrays in JavaScript can be used to store _______",
      options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
      answer: 4
  },
  {
      title: "String values must be enclosed within ________ when being assigned to variables.",
      options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
      answer: 3
  },
  {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
      answer: 4
  },
]

let randomIndexQuestions = []

//  generate random sequence of questions
while(randomIndexQuestions.length < 5) {
    let randomIndex = Math.floor(Math.random()*5)

    if (randomIndexQuestions.includes(randomIndex) == false) {
        randomIndexQuestions.push(randomIndex)
    }

    
}

startButton.addEventListener('click', startQuiz)

function timer () {
        interval = setInterval(function(){
        if (time >0) {
          timeElement.textContent = time
          time -= 1
        } else {
          timeElement.textContent = time
            clearInterval(interval)
            success()
        }
        }, 1000)
    }

// start quiz clears the page
function startQuiz(){


  intro.innerHTML = ""
  descr.innerHTML = ""
  if (setQuestion < 5){
      setQuestions()
  } else {
 
  }
}

// create a random sequence of the available questions
function setQuestions() {
    questionSelector(questions[randomIndexQuestions[setQuestion]])
    setQuestion++

    if (setQuestion == 1) {
        timer()
    }
}

// function that displays the selected question and possible answers. 
// an event listener was created for each possible answer
// after the user clilcks one of the answer choices, the start function is called
// there are still remmaining questions. if the questions are all answered, the success 
// fuunction is called, which ends the game.
function questionSelector(question){
    countQuestions = countQuestions + 1
    let currentQuestion = randomIndexQuestions[setQuestion]
    
    let q1Element = document.getElementById("q1")
    intro.textContent = questions[currentQuestion].title

   
    startButton.remove()
    
    for (var r = 0; r < questions[0].options.length; r++) {
 
     if (r === 0) {
    
       
       let listElement = document.getElementById("myUL")
       listElement.innerHTML = ""
     }
    
        let j = r + 1;
        var element = "list-element"+ j;
        
        var y = document.createElement("LI");
        
        document.getElementById("myUL").appendChild(y);
        var button = document.createElement("button");
        button.setAttribute("id",element);
        button.innerHTML = questions[currentQuestion].options[r]
        y.appendChild(button);
        document.getElementById(element).className = "list-class";

        document.getElementById("myUL").className = "parent-list-class";
        document.getElementById(elementList[r]).addEventListener('click', function (event) {})
       
    }
        let elementListItem = "list-element" + questions[currentQuestion].answer
        document.getElementById(element).classList.add("#list-element1:hover")
        document.getElementById(element).classList.add("#list-element2:hover")
        document.getElementById(element).classList.add("#list-element3:hover")
        document.getElementById(element).classList.add("#list-element4:hover")
    document.getElementById(elementList[0]).addEventListener("click",function(){
      if (elementListItem === elementList[0]){
          score += 1
         
          listen("Correct!")
          if (countQuestions === questions.length){
            success()
          }
          if (countQuestions < 5) {
          startQuiz()
          }
      } else {
        
          listen("Wrong!")
          time = time -10
          if (countQuestions === questions.length){
            success()
          }
          if (countCorrect < 5) {
          startQuiz()
          }
      }
    })

    document.getElementById(elementList[1]).addEventListener("click",function(){
      if (elementListItem === elementList[1]){
          score += 1
         
          listen("Correct!")
          if (countQuestions === questions.length){
            success()
          }
          if (countCorrect < 5) {
          startQuiz()
          }
      } else {
         
          listen("Wrong!")
          time = time -10
          if (countQuestions === questions.length){
            success()
          }
          if (countQuestions < 5){
          startQuiz()
        }
      }
    })

    document.getElementById(elementList[2]).addEventListener("click",function(){
      if (elementListItem === elementList[2]){
          
          score += 1
         
          listen("Correct!")
          if (countQuestions === questions.length){
            success()
          }
          if (countQuestions < 5) {
          startQuiz()
          }
      } else {
         
          listen("Wrong!")
          time = time -10
          if (countQuestions === questions.length){
            success()
          }
          if (countQuestions < 5) {
          startQuiz()
          }
      }
    })

    document.getElementById(elementList[3]).addEventListener("click",function(){
      if (elementListItem === elementList[3]){
          score += 1
         
          listen("Correct!")
          if (countQuestions === questions.length){
            success()
          }
          if (countQuestions < 5) {
          startQuiz()
          }
      } else {
          
          listen("Wrong!")
          time = time -10
          if (countQuestions === questions.length){
            success()
          }
          if (countQuestions < 5) {
          startQuiz()
          }
      }
    })

}

// function that prints out whether the answer was correct or not
var listen = function(answer) {
  countCorrect = countCorrect+1
  if (countCorrect === 1){
    answerResult = document.createElement("div");
  }
  if (countCorrect > 1) {
    answerResult.innerHTML = ""
  }
  document.body.appendChild(answerResult);
  answerResult.setAttribute("id", "answer");
  answerResult.textContent = answer;
  answerResult.className = "result";


  
 
  
}

// function that is called when the quiz is over (either time runs out or the user finished answering all the questions)
function success() {
  alert("you made it!")
  clearInterval(interval)
    
  let answerElement = document.getElementById("answer")
//   if (answerElement != null){
//   answerElement.remove()}

  clearInterval(interval)

  let listElement = document.getElementById("myUL")
  listElement.innerHTML = ""

  let q1Element = document.getElementById("q1")
 

  q1Element.textContent = "All done!"

  let q2Element = document.getElementById("q2")

  let initialsFromUser = window.prompt("Please enter your initials:")

  q2Element.textContent = "Your final score is " + score + "."

  let initialsElement = document.getElementById("initials")

  initialsElement.textContent = "Enter initials: " + initialsFromUser



  
}

