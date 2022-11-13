const express = require('express');

const router = express.Router();
router.use(`/oauth`, require('./oauth'));
router.use(`/users`, require('./users'));
router.use(`/organizations`, require('./organization'));
router.use(`/crops`, require('./crop'));
router.use(`/properties`, require('./property'));
router.use(`/regions`, require('./region'));
router.use(`/crop-cycles`, require('./cropCycle'));

module.exports = router;
