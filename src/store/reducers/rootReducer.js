import authReducer from './authReducer'
import entryReducer from './entryReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	auth: authReducer,
	entry: entryReducer
})

export default rootReducer