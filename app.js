//requireds
//3 tipos de requireds
//const fs = require('express'); paquete que se instala no es nativo de node
//const fs = require('./fs'); archivos de proyecto

//destructuracion de funcion de multiplicar

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((result) => {
                console.log(`Archivo creado:`, colors.rainbow(result));
            }).catch((err) => {
                console.log(err);
            });;
        break;
    default:
        console.log('Comando no reconocido');
}
//console.log(process.argv);

//let argv2 = process.argv;
/* 
let parametro = argv[2];
let base = parametro.split('=')[1]; */
//console.log('Limite', argv.limite);