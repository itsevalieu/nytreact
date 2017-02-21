var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
	title: {
		type: String, 
		required: true
	},
	url: {
		type: String,
		required: false
	},
	date: {
	    type: Date
	}
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;