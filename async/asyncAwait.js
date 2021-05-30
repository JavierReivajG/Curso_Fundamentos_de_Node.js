async function hola(nombre) {
    return new Promise(function(resolve,reject) {
        setTimeout(function() {
            console.log("Hola, "+ nombre);
            resolve(nombre);
        },1000);
    })
}


async function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function(){
            console.log("bla bla bla");
            //resolve(nombre);
            resolve("hay un error");
        }, 1000)
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Adios",nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function main (){
    let = nombre = await hola("carlos");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}

console.log("empezamos el proceso");
main();
console.log("termina el proceso");