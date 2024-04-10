var subject = document.getElementById("placehold");
var mousemove = (evnt)=>{subject.style.left = evnt.pageX +"px";
    subject.style.top = evnt.pageY + "px";
    subject.style.transform = "0deg";
    subject.style.position = "absolute";
    subject.style.border = "0px";
}
function newelement(name){
    subject = document.getElementById(name);
}
document.addEventListener("mousemove", mousemove);
document.addEventListener("mouseup", (evnt)=>{subject=document.getElementById("placehold");});