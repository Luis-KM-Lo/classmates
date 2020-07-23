const db = require('../models/userModel');
const groupController = {};

groupController.getGroups = (req, res, next) => {
	// write code here
	// let i = 1
	// console.log("groupController")
  let queryGroups= {
		text: `SELECT subject, categories, size, courselinks FROM groups`,
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

groupController.getGroupDetails = (req, res, next) => {
	// write code here
	// let i = 1
	// console.log("groupController")
  let queryGetGroup = {
    text: `SELECT subject, descriptions, categories, rules, size, courselinks, host_id FROM groups WHERE _id = $1`,
    values: [req.params.id]
	}
  db.query(queryGetGroup)
    .then((group) => {
      // console.log("get group details", group[0])
      res.locals.group = group.rows[0];
      return next();
    })
    .catch((err) => {
      console.log(err)
      return next(err)
	  });
};

module.exports = groupController;