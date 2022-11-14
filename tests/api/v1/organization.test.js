const request = require('supertest');
const { getAuthToken } = require('../../utils');
const server = require('../../../app');

describe('Organization APIs', () => {
  describe('Test create Organization SUCCESS: POST /api/v1/organizations', () => {
    it('should create new organization', async () => {
      const body = {
        name: 'org1',
      };
      const authToken = await getAuthToken();
      const res = await request(server)
        .post('/api/v1/organizations')
        .set('Authorization', authToken)
        .send(body);
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('name', 'org1');
    });
  });
});
