var React = require("react");
var ResultItems = require("./ResultItems");

var Results = React.createClass({

	getInitialState: function() {
		return { 
			results: this.props.results
		};
	},

	render: function() {
	    return (
	    	<div className="row">
				<div className="col s12 m12">
					<div className="card-panel teal lighten-3">
						<ul className="collection with-header">	
							<li className="collection-header"><h4>Results</h4></li>
							{this.state.results.map((item, index) => {
								return <ResultItems
									key={index}
									title={item.title}
									url={item.url}
								/>;
							})}

							{/*Example item below*/}
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