import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import contactRoutes from '../src/routes/contact-routes';

const app = express();
app.use(bodyParser.json());
app.use('/api', contactRoutes);

describe('Contact API', () => {
  it('should create a contact', async () => {
    const response = await request(app)
      .post('/api/contacts')
      .send({ name: 'John Doe', email: 'john.doe@example.com', phone: '1234567890' });
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
  });

  // Add more tests for other endpoints...
});
