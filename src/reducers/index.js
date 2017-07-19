import { combineReducers } from 'redux';
import showsReducer from './shows';

const rootReducer = combineReducers({
  shows: showsReducer,
});

export default rootReducer;
