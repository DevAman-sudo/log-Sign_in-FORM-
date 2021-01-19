// NPM packages //
import express, {Application , Request , Response , NextFunction} from 'express';
import chalk from 'chalk';
import hbs from 'hbs';
import path from 'path';

// app and port setup //
const app: Application = express();
const port = process.env.PORT || 8080;

// file path //
const staticPath = path.join(__dirname , '../public/');
const viewsFolder = path.join(__dirname , '../views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views' , viewsFolder);
app.set('view engine' , 'hbs');
app.use(express.static(staticPath));

// app route //
app.get('/' , (req: Request , res: Response) => {
    res.render('index');
});

app.post('/' , async (req: Request , res: Response) => {
    try {
        console.log(req.body.text);
        res.send(req.body.text);
    } catch {
        res.status(400).send(Error);
    }
});

// listening to server on port 8080 //
app.listen(port , () => {
    console.log( chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`));
});