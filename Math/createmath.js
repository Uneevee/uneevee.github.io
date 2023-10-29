var input = document.createElement("input")
input = input.attributes = {id: "Answer", type: "Number"}
document.body.append(input)
console.log(input)

function submit(){
    document.getElementById("response").innerHTML = input
}