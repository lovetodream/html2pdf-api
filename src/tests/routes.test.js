/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const request = require('supertest');
const app = require('../index');
describe('API Endpoints', () => {
  it('should check if api is online', async (done) => {
    const res = await request.agent(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('online');
    app.close();
    done();
  });

  it('should send html string/file and return pdf', async (done) => {
    const res = await request
      .agent(app)
      .post('/htmlToPdf')
      .send('<html><body><h1>Test</h1></body></html>');
    expect(res.statusCode).toEqual(200);
    expect(res.headers).toHaveProperty('content-type', 'application/pdf');
    app.close();
    done();
  });
});
