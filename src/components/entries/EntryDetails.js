import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteEntry } from  '../../store/actions/entryAction'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const handleDelete = (e, deleteEntry,entry_id) => {
	e.stopPropagation();
	deleteEntry(entry_id)
	return <Redirect to='/'/>
}
const EntryDetails = (props) => {
	console.log("this is props",props)
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
				<div className='left'><button>Edit</button><button onClick={ e => handleDelete(e, props.deleteEntry, props.match.params.id)}>Delete</button></div>
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
//create delete handler
//get entry_id 
//call props.delete entry
const mapDispatchToProps = (dispatch) => {
	return {
		deleteEntry: (entry_id) => dispatch(deleteEntry(entry_id))
	}
}

// const onDelete = (state, ownprops) =>{
// 	const id = ownProps.match.params.id
// 	const entries = state.firestore.data.entries
// 	const entry = entries ? entries[id] : null
	
// 	state.firestore.delete({ colletion: 'entries', doc: entry[id]})
// }

const mapStateToProps = (state, ownProps ) => {
	console.log(state, "this is ownprops", ownProps)
	const id = ownProps.match.params.id
	console.log(id)
	const entries = state.firestore.data.entries
	const entry = entries ? entries[id] : null
	return {
		entry: entry
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([
		{ collection: 'entries' }
		])
	)(EntryDetails)