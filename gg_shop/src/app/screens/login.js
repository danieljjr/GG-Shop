import '../styles/login.css';

export function Login () {
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
            <p class="texto"><a class="link">Olvide Mi Contraseña</a></p>

        </div>
         
         <input type="submit" value="login" class="button"></input>
         <input type="submit" value="Register" class="button"></input>
         
       </div>
     </form>  
        

            

    

    </body>
);


}