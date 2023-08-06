import  '../styles/fpassword.css';

export const Fpassword = ()  =>{
    return (
     
    

      <div>   
        <form class="formulario">
        
        <div class="logoContainer">

           <div class="logo"/>

        </div>
       
       <div class="contenedor">

        <div class="input-contenedor">
            
             
             <p>Nueva Contraseña</p>
            <input type="password" placeholder="Nueva Contraseña"></input> 

        </div>

        <div class="input-contenedor">
            <p>Confirmar Contraseña</p>
            <input type="password" placeholder="Confirmar contraseña"></input> 
            

        </div>

        <div class="buttonCon">
         
         <input type="submit" value="Confirmar" class="button"></input>
         
         </div>
         
       </div>
     </form>  
      </div>
      );


}