const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite) => {
    let cadenaRetorno = '';

    for (i = 1; i <= limite; i++) {
        cadenaRetorno += `${ i } * ${ base } = ${ i * base }\n`;
    }

    console.log(cadenaRetorno.magenta);
}

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        for (let i = 1; i <= 10; i++) {

            data += `${ i } * ${ base } = ${ i*base }\n`;

        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }.txt`.green);
            }


        });

    })
};

module.exports = {
    crearArchivo,
    listarTabla
};