var React = require("react");

var Search = React.createClass({

  // Here we render the component
  render: function() {
    return (
    	<div className="row">
			<div className="col s12 m12">
				<div className="card-panel teal lighten-3">
					<ul className="collection with-header">
						<li className="collection-header"><h4>Search</h4></li>

						<li className="collection-item">
							<form>
								<div className="input-field col s12 m12">
									<input id="topic"></input>
									<label for="topic">Topic</label>
								</div>
								<div className="input-field col s6 m6">
									<input id="start-year"></input>
									<label for="start-year">Start Year</label>
								</div>
								<div className="input-field col s6 m6">
									<input id="end-year"></input>
									<label for="end-year">End Year</label>
								</div>
								<div className="row">
									<div className="col s12 m12">
										<button className="right btn waves-effect waves-light" type="submit" name="action">Submit</button>
									</div>
								</div>
							</form>
						</li>

					</ul>
				</div>
			</div>
		</div>
    );
  
  }

});

module.exports = Search;