import '../styles/login.css';
import { Link } from 'react-router-dom';

export const Login = () => {
return (
    
    <body>
    <form class="formulario">
       
       <div class="logo">

      <h1>logo</h1> 
      
      </div>
      
       <div class="contenedor">

        <div class="input-contenedor">
            <p>Correo</p>
            <input type="text" placeholder="correo"></input> 

        </div>

        <div class="input-contenedor">
            <p>Contraseña</p>
            <input type="password" placeholder="contraseña"></input> 
            <p class="texto"><Link to="/forgotPassword">Olvide Mi Contraseña</Link></p>

        </div>
        
       </div>
       <div class="buttonsContainer">
         <input type="submit" value="login" class="button"></input>
         <input type="submit" value="Register" class="button"></input>
         </div>
     </form>  
        

            

    

    </body>
);


}