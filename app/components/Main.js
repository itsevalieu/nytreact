// Include React
var React = require("react");

var Main = React.createClass({

  // Here we render the function
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
	      	<div className="row">

				{/* This code will dump the correct Child Component */}
				{this.props.children}

			</div>
		</div>
    );
  }
});

// Export the componen back for use in other files
module.exports = Main;