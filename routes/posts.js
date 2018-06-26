var ObjectID = require('mongodb').ObjectID;
module.exports = function(app) {
	// Route addArticle HTTP GET
	app.get("/post/create", function(req, res) {
		res.render("add");
	});
	// Route addArticle HTTP POST
	app.post("/post/create", function(req, res) {
		// Additional verification on form inputs
		var requiredFields = ["titre", "auteur", "resume"];
		var countSetFields = 0;
		Object.keys(req.body).forEach(function(field) {
			requiredFields.filter(function(element) {
				if(element === field)
					countSetFields++;
			});
		});
		if(countSetFields === requiredFields.length) {
			// Insert an article to database
			app.db.collection("article").insert({
				titre: req.body.titre,
				date: new Date(),
				auteur: req.body.auteur,
				resume: req.body.resume
			}, {w:1}, function(err, results) {
				// Throw error
				if(err)
					throw err;
				// Redirect to list
				else
					res.redirect("/");
			});
		} else {
			// Redirect to add form
			res.redirect("/add");
		}
	});

	// Route deleteArticleById HTTP GET
	app.get("/post", function(req, res) {
		// Delete an article from database
		console.log(req.query.id);
		app.db.collection('article').remove({"_id": new ObjectID(req.query.id)}, function(err, result) {
			// Throw error
			if(err)
				throw err;
		});
		// Redirect to list
		res.redirect("/");
	});

	// Route showArticleById HTTP GET
	app.get("/post/:id", function(req, res) {
		app.db.collection("article").findOne({"_id": new ObjectID(req.params.id)}, function(err, result) {
			// Throw error
			if(err)
				throw err;
			// Render show.html
			else {
				var d = new Date(result.date);
				result.date = [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
				res.render("show", {"article" : result});
			}
		});
	});
}

function pad(s) { return (s < 10) ? '0' + s : s; }
