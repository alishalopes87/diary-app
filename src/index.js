import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './components/config/fbConfig'

var http = require("http");
setInterval(function() {
    http.get("https://virtualdiary.herokuapp.com/");
}, 300000); // every 5 minutes (300000)

const store = createStore(rootReducer, 
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(fbConfig),
		reactReduxFirebase(fbConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true })
	)
);

store.firebaseAuthIsReady.then(() =>{
	ReactDOM.render(<Provider store={store}><App /></Provider>,document.querySelector('#root'));

})
