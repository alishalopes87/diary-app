import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar'
import Dashboard from './dashboard/Dashboard'
import EntryDetails from './entries/EntryDetails'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import CreateEntry from './entries/CreateEntry'

class App extends React.Component {
	render(){
		return(
			<BrowserRouter>
				<div className='App'>
					<Navbar />
					<Switch>
						<Route exact path='/' component={ Dashboard }/>
						<Route path='/entry/:id' component={ EntryDetails} />
						<Route path='/signin' component={ SignIn } />
						<Route path='/signup' component={ SignUp } />
						<Route path='/create/:id' component={ CreateEntry } />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
export default App;