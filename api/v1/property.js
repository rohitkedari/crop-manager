const express = require('express');

const router = express.Router();
const OAuthServer = require('express-oauth-server');
const OauthController = require('../../controllers/oauthController');
const PropertyController = require('../../controllers/propertyController');

router.oauth = new OAuthServer({
  model: OauthController,
});

router.get('/', router.oauth.authenticate(), PropertyController.getAllProperty);

router.get('/:id', router.oauth.authenticate(), PropertyController.getProperty);

router.post(
  '/',
  router.oauth.authenticate(),
  PropertyController.createProperty
);

router.put('/:id', router.oauth.authenticate(), (req, res) => {
  res.json('Update Property');
});

module.exports = router;
