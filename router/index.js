const { Router } = require('express');
const router = Router();

router.use(require('./rank'));

module.exports = router;