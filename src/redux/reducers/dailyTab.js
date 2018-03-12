import {DAILY_TAB_REQUEST, DAILY_TAB_FAIL, DAILY_TAB_SUCCESS} from 'actions/dailyTab';

const initState = {
    tr:null
};

export default function reducer(state = initState, action) {
    switch (action.type) {
    case DAILY_TAB_REQUEST:
        return {
            ...state,
        };
    case DAILY_TAB_SUCCESS:
        // console.log(action.result.data);
        return {
            ...state,
            tr:action.result.data
        };
    case DAILY_TAB_FAIL:
        return {
            ...state,
        };
    default:
        return state;
    }
}