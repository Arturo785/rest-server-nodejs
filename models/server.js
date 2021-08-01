
const express = require('express');
require('dotenv').config();



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares(); // order matters
        this.routes(); // triggers the init of the routes when called
    }

    middlewares() {
        // we connect our public resources to static express content
        this.app.use(express.static('public'));
    }

    routes() {

        this.app.get('/api', (req, res) => {
            res.send('Hello world')
        });

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Running on ${this.port}`)
        });
    }

}


module.exports = Server;