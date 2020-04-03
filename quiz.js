var buttonElement = document.getElementById('q3');
buttonElement.addEventListener('click', function (event) {
    var El2 = document.getElementById('q2');
    var El3 = document.getElementById('q3');
    El2.remove();
    El3.remove();
    document.getElementById('q1').textContent = 'Commonly used data types DO Not Include:';
    document.getElementById('q1').className = 'question-left-align';
   
    var questionOneAnswers = ['1. string', '2. booleans', '3. alerts', '4. numbers'];
    for (var i = 0; i < questionOneAnswers.length; i++ ) {
        addListElement(questionOneAnswers[i],i);
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
    window.alert(element);
    var y = document.createElement("LI");
    // listAddition.setAttribute("id", "parent-list-class");
    document.getElementById("myUL").appendChild(y);
    var button = document.createElement("button");
    button.setAttribute("id",element);
    button.innerHTML = sName;
    y.appendChild(button);
    document.getElementById(element).className = "list-class";
    document.getElementById("myUL").className = "parent-list-class";
}