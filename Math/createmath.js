var input = document.createElement("input")
var num1 = Math.floor(Math.random()*10)
var num2 = Math.floor(Math.random()*10)
var answer
var mode = 0
var modes = [addition, subtraction, multiplication, division, exponets]
input.setAttribute("id", "answer")
input.setAttribute("number", "text")
input.setAttribute("aria-label", "answer")
document.body.insertBefore(input, null)
newquestion()
// Gotta make a quick comment to get the js to actually deploy
function submit(){
    document.getElementById("response").innerHTML = parseFloat(document.getElementById("answer").value, 10) == answer
    newquestion()
}
function newquestion(){
    mode = document.getElementById("mode").value;
    modes[mode]();
}
function addition(){
    num1 = Math.floor(Math.random()*10)
    num2 = Math.floor(Math.random()*10)
    answer = num1 + num2
    document.getElementById("question").innerHTML = num1 + "+" + num2
}
function subtraction(){
    num1 = Math.floor(Math.random()*10)
    num2 = Math.floor(Math.random()*10)
    answer = num1 - num2
    document.getElementById("question").innerHTML = num1 + "-" + num2
}
function multiplication(){
    num1 = Math.floor(Math.random()*10)
    num2 = Math.floor(Math.random()*10)
    answer = num1 * num2
    document.getElementById("question").innerHTML = num1 + "*" + num2
}
function division(){
    num1 = Math.floor(Math.random()*10)
    num2 = Math.floor(Math.random()*10)
    answer = num1 / num2
    document.getElementById("question").innerHTML = num1 + "/" + num2
}
function exponets(){
    num1 = Math.floor(Math.random()*10)
    num2 = Math.floor(Math.random()*10)
    answer = num1 ** num2
    document.getElementById("question").innerHTML = num1 + "^" + num2
}