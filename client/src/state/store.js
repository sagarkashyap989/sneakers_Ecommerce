import {createStore, applyMiddleware} from 'redux'; // ofcourse this is needed 
import {composeWithDevTools} from 'redux-devtools-extension' // for chrome redux dev tools
import thunk from 'redux-thunk'    // this package help to run asyncronous funtions 
import rootReducer from './reducers'  // this is root reduers, what we are importing is just an folder but silnce it has index.js file it fill still run 

const initialState = {}   //this is initialState

const middleware = [thunk]; // this is middleware

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default  store;