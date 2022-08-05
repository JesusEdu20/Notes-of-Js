/*Definir una clase boton al cual se le pueda ser asiganado una animacion, utilizando la API web*/
/*OBJETIVO:
animar button*/ 


class button 
{
    constructor(objectAnimation)// se le pasara por parametro la un objetoAnimation
    {
        this.objectAnimation=objectAnimation;
    }

    animationTo= function(buttonRecived)
    {   
        let click= false;
        let {beggin,ending,optionFrames}=this.objectAnimation;

        /*let begginx= this.objectAnimation.beggin;
        let optionx= this.objectAnimation.optionFrames;
        let endingx=this.objectAnimation.ending;*/
        
        function animate(){
     
        console.log(beggin)
       

        switch(click){

        
            case false:
                buttonRecived.animate(beggin, optionFrames);
                click=true;
            break;
            
            case true:
            
                buttonRecived.animate(ending, optionFrames);
                click=false;
        }
        

        }

        return animate
    }
}



/*Ahora bien el objectAnimation seria:*/ 
let objectAnimation=
{
    beggin: [{transform: "rotate(360deg)"}],//fotogramas claves
    ending: [{transform: "rotate(-180deg)"}],//fotogramas claves; animacion de cierre
    optionFrames: { duration: 1000, iterations:1}
}



/*Instanciar la clase*/
let test1= new button(objectAnimation)

 let elementFromDom= document.querySelector(".btn");
let btnOne=test1.animationTo(elementFromDom);
let btnTest= document.querySelector(".btnTest");

btnTest.addEventListener("click", btnOne);





let test2= new button(objectAnimation);

let elementFromDomKamila= document.querySelector(".btnKamila")
let btnTwo=test2.animationTo(elementFromDomKamila);
let btnTestKamila= document.querySelector(".btnTestKamila");

btnTestKamila.addEventListener("click", btnTwo);








/* Ejemplo de Clousure
function fun(user)
{
    let nombre=user;

    function clo()
    {
         console.log(nombre);
    }
    return clo
}

let test=fun();
let test2=fun("jesus");
test()
test2()*/