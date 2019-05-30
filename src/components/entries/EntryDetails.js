import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteEntry, editEntry } from  '../../store/actions/entryAction'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const handleDelete = (e, deleteEntry,history,entry_id) => {
	e.stopPropagation();
	deleteEntry(entry_id)
	history.push('/')
}

const handleEdit = (e, editEntry,history, entry, title, content) =>{
	e.stopPropagation();
	editEntry(entry)
	history.push('/')

	
}
const handleUpdate =(e,title) =>{
	console.log(title, e.target.value)
	return {
		title: e.target.value,
		content: e.target.value
	}

}
const EntryDetails = (props) => {
	const { entry, auth  } = props;

	let title;
	let content;
	let edits;
	if(entry){
		if (auth.uid === entry.authorId) {
			title = <input onChange={ e => handleUpdate(e,entry.title)}  defaultValue={entry.title}className='card-title'></input>
			content = <textarea  onChange={ e => handleUpdate(e,entry.title)} defaultValue={entry.content}></textarea>
		} else {
			title = <span className='card-title'>{ entry.title }</span>
			content = <p>{ entry.content }</p>
		}

		if(auth.uid){
			edits = <div className='left'>
				<button onClick={ e => handleEdit(e,props.editEntry, props.history,props.match.params.id, entry.title, entry.content)} >Edit</button>
				<button onClick={ e => handleDelete(e, props.deleteEntry, props.history,props.match.params.id)}>Delete</button>)
			</div>
		}
		return(
			<div className='container section entry-details'>
				<div className='card z-depth-0'>
					<div className='card-content'>
					{title}
					{content}
					</div>
					<div className='card-action grey lighten-4 grey-text'>	
					<div>Posted by:{ entry.authorFirstName } { entry.authorLastName }</div>
					<div>{moment(entry.createdAt.toDate()).calendar()}</div>
					{edits}
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

const mapDispatchToProps = (dispatch) => {
	return {
		deleteEntry: (entry_id) => dispatch(deleteEntry(entry_id)),
		editEntry: (entry_id) => dispatch(editEntry(entry_id))
	}
}


const mapStateToProps = (state, ownProps ) => {
	console.log("this is state", state)
	const id = ownProps.match.params.id
	const entries = state.firestore.data.entries
	const entry = entries ? entries[id] : null
	const auth = state.firebase.auth

	return {
		entry: entry, 
		auth: auth
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([
		{ collection: 'entries' }
		])
	)(EntryDetails)