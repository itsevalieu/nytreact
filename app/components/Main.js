import React, {Component} from "react";
import {Link} from "react-router";

class Main extends Component {
	// constructor(props) {
	// 	super(props);	
	// 	this.setTerms = this.setTerms.bind(this);
	// 	this.state = { 
	// 		saved: [],
	// 		articles: []
	// 	}
	// }

	// componentDidMount(prevProps, prevState) {
	//     helpers.getArticle().then((response) => {
	//     	console.log("Main:", response);
	// 		if (prevState.articles !== this.state.articles) {
	// 			console.log("Main: Article", response);
	// 			this.setState({articles: response});
	// 		}
	//     });
	// }

	// componentDidUpdate(prevProps, prevState) {
	// 	if(prevState.searchTopic !== this.state.searchTopic){
	// 		console.log("Main: begin component update");
	// 		helpers.runQuery(this.state.searchTopic, this.state.searchBeginDate, this.state.searchEndDate).then((response) => {
	// 			console.log("Main: Results are in!", response);
	// 			// console.log("Main", response[0].title, response[0].url);
	// 			helpers.postArticle(response[0].title, response[0].url).then(() => {
	// 				console.log("Main: Saved Article!");
	// 				helpers.getArticle().then((newResponse) => {
	// 					console.log("Main: Get article", newResponse.data);
	// 					this.setState({
	// 						results: response, 
	// 						articles: newResponse.data
	// 					});
	// 				});
	// 			});
	// 		});
	// 	}
	// }
	render() {
	    return (
	    	<div>
				<div className="container">
					<h2 className="center"><strong>New York Times Article Scrubber</strong></h2>
					<p className="center"><em>Search for and annotate articles of interest!</em></p>
					<hr />
					<p>
						<Link to="/search" className="btn btn-primary btn-lg left">Show Search</Link>
						<Link to="/articles" className="btn btn-primary btn-lg right">Show Articles</Link>
					</p>
				</div>
		      	<div className="container">
		      		{this.props.children}
				</div>
			</div>
	    );
	}

}

export default Main;