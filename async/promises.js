function hola(nombre) {
    return new Promise(function(resolve,reject) {
        setTimeout(function() {
            console.log("Hola, "+ nombre);
            resolve(nombre);
        },1000);
    })
}


function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function(){
            console.log("bla bla bla");
            //resolve(nombre);
            reject("hay un error");
        }, 1000)
    })

}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Adios",nombre);
            resolve(nombre);
        }, 1000);
    });

}

console.log('iniciando el proceso');
hola("carlos")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('terminado el proceso');
    })
    .catch(error => {
        console.error("ah habido un error");
        console.error(error)
    })