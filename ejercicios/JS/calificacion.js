
function validarn(e) {
    var teclado=(document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron= /[0-9\d .]/;

    var prueba= String.fromCharCode(teclado);
    return patron.test(prueba);
    
}

function interes() {
    var valor= document.formulario.cantidad.value;
    var valor1=document.formulario.parcial1.value;
    var valor2=document.formulario.parcial2.value;
    var valor3=document.formulario.cantidad1.value;
    var valor4=document.formulario.cantidad2.value;
    var result=parseInt(valor)
    var result1=parseInt(valor1)
    var result2=parseInt(valor2)
    var result3=parseInt(valor3)
    var result4=parseInt(valor4)    
    if (result>10) {
        alert("la calificacion no puede ser mayor a 10")
        document.formulario.cantidad.focus(); 
    }else{
        if (result1>10) {
            alert("La calificacion no puede ser mayor a 10")
            document.formulario.parcial1.focus();
        }else{
            if (result2>10) {
                alert("La calificacion no puede ser mayor a 10")
                document.formulario.parcial2.focus();
            }else{
                if (result3>10) {
                    alert("La calificacion no puede ser mayor a 10")
                    document.formulario.cantidad1.focus();
                }else{
                    if (result4>10) {
                        alert("La calificacion no puede ser mayor a 10")
                        document.formulario.cantidad2.focus();
                    }else{
                        var interes =(result+result1+result2)/3;
                        var total5 = interes*0.055;
                        var total= result3*0.030;
                        var total1= result4*0.015;
                        var total4=(total5+total1+total)/0.100

                        document.formulario.sueldoti.value = total4;  
                    }
                }
            }
        }
    }

}

function borrar() {
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.parcial1.value = "";
    document.formulario.parcial2.value = "";
    document.formulario.cantidad1.value = "";
    document.formulario.cantidad2.value = "";
}