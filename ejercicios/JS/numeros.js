
function validarn(e) {
    var teclado=(document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron= /[0-9\d .]/;

    var prueba= String.fromCharCode(teclado);
    return patron.test(prueba);
    
}
function validares(e) {
    var patron1= /^\s+$/;
    if (patron1.test(e)) {
        return false;
    }else{
        return true;
    }
}
function interes() {
    var valor= document.formulario.cantidad.value;
    var valor1=document.formulario.hombres.value;
    var result=parseFloat(valor)
    var result1=parseFloat(valor1)
    if (result==result1) {
        var interes = result1*result;
        document.formulario.sueldoti.value = "Los numeros son iguales";
        document.formulario.sueldote.value = interes;
        }        
     else{
         if (result>result1) {
        var interes = result1+result;
        document.formulario.sueldoti.value = "El primero es mayor";
        document.formulario.sueldote.value = interes;
         }
         else{
            var interes = result1-result;
            document.formulario.sueldoti.value = "El segundo es mayor";
            document.formulario.sueldote.value = interes;

         }
    }
    

}

function borrar() {
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.sueldote.value = "";
    document.formulario.hombres.value = "";
    document.formulario.mujeres.value = "";
}