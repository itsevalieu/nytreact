import React, {Component} from "react";


class ResultItems extends Component {
	
	constructor(props) {
		super(props);
		this.state = { 
			saved: false
		}
	}
	
	saveItem() {
		console.log("Item saved?:", this.state.saved);
		this.setState({
			saved: !this.state.saved
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
						<i className="material-icons star">star</i>
					</a>
				</div>
			</li>
	    );
	}

}

export default ResultItems;