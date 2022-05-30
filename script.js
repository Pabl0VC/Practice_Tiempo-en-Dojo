console.log("cargando pagina...");

function cargando(){
    alert("Cargando informe meteorológico...")
}




/* ahora crearemos la funcion para que al pinchar en aceptar cookies desaparesca toda la barra de cookies. */
var barraCookies = document.querySelector(".cookies")   /* aqui creamos una variable para seleccionar toda la barra de cookies que creamos en el HTML, en este caso el div de las cookies le puse el nombre de "cookies" */

function aceptar () {           /* aqui creamos la funcion donde juntamos el clic que haremos en el boton con toda la barra (variable) para que desaparezca  */
    barraCookies.remove();
}




function celFaren(temp) {
    return 9 * 5 * temp + 32;
}


function cambiarUnidad(element) {
    console.log(element.value);         /* hacemos esto para verificar en la consola si está reconociendo cuando pinchamos en la casilla de las unidades de temperatura */
    for (var i=1; i<9; i++) {
        var temp = document.querySelector("#temp" + i);
    var valorTemp = temp.innerText
    }
}


