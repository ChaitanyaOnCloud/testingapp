const request = require('supertest');
const app = require('../index');

describe('GET /api/hello', () => {
  it('should return a JSON object with a greeting message', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Hello from the Backend API!');
  });
});
