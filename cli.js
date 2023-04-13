#!/usr/bin/env node
const { mdLinks } = require ("./src/index.js")

const path = process.argv[2]; //process.arg es un arreglo, process.arg[2]é oe elemento da posição 2
const validate = process.argv.includes("--validate")
const options = { validate: validate }
const stats = process.argv.includes("--stats")


mdLinks(path, options).then(data => {
    if (stats){
        const total = data.length

        console.log('Total: ', total)
        
        const hrefs = data.map(item => item.href)
        const uniqueArr = hrefs.filter((url, index) => hrefs.indexOf(url) === index);
        const uniquesTotal = uniqueArr.length;

        console.log('Unique: ', uniquesTotal)
        
        if (validate) {
            const brokens = data.filter(elem => elem.status !== 200) 
            console.log('Broken: ', brokens.length)
        }

        return
    }

    console.log('Links', data)
})