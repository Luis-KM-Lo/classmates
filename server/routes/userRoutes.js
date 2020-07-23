const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers, (req, res) => {
	// console.log('hi from userRoutes')
  res.status(200).json(res.locals.users)
});

module.exports = router;
