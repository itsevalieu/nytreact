var React = require("react");

var SavedArticleItems = React.createClass({

  render: function() {
    return (
		<div className="card-panel row">
			<span className="col s5 m5">Title</span>
			<span className="col s5 m5">Date</span>
			<span className="col s2 m2">
				<a href="#!" className="secondary-content right">
					<i className="material-icons">delete</i>
				</a>
			</span>
			<br/><hr/>
			<span className="col s12 m12">Notes</span>
		</div>
    );
  }

});

module.exports = SavedArticleItems;