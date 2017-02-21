var React = require("react");

var SavedArticles = React.createClass({

  // Here we render the component
  render: function() {
    return (
    	<div className="row">
			<div className="col s12 m12">
				<div className="card-panel">
					<ul className="collection with-header">
						<li className="collection-header"><h4>Saved Articles</h4></li>
						<li className="collection-item">
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
						</li>
					</ul>
				</div>
			</div>
		</div>
    );
  
  }

});

module.exports = SavedArticles;