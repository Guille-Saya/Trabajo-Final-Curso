function validaNumeros(event){
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;        
}

function confEnvio(){
   alert("Sus datos han sido enviados correctamente.");
}

function borrar(){
    var message = ("¿Seguro quieres borrar tus datos?");
    if(confirm(message)){
        return true;
    }else{
        return false;
    }
}

