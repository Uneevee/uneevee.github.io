var result = document.createElement("h3")
var num1 = Math.floor(Math.random()*10)
var num2 = Math.floor(Math.random()*10)
var answer
var mode = 0
var modes = [addition]
result.setAttribute("id", "result")
document.body.insertBefore(input, null)
newquestion()

function getanswer(){
    var page = new XMLHttpRequest()
    page.open("GET", "https://adventofcode.com/2023/day/1/input")
    document.getElementById("result").innerHTML = page.responseText
}