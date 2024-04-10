var subject = document.getElementById("placehold")
document.addEventListener("mousemove", (evnt)=>{subject.style.left = evnt.pageX +"px";subject.style.top = evnt.pageY;});
document.addEventListener("mouseup", (evnt)=>{subject=document.getElementById("placehold");});