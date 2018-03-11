import {DAILY_REQUEST, DAILY_FAIL, DAILY_SUCCESS} from 'actions/daily';

const initState = {
    status: null
};

export default function reducer(state = initState, action) {
    switch (action.type) {
    case DAILY_REQUEST:
        return {
            ...state,
        };
    case DAILY_SUCCESS:
        // console.log(action.result.data);
        return {
            ...state,
            status: action.result.data
        };
    case DAILY_FAIL:
        return {
            ...state,
        };
    default:
        return state;
    }
}