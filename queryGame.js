
import {createServer} from 'node:http';
import fs, { readFile } from 'node:fs';
import url from 'node:url';

const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {

    if (req.method === "GET") {

// Leemos el fichero HTML para obtener su contenido

        fs.readFile ('queryGameHTML.html', (err, data) => {
            console.log(data);
                if (err) {
                    res.end("error al leer")
                } else {
                // usar url para obtener querystrings (nombre, edad)
                    const parsedUrl = url.parse(req.url, true); // The second argument 'true'
                    console.log(parsedUrl);
                    const queryData = parsedUrl.query; // Access the query object
                    const nombre = queryData.nombre; // Assuming the URL is ?name=Jose
                    const edad = queryData.edad; // Assuming the URL is ?age=20 
                
                    let pagecode = data.toString();
                    pagecode = pagecode.replace("{{nombre}}", nombre );
                    pagecode = pagecode.replace("{{edad}}", edad );
                    res.write(pagecode);
                    res.end;
                }
        })

       

    }

});

server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);

});
