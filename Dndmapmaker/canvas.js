var subject = document.getElementById("placehold");
subject.style.left = 0
var pos = [0, 0]
var mousemove = (evnt)=>{subject.style.left = (parseInt(subject.style.left) + (evnt.pageX - pos[0])) +"px";
    pos[0] = evnt.pageX
    subject.style.top = (parseInt(subject.style.top) + (evnt.pageY - pos[1])) +"px";
    pos[1] = evnt.pageY
    subject.style.rotate = "99deg";
    subject.style.position = "absolute";
    //subject.style.transform
}
function newelement(name){
    subject = document.getElementById(name);
}
var mousedown = (evnt)=>{ 
    subject.style.left = subject.offsetLeft + "px"
    subject.style.top = subject.offsetTop + "px"
}
document.addEventListener("mousemove", mousemove);
document.addEventListener("mouseup", ()=>{subject=document.getElementById("placehold");});
document.addEventListener("mousedown", mousedown)
//document.addEventListener("wheel", ()=>{});