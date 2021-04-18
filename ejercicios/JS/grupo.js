
function validarn(e) {
    var teclado=(document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron= /[0-9\d ]/;

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
    var valor2=document.formulario.mujeres.value;
    var result=parseInt(valor)
    var result1=parseInt(valor1)
    var result2=parseInt(valor2)
    if(valor=="" || validares(valor)==false){
        alert("Por favor llena el campo del grupo")
        document.formulario.cantidad.focus();
    }else{
        if(valor1=="" || validares(valor1)==false){
            alert("Por favor llena el campo del numero de hombres")
            document.formulario.hombres.focus();
        }else{
            if(valor2=="" || validares(valor2)==false){
                alert("Por favor llena el campo del numero de mujeres")
                document.formulario.mujeres.focus();
            }else{    if (result<result1) {
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
             }else{              if (result1+result2<result) {
                alert("El numero de estudiantes es menor al grupo")
                document.formulario.sueldoti.value = "Ingresa datos correctos";
                document.formulario.sueldote.value = "Ingresa datos correctos";
             }else{
        var interes =(100)*(result1/result);
        var interes1 = (100)*(result2/result);
        var total= interes;
        var total1=interes1
        document.formulario.sueldoti.value = total+"%";
        document.formulario.sueldote.value = total1+ "%";
         }
         }
    }
    

}}}}}

function borrar() {
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.sueldote.value = "";
    document.formulario.hombres.value = "";
    document.formulario.mujeres.value = "";
}