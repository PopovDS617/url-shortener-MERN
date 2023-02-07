import { Express, Request, Response } from 'express';
import { createShortUrl, redirectHandler } from '../controllers/shortUrl';
import { Router } from 'express';
import validateSchema from '../middleware/validateSchema';
import destination from '../schemas/destinationSchema';

const router = Router();

router.post('/url/', validateSchema(destination), createShortUrl);
router.get('/:shortId', redirectHandler);

export default router;
