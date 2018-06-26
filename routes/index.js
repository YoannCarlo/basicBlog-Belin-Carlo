var posts = require("./posts");
module.exports = function(app) {
	// Route list HTTP GET
	app.get("/", function(req, res) {
		// Get all articles from database
		app.db.collection("article").find().toArray(function(err, results) {
			// Throw error
			if(err)
				throw err;
			// Render index.html
			else {
				results.forEach(function(element) {
					var d = new Date(element.date);
					element.date = [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
				});
				res.render("index", {"articles" : results});
			}
		});
	});
	// Register posts endpoint
	posts(app);
}

function pad(s) { return (s < 10) ? '0' + s : s; }