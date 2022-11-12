const express = require('express');

const router = express.Router();
const OAuthServer = require('express-oauth-server');
const OauthController = require('../controllers/oauthController');
const CropController = require('../controllers/cropController');

router.oauth = new OAuthServer({
  model: OauthController,
});

router.get('/', router.oauth.authenticate(), CropController.getAllCrop);

router.get('/:id', router.oauth.authenticate(), CropController.getCrop);

router.post('/', router.oauth.authenticate(), CropController.createCrop);

router.put('/:id', router.oauth.authenticate(), (req, res) => {
  res.json('Update Crop');
});

module.exports = router;
