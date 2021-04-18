
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
    var valor1=document.formulario.venta1.value;
    var valor2=document.formulario.venta2.value;
    var valor3=document.formulario.venta3.value;
    var result=parseFloat(valor)
    var result1=parseFloat(valor1)
    var result2=parseFloat(valor2)
    var result3=parseFloat(valor3)

    if (valor=="" || validares(valor)==false) {
        alert("Por favor llena el campo de sueldo base")
        document.formulario.cantidad.focus();
        } else{ 
                if(valor1=="" || validares(valor1)==false){      
                    alert("Por favor llena el campo de la venta 1")
                    document.formulario.venta1.focus();}
                    else{     if(valor2=="" || validares(valor2)==false){      
                                alert("Por favor llena el campo de la venta 2")
                                document.formulario.venta2.focus();}
                                else{  if(valor3=="" || validares(valor3)==false){      
                                                alert("Por favor llena el campo de la venta 3")
                                                document.formulario.venta3.focus();}
                                                else{
                                                    if(valor3<1){
                                                        alert("La cantidad dno puede ser menor a 1")
                                                        document.formulario.venta3.focus();
                                        }else{
                    
    
                var interes =result+(result1*0.10)+(result2*0.10)+(result3*0.10);
    var total= interes;

    document.formulario.sueldoti.value ="$" + total;
        }}


}}}}

function borrar() {
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.venta1.value = "";
    document.formulario.venta2.value = "";
    document.formulario.venta3.value = "";
}