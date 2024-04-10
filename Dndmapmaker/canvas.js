var subject = document.getElementById("placehold");
var mousemove = (evnt)=>{subject.style.left = evnt.pageX +"px";subject.style.top = evnt.pageY;}
document.addEventListener("mousemove", mousemove);
document.addEventListener("mouseup", (evnt)=>{subject=document.getElementById("placehold");});