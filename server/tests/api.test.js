import app from '../server.js';
import request from 'supertest';

describe('GET /api/:id', () => {
  it('should return status 200 and the record data if the record exists', async () => {
    const recordId = 1
    const response = await request(app).get(`/api/${recordId}`)
    expect(response.status).toBe(200)
    expect(response.body).toBeDefined()
  });

  it('should return status 404 if the record does not exist', async () => {
    const nonExistentRecordId = 999
    const response = await request(app).get(`/api/${nonExistentRecordId}`)
    expect(response.status).toBe(404)
  });
});
