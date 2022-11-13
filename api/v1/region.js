const express = require('express');

const router = express.Router();
const OAuthServer = require('express-oauth-server');
const OauthController = require('../../controllers/oauthController');
const RegionController = require('../../controllers/regionController');

router.oauth = new OAuthServer({
  model: OauthController,
});

router.get('/', router.oauth.authenticate(), RegionController.getAllRegion);

router.get('/:id', router.oauth.authenticate(), RegionController.getRegion);

router.post('/', router.oauth.authenticate(), RegionController.createRegion);

router.put('/:id', router.oauth.authenticate(), (req, res) => {
  res.json('Update Region');
});

module.exports = router;
