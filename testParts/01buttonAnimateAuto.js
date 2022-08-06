/*Definir una clase boton al cual se le pueda ser asiganado una animacion, utilizando la API web*/
/*OBJETIVO:
animar button*/ 


/*FUNCIONAMIENTO de la clase Button:
Para inicializar un button en el DOM, el cual posea la animacion dada de entrada y salida, es
preciso instanciar la clase button, cuya clase recibe como argumento un objeto(en el codigo es declarado como "objectAnimation")el cual contendra como propiedades los  objetos que contendran la aniamciones, tanto de entrada como de salida, del mismo modo dichos obejetos
seran pasados al metodo animate()*/


/*SINTAXIS del metodo Animate()
El mismo designa una animacion a un elemento traido del DOM, dicho metodo proviene de la API integrada 
directamente al navegador, 

element.animate
([{arregloDeObjetos:   "propiedades de animacion de css"},
    {arregloDeObjetos: "propiedades de animacion de css"},
    {arregloDeObjetos: "propiedades de animacion de css"}])
*/


/*Sintaxis de objectAnimation
let objectAnimation=
{
   

    beggin: [{transform: "rotate(360deg)"}],//fotogramas claves
    ending: [{transform: "rotate(-180deg)"}],//fotogramas claves; animacion de cierre
    optionFrames: { duration: 1000, iterations:1}


}
*/



/*CODIGO*/


class button //Clase button
{
    constructor(objectAnimation)// se le pasara por parametro un objetoAnimation
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