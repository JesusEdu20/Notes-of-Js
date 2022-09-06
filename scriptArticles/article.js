import { button, anima, buttonAuto,coleccionBtn,evaluatorTo } from "../modules/moduleButton.js";



const likeButton=document.querySelector(".header-section-like-button__span")

const likeButtonFrames=
{
    beggin:[{transform:"scale(1)"},{transform:"scale(2)"}, {transform:"scale(1)"}],
    ending:[{transform:"scale(1)"},{transform:"scale(2)"}, {transform:"scale(1)"}],
    optionFrames:{duration: 300, iterations:1,  fill: 'forwards'}

}

let givenFunctionObject=
{
    begginFun: ()=> {addLikeButtonFill()},
    endingFun: ()=> {quitLikeButtonFill()}
} 

const addLikeButtonFill= ()=>
{
    likeButton.style.backgroundImage="url(../img/heartFancyReed.svg)"
}
const quitLikeButtonFill= ()=>
{
    likeButton.style.backgroundImage="url(../img/favorite_FILL0_wght400_GRAD0_opsz48.svg)"
    likeButton.style.color="rgb(142,42,42)"
}

const objectToAnimateLikeButton=new button(likeButtonFrames);
const actionLikeButton= objectToAnimateLikeButton.animationTo(likeButton,givenFunctionObject);



likeButton.addEventListener("click",actionLikeButton)
