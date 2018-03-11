import {ZAN_REQUEST, ZAN_FAIL, ZAN_SUCCESS} from 'actions/card';

const initState = {
};

export default function reducer(state = initState, action) {
    switch (action.type) {
    case ZAN_REQUEST:
        return {
            ...state,
        };
    case ZAN_SUCCESS:
        return {
            ...state,
        };
    case ZAN_FAIL:
        return {
            ...state,
        };
    default:
        return state;
    }
}