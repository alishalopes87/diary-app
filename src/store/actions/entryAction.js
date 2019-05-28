

const createEntry = (entry) =>{
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

const editEntry = (entry) => {
	return(dispatch, getState, { getFirebase, getFirestore }) =>{
		const firestore = getFirestore();
		const profile = getState().firebase.profile
		const authorId = getState().firebase.auth.uid

		firestore.collection('entries').update({
		title: entry.title,
		content: entry.content

		}).then(() =>{
			dispatch({ type: 'EDIT_ENTRY', entry })
		}).catch((err)=>{
			dispatch({ type: 'EDIT_ENTRY_ERROR', err})
		})
	}
};

const deleteEntry = (entry) =>{
	return( dispatch, getState, { getFirebase, getFirestore}) =>{
		const firestore = getFirestore();
		const profile = getState().firebase.profile
		const authorId = getState().firebase.auth.uid

		firestore.collection('entries').delete({
			...entry,
		}).then(() =>{
			dispatch({ type: 'DELETE_ENTRY', entry })
		}).catch((err)=>{
			dispatch({ type: 'DELETE_ENTRY_ERROR',err})
		})
	}
};

export { createEntry, deleteEntry, editEntry }