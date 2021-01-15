"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const port = process.env.PORT || 8080;
const staticPath = path_1.default.join(__dirname, '../public/');
app.use(express_1.default.static(staticPath));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(staticPath, 'index.html'));
});
app.listen(port, () => {
    console.log('server started');
});
