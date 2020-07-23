const express = require('express');

const groupController = require('../controllers/groupController');

const router = express.Router();

router.get('/', groupController.getGroups, (req, res) => {
	// console.log('hi from userRoutes')
  res.status(200).json(res.locals.groups)
});

module.exports = router;
