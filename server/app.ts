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

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(apiRoutes);
//app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  // res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, OPTIONS, DELETE'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).json({
      body: 'OK',
    });
  }
  next();
});

app.listen(process.env.PORT || 4000, () => {
  console.log('app is running');
});
