var React = require("react");

var Results = React.createClass({

  // Here we render the component
  render: function() {
    return (
    	<div className="container">
			<div className="col-lg-12">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Results</h3>
					</div>
					<div className="panel-body">
						<div className="panel panel-default">
							<div className="row">
								<div className="col-lg-9">
									<p>Cat</p>
								</div>
								<div className="col-lg-3">
									<button>Save</button>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="row">
								<div className="col-lg-9">
									<p>Cat</p>
								</div>
								<div className="col-lg-3">
									<button>Save</button>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="row">
								<div className="col-lg-9">
									<p>Cat</p>
								</div>
								<div className="col-lg-3">
									<button>Save</button>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="row">
								<div className="col-lg-9">
									<p>Cat</p>
								</div>
								<div className="col-lg-3">
									<button>Save</button>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="row">
								<div className="col-lg-9">
									<p>Cat</p>
								</div>
								<div className="col-lg-3">
									<button>Save</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  
  }

});

module.exports = Results;