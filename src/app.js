// NPM packages //
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const admin = require('firebase-admin');
const chalk = require('chalk');
const hbs = require('hbs');
const path = require('path');

// app and port setup //
const port = process.env.PORT || 8080;

// file path //
const staticPath = path.join(__dirname, '../public/');
const viewsFolder = path.join(__dirname, '../views');
const serviceAccount = path.join(__dirname, '../admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.set('views', viewsFolder);
app.set('view engine', 'hbs');
app.use(express.static(staticPath));

// app route //
app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});

app.post('/', async (req, res) => {
    try {
        let user_name = req.body.name;
        let user_email = req.body.email;
        let user_password = req.body.password;
        let user_confirm_password = req.body.confirm_password;

        if (user_password !== user_confirm_password) {
            res.send('password didnt match');
        } else {
            admin.auth().createUser({
                name: user_name,
                email: user_email,
                password: user_password,
                confirm_password: user_confirm_password
            }).then((user_record) => {
                console.log(`User Sucessfully Created ${user_record}`);
            }).catch((error) => {
                console.log(`Error Found => ${error}`);
            });

            res.redirect('/login');
        }

    } catch {
        res.status(400).send(Error);
    }
});

app.get('/login', (req, res) => {
    res.sendFile(staticPath, 'login.html');
});

app.post('/login', (req, res) => {
    try {
        let user_email = req.body.email;
        let user_password = req.body.password;

        console.log(user_email, user_password);

    } catch {
        res.status(400).send(Error);
    }
});

// listening to server on port 8080 //
server.listen(port, () => {
    console.log(chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`));
});