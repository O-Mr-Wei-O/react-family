import {BAN_REQUEST, BAN_FAIL, BAN_SUCCESS} from 'actions/userTr';

const initState = {
};

export default function reducer(state = initState, action) {
    switch (action.type) {
    case BAN_REQUEST:
        return {
            ...state,
        };
    case BAN_SUCCESS:
        return {
            ...state,
        };
    case BAN_FAIL:
        return {
            ...state,
        };
    default:
        return state;
    }
}