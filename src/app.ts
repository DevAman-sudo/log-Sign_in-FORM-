import express from 'express';
import WebSocket from 'socket.io';
import path from 'path';

const app: express.Application = express();
const port = process.env.PORT || 8080;

const staticPath = path.join(__dirname , '../public/');

app.use(express.static(staticPath));

app.get('/' , (req , res) => {
    res.sendFile(path.join(staticPath , 'index.html'));
});

app.listen(port , () => {
    console.log('server started');
});