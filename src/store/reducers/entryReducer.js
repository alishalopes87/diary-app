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
			console.log('created entry', action.entry)
	}
	return state
}

export default entryReducer