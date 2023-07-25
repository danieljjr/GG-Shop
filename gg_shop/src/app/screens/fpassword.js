import  '../styles/fpassword.css';

export const Fpassword = ()  =>{
    return (
     
    

      <div>   
        <form class="formulario">
       
       
       <div class="contenedor">

        <div class="input-contenedor">
            <h1>Restaurar Contraseña</h1>
             
             <p>Nueva Contraseña</p>
            <input type="password" placeholder="Nueva Contraseña"></input> 

        </div>

        <div class="input-contenedor">
            <p>Confirmar Contraseña</p>
            <input type="password" placeholder="Confirmar contraseña"></input> 
            

        </div>
         
         <input type="submit" value="Confirmar" class="button"></input>
         
         
       </div>
     </form>  
      </div>
      );


}