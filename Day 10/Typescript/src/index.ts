import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    enum Fruits {
        Orange = 1,
        Apple = 4,
        Banana = 7
    }
// can be accessed by
    let c: Fruits = Fruits.Orange;
    res.send('Express + TypeScript Server'+c);
});

app.listen(port, () => {
    console.log(`️[server]: Server is runninggg at http://localhost:${port}`);
});
