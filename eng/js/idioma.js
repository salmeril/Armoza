var check=document.querySelector(".check");
check.addEventListener('click' ,idioma);


function idioma(){
    let id=check.checked;
    if (id==true) {
        location.href="eng/index.html";
        
    }else if(id==false){
        location.href="../index.html";
    }
}