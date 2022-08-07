let space= document.querySelector(".body")

/*Animacion*/

let objectAnimation=
{
    beggin: [{ transform: 'rotate(0) translateY(0%)' }, { transform: 'rotate(360deg) translateY(100%)' }],//fotogramas claves
    ending: [{transform: "scale(3)"}],//fotogramas claves; animacion de cierre
    optionFrames: { duration: 1000, iterations:1,  fill: 'forwards'}
}

//////////////////////Funcionalidades
let givenFunctionObject=
{
    begginFun: ()=> space.style.backgroundColor="#012147",
    endingFun: ()=> space.style.backgroundColor=""

} 
///////////////////////





import { button, buttonAuto,coleccionBtn } from "../modules/moduleButton.js";

console.log(button)
console.log(buttonAuto)

let botoncito= new buttonAuto();/*classButton,ubicationButton,iconSpan*/ 
let btnOne= botoncito.lookElement("botoncito", ".body", "Star");
btnOne();

let animador= new button(objectAnimation);//buttonRecived, givenFunction
let giveAnimation=  animador.animationTo(coleccionBtn[0],givenFunctionObject);

coleccionBtn[0].addEventListener("click",giveAnimation)






