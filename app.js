const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const colors = require('colors');

const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base).then(archivo => {
            console.log(`El archivo ${ archivo } ha sido creado`);
        }).catch(err => {
            console.log(err);
        });;
        break;

    default:
        console.log('comando no reconocido');

}