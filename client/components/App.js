import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import User from './User';
import Groups from './groups';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
       <BrowserRouter>
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/user">Your profile</Link>
						</li>
					</ul>

					<Switch>
						<Route exact path="/">
							<div>hi from App</div>
							<Groups />
						</Route>
						<Route exact path="/user" component={User}>
							<User />
						</Route>
					</Switch>
				</div>
 		   </BrowserRouter>
      </div>
    );
  }
}

export default App;
