import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Reference the high-level components
import Main from "../components/Main.js";
import Search from "../components/children/Search";
import Results from "../components/children/Results";
import SavedArticles from "../components/children/SavedArticles";

export default () => {
	return (
		<Route path="/" component={Main}>
			<Route path="/articles" component={SavedArticles} />	
		</Route>
	);
};