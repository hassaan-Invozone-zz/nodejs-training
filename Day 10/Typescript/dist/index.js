"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    let Fruits;
    (function (Fruits) {
        Fruits[Fruits["Orange"] = 1] = "Orange";
        Fruits[Fruits["Apple"] = 4] = "Apple";
        Fruits[Fruits["Banana"] = 7] = "Banana";
    })(Fruits || (Fruits = {}));
    // can be accessed by
    let c = Fruits.Orange;
    res.send('Express + TypeScript Server' + c);
});
app.listen(port, () => {
    console.log(`️[server]: Server is runninggg at http://localhost:${port}`);
});
