function validar(form) {
    
    if (form.nombre.value.length < 5) {
        alert("i");
        form.nombre.focus();
    return false;
        
    }
    
    var checkOk="QWERTYUIOPASDFGHJKLÑZXCVBNM " + "qwertyuiopasdfghjklñzxcvbnm "

    var checkStr = form.nombre.value;

    var allValid= true;

    for(var i = 0; i < checkStr.length; i++){
        var ch=checkStr.charAt(i);
        for(j=0; j < checkOk.length; j ++)
        if(ch ==checkOk.charAt(j))
        break;

        if(j==checkOk.length){
            allValid = false;
            break;
        }
    }
    if(!allValid){
        alert("Escribe solo letras en el campo");
        form.nombre.focus();
        return false;
    }
    var checkOk="1234567890"

    var checkStr = form.edad.value;

    var allValid= true;

    for(var i = 0; i < checkStr.length; i++){
        var ch=checkStr.charAt(i);
        for(j=0; j < checkOk.length; j ++)
        if(ch ==checkOk.charAt(j))
        break;

        if(j==checkOk.length){
            allValid = false;
            break;
        }
    }
    if(!allValid){
        alert("Escribe solo numeros en el campo edad");
        form.edad.focus();
        return false;
    }
    var txt= form.email.value;

    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s])+$/;
    alert("Email"+ (b.test(txt)?"":" no ")+" valido");
    return b.test(txt);
}

