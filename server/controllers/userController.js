const db = require('../models/userModel');
const userController = {};


userController.getUsers = (req, res, next) => {
	// write code here
	let i = 1
	console.log("usercontroller")
  let queryUsers= {
		text: `SELECT * FROM users WHERE _id = $1`,
		values: [2]
	}
  db.query(queryUsers)
    .then((users) => {
      res.locals.users = users.rows;
      return next();
    })
    .catch((err) => {
      console.log(err)
      return next(err)
	  });
};

module.exports = userController;