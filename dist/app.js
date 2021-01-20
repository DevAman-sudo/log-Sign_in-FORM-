"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// NPM packages //
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
// app and port setup //
const app = express_1.default();
const server = http_1.createServer(app);
const port = process.env.PORT || 8080;
// file path //
const staticPath = path_1.default.join(__dirname, '../public/');
const viewsFolder = path_1.default.join(__dirname, '../views');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: false
}));
app.set('views', viewsFolder);
app.set('view engine', 'hbs');
app.use(express_1.default.static(staticPath));
// app route //
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(staticPath, 'index.html'));
});
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let confirm_password = req.body.confirm_password;
        if (password !== confirm_password) {
            res.send('password didnt match');
        }
        else {
            console.log(name, email, password, confirm_password);
            res.sendFile(path_1.default.join(staticPath, 'index.html'));
        }
    }
    catch (_a) {
        res.status(400).send(Error);
    }
}));
// listening to server on port 8080 //
server.listen(port, () => {
    console.log(chalk_1.default.red.bgBlue.bold(`http://127.0.0.1:${port}`));
});
