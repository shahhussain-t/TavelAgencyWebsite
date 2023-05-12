const humMenu=document.getElementById("hummenu");
const headerMenu=document.getElementById("header_menu");
let active=false;


humMenu.addEventListener('click',(e)=>{
e.stopPropagation()

    if(active){

        headerMenu.classList.add("off")
        headerMenu.classList.remove("on")
        active=false
        console.log("off")
    }else{
        headerMenu.classList.add("on")
        headerMenu.classList.remove("off")
        active=true
        console.log("on")
    }




})


