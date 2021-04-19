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
    var valor1=document.formulario.cantidad.value;
    var valor2=document.formulario.cantidad1.value;
    var result=parseFloat(valor1)
    var result1=parseFloat(valor2)
    if(valor1=="" || validares(valor1)==false){
        alert("Por favor llena el campo del salario")
        document.formulario.cantidad.focus();
    }else{
        if(valor2=="" || validares(valor2)==false){
            alert("Por favor llena el campo de las horas")
            document.formulario.cantidad1.focus();
        }else{
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
         }}
        }
    }
 }
function borrar() {
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.cantidad1.value = "";
}