import React, {Component} from "react";
import ResultItems from "./ResultItems";

class Results extends Component {

	render() {
	    return (
	    	<div className="row">
				<div className="col s12 m12">
					<div className="card-panel teal lighten-3">
						<ul className="collection with-header">	
							<li className="collection-header"><h4>Results</h4></li>
							{this.props.results.map((item, index) => {
								return <ResultItems
									key={index}
									title={item.title}
									url={item.url}
									handleSave={this.props.handleSave(item)}
								/>;
							})}							
						</ul>
					</div>
				</div>
			</div>
	    );
	}

}

export default Results;