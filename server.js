// NPM packages and app setup //
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const Datastore = require('nedb');
const io = require('socket.io')(server);
const chalk = require('chalk');
const path = require('path');
const port = process.env.PORT || 8080;

// file path || app use //
const staticPath = path.join( __dirname , 'public/');
const databasePath = path.join( __dirname);
//
app.use(express.static(staticPath));

// installized database //
const database = new Datastore({
    filename: path.join(databasePath , 'database.db')
});
database.loadDatabase();

// web socket / socket.io //
io.on('connection' , (socket) => {
    
    socket.on('client_value' , data => {
        database.insert({
            message: data
        });
        database.find( {} , (err , data) => {
            if (err) {
                console.log(`Error Found => ${err}`);
            } else {
                socket.emit('server_value' , data[0].message);
            }
        });
    });
    
});

// server / app routing //
app.get('/' , (req , res) => {
    res.sendFile( path.join(staticPath , 'index.html'));
});

// listening on server port 8080 //
server.listen( port , (err) => {
    if (err) {
        console.log(`Error Found => ${err}`);
    } else {
        console.log( chalk.red.bgBlue.bold(`http://127.0.0.1:8080`));
    }
});