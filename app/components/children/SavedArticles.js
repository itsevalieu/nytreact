var React = require("react");

var SavedArticles = React.createClass({

  // Here we render the component
  render: function() {
    return (
    	<div className="container">
			<div className="col-lg-12">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Saved Articles</h3>
					</div>
					<div className="panel-body">
						
						<div className="panel panel-default">
							<div className="panel-heading">
								<div className="row">
									<div className="col-lg-4">
										<h4 className="panel-title">Title</h4>
									</div>
									<div className="col-lg-4">
										<h4 className="panel-title">Date Saved:</h4>
									</div>
									<div className="col-lg-4">
										<button className="btn btn-lg btn-primary">Remove</button>
									</div>
								</div>
							</div>
							<div className="panel-body">
								<p>Notes:</p>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
    );
  
  }

});

module.exports = SavedArticles;