var React = require("react");


var ResultItems = React.createClass({
	getInitialState: function() {
		return {
			saved: false,
			starId: "grey"||"blue"
		};
	},
	saveItem: function() {
		console.log("Item saved?:", this.state.saved);
		this.setState({
			saved: !this.state.saved,
			starId: !this.state.starId
		});
	},
	render: function() {
	    return (
			<li className="collection-item" >
				<div>
					<span>{this.props.title}</span>
					<a 
						href="#!"
						target="_blank"
						id={this.props.title} 
						onClick={this.saveItem}
						className="secondary-content">
						<i className="material-icons star" id={this.state.starId}>star</i>
					</a>
				</div>
			</li>
	    );
	}

});

module.exports = ResultItems;