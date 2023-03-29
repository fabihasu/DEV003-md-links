const fs = require('fs'); //file system

const validatePathFile = (pathFromFile) => fs.existsSync(pathFromFile); //validar que el existe

console.log('la validacion de la ruta es: ', validatePathFile('./README.md'))
