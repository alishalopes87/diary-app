import authReducer from './authReducer'
import entryReducer from './entryReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
	auth: authReducer,
	entry: entryReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer
	//updates whether authentication on state
});

export default rootReducer