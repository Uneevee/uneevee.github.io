var input = document.createElement("input")
input.setAttribute("id", "response")
input.setAttribute("type", "text")
document.body.insertBefore(input, null)
console.log(input)

function submit(){
    document.getElementById("response").innerHTML = input
}