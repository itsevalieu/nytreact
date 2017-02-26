import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Reference the high-level components
import Main from "../components/Main.js";
import Search from "../components/children/Search";
import Results from "../components/children/Results";
import Articles from "../components/children/Articles";

export default () => {
	return (
		<Route path="/" component={Main}>
			<IndexRoute component={Search} />

			<Route path="/search" component={Search} />
				<Route path="/results" component={Results} />
			<Route path="/articles" component={Articles} />	
		</Route>
	);
};