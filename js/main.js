/*
    === VALORES ÚTILES PARA STICKY ===

    clientHeight -> Altura del elemento. 
    offsetTop -> Posición relativa al top del elemento padre. Si el borde superior está arriba del todo su valor será '0'
    offsetBot -> No existe, hay que calcularlo. Para ello hay que hacer la siguiente operación "clientHeight + offsetTop"


    === VALORES ÚTILES PARA ABSOLUTE ===
    sidebar.getBoundingClientRect() sirve para coger los valores con respecto a la ventana del navegador. 
*/

const sidebar = document.getElementById('left-profile-panel');
const skillsbutton = document.getElementById('digital-skills-collapse');

var sidebarRect = null;
var sidebarParentRect = null;
var sidebarOffsetBot = null;
var prevOffsetTop = "0";

var isTop = false;

document.addEventListener('DOMContentLoaded', onLoadDomContent);

function onLoadDomContent() {
    
    skillsbutton.onclick = adjustSidebar;

    window.addEventListener('scroll', adjustSidebar);
    window.addEventListener('resize', adjustSidebar);
}




function adjustSidebar() {
    sidebarRect = sidebar.getBoundingClientRect();
    sidebarParentRect = sidebar.parentElement.getBoundingClientRect();
    sidebarOffsetBot = sidebar.clientHeight + sidebar.offsetTop;

    prevOffsetTop = sidebar.offsetTop;

    if(sidebar.classList.contains("profile-frame-absolute")){
        if(window.innerHeight > sidebar.clientHeight){
            setStickyTop();
        }
        else if(sidebarRect.top > 75){
            sidebar.style.top = sidebarParentRect.top < 0 ? 75 - sidebarParentRect.top + "px" : "0";
            sidebar.style.bottom = null;
        }
        else if(sidebarRect.bottom < window.innerHeight){
            sidebar.style.bottom = sidebarParentRect.bottom > window.innerHeight ? (sidebarParentRect.bottom - window.innerHeight) + "px" : "0";
            sidebar.style.top = null;
        }
    }
    else {   
        if(sidebarRect.top < 75 && sidebarOffsetBot < sidebar.parentElement.clientHeight)
            setAbsolute();
        else if(sidebarRect.bottom > window.innerHeight && sidebar.offsetTop > 75)
            setAbsolute();
    }
    
}


function setAbsolute(){
    
    var prevWidth = sidebar.clientWidth;

    sidebar.style.top = null; 
    sidebar.style.bottom = null; 

    sidebar.classList.remove("profile-frame-bot-fixed");
    sidebar.classList.remove("profile-frame-top-fixed");

    sidebar.classList.add("profile-frame-absolute");

    sidebar.style.top = prevOffsetTop + "px"; 
}

function setStickyBottom(){

    sidebar.style.top = null; 
    sidebar.style.bottom = "0px"; 

    sidebar.classList.remove("profile-frame-absolute");
    sidebar.classList.remove("profile-frame-top-fixed");

    sidebar.classList.add("profile-frame-bot-fixed");

    isTop = false;
}

function setStickyTop(){

    sidebar.style.top = "75px"; 
    sidebar.style.bottom = null;

    sidebar.classList.remove("profile-frame-absolute");
    sidebar.classList.remove("profile-frame-bot-fixed");

    sidebar.classList.add("profile-frame-top-fixed");
    isTop = true;
}

function debug(){
    console.log(""
        + "=== sidebar ===\n" 
        + "sidebar.parentElement.clientHeight = " + sidebar.parentElement.clientHeight + "\n"
        + "sidebar.clientHeight  = " + sidebar.clientHeight + "\n"
        + "sidebar.offsetTop   = " + sidebar.offsetTop + "\n"
        + "sidebarOffsetBot = " + sidebarOffsetBot + "\n"
    );

    console.log(""
        + "=== sidebar rect ===\n" 
        + "window.innerHeight = " + window.innerHeight + "\n"
        + "sidebarRect.top = " + sidebarRect.top + "\n"
        + "sidebarRect.bottom = " + sidebarRect.bottom + "\n"
    );

    console.log(""
        + "=== sidebar parent rect ===\n" 
        + "window.innerHeight = " + window.innerHeight + "\n"
        + "sidebarParentRect.top = " + sidebarParentRect.top + "\n"
        + "sidebarParentRect.bottom = " + sidebarParentRect.bottom + "\n"
    );
}