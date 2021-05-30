const { exec } = require("child_process");

let proceso = spawn('cmd.exe', ['/c','dir']);
proceso.stdout.on('data', function(dato){
    console.log(dato.toString());
})