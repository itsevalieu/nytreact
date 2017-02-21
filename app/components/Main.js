var React = require("react");

var Main = React.createClass({

	render: function() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h2><strong>New York Times Article Scrubber</strong></h2>
					<p><em>Search for and annotate articles of interest!</em></p>
					<hr/>
				</div>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = Main;