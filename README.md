# Markdown Links

## Índice

- [1. Sobre el proyecto](#1-sobre-el-proyecto)
- [2. Instalación](#2-instalación)
- [3. Instrucciones de Uso](#3-instrucciones-de-uso)

---

## 1. Sobre el proyecto

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

## 2. Instalación

Para instalar la librería es necesario usar el comando:

`npm i md-links-fabianahasu`

## 3. Instrucciones de Uso

Para extraer los links se ejecuta el siguiente comando:

`md-links <nombre del archivo>.md`

Este comando también acepta los siguientes parámetros:

_`--validate`: Este comando permite saber si la URL de cada link es válida.
_`--stats`: Este comando permite tener una estadística de los links totales y únicos. \*`--validate --stats`:Este comando permite saber la cantidad de links rotos.

En el caso de no pasar ningún parámetro, o sea, ejecutar el programa solo con la ruta del archivo se encontrará todos los links del archivo y se mostrará en un arrego de objetos con las siguientes propiedades:
_`href`: URL encontrada
_`text`: Texto que aparece dentro del link \*`file`: Ruta del archivo dónde se encuentra el link

El comando --validate agrega las siguientes propriedades:

_`status`: Código de respuesta HTTP
_`ok`: Mensaje fail en caso de fallo u ok en caso de éxito.

El comando --stats retorna las siguientes propriedades:

_`total`: Cantidad total de links encontrados
_`unique`: Cantidad total de links únicos
