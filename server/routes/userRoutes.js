const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers, (req, res) => {
	// console.log('hi from userRoutes')
  res.status(200).json(res.locals.users)
});

router.post('/register', userController.register, (req, res) => {
	console.log(res.locals.user)
  res.status(200).json(res.locals.user)
})

router.post('/login', userController.login, (req, res) => {
	console.log(res.locals.user)
  res.status(200).json(res.locals.user)
})

module.exports = router;
