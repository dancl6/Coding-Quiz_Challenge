// suggestion: keep all questions , possible answers, and the correct answer in a single array
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


var buttonElement = document.getElementById('q3');
var errorFlag = "";
var answer = "";
elementList = ['list-element1','list-element2','list-element3','list-element4'];


buttonElement.addEventListener('click', function (event) {

   for ( var i =0; i < 5; i++){
    
    if (i === 0) {
    var el2 = document.getElementById('q2');
    var el3 = document.getElementById('q3');
    el2.remove();
    el3.remove();
    }

    var currentQuestionIndex = i;
    var currentQuestion = questions[currentQuestionIndex];
 
    
    document.getElementById('q1').textContent = currentQuestion.title;
    document.getElementById('q1').className = 'question-left-align';
   
    // var questionOneAnswers = ['1. string', '2. booleans', '3. alerts', '4. numbers'];
    for (var j = 0; j < 4; j++ ) {
        addListElement(currentQuestion.options[j],j);
        
    }


 
    listeners(currentQuestion.answer);


    // if ( i > 0) {
    //     var origList = document.getElementById("myUL");        
    //     origList.innerHTML = "";
    // }
 
 
   }
});


    
var addListElement = function(sName,j) {
    // var j;
    if (j===0) {
    var listAddition = document.createElement("UL");
    listAddition.setAttribute("id", "myUL");
    document.body.appendChild(listAddition);
    }
 

    j++;
    var element = "list-element"+ j;
    // window.alert(element);
    var y = document.createElement("LI");
    // listAddition.setAttribute("id", "parent-list-class");
    document.getElementById("myUL").appendChild(y);
    var button = document.createElement("button");
    button.setAttribute("id",element);
    button.innerHTML = sName;
    y.appendChild(button);
    document.getElementById(element).className = "list-class";
    document.getElementById("myUL").className = "parent-list-class";
    // debugger;
}

var listen = function(answer) {
    var answerResult = document.createElement("div");
    document.body.appendChild(answerResult);
    answerResult.setAttribute("id", "answer");
    answerResult.textContent = answer;
    // document.getElementById('answer').textContent = answer;
    answerResult.className = "result";
    // debugger;
    // deleteList();
    
}

var listeners = function (answer) {
    document.getElementById(elementList[0]).addEventListener('click', function (event) {
        if (answer === 1) {
            var errorFlag = 'Correct!';
        } else{
            var errorFlag = 'Wrong!';    
        }
        listen(errorFlag);
    });    
    document.getElementById(elementList[1]).addEventListener('click', function (event) {
        if (answer === 2) {
            var errorFlag = 'Correct!';
        } else{
            var errorFlag = 'Wrong!';    
        }
        listen(errorFlag);
    });
    document.getElementById(elementList[2]).addEventListener('click', function (event) {
        if (answer === 3) {
            var errorFlag = 'Correct!';
        } else{
            var errorFlag = 'Wrong!';    
        }
        listen(errorFlag);
    });
    document.getElementById(elementList[3]).addEventListener('click', function (event) {
        if (answer === 4) {
            var errorFlag = 'Correct!';
        } else{
            var errorFlag = 'Wrong!';    
        }
        listen(errorFlag);
    });

}

var deleteList = function () {
    var deleteListElement = document.getElementById("myUL");
    deleteListElement.remove();

}

var createQ1Element = function (phrase) {
    var el1 = document.createElement("h1");
    el1.setAttribute("id", "q1");
    document.getElementById('q1').textContent = phrase;
    document.body.appendChild(listAddition);
    
}