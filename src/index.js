const mdLinksApi = require('./api.js');

function mdLinks(path, options){
  let absolutePath = path;
  return new Promise((resolve, reject) => {
    const isAbsolute = mdLinksApi.absolute(absolutePath)

    if(!isAbsolute) {
      absolutePath = mdLinksApi.transformToAbsolute(absolutePath)
    }


    const exist = mdLinksApi.validatePathFile(absolutePath)
    if(!exist) {
      reject("El archivo no existe")
      return;
    }

    const isMd = mdLinksApi.mdExtention(absolutePath)

    if(!isMd) {
      reject("El archivo no es MD")
      return;
    }

    const response = mdLinksApi.getLinksResponseObject(absolutePath)

    if (options?.validate) {
      mdLinksApi.validateLinks(response)
      .then((result) => {
        // console.log('result if', result);
        resolve(result)
      })
    } else {
      // console.log('result else', response);
      resolve(response)
    }
  });
};


// mdLinks('./README.md', { validate: true }).then((data) => console.log('data: ', data))
// mdLinks('./README.md', { validate: false }).then((data) => console.log('data: ', data))


module.exports = {
  mdLinks
};