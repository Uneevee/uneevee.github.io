var input = document.createElement("input")
input.setAttribute("id", "answer")
input.setAttribute("number", "text")
input.setAttribute("aria-label", "answer")
document.body.insertBefore(input, null)
newquestion()

function submit(){
    document.getElementById("response").innerHTML = parseInt(document.getElementById("answer").innerHTML, 10) == num1 + num2
    
}
function newquestion(){
    var num1 = Math.floor(Math.random()*10)
    var num2 = Math.floor(Math.random()*10)
    document.getElementById("question").innerHTML = num1 + "+" + num2
}