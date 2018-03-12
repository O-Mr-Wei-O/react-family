import {GET_BANEDUSER_REQUEST, GET_BANEDUSER_FAIL, GET_BANEDUSER_SUCCESS} from 'actions/userRecover';

const initState = {
    baneduser:null
};

export default function reducer(state = initState, action) {
    switch (action.type) {
    case GET_BANEDUSER_REQUEST:
        return {
            ...state,
        };
    case GET_BANEDUSER_SUCCESS:
        // console.log(action.result.data);
        return {
            ...state,
            baneduser:action.result.data
        };
    case GET_BANEDUSER_FAIL:
        return {
            ...state,
        };
    default:
        return state;
    }
}