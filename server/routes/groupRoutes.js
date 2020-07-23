const express = require('express');

const groupController = require('../controllers/groupController');

const router = express.Router();

router.get('/', groupController.getGroups, (req, res) => {
	// console.log('hi from userRoutes')
  res.status(200).json(res.locals.groups)
});

router.get('/:id', groupController.getGroupDetails, (req, res) => {
	console.log('hi from groupRoutes')
  res.status(200).json(res.locals.group)
});



// router.post('/:id', groupController.getGroupDetails, (req, res) => {
// 	// console.log('hi from userRoutes')
//   res.status(200).json(res.locals.group)
// });

module.exports = router;
