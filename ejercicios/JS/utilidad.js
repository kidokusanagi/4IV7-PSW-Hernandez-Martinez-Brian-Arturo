function validarn(e) {
    var teclado=(document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron= /[0-9\d .]/;

    var prueba= String.fromCharCode(teclado);
    return patron.test(prueba);
    
}
function interes() {
    var valor1=document.formulario.cantidad.value;
    var valor2=document.formulario.cantidad1.value;
    var result=parseInt(valor1)
    var result1=parseInt(valor2)
    if (result1>10) {          
            var interes = result*0.20;
            document.formulario.sueldoti.value = "$" + interes;
        }else{  if((result1>5)<10){          
            var interes = result*0.15;
            document.formulario.sueldoti.value = "$" + interes;
         }else{
             if((result1>2)<5){
            var interes = result*0.10;
            document.formulario.sueldoti.value = "$" + interes;
         } else {
            if((result1>1)<2){
                var interes = result*0.07;
                document.formulario.sueldoti.value = "$" + interes;
             }else{
                if(result1<1){
                    var interes = result*0.05;
                    document.formulario.sueldoti.value = "$" + interes;
                 }
             }
         }
         }}}
function borrar() {
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.cantidad1.value = "";
}