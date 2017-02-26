import React, {Component} from "react";
import ArticleItems from "./ArticleItems";
import helpers from "../helpers";

class Articles extends Component {
	
	constructor(props) {
		super(props);
		this.getSavedArticles = this.getSavedArticles.bind(this);
		this.state = {
			articles: []
		}
	}

  	componentDidMount() {
  		console.log("Is Mounting");
  		console.log("Previous State Articles: ", this.state.articles);
  		this.getSavedArticles();
  	}
  	//Function: retrieves saved articles from server
  	getSavedArticles() {
  		helpers.getArticle().then((response) => {
  			console.log("Listing Articles", response.data);
			this.setState({ articles: response.data });
		});
  	}
  	//Render Article Component and child ArticleItem components
  	render() {
	    return (
	    	<div className="row">
				<div className="col s12 m12">
					<div className="card-panel teal lighten-3">
						<ul className="collection with-header">
							<li className="collection-header"><h4>Saved Articles</h4></li>
							<li className="collection-item">
								{this.state.articles.map((item, index) => {
									return <ArticleItems
										key={index}
										title={item.title}
										date={item.date}
										url={item.url}
									/>;
								})}
							</li>
						</ul>
					</div>
				</div>
			</div>
	    );
	}

}

export default Articles;