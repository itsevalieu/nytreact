var React = require("react");

var Search = React.createClass({
	getInitialState: function() {
		return {
			term: "",
			startYear: "",
			endYear: ""
		};
	},
	handleChange: function(event) {
		if(event.target.id === "term") {
			this.setState({
				term: event.target.value,
			});
		} else if (event.target.id === "startYear") {
			this.setState({
				startYear: event.target.value,
			});
		} else if (event.target.id === "endYear") {
			this.setState({
				endYear: event.target.value
			});
		}
	},
	handleSubmit: function(event) {
		event.preventDefault();
		this.props.setTerms(this.state.term, this.state.startYear, this.state.endYear);

		console.log("Search: handling form submit", this.state.term, this.state.startYear, this.state.endYear);

		this.setState({
			term: "",
			startYear: "",
			endYear: ""
		});

	},
  // Here we render the component
	render: function() {
	    return (
	    	<div className="row">
				<div className="col s12 m12">
					<div className="card-panel teal lighten-3">
						<ul className="collection with-header">
							<li className="collection-header"><h4>Search</h4></li>

							<li className="collection-item">
								<form onSubmit={this.handleSubmit}>
									<div className="input-field col s12 m12">
										<input 
											value={this.state.term}
											type="text"
											id="term"
											onChange={this.handleChange}
											required
										/>
										<label className="active" for="term">Topic</label>
									</div>
									<div className="input-field col s6 m6">
										<input 
											value={this.state.startYear}
											type="number"
											id="startYear"
											onChange={this.handleChange}
											required
										/>
										<label className="active" for="startYear">Start Year</label>
									</div>
									<div className="input-field col s6 m6">
										<input 
											value={this.state.endYear}
											type="number"
											id="endYear"
											onChange={this.handleChange}
											required
										/>
										<label className="active" for="endYear">End Year</label>
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