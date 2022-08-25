import { button, anima, buttonAuto,coleccionBtn } from "../modules/moduleButton.js";

//traigo elementos del Dom
const nav= document.querySelector(".head");
const menu=document.querySelector(".buscador-section");
const articlesSection= document.querySelector(".articles__container");
const buttonArrow=document.querySelector(".main__arrow-down");
const main=document.querySelector(".main");
const footer= document.querySelector(".footer");

const articles= document.querySelectorAll(".articles");
const articleTitles=document.querySelectorAll(".articles__title");
const inputBuscar= document.querySelector(".buscador-input");

//menu.style.backgroundColor="#c60d41"
/*console.log(nav.offsetWidth);buscadorSection*/


//Clase button


console.log(menu)
console.log(nav.clientWidth)






//cambiacolor articlesSection.style.backgroundColor="##3633FF"//


// ANIMACIONES Y ACCIONES


//objeto to search
let objectAnimation=
{
    beggin: [{ transform: 'translateY(150%)' }],//fotogramas claves
    ending: [{transform: "translateY(0)"}],//fotogramas claves; animacion de cierre
    optionFrames: { duration: 400, iterations:1,  fill: 'forwards'}
}
let givenFunctionObject=
{
    begginFun: ()=> {articlesContainer(); pushArrow()},
    endingFun: ()=> {articlesContainer(); pushArrow()}

} 

//animacion para articles container
let oAanimationToArticles=
{
    beggin: [{ transform: 'translateY(0%) '},{ transform: 'translateY(40%) '}],//fotogramas claves
    ending: [{transform: "translateY(0)"}],//fotogramas claves; animacion de cierre
    optionFrames: { duration: 400, iterations:1,  fill: 'forwards'}
}
let oFunctionToArticles=
{
    begginFun: ()=>  {footerDownOn(); articleSectionChangeColorOn()},

    endingFun: ()=> {footerDownOn(); articleSectionChangeColorOn()}

} 

// Animacion para flecha 

let ArrowFromSearch=
{
    beggin: [{ transform: "translateY(0%) rotate(0deg)"}, {transform: "translateY(-10%) rotate(180deg)"}],//fotogramas claves
    ending: [{transform: "translateY(0)"}],//fotogramas claves; animacion de cierre
    optionFrames: { duration: 400, iterations:1,  fill: 'forwards'}
}

// Animacion para el footer

const footerDown={ 
    beggin: [{ transform: 'translateY(100%)'}],//Animacion Inicial 
    ending: [{transform: "translateY(0)"}],//fotogramas claves; animacion de cierre
    optionFrames: { duration: 400, iterations:1,  fill: 'forwards'}
}


//Animacion para articleSection; cambio de color al desplegar buscador

let articleSectionAnimation=
{
    beggin: [{ backgroundColor: 'unset' }],//fotogramas claves
    ending: [{backgroundColor: '#0d1218'}],//fotogramas claves; animacion de cierre
    optionFrames: { duration: 400, iterations:1,  fill: 'forwards'}
}





//INICIALIZACION DE CLASES PARA ANIMACION from module

const btn= new button(objectAnimation);//object
const buscador=btn.animationTo(menu,givenFunctionObject)//enlace; retorna closure


const animationArrow=new anima (ArrowFromSearch)//animacion para la flecha que despliega el buscador
const pushArrow= animationArrow.animationTo(buttonArrow)



//accion o animacion para el contenedor de articles
const btnToarticlesContainer= new button(oAanimationToArticles)
const articlesContainer=btnToarticlesContainer.animationTo(articlesSection, oFunctionToArticles);


//animacion para el footer
const footerDownObject= new anima(footerDown);
const footerDownOn= footerDownObject.animationTo(footer)



//animacion para el article-section

const articleSectionChangeColorObject= new anima(articleSectionAnimation);
const articleSectionChangeColorOn= articleSectionChangeColorObject.animationTo(articlesSection);





//OYENTES


buttonArrow.addEventListener("click", buscador);





//BUSQUEDAS DE ARTICULOS; BUSCADOR DE COINCIDENCIAS EN ARTICLE SECTION


inputBuscar.addEventListener('keyup', (e)=>{
    let texto= e.target.value;
    console.log(texto);

    let  er= new RegExp(texto, "i");
    
    for (let i=0; i<articleTitles.length; i++)
    {
        let valor= articleTitles[i];
        let articlesValor=articles[i];

        if(er.test(valor.innerText))
        {
            articlesValor.classList.remove("ocultar")

        }

        else
        {
            articlesValor.classList.add("ocultar")
        }
    }
})












/*tengo que hacer un boton que reciba una funcion la cual cambie la
clase del elemento en cuestion y que esta clase a su vez reciba una animacion*/


/*let objectAnimation=
{
    beggin: [{ transform: 'translateY(50px)' }],//fotogramas claves
    ending: [{transform: "translateY(10px)"}],//fotogramas claves; animacion de cierre
    optionFrames: { duration: 1000, iterations:1,  fill: 'forwards'}
}

let givenFunctionObject=
{
    begginFun: ()=> nav.style.backgroundColor="#EBCE10",
    endingFun: ()=> nav.style.backgroundColor=""

} */



//EXPERIMENTAL SCROLL TO TO ON ARTICLES
const arroundArticle= document.querySelector(".main__section")
//scroll to top
const scrollToTop=()=>
{
    articlesSection.scroll({top:0, behavior: "smooth"})
}

buttonArrow.onclick=scrollToTop;