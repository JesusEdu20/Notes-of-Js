export class button //Clase button
{
    constructor(objectAnimation)// se le pasara por parametro un objetoAnimation
    {this.objectAnimation=objectAnimation;}

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


 export class anima //Clase button
{
    constructor(objectAnimation)// se le pasara por parametro un objetoAnimation
    {
        this.objectAnimation=objectAnimation;
    }

    animationTo= function(elementRecived)
    {   
        let click= false;
        let {beggin,ending,optionFrames}=this.objectAnimation;
        
    
        function animate(){
     
        console.log(beggin)
       

        switch(click){

        
            case false:
                elementRecived.animate(beggin, optionFrames);
                click=true;
            break;
            
            case true:
            
                elementRecived.animate(ending, optionFrames);
                click=false;
        }
        

        }

        return animate
    }


}



export class buttonAuto 
{
    constructor(classImport)
    {
        this.classImport= classImport || "material-symbols-outlined";
    }

    lookElement= function(classButton,ubicationButton,iconSpan)
    {
        let classBtn=classButton;
        let ubicationBtn=document.querySelector(ubicationButton)//se le pasa clase, en string
        let icon=iconSpan;
        let classImported=this.classImport

        function element()
        {

            let elementButton= document.createElement("button");
            let spanElement=document.createElement("span");
            ubicationBtn.appendChild(elementButton);
            elementButton.appendChild(spanElement);
            elementButton.classList.add(`${classBtn}`)
            spanElement.classList.add(classImported);
           
            
            spanElement.innerHTML=icon
            coleccionBtn.push(elementButton)

        }

        return element
    }
}


export let coleccionBtn=[]


export class evaluatorTo
{
    constructor()
    {
        /*this.funToExecute=funToExecute;
        this.targetTo=targetTo; 
        this.minWidth=minWidth;*/
    }

        lookAtWidth= function(funToExecute, targetTo, minWidth)
        {
            /*const target=t.targetTo*/
            const execute=funToExecute;
            const target=targetTo;
            const width= minWidth;

                function con()
                {
                        
                    if(target.clientWidth<=width)
                    {   
                       
                        execute();
                        
                    }

                    else
                    {
                        window.location.reload()
                    }

                }

            return con
        }

}