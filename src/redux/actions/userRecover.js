export const USER_RECOVER_REQUEST = 'userTab/USER_RECOVER_REQUEST';
export const USER_RECOVER_SUCCESS = 'userTab/USER_RECOVER_SUCCESS';
export const USER_RECOVER_FAIL = 'userTab/USER_RECOVER_FAIL';

export const GET_BANEDUSER_REQUEST = 'userTab/GET_BANEDUSER_REQUEST';
export const GET_BANEDUSER_SUCCESS = 'userTab/GET_BANEDUSER_SUCCESS';
export const GET_BANEDUSER_FAIL = 'userTab/GET_BANEDUSER_FAIL';

export function getBanedUser() {
    return {
        types:[GET_BANEDUSER_REQUEST,GET_BANEDUSER_SUCCESS,GET_BANEDUSER_FAIL],
        promise: client => client.get('/api/getBanedUser')
    };
}

export function recoverUser(info) {
    return {
        types:[USER_RECOVER_REQUEST,USER_RECOVER_SUCCESS,USER_RECOVER_FAIL],
        promise: client => client.post('/api/recoverUser',{info:info})
    };
}
