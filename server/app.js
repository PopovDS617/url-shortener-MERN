"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./db/db"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path_1.default.join(__dirname, 'public') });
});
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.listen(process.env.PORT || 4000, () => {
    console.log('app is running');
    (0, routes_1.default)(app);
});
