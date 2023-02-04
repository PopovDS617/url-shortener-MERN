import { Express, Request, Response } from 'express';
import { createShortUrl, redirectHandler } from '../controllers/shortUrl';

import validateSchema from '../middleware/validateSchema';
import destination from '../schemas/destinationSchema';

const routes = (app: Express) => {
  app.get('/test', (req, res) => {
    res.send('works!');
  });
  app.post('/api/url', validateSchema(destination), createShortUrl);
  app.get('/:shortId', redirectHandler);
};

export default routes;
