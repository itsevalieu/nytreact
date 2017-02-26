import React, {Component} from "react";

class ArticleItems extends Component {

  render() {
    return (
		<div className="card-panel row">
			<span className="col s10 m10">{this.props.title}</span>
			<span className="col s2 m2">
				<a href={this.props.url} className="secondary-content right">
					<i className="material-icons">delete</i>
				</a>
			</span>
			<br/><hr/>
			<span className="col s12 m12">{this.props.date}</span>
		</div>
    );
  }
  
}

export default ArticleItems;