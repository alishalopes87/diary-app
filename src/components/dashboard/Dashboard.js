import React from 'react';
import EntryList from '../entries/EntryList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class Dashboard extends React.Component {
	render(){

		const { entries } = this.props
		// if(!auth.uid) return <Redirect to='/signIn' />
		return(
			<div className='dashboard container'>
				<div className='row'>
					<div className='col s12 m6'>
						<EntryList entries={entries}/>
					</div>
					<div className='col s12 m5 offset-m1'></div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	// console.log(state)
	return {
		entries: state.firestore.ordered.entries,
		auth: state.firebase.auth
	}
}


export default compose(
	 connect(mapStateToProps),
	 firestoreConnect(props => {
	 	let whereClause = [['privacy', '==', false] ]
	 	if (props.auth !== undefined && props.auth.uid !== undefined) {
	 		whereClause.push(['authorId', '==', props.auth.uid])
	 	}
	 	return [{
	 	  collection: 'entries',
	 	  where: whereClause,
 		}]
	 })
	)(Dashboard)