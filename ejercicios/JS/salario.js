function validarn(e) {
    var teclado=(document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron= /[0-9\d .]/;

    var prueba= String.fromCharCode(teclado);
    return patron.test(prueba);
    
}
function interes() {
    var valor1=document.formulario.cantidad1.value;
    var valor2=document.formulario.cantidad2.value;
    var result=parseInt(valor1)
    var result1=parseInt(valor2)
    if (result1>40) {
        if (result1>48){
            var interes4=40*result;
            var interes2 = 8*(result*2)
            var interes1 = (result1-48)*(result*3);

            var interes3 = interes1+interes4 + interes2;
            document.formulario.sueldoti.value = "$" + interes3;
        }else{            
            var interes=(result1-40)*(result*2);
            var interes2=40*result;
            var interes3=interes + interes2;
            document.formulario.sueldoti.value= "$" + interes3;
        }
        }        
     else{

            var interes = result*result1;
            var total= interes;
            document.formulario.sueldoti.value = "$" + total ;
         }
         }
function borrar() {
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formular}