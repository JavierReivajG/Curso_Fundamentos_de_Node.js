function otraFuncion() {
    return serompe();
}

function sorompe() {
    return 3+z;
}

function SeRompeAsincrona(cb) {
    setTimeout(function(){
        try {
            return 3+z;
         } catch(err) {
             console.error('error a mi funcion asincrona')
             cb(err)
         }
    })
}

try {
   // otraFuncion();
   SeRompeAsincrona(function(){
       console.log("hay error")
   });
} catch(err) {
    console.log('vaya, algo se ah roto')
    console.error(err.message);
}