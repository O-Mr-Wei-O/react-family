export const GET_USER_REQUEST = 'userTab/GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'userTab/GET_USER_SUCCESS';
export const GET_USER_FAIL = 'userTab/GET_USER_FAIL';

export function getuserTab() {
    return {
        types:[GET_USER_REQUEST,GET_USER_SUCCESS,GET_USER_FAIL],
        promise: client => client.get('/api/getuserTab')
    };
}