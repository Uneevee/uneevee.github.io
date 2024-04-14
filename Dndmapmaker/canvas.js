var subject = document.getElementById("placehold");
var mousemove = ()=>{subject.style.left = evnt.pageX +"px";
    subject.style.top = evnt.pageY + "px";
    subject.style.rotate = "99deg";
    subject.style.position = "absolute";
    subject.style.transform
}
function newelement(name){
    subject = document.getElementById(name);
}
document.addEventListener("mousemove", mousemove);
document.addEventListener("mouseup", ()=>{subject=document.getElementById("placehold");});
document.addEventListener("wheel", ()=>{});