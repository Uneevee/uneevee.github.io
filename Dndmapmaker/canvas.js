var element = document.getElementById("placehold")
document.addEventListener("mousemove", (evnt)=>{element.style.left = evnt.pageX +"px";element.style.top = evnt.pageY;});
document.addEventListener("mouseup", (evnt)=>{element=document.getElementById("placehold");});