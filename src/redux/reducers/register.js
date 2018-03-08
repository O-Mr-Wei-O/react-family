import {Register_REQUEST, Register_FAIL, Register_SUCCESS} from 'actions/register';

const initState = {};

export default function reducer(state = initState, action) {
    switch (action.type) {
    case Register_REQUEST:
        return {
            ...state,
        };
    case Register_SUCCESS:
        // console.log(action.result.data);
        return {
            ...state,
            // // 传回来的是字符串，需要先转换成object类型的json对象
            // news: JSON.parse(action.result.data)
        };
    case Register_FAIL:
        return {
            ...state,
        };
    default:
        return state;
    }
}