var React = require("react");

var Search = React.createClass({

  // Here we render the component
  render: function() {
    return (
    	<div className="container">
			<div className="col-lg-12">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Search</h3>
					</div>
					<div className="panel-body">
						<form>
							<label>Topic</label><br/>
							<input></input><br/>
							<label>Start Year</label><br/>
							<input></input><br/>
							<label>End Year</label><br/>
							<input></input><br/>
							<button className="btn btn-primary btn-lg">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
    );
  
  }

});

module.exports = Search;