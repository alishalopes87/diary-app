import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteEntry, editEntry } from  '../../store/actions/entryAction'
import moment from 'moment'


class EntryDetails extends React.Component {
	inputTitle = React.createRef();
	inputContent = React.createRef();


	handleDelete = (e,entry_id) => {
		e.stopPropagation();
		deleteEntry(entry_id)
		this.props.history.push('/')
	}

	handleEdit = (e) =>{
		const { entryId } = this.props;
		e.stopPropagation();
		this.props.dispatchEditEntry(entryId, this.state.title, this.state.content)
		this.props.history.push('/')		
	}

	handleUpdate =(e) =>{
		this.setState({
			title: this.inputTitle.current.value,
			content: this.inputContent.current.value
		})

	}
	render(){
	
  // function handleClick() {
	  //   textInput.current.focus();
	  // }

		const { entry, auth  } = this.props;

		let title;
		let content;
		let edits;
		if(entry){
			if (auth.uid === entry.authorId) {
				title = <input ref={this.inputTitle} onChange={ this.handleUpdate }  defaultValue={entry.title}className='card-title'></input>
				content = <textarea ref={this.inputContent} onChange={ this.handleUpdate} defaultValue={entry.content}></textarea>
			} else {
				title = <span className='card-title'>{ entry.title }</span>
				content = <p>{ entry.content }</p>
			}

			if(auth.uid){
				edits = <div className='left'>
					<button onClick={ this.handleEdit } >Edit</button>
					<button onClick={ this.handleDelete }>Delete</button>)
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

	}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteEntry: (entry_id) => dispatch(deleteEntry(entry_id)),
		dispatchEditEntry: (entry_id,title,content) => dispatch(editEntry(entry_id,title,content))
	}
}


const mapStateToProps = (state, ownProps ) => {
	const id = ownProps.match.params.id
	const entries = state.firestore.data.entries
	const entry = entries ? entries[id] : null
	const auth = state.firebase.auth

	return {
		entryId: id,
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