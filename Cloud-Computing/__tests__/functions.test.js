// tests.js
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const routes_user = require('../routes');
const app = express();
const  connection  = require('../db');
const randomEmail = `test${Math.floor(Math.random() * 10000)}@test.com`;
const randomPassword = `password${Math.floor(Math.random() * 10000)}`;

let newID = 1;
app.use(bodyParser.json());
app.use('/api', routes_user);

let token;

describe('POST /api/signup', () => {
  it('responds with json', async () => {
    const response = await request(app)
      .post('/api/signup')
      .send({
        name: 'testa',
        email: randomEmail,
        password: randomPassword
      })
      .expect('Content-Type', /json/)
      .expect(201);

    // Add more assertions as needed
  });
});

describe('POST /api/login', () => {
  it('responds with json', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({
        email: 'test@test.com',
        password: 'password'
      })
      .expect('Content-Type', /json/)
      .expect(200);

    token = response.body.token; // Save the token for later use

    // Add more assertions as needed
  });
});

describe('GET /api', () => {
  it('responds with json', async () => {
    const response = await request(app)
      .get('/api')
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200);

    // Add more assertions as needed
  });
});

describe('GET /api/logout', () => {
  it('responds with json', async () => {
    const response = await request(app)
      .get('/api/logout')
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200);

    // Add more assertions as needed
  });
});

describe('Logbook routes', () => {
    test('createLog', async () => {
      const log = { place_id: 1, visited_time: new Date(), text: 'Test log', user_id: 1, created_at: new Date() };
      const response = await request(app).post('/api/log/').send(log);
      newID = response.body.insertId;
      expect(response.statusCode).toBe(201);
    });
  
    test('getLogs', async () => {
      const response = await request(app).get('/api/logs');
      expect(response.statusCode).toBe(200);
    });
  
    test('getLog', async () => {
      const log_id = newID; // replace with an existing log ID
      const response = await request(app).get(`/api/log/${log_id}`);
      expect(response.statusCode).toBe(200);
    });
  
    test('updateLog', async () => {
      const log_id = newID; // replace with an existing log ID
      console.log(log_id);
      const updatedLog = { place_id: 1, visited_time: new Date(), text: 'Updated log', user_id: 1, created_at: new Date() };
      const response = await request(app).put(`/api/log/${log_id}`).send(updatedLog);
      expect(response.statusCode).toBe(200);
    });
  
    test('deleteLog', async () => {
      const log_id = newID; // replace with an existing log ID
      const response = await request(app).delete(`/api/log/${log_id}`);
      expect(response.statusCode).toBe(200);
    });
  });

afterAll(() => {
  connection.end();
});