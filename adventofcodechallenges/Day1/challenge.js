var result = document.createElement("h3")
result.setAttribute("id", "result")
document.body.insertBefore(input, null)
newquestion()

function getanswer(){
    var page = new XMLHttpRequest()
    page.open("GET", "https://adventofcode.com/2023/day/1/input")
    document.getElementById("result").innerHTML = page.responseText
}