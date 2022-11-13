const express = require('express');

const router = express.Router();
const OAuthServer = require('express-oauth-server');
const OauthController = require('../../controllers/oauthController');
const CropCycleController = require('../../controllers/cropCycleController');

router.oauth = new OAuthServer({
  model: OauthController,
});

router.get(
  '/',
  router.oauth.authenticate(),
  CropCycleController.getAllCropCycle
);

router.get(
  '/:id',
  router.oauth.authenticate(),
  CropCycleController.getCropCycle
);

router.post(
  '/',
  router.oauth.authenticate(),
  CropCycleController.createCropCycle
);

router.put('/:id', router.oauth.authenticate(), (req, res) => {
  res.json('Update Crop Cycle');
});

module.exports = router;
