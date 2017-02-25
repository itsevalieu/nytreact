var React = require("react");
var SavedArticleItems = require("./SavedArticleItems");

var SavedArticles = React.createClass({
	
	getInitialState: function() {
		return { 
			articles: this.props.articles
		};
	},

  	render: function() {
	    return (
	    	<div className="row">
				<div className="col s12 m12">
					<div className="card-panel teal lighten-3">
						<ul className="collection with-header">
							<li className="collection-header"><h4>Saved Articles</h4></li>
							<li className="collection-item">
								
								{this.state.articles.map((item, index) => {
									return <SavedArticleItems
										key={index}
										title={item.title}
										url={item.url}
									/>;
								})}
								
								{/*Example item below*/}
								<div className="card-panel row">
									
									<span className="col s5 m5">Title</span>
									<span className="col s5 m5">Date</span>
									<span className="col s2 m2">
										<a href="#!" className="secondary-content right">
											<i className="material-icons">delete</i>
										</a>
									</span>
									<br/><hr/>
									<span className="col s12 m12">Notes</span>
									
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
	    );
  
	}

});

module.exports = SavedArticles;