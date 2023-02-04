import { Express, NextFunction, Request, Response } from 'express';
import shortUrl from '../models/shortUrl';

export const createShortUrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { destination } = req.body;
  const short = await shortUrl.create({ destination });
  return res.status(201).json({ short });
};

export const redirectHandler = async (req: Request, res: Response) => {
  const { shortId } = req.params;

  const short = await shortUrl.findOne({ shortId }).lean();

  if (!short) {
    return res.sendStatus(404);
  }

  return res.redirect(short.destination);
};
