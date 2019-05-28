import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

const EntryDetails = (props) => {
	console.log(props)
	const { entry } = props;
	if(entry){
		return(
			<div className='container section entry-details'>
				<div className='card -depth-0'>
					<div className='card-content'>	
					<span className='card-title'>{ entry.title }</span>
					<p>{ entry.content }</p>
					</div>
					<div className='card-action grey-light-4 grey-text'>	
					<div>Posted by:{ entry.authorFirstName } { entry.authorLastName }</div>
				<div>{moment(entry.createdAt.toDate()).calendar()}</div>
				<div className='left'><button>Edit</button><button onClick={this.onDelete}>Delete</button></div>
			</div>
		</div>
	</div>
	)

	}else{
		return(
			<div className='container center'>
				<p>Loading project...</p>
			</div>
		)
	}
}

// const onDelete = (state, ownprops) =>{
// 	const id = ownProps.match.params.id
// 	const entries = state.firestore.data.entries
// 	const entry = entries ? entries[id] : null
	
// 	state.firestore.delete({ colletion: 'entries', doc: entry[id]})
// }

const mapStateToProps = (state, ownProps ) => {
	console.log(state)
	const id = ownProps.match.params.id
	const entries = state.firestore.data.entries
	const entry = entries ? entries[id] : null
	return {
		entry: entry
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'entries' }
		])
	)(EntryDetails)