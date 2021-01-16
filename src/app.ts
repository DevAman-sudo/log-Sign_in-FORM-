// NPM packages //
import express, {Application , Request , Response , NextFunction} from 'express';
import WebSocket from 'socket.io';
import chalk from 'chalk';
import path from 'path';

// app and port setup //
const app: Application = express();
const port = process.env.PORT || 8080;

// file path //
const staticPath = path.join(__dirname , '../public/');

app.use(express.static(staticPath));

// app route //
app.get('/' , (req: Request , res: Response) => {
    res.sendFile(path.join(staticPath , 'index.html'));
});

// listening to server on port 8080 //
app.listen(port , () => {
    console.log( chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`));
});