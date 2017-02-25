var React = require("react");

var ResultItems = React.createClass({

	render: function() {
	    return (
			<li className="collection-item">
				<div>
					<span>{this.props.title}</span>
					<span>{this.props.url}</span>
					<a href="#!" className="secondary-content">
						<i className="material-icons">star</i>
					</a>
				</div>
			</li>
	    );
	}

});

module.exports = ResultItems;