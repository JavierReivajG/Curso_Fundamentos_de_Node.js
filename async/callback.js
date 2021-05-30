function hola(nombre,micallback) {
    setTimeout(function() {
        console.log("Hola, "+ nombre);
        micallback(nombre);
    },1000);
}

function hablar(callbackhablar) {
    setTimeout(function(){
        console.log("bla bla bla");
        callbackhablar();
    }, 1000)
}

function adios(nombre,otrocallback) {
    setTimeout(function() {
        console.log("Adios",nombre);
        otrocallback();
    },1000);
}

function conversacion(nombre, veces, callback) {
    if(veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback);
        })
    }else {
        adios(nombre, callback);
    }
}


console.log("Iniciando proceso...");
hola("carlos",function (nombre) {
    conversacion(nombre, 3, function() {
        console.log("terminando proceso"); 
    });
});
