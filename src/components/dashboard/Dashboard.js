import React from 'react';
import Profile from './Profile'
import EntryList from '../entries/EntryList'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
	render(){
		//console.log(this.props)
		const { entries } = this.props
		return(
			<div className='dashboard container'>
				<div className='row'>
					<div className='col s12 m6'>
						<EntryList entries={entries}/>
					</div>
					<div className='col s12 m5 offset-m1'></div>
					<Profile />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		entries: state.entry.entries
	}
}

export default connect(mapStateToProps)(Dashboard)