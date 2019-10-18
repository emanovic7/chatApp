import { combineReducers } from "redux";


//Reducers
import channelsReducer from '../reducers/channelsReducer';
import usersReducer from '../reducers/usersReducer';


const rootReducer = combineReducers({
  user: usersReducer,
  channel: channelsReducer
})


export default rootReducer;
