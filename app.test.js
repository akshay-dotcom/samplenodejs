const request = require('supertest');
const app = require('../src/index');  // Assuming you export the Express app in index.js

describe('GET /', () => {
    it('should return Hello, Kubernetes!', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Hello, Kubernetes!');
        expect(res.statusCode).toBe(200);
    });
});
