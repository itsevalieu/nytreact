var React = require("react");

var Results = React.createClass({

  // Here we render the component
  render: function() {
    return (
    	<div className="row">
			<div className="col s12 m12">
				<div className="card-panel">
					<ul className="collection with-header">	
						<li className="collection-header"><h4>Results</h4></li>
						
						<li className="collection-item">
							<div>
								<span>Title</span>
								<a href="#!" className="secondary-content">
									<i className="material-icons">star</i>
								</a>
							</div>
						</li>
						<li className="collection-item">
							<div>
								<span>Title</span>
								<a href="#!" className="secondary-content">
									<i className="material-icons">star</i>
								</a>
							</div>
						</li>
						<li className="collection-item">
							<div>
								<span>Title</span>
								<a href="#!" className="secondary-content">
									<i className="material-icons">star</i>
								</a>
							</div>
						</li>
						<li className="collection-item">
							<div>
								<span>Title</span>
								<a href="#!" className="secondary-content">
									<i className="material-icons">star</i>
								</a>
							</div>
						</li>
						<li className="collection-item">
							<div>
								<span>Title</span>
								<a href="#!" className="secondary-content">
									<i className="material-icons">star</i>
								</a>
							</div>
						</li>												
					</ul>
				</div>
			</div>
		</div>
    );
  
  }

});

module.exports = Results;