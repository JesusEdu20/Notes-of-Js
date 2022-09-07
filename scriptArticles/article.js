import { button, anima, buttonAuto,coleccionBtn,evaluatorTo } from "../modules/moduleButton.js";

//elementos del DOM

const likeButton=document.querySelector(".header-section-like-button__span");
const toogleDarkButton=document.querySelector(".header-nav-toogle-button__button");
const toogleDarkButtonContainer=document.querySelector(".header-nav-toogle-button__container");
const bodyDOM=document.querySelector(".body");
const headerNav=document.querySelector(".header-nav");
const headerSectionTitle= document.querySelector(".header-section-title__h1");
const mainParagraph=document.querySelectorAll(".main-topic-website-section__p");

//ANIMACIONES
// se realiza los frames y  se configura parametros de la animacion

const likeButtonFrames=
{
    beggin:[{transform:"scale(1)"},{transform:"scale(2)"}, {transform:"scale(1)"}],
    ending:[{transform:"scale(1)"},{transform:"scale(2)"}, {transform:"scale(1)"}],
    optionFrames:{duration: 200, iterations:1,  fill: 'forwards'}

}

const toogleDarkButtonFrames=
{
    beggin:[{transform:"translate(52px)"}],
    ending:[{transform:"translate(0)"}],
    optionFrames:{duration: 300, iterations:1,  fill: 'forwards'}
}



//ACCIONES
//se configura las acciones de los butones

let givenFunctionObject=
{
    begginFun: ()=> { const addLikeButtonFill=()=>{likeButton.style.backgroundImage="url(../img/heartFancyReed.svg)"};addLikeButtonFill()},

    endingFun: ()=> { const quitLikeButtonFill=()=>{  likeButton.style.backgroundImage="url(../img/favorite_FILL0_wght400_GRAD0_opsz48.svg)"}; quitLikeButtonFill()}
} 

const toogleDarkButtonFun=
{
    begginFun:()=>{const toogleDarkButtonOn=()=>{bodyDOM.style.backgroundColor="#0d1218";headerNav.style.backgroundColor="#0d1218";  toogleDarkButtonContainer.style.backgroundColor="#FDFEFE";  toogleDarkButton.style.backgroundColor="#17202A"; headerSectionTitle.style.color="#cbe1f7"};paragraph ();toogleDarkButtonOn()},

    endingFun:()=>{const toogleDarkButtonOff=()=>{bodyDOM.style.backgroundColor=""; headerNav.style.backgroundColor=""; toogleDarkButtonContainer.style.backgroundColor="";toogleDarkButton.style.backgroundColor="";headerSectionTitle.style.color="#50565c"};paragraphQuit ();toogleDarkButtonOff()}
}


// INICIALIZACION

const objectToAnimateLikeButton=new button(likeButtonFrames);
const objectToAnimateToogleDarkButton= new button(toogleDarkButtonFrames);

//llamada de Metodos
const actionLikeButton= objectToAnimateLikeButton.animationTo(likeButton,givenFunctionObject);
const actionToogleDarkButton= objectToAnimateToogleDarkButton.animationTo(toogleDarkButton, toogleDarkButtonFun)


//OYENTES
likeButton.addEventListener("click",actionLikeButton);
toogleDarkButton.addEventListener("click", actionToogleDarkButton)

function paragraph (){ 

    for(let i=0; i<mainParagraph.length; i++)  {
  
        mainParagraph[i].classList.add("main-topic-website-section-dark__p");
        mainParagraph[i].classList.remove("main-topic-website-section__p")
    }


}

function paragraphQuit (){ 

    for(let i=0; i<mainParagraph.length; i++)  {
  
        mainParagraph[i].classList.add("main-topic-website-section__p");
        mainParagraph[i].classList.remove("main-topic-website-section-dark__p")
    }
}

