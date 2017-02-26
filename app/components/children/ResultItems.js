import React, {Component} from "react";


class ResultItems extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			saved: false,
			starId: "grey"||"blue"
		}
	}
	
	saveItem() {
		console.log("Item saved?:", this.state.saved);
		this.setState({
			saved: !this.state.saved,
			starId: !this.state.starId
		});
	}
	render() {
	    return (
			<li className="collection-item" >
				<div>
					<span>{this.props.title}</span>
					<a 
						href="#!"
						target="_blank"
						id={this.props.title} 
						onClick={this.saveItem}
						className="secondary-content">
						<i className="material-icons star" id={this.state.starId}>star</i>
					</a>
				</div>
			</li>
	    );
	}
}

export default ResultItems;