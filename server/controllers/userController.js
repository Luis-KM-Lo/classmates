const db = require('../models/userModel');
const bcrypt = require('bcryptjs');
const userController = {};

userController.getUsers = (req, res, next) => {
	// write code here
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

userController.register = (req, res, next) => {
	let checkEmailExist = {
		text: `SELECT email FROM users WHERE email = $1`,
		values: [req.body.email]
	};
	db.query(checkEmailExist)
    .then(user => {
      if (user.rowCount !== 0) {
        return res.status(400).json({email: "A user has already registered with this address"});
      } else {
				let { name, email, password } = req.body
				bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
	          let createUserQuery = {
							text: 'INSERT INTO public.users(name, email, password, num_of_classes_joined, status) VALUES($1, $2, $3, $4, $5) RETURNING *',
  						values: [name, email, hash, 0, "Newbie"],
						};
						db.query(createUserQuery)
							.then(data => {
								res.locals.user = data.rows[0];
								return next();
						}).catch(error => next(error));
          });
				});
			}
	 	}
	);
}

userController.login = (req, res, next) => {
	let checkEmailExist = {
		text: `SELECT name, email, password FROM users WHERE email = $1`,
		values: [req.body.email]
	};
	db.query(checkEmailExist)
    .then(user => {
      if (user.rowCount === 0) {
        return res.status(404).json({email: 'This user does not exist'});
			}
			// console.log(user.rows[0])
      bcrypt.compare(req.body.password, user.rows[0].password)
        .then(isMatch => {
					console.log("in is match")
          if (isMatch) {
						res.locals.user = user.rows[0];
            return next()
          } else {
            return res.status(400).json({password: 'Incorrect password'});
          }
        })
    })
}


module.exports = userController;