var input = document.createElement("input")
input = input.attributes = {id: "Answer", type: "Number"}
document.body.insertBefore(input, null)
console.log(input)

function submit(){
    document.getElementById("response").innerHTML = input
}