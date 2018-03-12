export const BAN_REQUEST = 'userTr/BAN_REQUEST';
export const BAN_SUCCESS = 'userTr/BAN_SUCCESS';
export const BAN_FAIL = 'userTr/BAN_FAIL';

export function ban(info) {
    return {
        types:[BAN_REQUEST,BAN_SUCCESS,BAN_FAIL],
        promise: client => client.post('/api/ban',{info:info})
    };
}
