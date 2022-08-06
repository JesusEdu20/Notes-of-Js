/*Definir una clase boton al cual se le pueda ser asiganado una animacion, utilizando la API web*/
/*OBJETIVO:
agregar 
-animacion
-funcionalidad
-plus;auto Creacion*/ 


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

    animationTo= function(buttonRecived, givenFunction)
    {   
        let click= false;
        let {beggin,ending,optionFrames}=this.objectAnimation;
        let {begginFun,endingFun}=givenFunction;
        console.log(givenFunction)
      

        /*let begginx= this.objectAnimation.beggin;
        let optionx= this.objectAnimation.optionFrames;
        let endingx=this.objectAnimation.ending;*/
        
        function animate(){
     
        console.log(beggin)
       

        switch(click){

        
            case false:
                buttonRecived.animate(beggin, optionFrames);
                begginFun();
                
                click=true;
            break;
            
            case true:
            
                buttonRecived.animate(ending, optionFrames);
                endingFun();
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


/*El object function seria*/

/*debo traerme los elemtos del DOM, el cual seran modificados por el button*/
let space=document.querySelector(".body");

let givenFunctionObject=
{
    begginFun: ()=> space.style.backgroundColor="#EBCE10",
    endingFun: ()=> space.style.backgroundColor=""

} 

let givenFunctionObjectBtnTwo=
{
    begginFun: ()=> space.style.backgroundColor="#9E0E61",
    endingFun: ()=> space.style.backgroundColor=""

} 



/*Instanciar la clase*/
let buttonTurn= new button(objectAnimation);//button; clave buttonTurn

let elementFromDom= document.querySelector(".btn");

//Enlace: El metodo animationTo devuelve un closure, la funcion retornada es la que ejecuta el metodo animate(), con el element traido del DOM pasado como argumento al metodo animationTo. 

let btnOne= buttonTurn.animationTo(elementFromDom, givenFunctionObject);//se realiza el enlace "btnOne"
let btnTest= document.querySelector(".btnTest").onclick=btnOne//OYENTE

/*btnTest.addEventListener("click", btnOne);*/







let elementFromDomKamila= document.querySelector(".btnKamila")//ENLACE 
let btnTwo= buttonTurn.animationTo(elementFromDomKamila,givenFunctionObjectBtnTwo);

let btnTestKamila= document.querySelector(".btnTestKamila").onclick=btnTwo//OYENTE
/*btnTestKamila.addEventListener("click", btnTwo);*/




/*#EBCE10*/ 



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