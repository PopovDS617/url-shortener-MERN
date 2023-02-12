import app from '../index';
import request from 'supertest';

describe('GET /', () => {
  it('returns status code 200', async () => {
    const res = await request(app).get('/1231231');
    console.log(res);
    expect(res.statusCode).toEqual(200);
  });
});
