/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import request from 'supertest';
import { appInstance } from '../index';
describe('API Endpoints', () => {
  it('should check if api is online', async (done) => {
    const res = await request.agent(appInstance).get('/');
    expect((res as any).statusCode).toEqual(200);
    expect((res as any).body).toHaveProperty('online');
    appInstance.close();
    done();
  });

  it('should send html string/file and return pdf', async (done) => {
    const res = await request
      .agent(appInstance)
      .post('/htmlToPdf')
      .send('<html><body><h1>Test</h1></body></html>');
    expect((res as any).statusCode).toEqual(200);
    expect((res as any).headers).toHaveProperty(
      'content-type',
      'application/pdf'
    );
    appInstance.close();
    done();
  });
});
