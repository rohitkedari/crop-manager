const express = require('express');

const router = express.Router();
const OAuthServer = require('express-oauth-server');
const OauthController = require('../controllers/oauthController');

router.oauth = new OAuthServer({
  model: OauthController,
});

router.post('/token', router.oauth.token());

router.post('/client', (req, res, next) => {
  OauthController.setClient(req.body)
    .then((client) => res.json(client))
    .catch((error) => next(error));
});

module.exports = router;
