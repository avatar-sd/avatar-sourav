import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/auth';
import DetailsReducer from './reducers/userDetails';


const rootReducer = combineReducers({
    auth: AuthReducer,
    details: DetailsReducer,
  });
  
 const Store = createStore(rootReducer, applyMiddleware(thunk));

 export default Store
  
  