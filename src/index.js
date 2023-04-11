const mdLinksApi = require('./api.js');

function mdLinks(path, options){
  return new Promise((resolve, reject) => {
    const exist = mdLinksApi.validatePathFile(path)
    if(!exist) {
      reject("El archivo no existe")
      return;
    }

    const isMd = mdLinksApi.mdExtention(path)

    if(!isMd) {
      reject("El archivo no es MD")
      return;
    }

    const response = mdLinksApi.getLinksResponseObject(path)
    // console.log('response', response)


    if (options.validate) {
      // console.log("Validando....",response)
      mdLinksApi.validateLinks(response)
      .then((result) => {
        console.log('result', result);
      })
      // .catch((error) => {
      //   console.error('error', error);
      // });
    }
    resolve(response)
    return;
  });
};


mdLinks('./README.md', { validate: true })


module.exports = {
  mdLinks
};
