function mostrarDatos(){

var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var select = document.getElementById("pais");
var pais = select.options[select.selectedIndex].text;
var fecha = document.getElementById("fecha");
var usuario = document.getElementById("usuario");
var contraseña = document.getElementById("contraseña");
var confirmar_contraseña = document.getElementById("confirmar_contraseña");
var textoArea = document.getElementById("textoArea");
var texto = document.getElementById("texto");

    texto.value=nombre.value+", "+correo.value+", "+telefono.value+", "+pais+", "+fecha.value+", "+usuario.value+", "+contraseña.value+", "+confirmar_contraseña.value
    +", "+radioSeleccionado()+", "+textoArea.value+", "+boxSeleccionado();

}

function enviarFormulario(){

   
    
    var nombre = document.getElementById("nombre");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var usuario = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var confirmar_contraseña = document.getElementById("confirmar_contraseña");
    var accion = document.getElementById("accion");
    var aventuras = document.getElementById("aventuras");
    var terror = document.getElementById("terror");
    var thriller = document.getElementById("thriller");
    var comedia = document.getElementById("comedia");
    var fantasia = document.getElementById("fantasia");
    var western = document.getElementById("western")
    
   

            if(nombre.value == ""){
                alert("Debe rellenar el nombre");
                return false;

            }
            else{
                if(correo.value == ""){
                    alert("Verifique que el correo está bien escrito");
                    return false;
                }
                else{
                    if(telefono.value == ""){
                        alert("Debe rellenar el telefono");
                        return false;
                    }
                    else{
                        if(usuario.value == ""){
                            alert("Debe rellenar el usuario");
                            return false;
                        }
                        else{
                            if(contraseña.value == ""){
                                alert("Debe rellenar la contraseña");
                                return false;
                            }
                            else{
                                if(confirmar_contraseña.value == ""){
                                    alert("Debe rellenar el campo confirmar contraseña");
                                    return false;
                                }
                                else{
                                    if(radioIsNotSelected()){
                                        alert("Debe seleccionar un sexo");
                                        return false;
                                    }
                else{
                                    
                                

            
       
            if(!correo.value.includes("@gmail.") && !correo.value.includes("@hotmail.") && !correo.value.includes("@yahoo.") && !correo.value.includes("@ieshnosmachado.")){

                alert("Introduce un correo válido");
                return false;

            }
            else{
                if((telefono.value.charAt(0) != 6 && telefono.value.charAt(0)  != 9) || telefono.value.length != 9){

                    alert("Introduce un número de teléfono válido");
                    return false;


                 }
                 else{
                     
                    if(contraseña.value.length < 8 || contraseña.value.length > 30){

                        alert("La contraseña debe tener una longitud de entre 8 y 30 caracteres");
                        return false;
                    }
                    else{

                    


         if (confirmar_contraseña.value != contraseña.value){
            alert("Las contraseñas deben ser iguales");
            
            return false;
        }

        else{
            
            if(!accion.checked && !aventuras.checked && !terror.checked && !thriller.checked && !comedia.checked && !fantasia.checked && !western.checked){
                alert("Debes seleccionar al menos un género");
                
                return false;
            }
    
            else{
            
                alert("Registro completado exitosamente"); 
                return true;
            }
            
        }
        
     }

  }
}
}
}
}
}
}
}
}
}


    function radioSeleccionado(){
        var hombre = document.getElementById("hombre");
        var mujer = document.getElementById("mujer");
       
        if(hombre.checked){
            return 'Hombre';
        }
        
        if(mujer.checked){
            return 'Mujer';
        }
        
        else{
            return 'No binario';
        }



    }

    function boxSeleccionado(){
        var accion = document.getElementById("accion");
        var aventuras = document.getElementById("aventuras");
        var fantasia = document.getElementById("fantasia");
        var terror = document.getElementById("terror");
        var thriller = document.getElementById("thriller");
        var comedia = document.getElementById("comedia");
        var western = document.getElementById("western");
        var res = "";

        if(accion.checked){
            res+="Acción. ";
        }
        
        if(aventuras.checked){
            res+="Aventuras. ";
        }

        if(fantasia.checked){
            res+="Fantasía. ";
        }

        if(terror.checked){
            res+="Terror. ";
        }

        if(thriller.checked){
            res+="Thriller. ";
        }

        if(comedia.checked){
            res+="Comedia. ";
        }

        if(western.checked){
            res+="Western. ";
        }
        return res;
        


    }

    function radioIsNotSelected(){              //comprueba si algún radio está seleccionado

        if(document.getElementById("hombre").checked || document.getElementById("mujer").checked || document.getElementById("otro").checked)
        {
            return false;
        }
        else{
        return true;
        } 
    }
    