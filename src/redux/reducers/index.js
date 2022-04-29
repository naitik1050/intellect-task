import { combineReducers } from 'redux';
import splashScreenReducer from './splashScreenReducer';
import dashboardReducer from './dashboardReducer';


export default combineReducers({
  splashScreenReducer: splashScreenReducer,
  dashboardReducer: dashboardReducer
});
