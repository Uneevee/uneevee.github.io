var subject = document.getElementById("placehold");
var mousemove = (evnt)=>{subject.style.left = evnt.pageX +"px";
    subject.style.top = evnt.pageY + "px";
    subject.style.transform = "0deg";
}
document.addEventListener("mousemove", mousemove);
document.addEventListener("mouseup", (evnt)=>{subject=document.getElementById("placehold");});
subject.setAttribute()