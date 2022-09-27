# Contenidos vistos en clase:

* Uso de `npm` (Node Package Manager - Manejador de Paquetes de Node)
    * Instalacion de paquetes (`npm install package@version` o `npm i package@version`)
        * Paquetes de produccion (`dependencies`) y paquetes de desarrollo (`devDependencies`)
        * Carpeta `node_modules` (Todos los modulos o librerias descargados)
        * `package.json` (Configuracion del proyecto en formato JSON - Javascript Object Notation)
            * Uso de [versionado semantico](https://fperez217.medium.com/qu%C3%A9-es-versionamiento-sem%C3%A1ntico-bf495b9eb028) - [video](https://www.youtube.com/watch?v=hwlOuZvaDIA) - [Packagist Semver Checker](https://semver.madewithlove.com/?package=madewithlove%2Fhtaccess-cli&constraint=dev-main&stability=stable)
        * `package-lock.json` (Configuracion final del proyecto con dependencias finales instaladas)
    * Scripts para la ejecucion con `node`
        * Uso de `npm start` o `npm run start`
        * Uso de `npm test` o `npm run test`
* Instalacion de `express` usando `npm` (`npm install express` o `npm i express`)
    * Uso de dos ficheros para la creacion del servidor
        * `server.js` - Configuracion del servidor

            ```javascript
            const express = require("express")

            const app = express()

            module.exports = app
            ```

        * `index.js` - Archivo con la inicializacion del servidor

            ```javascript
            const app = require("./server")

            const port = 8888
            app.listen(port,()=>{
                console.log(`Servidor escuchando en http://localhost:${port}`)
            })
            ```

    * Configuracion de rutas
        * Uso de `.get()`, `.post()`, `.put()`, `.delete()` y otros verbos de `HTTP`
        * Uso de `.use()` para que haga match con todos los verbos
            * Parametros de estas funciones
                * Primer parametro sera la ruta donde se invocara
                * Segundo y resto de parametros seran callbacks que reciben tres parametros
                    * El primero sera la `request` o la peticion del usuario
                    * El segundo sera la `response` o el objeto para la respuesta al usuario
                    * El tercero sera una funcion llamada `next` que se invocara para seguir el flujo de callbacks que se encuentren en la funcion principal (`use`,`get`,...)

        * `server.js`
            
            ```javascript
            const express = require("express")

            const app = express()

            app.get("/",handleRootRequest)

            function handleRootRequest(req,res,next){
                res.send("Hola desde el servidor")
            }

            module.exports = app
            ```

* Introduccion a TDD (Test Driven Development)
    * Desarrollo Manejado Por Test 
    * Librerias para el testing:
        * `node:test` - Nativa de NodeJS
        * `jest` - Instalacion requerida
            * `npm install -D jest` 
            * Configuracion del `package.json`
                
                ```json
                {
                    "scripts":{
                        "test": "jest"
                    }
                }
                ```
            * Ejemplo de un archivo de test (`index.spec.js` o `index.test.js`)
            
            ```javascript
            function sum(...nums) {
                const total = 0

                for (let index = 0; index < nums.length; index++)
                    total += nums[index]

                return total
            }

            describe("Operaciones aritmeticas", () => {
                it("Deberia sumar todos los numeros pasados por parametro", () => {
                    expect(sum(1, "2", 5.0)).toBe(8);
                })
            })
            ```

            * Con esta configuracion, buscara todos los archivos que tengan
                la extension `.spec.js` o `.test.js` y procedera a ejecutarlos
            * Para una completa configuracion de testing usando `Jest` tambien sera de utilidad
            la libreria `supertest`
                * `npm i -D supertest`
                * `index.test.js`
                    ```javascript
                    const request = require('supertest')
                    
                    const app = require('./server')
                    
                    describe('Aplicacion de Express', () => {
                        
                        it('deberia existir la ruta raiz', async () => {
                            
                            const res = await request(app).get('/')

                            expect(res.statusCode).toEqual(200)
                        })
                    })
                    ```
            * Por configuracion de variables de entorno en el sistema de windows, haremos uso de
            `cross-env` que nos permite agregar variables de entorno en nuestros `scripts`
                * `npm i -D cross-env`
                * `package.json`

                    ```json
                    {
                        "scripts":{
                            "test": "cross-env NODE_ENV=test jest"
                        }
                    }
                    ```