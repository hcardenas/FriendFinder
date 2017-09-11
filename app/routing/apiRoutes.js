var friendsArr = require("../data/friends.js");


module.exports = function(app) {
	app.get('/api/friends', function (req, res) {
		res.json(friendsArr);
	});

	app.post('/api/friends', function(req, res) {
		friendsArr.push(req.body);
		console.log(`pushed object ${req.body}`);
	})

}