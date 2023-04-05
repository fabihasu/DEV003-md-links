const fs = require('fs'); //file system
const path = require('path');// path

const validatePathFile = (file) => fs.existsSync(file); //validar que el archivo existe
const absolute = (file) => path.isAbsolute(file); //validar si la ruta es absoluta
const mdExtention = (file) => path.extname(file) === '.md'; //validar la extensión de archivo si es MD o no
const openFile = (file) => fs.readFileSync(file, 'utf8'); // abro el archivo y lo guardo en una variable llamada openFile

//obtener los links del archivo .md
const getLinks = (file) => {
    const regexGetLinks = /\[(.+)\]\((https?:\/\/\w+.+)\)/g; // ex. regular que encuentra todos los links en formato .md
    const links = (openFile(file).match(regexGetLinks)); // devuelvo las coincidencias de la ex. regular aplicada al archivo en un arreglo
    if(links!=null){ // valido si encontré o no algun link 
        return links // retorno los links encontrados
    }
};

const getLinksResponseObject = (file) => {
    const links = getLinks(file)
    const response = [];
    links.forEach((link) => {
        const partialResponse = link.split('](')

        response.push({
            href: partialResponse[1].substring(0, partialResponse[1].length -1),
            text: partialResponse[0].substring(1),
            file: file,
        })

    })
    return response
}

const file = './README.md'

console.log('llamando a validatePathFile', validatePathFile(file))

console.log('llamando a absolute', absolute(file))

console.log('llamando a mdExtention', mdExtention(file))

// console.log('llamando a openFile', openFile(file))

console.log('llamando a getLinks', getLinks(file))

console.log('llamando a getLinksResponseObject', getLinksResponseObject(file))





