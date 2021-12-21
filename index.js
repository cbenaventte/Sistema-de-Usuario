const http = require("http");
const fs = require("fs");
const url = require('url');
const {insertar, consultar, validar} = require("./consultas");

http
    .createServer(async (req, res) => {
        if (req.url == "/" && req.method === "GET") { //Devuelve la aplicación cliente 
            res.setHeader("content-type", "text/html");
            const html = fs.readFileSync("index.html", "utf8");
            res.end(html);
        }
 
        //Recibe los datos de un nuevo usuario y los almacena en PostgreSQL
        if ((req.url == "/usuario" && req.method == "POST")) {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", async () => {

                const datos = Object.values(JSON.parse(body));
                const respuesta = await insertar(datos);
                res.end(JSON.stringify(respuesta));
            });
        }

        if (req.url == "/usuarios" && req.method === "GET") {
            const registros = await consultar();
            //console.log(registros)
            res.end(JSON.stringify(registros,null,1));
        }


        if ((req.url == "/login" && req.method == "POST")) {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", async () => {

                const datos = Object.values(JSON.parse(body));
                const respuesta = await validar(datos);
                if ( respuesta.rows[0].count != 0){
                    //res.end(JSON.stringify(respuesta)); 
                    res.end();
                } else {
                    console.log('No hay registros que coincidan');
                }
            });
        }




        
    })
    .listen(3000, console.log("SERVER ON"));