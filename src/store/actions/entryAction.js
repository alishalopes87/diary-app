export const createEntry = (entry) =>{
	return (dispatch, getState) => {
		//make async call to db
		dispatch({ type: 'CREATE_ENTRY', entry })
	}
};