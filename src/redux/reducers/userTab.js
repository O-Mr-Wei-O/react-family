import {GET_USER_REQUEST, GET_USER_FAIL, GET_USER_SUCCESS} from 'actions/userTab';

const initState = {
    tr:null
};

export default function reducer(state = initState, action) {
    switch (action.type) {
    case GET_USER_REQUEST:
        return {
            ...state,
        };
    case GET_USER_SUCCESS:
        // console.log(action.result.data);
        return {
            ...state,
            tr:action.result.data
        };
    case GET_USER_FAIL:
        return {
            ...state,
        };
    default:
        return state;
    }
}