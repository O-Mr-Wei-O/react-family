import {CIRCLE_REQUEST, CIRCLE_FAIL, CIRCLE_SUCCESS} from 'actions/circle';

const initState = {
    cardInfo: null
};

export default function reducer(state = initState, action) {
    switch (action.type) {
    case CIRCLE_REQUEST:
        return {
            ...state,
        };
    case CIRCLE_SUCCESS:
        console.log(action.result.data);
        return {
            ...state,
            cardInfo: action.result.data
        };
    case CIRCLE_FAIL:
        return {
            ...state,
        };
    default:
        return state;
    }
}