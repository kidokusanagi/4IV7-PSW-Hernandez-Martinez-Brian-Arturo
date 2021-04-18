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
    
    var result=parseFloat(valor)
    if(valor=="" || validares(valor)==false){
        alert("Por favor llena el campo de sueldo base")
        document.formulario.cantidad.focus();
    }else{
    var interes =result*0.15;
    var total= result-interes;

    document.formulario.sueldoti.value ="$" + total;
}
}
function borrar() {
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
}