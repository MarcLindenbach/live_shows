import { combineReducers } from 'redux';
import liveShowsReducer from './live_shows';

const rootReducer = combineReducers({
  liveShows: liveShowsReducer,
});

export default rootReducer;
