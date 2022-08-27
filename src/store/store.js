import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { navOptionsReducer } from './reducers/navOptionsReducer'
import thunk from 'redux-thunk'
import { leadPopUpReducer } from './reducers/leadPopUpReducer'


const reducer = combineReducers({
    navOptions: navOptionsReducer,
    leadPopUp: leadPopUpReducer,
})
const initialState = {
    navOptions: {
      home: true,
      about: false,
      services: false,
      projects: false,
      learn: false,
      caseStudy: false
    }
  }

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  )
  
  export default store