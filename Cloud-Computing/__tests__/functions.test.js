// tests.js
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const routes_user = require('../routes');
const app = express();
const { connection } = require('../functions');

app.use(bodyParser.json());
app.use('/api', routes_user);

let token;

describe('POST /api/signup', () => {
  it('responds with json', async () => {
    const response = await request(app)
      .post('/api/signup')
      .send({
        name: 'test',
        email: 'test@test.com',
        password: 'password'
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


describe('GET /api/', () => {
  it('responds with json', async () => {
    const response = await request(app)
      .get('/api/')
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200);

    // Add more assertions as needed
  });
});

afterAll(() => {
  connection.end();
});