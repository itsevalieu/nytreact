var React = require("react");
var SavedArticleItems = require("./SavedArticleItems");

var SavedArticles = React.createClass({

  	render: function() {
	    return (
	    	<div className="row">
				<div className="col s12 m12">
					<div className="card-panel teal lighten-3">
						<ul className="collection with-header">
							<li className="collection-header"><h4>Saved Articles</h4></li>
							<li className="collection-item">
								
								{this.props.articles.map((item, index) => {
									return <SavedArticleItems
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

});

module.exports = SavedArticles;