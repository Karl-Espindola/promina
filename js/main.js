function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 15);
}
function next(){
    pos+=1
    if(pos==arrPag.length){
        pos=0;
    }
    for(let i=0;i<arrPag.length;i++){
        if(i==pos){
            arrPag[pos].setAttribute("style","background:#FE5A0E");
            imgSlider.src=`assets/sliders/${pos+1}.jpg`;
            cambiarTitulo();
        }
        else{
            arrPag[i].setAttribute("style","background:#f0ecec")
        }
    }
}
function prev(){
    pos-=1;
    console.log(pos);
    if(pos==-1){
        pos=arrPag.length-1;
    }
    for(let i=0;i<arrPag.length;i++){
        if(i==pos){
            arrPag[pos].setAttribute("style","background:#FE5A0E");
            imgSlider.src=`assets/sliders/${pos+1}.jpg`;
            cambiarTitulo();
        }
        else{
            arrPag[i].setAttribute("style","background:#f0ecec")
        }
    }
}
function cambiarTitulo(){
    if(pos==0){
        titulo.innerText="SOLUCIONES EFECTIVAS";
    }
    if (pos==1) {
        titulo.innerText="MAS GRANDE Y MAS FUERTE";
    }
}
function estiloMenu(){
    if(window.scrollY<190){
        logo.src="assets/logo/logo-light.png"; //C:\Users\karl\Desktop\Proyectos\promina\assets\logo\logo-light.png
        nav.classList.remove("navegacion-flotante");
        for(let a of arrLink ){
            a.setAttribute("style","color:withe")
        }
        svgTel.setAttribute("style","fill:withe");
        spanTel.setAttribute("style","color:withe");
        btn.classList.add("btn");
        btn.classList.remove("btn-1");
        // linkBtn.setAttribute("style","color:#FE5A0E");
    }
    if(window.scrollY>=190){
        logo.src="assets/logo/logo-dark.png";
        nav.classList.add("navegacion-flotante");
        nav.setAttribute("style","top:0px");
        for(let a of arrLink ){
            a.setAttribute("style","color:black")
        }
        svgTel.setAttribute("style","fill:black");
        spanTel.setAttribute("style","color:black");
        btn.classList.remove("btn");
        btn.classList.add("btn-1");
        // linkBtn.setAttribute("style","color:white");
    }
}
// let linkBtn=document.getElementById("link_btn");
let btn=document.getElementById("btn");
let nav=document.getElementById("navegacion");
let svgTel=document.getElementById("svg_tel");
let spanTel=document.getElementById("tel_span");
let logo=document.getElementById("logo");
let titulo=document.getElementById("titulo");
let imgSlider=document.getElementById("imgSlider");
let chevronLeft=document.getElementById("chevronLeft");
let chevronRight=document.getElementById("chevronRight");
let arrLink=document.getElementsByClassName("li-a");
let arrPag=document.getElementsByClassName("posicion");
arrPag[0].setAttribute("style","background:#FE5A0E");
let pos=0;

chevronRight.addEventListener("click",function(){
    unfade(imgSlider);
    next();
});
chevronLeft.addEventListener("click",function(){
    unfade(imgSlider);
    prev();
});

window.addEventListener("scroll",estiloMenu);


