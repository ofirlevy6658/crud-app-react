import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Users from "./Users";
import UsersDetail from "./UsersDetail";
import AddUser from "./AddUser";
// https://605aed1d27f0050017c05918.mockapi.io/users

class App extends Component {
	render() {
		return (
			<div className="ui container">
				<BrowserRouter>
					<div>
						<Header />
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/users" exact component={Users} />
							<Route path="/Users/:id" exact component={UsersDetail} />
							<Route path="/Add" exact component={AddUser} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
