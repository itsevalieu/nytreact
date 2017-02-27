import React, {Component} from "react";
import ArticleItems from "./ArticleItems";
import helpers from "../helpers";

class Articles extends Component {
	
	constructor(props) {
		super(props);
		this.getSavedArticles = this.getSavedArticles.bind(this);
		this.setTerm = this.setTerm.bind(this);
		this.state = {
			articles: [],
			idToDelete: ""
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
  	//Function: Set variables for delete
  	setTerm(id) {
  		console.log(id);
		this.setState({
			idToDelete: id,			
		});
		console.log(this.state.idToDelete);
	}
  	//Handle Deletion of Article
  	// deleteItem(event) {
  	// 	event.preventDefault();
  	// 	console.log("Id to delete: ", this.state.idToDelete);
  	// 	helpers.deleteArticle(this.state.idToDelete).then((response) => {
  	// 		console.log("Deleting: ", response.data);
  	// 		this.setState({ articles: response.data });
  	// 	});
  	// }
  	//deleteItem={this.deleteItem}
  	//						onClick={this.props.deleteItem} 

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
										id={item._id}
										setTerm={this.setTerm}
										
										title={item.title}
										date={item.date}
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