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
    var valor2=document.formulario.mujeres.value;
    var result=parseFloat(valor)
    var result1=parseFloat(valor1)
    var result2=parseFloat(valor2)
    if(valor=="" || validares(valor)==false){
        alert("Por favor llena el campo del primer numero")
        document.formulario.cantidad.focus();
    }else{
        if(valor1=="" || validares(valor1)==false){
        alert("Por favor llena el campo del segundo numero")
        document.formulario.hombres.focus();
    }else{
        if(valor2=="" || validares(valor2)==false){    
        alert("Por favor llena el campo del primer numero")
        document.formulario.mujeres.focus();
        }else{if ((result<result1)<result2) {
        if (result<result1) {
            var interes = result2;
            var interes1 = result1
            var interes2 = result;
            document.formulario.sueldoti.value = interes;
            document.formulario.sueldote.value = interes1;
            document.formulario.sueldota.value = interes2;

        }else{
            var interes = result2;
            var interes1 = result1
            var interes2 = result;
            document.formulario.sueldoti.value = interes;
            document.formulario.sueldote.value = interes2;
            document.formulario.sueldota.value = interes1;
        }
        }else{
            if ((result<result1)>result2) {
                if (result<result1) {
                    var interes = result2;
                    var interes1 = result1
                    var interes2 = result;
                    document.formulario.sueldoti.value = interes1;
                    document.formulario.sueldote.value = interes;
                    document.formulario.sueldota.value = interes2;
        
                }else{
                    var interes = result2;
                    var interes1 = result1
                    var interes2 = result;
                    document.formulario.sueldoti.value = interes;
                    document.formulario.sueldote.value = interes1;
                    document.formulario.sueldota.value = interes2;
                }
         }if (result>(result1<result2)) {
            if (result1<result2) {
                var interes = result2;
                var interes1 = result1
                var interes2 = result;
                document.formulario.sueldoti.value = interes2;
                document.formulario.sueldote.value = interes;
                document.formulario.sueldota.value = interes1;
    
            }else{
                var interes = result2;
                var interes1 = result1
                var interes2 = result;
                document.formulario.sueldoti.value = interes2;
                document.formulario.sueldote.value = interes1;
                document.formulario.sueldota.value = interes;
            }

         }
    }
    }}}
    
    

}

function borrar() {
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.sueldote.value = "";
    document.formulario.hombres.value = "";
    document.formulario.mujeres.value = "";
    document.formulario.sueldota.value = "";
}