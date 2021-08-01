
const express = require('express');
const cors = require('cors');

require('dotenv').config();



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersRoutePath = '/api/users';

        this.middlewares(); // order matters
        this.routes(); // triggers the init of the routes when called
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Parse and lecture of body
        this.app.use(express.json());

        // we connect our public resources to static express content
        this.app.use(express.static('public'));
    }

    routes() {

        this.app.use(this.usersRoutePath, require('../routes/user'));
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Running on ${this.port}`)
        });
    }

}


module.exports = Server;