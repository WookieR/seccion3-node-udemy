const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un archivo', opts)
    .command('listar', 'Lista la tabla en consola', opts)
    .help()
    .argv;

module.exports = {
    argv
}