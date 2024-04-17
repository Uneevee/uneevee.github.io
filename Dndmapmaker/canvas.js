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
}
function spawnnew(image, element){
    const currentnum= elementcount.toString();
    const boundrect = document.getElementById(element).getBoundingClientRect();
    newele = document.createElement("div");
    newele.id = currentnum
    newele.style.position = "absolute";
    newele.className = "draggable";
    newele.style.backgroundImage = image;
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
        props.splice(props.indexOf(subject), 1);
        subject.remove();
    }
    subject=document.getElementById("placehold");
}
var unload = ()=>{let i = 0;
    let totality = [];
    while(i < props.length){
        totality = totality.concat([props[i].style.backgroundImage, 
            [props[i].style.left, props[i].style.top], 
            [props[i].style.minWidth, props[i].style.minHeight]])
        i++
    }
    let d = new Date(Date.now());
    d.setTime(d.getTime() + (400*24*3600*1000));
    console.log(totality.toString(), d.toUTCString());
    document.cookie = "everything=" + totality.toString() + "; expires=" + d.toUTCString() +";" + "path= ./";
    console.log(document.cookie);
}
//TODO: MAKE RESIZE AND ROTATE BOX
document.addEventListener("mousemove", mousemove);
document.addEventListener("mouseup", mouseup);
document.addEventListener("mousedown", mousedown);
document.addEventListener("beforeunload", unload);
//document.addEventListener("wheel", ()=>{});
