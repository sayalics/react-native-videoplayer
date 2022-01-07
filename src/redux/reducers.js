import {combineReducers} from 'redux';

import appReducer from './app/appReducer';
import dashboardReducer from './reducers/dashboardReducer';
import themeReducer from './reducers/themeReducer';

export default combineReducers({
  appReducer,
  dashboardReducer,
  themeReducer,
});
