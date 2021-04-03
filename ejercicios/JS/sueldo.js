
function validarn(e) {
    var teclado=(document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron= /[0-9\d .]/;

    var prueba= String.fromCharCode(teclado);
    return patron.test(prueba);
    
}

function interes() {
    var valor= document.formulario.cantidad.value;
    var valor1=document.formulario.venta1.value;
    var valor2=document.formulario.venta2.value;
    var valor3=document.formulario.venta3.value;
    var result=parseInt(valor)
    var result1=parseInt(valor1)
    var result2=parseInt(valor2)
    var result3=parseInt(valor3)
    var interes =result+(result1*0.10)+(result2*0.10)+(result3*0.10);
    var total= interes;

    document.formulario.sueldoti.value ="$" + total;
}

function borrar() {
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.venta1.value = "";
    document.formulario.venta2.value = "";
    document.formulario.venta3.value = "";
}