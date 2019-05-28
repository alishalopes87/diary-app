const initState = {
	entries: [
		{id: '1', title: 'today i ate soup', content: 'blah blah blah'},
		{id: '2', title: 'today i ate an apple', content: 'blah blah blah'},
		{id: '3', title: 'today i ate pasta', content: 'blah blah blah'}
	]
}

const entryReducer = (state = initState, action) => {
	switch(action.type){
		case 'CREATE_ENTRY':
			console.log('created entry', action.entry);
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('create entry error', action.err);
			return state;
		case 'EDIT_ENTRY':
			console.log('edited entry', action.entry)
			return state;
		case 'EDIT_ENTRY_ERROR':
			console.log('entry edit error', action.err)
			return state;
		case 'DELETE_ENTRY':
			console.log('entry deleted', action.entry)
			return state;
		case 'DELETE_ENTRY_ERROR':
			console.log('entry deletion error', action.err)
			return state
		default: 
			return state;
	}
}

export default entryReducer