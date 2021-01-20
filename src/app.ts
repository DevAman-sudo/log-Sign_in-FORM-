// NPM packages //
import express, {
    Application,
    Request,
    Response,
    NextFunction
} from 'express';
import {
    createServer
} from 'http';
import chalk from 'chalk';
import hbs from 'hbs';
import path from 'path';

// app and port setup //
const app: Application = express();
const server = createServer(app);
const port = process.env.PORT || 8080;

// file path //
const staticPath = path.join(__dirname, '../public/');
const viewsFolder = path.join(__dirname, '../views');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.set('views', viewsFolder);
app.set('view engine', 'hbs');
app.use(express.static(staticPath));

// app route //
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});

app.post('/', async (req: Request, res: Response) => {
    try {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let confirm_password = req.body.confirm_password;

        if (password !== confirm_password) {
            res.send('password didnt match');
        } else {
            console.log(name, email, password, confirm_password);
            res.sendFile(path.join(staticPath, 'index.html'));
        }

    } catch {
        res.status(400).send(Error);
    }
});

// listening to server on port 8080 //
server.listen(port, () => {
    console.log(chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`));
});