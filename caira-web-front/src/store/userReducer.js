
import * as actionTypes from './actions';



const userReducer = ( _state = {}, _action ) => {

    const { type, payload } = _action;

    switch ( type ) {

        case actionTypes.SET_USER:
            return {..._state, ...payload};

        case actionTypes.DROP_USER:
            return {};

        default:
            return _state

    };

};

export default userReducer;