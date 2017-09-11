var friendsArr = require("../data/friends.js");


module.exports = function(app) {
	app.get('/api/friends', function (req, res) {
		res.json(friendsArr);
	});

	app.post('/api/friends', function(req, res) {
		var user = req.body;
		var userScores = user.scores;

		var bestMatch = friendsArr[0];
		var bestScore = 100;
		var compScore = 0;
		for (var i in friendsArr) {
			for (var j = 0 ; j < 10; ++j) {
				compScore += Math.abs(friendsArr[i].scores[j] - userScores[j]);
			}
			if (bestScore > compScore) {
				bestMatch = friendsArr[i];
				bestScore = compScore;
			}
			compScore = 0;
		}

		res.json(bestMatch);
		friendsArr.push(user);
	})

}