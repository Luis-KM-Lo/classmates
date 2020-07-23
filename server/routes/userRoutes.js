const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers, (req, res) => {
  res.status(200).json(res.locals.users)
});

router.post('/register', userController.register, userController.signToken , (req, res) => {
	res.status(200).json({sucess: "yes"})
})

router.post('/login', userController.login, userController.signToken, (req, res) => {
	res.status(200).json({sucess: "yes"})	
})

router.get('/secret', userController.verifyToken, (req, res) => {
	// console.log(req.user);
	res.status(200).json({sucess: "secret"})	
})

router.get('/mygroups', userController.verifyToken, userController.getMyGroups, (req, res) => {
	console.log('hi from groupRoutes')
  res.status(200).json(res.locals.myGroups)
});

module.exports = router;
