function validarn(e) {
    var teclado=(document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron= /[0-9\d ]/;

    var prueba= String.fromCharCode(teclado);
    return patron.test(prueba);
    
}
function interes() {
    var valor1=document.formulario.cantidad1.value;
    var valor2=document.formulario.cantidad2.value;
    var result=parseInt(valor1)
    var result1=parseInt(valor2)
    if (result1<result) {
        alert("El año actual es menor al que naciste")
        document.formulario.cantidad1.focus();
        }        
     else{

            var interes = result1-result;
            var total= interes;
            document.formulario.sueldoti.value = total + "años";
         }
         }
function borrar() {
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formular}