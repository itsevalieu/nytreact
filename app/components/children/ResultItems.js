import React, {Component} from "react";

class ResultItems extends Component {
	
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = { 
			saved: false
		}
	}
	
	handleClick(event) {
		console.log("Item saved?:", this.state.saved);
		this.setState({
			saved: true
		});
		if(this.state.saved === true) {
			this.props.handleSave(event);
		}
	}
	
	render() {
	    return (
			<li className="collection-item" >
				<div>
					<span>{this.props.title}</span>
					<a 
						href={this.props.url}
						target="_blank"
						id={this.props.title} 
						onClick={this.handleClick}
						className="secondary-content"
					>
						<i className="material-icons star">star</i>
					</a>
				</div>
			</li>
	    );
	}

}

export default ResultItems;