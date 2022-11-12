const express = require('express');

const router = express.Router();
const OAuthServer = require('express-oauth-server');
const OauthController = require('../controllers/oauthController');
const OrgController = require('../controllers/orgController');

router.oauth = new OAuthServer({
  model: OauthController,
});

router.get('/', router.oauth.authenticate(), OrgController.getAllOrganization);

router.get('/:id', router.oauth.authenticate(), OrgController.getOrganization);

router.post('/', router.oauth.authenticate(), OrgController.createOrganization);

router.put('/:id', router.oauth.authenticate(), (req, res) => {
  res.json('Update Organization');
});

module.exports = router;
