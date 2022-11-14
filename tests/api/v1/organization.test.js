const request = require('supertest');
const { withLogin } = require('../../utils');
const server = require('../../../app');

describe('Organization APIs', () => {
  describe('Test create Organization SUCCESS: POST /api/v1/organizations', () => {
    it('should create new organization', async () => {
      const body = {
        name: 'org1',
      };
      const res = await withLogin(
        request(server).post('/api/v1/organizations').send(body)
      );
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('name', 'org1');
    });
  });
});
