var subject = document.getElementById("placehold");
subject.style.left = 0;
var pos = [0, 0];
var props = [];
var elementcount = 0;

var mousemove = (evnt)=>{subject.style.left = (parseInt(subject.style.left) + (evnt.pageX - pos[0])) +"px";
    pos[0] = evnt.pageX;
    subject.style.top = (parseInt(subject.style.top) + (evnt.pageY - pos[1])) +"px";
    pos[1] = evnt.pageY;
    subject.style.rotate = "0deg";
    subject.style.position = "absolute";
    //subject.style.transform
}
function newelement(name){
    subject = document.getElementById(name);
    subject.style.min
}
function spawnnew(image, element){
    const currentnum= elementcount.toString();
    const boundrect = document.getElementById(element).getBoundingClientRect();
    newele = document.createElement("div");
    newele.id = currentnum
    newele.style.position = "absolute";
    newele.className = "draggable";
    newele.style.backgroundImage = image;
    console.log(boundrect.width + "px", boundrect.height + "px")
    newele.style.minWidth = boundrect.width + "px";
    newele.style.minHeight = boundrect.height + "px";
    newele.style.left = boundrect.left + "px";
    newele.style.top = boundrect.top + "px";
    newele.onmousedown = function() {newelement(currentnum);};
    document.body.insertBefore(newele, document.getElementById("side"));
    subject = document.getElementById(elementcount.toString());
    props = props.concat(document.getElementById(currentnum));
    elementcount++;
    delete currentnum, boundrect;
}
var mousedown = (evnt)=>{subject.style.left = subject.offsetLeft + "px";
    subject.style.top = subject.offsetTop + "px";
}
var mouseup = ()=>{
    if(parseInt(subject.style.left)> window.innerWidth/5*4 && subject.id != "placehold"){
        subject.remove();
    }
    subject=document.getElementById("placehold");
}
//TODO: MAKE RESIZE AND ROTATE BOX
document.addEventListener("mousemove", mousemove);
document.addEventListener("mouseup", mouseup);
document.addEventListener("mousedown", mousedown)
//document.addEventListener("wheel", ()=>{});
