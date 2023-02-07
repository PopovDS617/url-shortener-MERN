"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("../config/db"));
const cors_1 = __importDefault(require("cors"));
(0, db_1.default)();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const port = config_1.default.get('PORT');
app.use((0, cors_1.default)());
app.listen(port || 4000, () => {
    console.log(`listening, port ${port}`);
    (0, routes_1.default)(app);
});
