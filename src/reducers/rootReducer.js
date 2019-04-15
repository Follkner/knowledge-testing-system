import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';
import testReducer from './testReducer';

const rootReducer = combineReducers({
	loginReducer: loginReducer,
	registrationReducer: registrationReducer,
	testReducer: testReducer,
})

export default rootReducer;