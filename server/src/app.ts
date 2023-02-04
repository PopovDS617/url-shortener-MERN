import express from 'express';
import config from 'config';
import routes from './routes';
import bodyParser from 'body-parser';
import mongoConnect from '../config/db';

mongoConnect();
const app = express();
app.use(bodyParser.json());
const port = config.get('PORT');

app.listen(port || 4000, () => {
  console.log(`listening, port ${port}`);
  routes(app);
});
