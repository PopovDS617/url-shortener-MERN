import express from 'express';
import path from 'path';
import routes from './routes';
import bodyParser from 'body-parser';
import mongoConnect from './db/db';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/index';

dotenv.config();
mongoConnect();
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(apiRoutes);

export default app;
