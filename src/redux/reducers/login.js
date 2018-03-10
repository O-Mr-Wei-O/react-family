import {Login_REQUEST, Login_FAIL, Login_SUCCESS} from 'actions/login';

const initState = {
    login: null
};

export default function reducer(state = initState, action) {
    switch (action.type) {
    case Login_REQUEST:
        return {
            ...state,
        };
    case Login_SUCCESS:
        console.log(action.result.data);
        return {
            ...state,
            // // 传回来的是字符串，需要先转换成object类型的json对象
            login: action.result.data
        };
    case Login_FAIL:
        return {
            ...state,
        };
    default:
        return state;
    }
}