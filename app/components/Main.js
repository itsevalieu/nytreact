import React, {Component} from "react";
import Search from "./children/Search";
import Results from "./children/Results";
import SavedArticles from "./children/SavedArticles";

import helpers from "./helpers";

class Main extends Component {
	constructor(props) {
		super(props);
		this.setTerms = this.setTerms.bind(this);
		this.state = { 
			searchTopic: "",
			searchBeginDate: "",
			searchEndDate: "",
			results: [],
			saved: [],
			articles: []
		}
	}

	componentDidMount(prevProps, prevState) {
	
	    helpers.getArticle().then((response) => {
	    	console.log("Main:", response);

			if (prevState.articles !== this.state.articles) {
				console.log("Main: Article", response);
				this.setState({articles: response});
			}
	    });
	}

	componentDidUpdate(prevProps, prevState) {
		
		if(prevState.searchTopic !== this.state.searchTopic){

			console.log("Main: begin component update");
			helpers.runQuery(this.state.searchTopic, this.state.searchBeginDate, this.state.searchEndDate).then((response) => {
				console.log("Main: Results are in!", response);
				// console.log("Main", response[0].title, response[0].url);

				helpers.postArticle(response[0].title, response[0].url).then(() => {
					console.log("Main: Saved Article!");

					helpers.getArticle().then((newResponse) => {
						console.log("Main: Get article", newResponse.data);
						this.setState({
							results: response, 
							articles: newResponse.data
						});
					
					});

				});

			});
		}
	}

	setTerms(term, startYear, endYear) {
		this.setState({ 
			searchTopic: term, 
			searchBeginDate: startYear, 
			searchEndDate: endYear
		});
	}

	render() {
	    return (
	    	<div>
				<div className="container">
					<h2 className="center"><strong>New York Times Article Scrubber</strong></h2>
					<p className="center"><em>Search for and annotate articles of interest!</em></p>
					
					<hr />
					
					<p>
						<a href="#/Search" className="btn btn-primary btn-lg">Show Search</a>
						<a href="#/Results" className="btn btn-primary btn-lg">Show Results</a>
						<a href="#/SavedArticles" className="btn btn-primary btn-lg">Show Saved Articles</a>
					</p>
				</div>
		      	<div className="container">

					{/* This code will dump the correct Child Component */}
					<Search setTerms={this.setTerms}/>

					<Results 
						results={this.state.results}
						postArticle
					/>

					<SavedArticles 
						articles={this.state.articles}
					/>
				</div>
			</div>
	    );
  }

}

// Export the componen back for use in other files
export default Main;