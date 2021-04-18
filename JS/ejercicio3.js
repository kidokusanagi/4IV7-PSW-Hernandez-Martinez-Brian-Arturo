function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var letras = /[A-Z,ÑÁÉÍÓ]/;

    var probar = String.fromCharCode(teclado);
    return letras.test(probar);
}
function problema(){
    var input = document.querySelector('#p3-input').value;

    var array = input.split(',').reduce((acc, val) => acc.length > val.length ? acc : val, '');

    var respuesta="";

    for (var x = 0; x < array.length; x++) {
        var char = array.charAt(x);
        if (respuesta.indexOf(char) == -1 || char == ' ') {
            respuesta += array[x];
        }
    }

    respuesta_mayus = respuesta.match(/.{1,1}/g);
    respuesta2=respuesta;
    final = respuesta_mayus.join(", ");

    document.querySelector('#output').textContent = "Las letras son: " + final;
    document.querySelector('#output1').textContent = "La palabra con mayor letras sin repetir fue: " + array;

}

