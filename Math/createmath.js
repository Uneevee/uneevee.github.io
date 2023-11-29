var input = document.createElement("input")
input.setAttribute("id", "answer")
input.setAttribute("number", "text")
document.body.insertBefore(input, null)
console.log(input)

function submit(){
    document.getElementById("response").innerHTML = document.getElementById("answer").innerHTML * 2
}