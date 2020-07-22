const express = require('express');
const app = express();
const path = require('path');

// app.get('/api/leaders', (req, res) => {
// 	res.send(leaderList);
// });

app.get('/api', (req, res) => {
  res.send({name: "eat"});
});


// serve index.html on the route '/'
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "production") {
	// statically serve everything in the build folder on the route '/build'
	app.use('/build', express.static(path.join(__dirname, '../build')));
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../index.html'));
	})
};


app.listen(3000); //listens on port 3000 -> http://localhost:3000/