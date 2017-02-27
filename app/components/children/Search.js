import React, {Component} from "react";
import Results from "./Results";
import helpers from "../helpers";

class Search extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.state = { 
			term: "",
			startYear: "",
			endYear: "",
			results: []
		}
	}
	//Function: Handles live changes for input
	handleChange(event) {
		if(event.target.id === "term") {
			this.setState({
				term: event.target.value,
			});
		} else if (event.target.id === "startYear") {
			this.setState({
				startYear: event.target.value,
			});
		} else if (event.target.id === "endYear") {
			this.setState({
				endYear: event.target.value
			});
		}
	}
	//Function: Handles queries on form submit
	handleSubmit(event) {
		event.preventDefault();
		console.log("Search: handling form submit", this.state.term, this.state.startYear, this.state.endYear);
		helpers.runQuery(this.state.term, this.state.startYear, this.state.endYear).then((response) => {
			console.log("Search: Results are in!", response);
			this.setState({
				term: "",
				startYear: "",
				endYear: "",
				results: response
			});
		});
	}
	//Function: Handles article saves on click
	handleSave(saveArticle) {
		helpers.postArticle(saveArticle).then(() => {
			console.log("Search.handleSave: Save completed");
		});
	}

	render() {
	    return (
	    	<div className="row">
				<div className="col s12 m12">
					<div className="card-panel teal lighten-3">
						<ul className="collection with-header">
							<li className="collection-header"><h4>Search</h4></li>

							<li className="collection-item">
								<form onSubmit={this.handleSubmit}>
									<div className="input-field col s12 m12">
										<input 
											value={this.state.term}
											type="text"
											id="term"
											onChange={this.handleChange}
											required
										/>
										<label className="active" for="term">Topic</label>
									</div>
									<div className="input-field col s6 m6">
										<input 
											value={this.state.startYear}
											type="number"
											id="startYear"
											onChange={this.handleChange}
											required
										/>
										<label className="active" for="startYear">Start Year</label>
									</div>
									<div className="input-field col s6 m6">
										<input 
											value={this.state.endYear}
											type="number"
											id="endYear"
											onChange={this.handleChange}
											required
										/>
										<label className="active" for="endYear">End Year</label>
									</div>
									<div className="row">
										<div className="col s12 m12">
											<button className="right btn waves-effect waves-light" type="submit" name="action">Submit</button>
										</div>
									</div>
								</form>
							</li>

						</ul>
					</div>
					<div>
						<Results handleSave = {this.handleSave}results={this.state.results}></Results>
					</div>
				</div>
			</div>
	    );
	}

}

export default Search;