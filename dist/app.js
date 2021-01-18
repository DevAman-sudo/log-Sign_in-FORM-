"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// NPM packages //
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
// app and port setup //
const app = express_1.default();
const port = process.env.PORT || 8080;
// file path //
const staticPath = path_1.default.join(__dirname, '../public/');
const viewsFolder = path_1.default.join(__dirname, '../views');
app.set('views', viewsFolder);
app.set('view engine', 'hbs');
app.use(express_1.default.static(staticPath));
// app route //
app.get('/', (req, res) => {
    res.render('index');
});
// listening to server on port 8080 //
app.listen(port, () => {
    console.log(chalk_1.default.red.bgBlue.bold(`http://127.0.0.1:${port}`));
});
