// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("./helpers");

// helpers.runQuery("labor", 20120101, 20170101);
// 	componentDidUpdate: function() {
// 		helpers.runQuery(this.state.searchTopic, this.state.searchBeginDate, this.state.searchEndDate).then(function(response) {
// 			console.log("Updated!");
// 			helpers.postArticle(this.state.)
// 		}
// 	},
// 	// Here we render the function


var Main = React.createClass({
	getInitialState: function() {
		return { 
			searchTopic: "",
			searchBeginDate: "",
			searchEndDate: "",
			results: [],
			articles: []
		};
	},

	//needs testing:
	componentDidMount: function() {
		helpers.getArticle().then(function(response) {
			console.log("Mount, getArticle: \n" + response);
			if (response !== this.state.articles) {
				console.log("Article", response);
				this.setState({ articles: response });
			}
		}.bind(this));
	},

	setTerms: function(term, bDate, eDate) {
		this.setState({ searchTopic: term, searchBeginDate: bDate, searchEndDate: eDate});
	},

	render: function() {

    return (
    	<div>
			<div className="jumbotron">
				<div className="container">
					<h2><strong>New York Times Article Scrubber</strong></h2>
					<p><em>Search for and annotate articles of interest!</em></p>
					
					<hr />
					
					<p>
						<a href="#/Search" className="btn btn-primary btn-lg">Show Search</a>
						<a href="#/Results" className="btn btn-primary btn-lg">Show Results</a>
						<a href="#/SavedArticles" className="btn btn-primary btn-lg">Show Saved Articles</a>
					</p>
				</div>
			</div>
	      	<div className="container">

				{/* This code will dump the correct Child Component */}
				{this.props.children}

			</div>
		</div>
    );
  }
});

// Export the componen back for use in other files
module.exports = Main;