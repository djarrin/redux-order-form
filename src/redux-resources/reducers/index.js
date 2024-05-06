import {combineReducers} from 'redux';
import offerReducer from './offersReducers';
import emailFieldsReducer from './emailFieldsReducer';
import taxReducer from './taxReducer';

export default combineReducers({offerReducer, emailFieldsReducer, taxReducer});
