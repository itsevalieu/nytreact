import React, {Component} from "react";
import ArticleItems from "./ArticleItems";

class Articles extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		}
	}
  	
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