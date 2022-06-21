
import * as actionTypes from './actions';

const {
    SET_ON_REFRESH,
    SET_OFF_REFRESH
} = actionTypes;

const refreshReducer = ( _state = false, _action ) => {

    const { type } = _action;

    switch ( type ) {

        case SET_ON_REFRESH:
            return !_state;

        case SET_OFF_REFRESH:
            return false;

        default:
            return _state;

    };

};

export default refreshReducer;