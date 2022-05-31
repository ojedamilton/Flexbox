  ///////////////////////////////////
 /// Validacion NOMBRE y APELLIDO // Debe tener más de 3 letras
///////////////////////////////////

function validateLetterOb(event){
    expr=/^([a-zA-Z])*$/;
   if(event.value.length > 3){
       if (expr.test(event.value)) {
           event.style.borderColor= "green";
       }else{
        event.style.borderColor= "red";
       }
   }else{
    event.style.borderColor= "red";
   }
}

function validateLetterOf(event){
    event.style.borderColor= "";
}

  ///////////////////////////////////
 /// Validacion CORREO ELECTRONICO// Debe tener un formato de email válido.
///////////////////////////////////

function validateEmailOb(valor) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(valor.value)) {
        alert("Error: La dirección de correo " + valor.value + " es incorrecta.");
    }else{
        valor.style.borderColor='green';
    }
}

function validateEmailOf(valor) {
 
   
}
  /////////////////////////////
 /// Validacion CONTRASEÑA /// Al menos 8 caracteres, formados por letras y números.
/////////////////////////////

function validatePasswordOb(pass) {
    // ?= verificacion letras y numeros | numeros y letras
    expr = /^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])/;
    if (pass.value.length > 8 ) {
        if (expr.test(pass.value)) {
            pass.style.borderColor= "green";            
        }else{
            console.log(pass.value);
            console.log('debe contener numero y letras')
            pass.style.borderColor= "red";
        }
    }else{
        console.log('debe contener al menos 8 caracteres')
            pass.style.borderColor= "red";

    }
}


function validatePasswordOf(pass) {
   
}

  ////////////////////////////
 /// Validacion TELEFONO  /// Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.
////////////////////////////
 
function validateTelOb(params) {
    //  * para indicar que serán n caracteres
    expr=/^([0-9])*$/;
    if (params.value.length >= 7) {
        if (expr.test(params.value)) {
            params.style.borderColor = 'green';
        }else {
            console.log('expresion regular mal')
            params.style.borderColor = 'red';
        }
    }else{
        console.log('debe contener al menos 7 digitos');
        params.style.borderColor = 'red';
    }
}
 

function validateTelOf(params) {
   
}



  ////////////////////////////
 /// Validacion DIRECCION /// Al menos 5 caracteres, con letras, números y un espacio en el medio.
////////////////////////////

function validateAddressOb(params) {
    expr=/^(?=[A-Za-z]+\s+[0-9])/;
    if (params.value.length >= 5) {
        if (expr.test(params.value)) {
            params.style.borderColor = 'green';
        }else {
            console.log('expresion regular mal')
            params.style.borderColor = 'red';
        }
    }else{
        console.log('debe contener al menos 5 digitos');
        params.style.borderColor = 'red';
    }  
}

function validateAddressOf(params) {
   
}
