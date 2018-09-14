import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import equipments from './equipment';
import weather from './weather';
import event from './event';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  router: routerReducer,
  counter,
  equipments,
  // form prefix, very important!!!
  form: formReducer,
  weather,
  event
});
