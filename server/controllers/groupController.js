const db = require('../models/userModel');
const groupController = {};


groupController.getGroups = (req, res, next) => {
	// write code here
	let i = 1
	// console.log("groupController")
  let queryGroups= {
		text: `SELECT * FROM groups`,
		// values: [2]
	}
  db.query(queryGroups)
    .then((groups) => {
      res.locals.groups = groups.rows;
      return next();
    })
    .catch((err) => {
      console.log(err)
      return next(err)
	  });
};

module.exports = groupController;