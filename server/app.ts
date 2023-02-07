import express from 'express';

import routes from './routes';
import bodyParser from 'body-parser';
import mongoConnect from './db/db';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
mongoConnect();
const app = express();
app.use(bodyParser.json());

app.use(cors());

app.listen(process.env.PORT || 4000, () => {
  routes(app);
});
