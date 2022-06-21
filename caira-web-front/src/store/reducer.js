import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import refreshReducer from './refreshReducer';
import userReducer from './userReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    user: userReducer,
    refresh: refreshReducer
});

export default reducer;
