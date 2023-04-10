const mdLinksApi = require('./api.js');

function mdLinks(path, options){
  const exist = mdLinksApi.validatePathFile(path)

  if(!exist) {
    console.log("El archivo no existe")
    return;
  }

  const isMd = mdLinksApi.mdExtention(path)

  if(!isMd) {
    console.log("El archivo no es MD")
    return;
  }

  const response = mdLinksApi.getLinksResponseObject(path)
  // console.log('response', response)


  if (options.validate) {
    // console.log("Validando....",response)
    const responseValidated = mdLinksApi.validateLinks(response)
  }


  return response;
};


mdLinks('./README.md', { validate: true })


module.exports = {
  mdLinks
};
