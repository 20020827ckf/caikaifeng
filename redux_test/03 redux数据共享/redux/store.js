import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import countReducer from './reducer/count'
import personReducer from './reducer/person'

const allReducer = combineReducers({
    count: countReducer,
    person: personReducer
})

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))