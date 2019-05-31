

const createEntry = (entry) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		//make async call to db
		const firestore = getFirestore();
		const profile = getState().firebase.profile
		const authorId = getState().firebase.auth.uid

		firestore.collection('entries').add({
			...entry,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId: authorId,
			createdAt: new Date(),
			
		}).then(() =>{
			dispatch({ type: 'CREATE_ENTRY', entry })
		}).catch((err)=>{
			dispatch({ type: 'CREATE_ENTRY_ERROR', err });
		})
	}
};

const editEntry = (entryId, title, content) => {
	console.log('Got Edit')
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		console.log("Edit")
		const firestore = getFirestore();
		// const entries = state.firestore.data.entries
		// const entry = entries ? entries[entry_id] : null
		console.log('Creating entry')

		firestore.update({ collection: 'entries', doc: entryId},{
			title: title,
			content: content
		}).then(() =>{
			dispatch({ type: 'EDIT_ENTRY' })
		}).catch((err)=>{
			dispatch({ type: 'EDIT_ENTRY_ERROR', err})
		})
	}
};

const deleteEntry = (entry_id) =>{
	return( dispatch, getState, { getFirebase, getFirestore}) =>{
		const firestore = getFirestore();

		firestore.collection('entries').doc(entry_id).delete(
			
		).then(() =>{
			dispatch({ type: 'DELETE_ENTRY', entry_id })
		}).catch((err)=>{
			dispatch({ type: 'DELETE_ENTRY_ERROR',err})
		})
	}
};

export { createEntry, deleteEntry, editEntry }