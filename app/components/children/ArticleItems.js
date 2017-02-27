import React, {Component} from "react";

class ArticleItems extends Component {

	handleChange(event) {
		this.props.setTerm(event.target.value);
	}

	render() {
	    return (
			<div className="card-panel row">
				<span className="col s10 m10">{this.props.title}</span>
				<span className="col s2 m2">
					<a 
						value={this.props.id} 
						type="submit"
						className="secondary-content right"
					>
						<i className="material-icons">delete</i>
					</a>
				</span>
				<br/><hr/>
				<span className="col s12 m12">Date: {this.props.date} Id: {this.props.id}</span>
			</div>
	    );
	}
  
}

export default ArticleItems;