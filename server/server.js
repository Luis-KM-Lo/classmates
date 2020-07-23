const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const groupRoutes = require('./routes/groupRoutes');

// app.get('/api/leaders', (req, res) => {
// 	res.send(leaderList);
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', userRoutes);
app.use('/api/group', groupRoutes);


// serve index.html on the route '/'
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "production") {
	// statically serve everything in the build folder on the route '/build'
	app.use('/build', express.static(path.join(__dirname, '../build')));
	app.get('/*', (req, res) => {
		res.sendFile(path.join(__dirname, '../index.html'), err => {
			if(err) {
				res.status(500).send(err)
			};
		})
	})
};


app.listen(3000); //listens on port 3000 -> http://localhost:3000/