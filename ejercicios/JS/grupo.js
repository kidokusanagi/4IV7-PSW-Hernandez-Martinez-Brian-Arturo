
function validarn(e) {
    var teclado=(document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron= /[0-9\d ]/;

    var prueba= String.fromCharCode(teclado);
    return patron.test(prueba);
    
}
function interes() {
    var valor= document.formulario.cantidad.value;
    var valor1=document.formulario.hombres.value;
    var valor2=document.formulario.mujeres.value;
    var result=parseInt(valor)
    var result1=parseInt(valor1)
    var result2=parseInt(valor2)
    if (result<result1) {
        alert("El numero de hombres es mayor al grupo")
        document.formulario.hombres.focus();
        document.formulario.sueldoti.value = "Ingresa datos correctos";
        document.formulario.sueldote.value = "Ingresa datos correctos";
        }        
     else{
         if (result<result2) {
        alert("El numero de mujeres es mayor al grupo")
        document.formulario.mujeres.focus();        
        document.formulario.sueldoti.value = "Ingresa datos correctos";
        document.formulario.sueldote.value = "Ingresa datos correctos";
         }
         else{
             if (result1+result2>result) {
                alert("El numero de estudiantes es mayor al grupo")
                document.formulario.sueldoti.value = "Ingresa datos correctos";
                document.formulario.sueldote.value = "Ingresa datos correctos";
             }else{
        var interes =result*(result1*0.010);
        var interes1 = result*(result2*0.010);
        var total= interes;
        var total1=interes1
        document.formulario.sueldoti.value = total+"%";
        document.formulario.sueldote.value = total1+ "%";
         }
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