import {DELETE_REQUEST, DELETE_FAIL, DELETE_SUCCESS} from 'actions/Tr';

const initState = {
};

export default function reducer(state = initState, action) {
    switch (action.type) {
    case DELETE_REQUEST:
        return {
            ...state,
        };
    case DELETE_SUCCESS:
        return {
            ...state,
        };
    case DELETE_FAIL:
        return {
            ...state,
        };
    default:
        return state;
    }
}