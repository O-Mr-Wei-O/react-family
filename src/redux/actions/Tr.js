export const APPROVE_REQUEST = 'Tr/APPROVE_REQUEST';
export const APPROVE_SUCCESS = 'Tr/APPROVE_SUCCESS';
export const APPROVE_FAIL = 'Tr/APPROVE_FAIL';

export const DELETE_REQUEST = 'Tr/DELETE_REQUEST';
export const DELETE_SUCCESS = 'Tr/DELETE_SUCCESS';
export const DELETE_FAIL = 'Tr/DELETE_FAIL';

export function approve(info) {
    return {
        types:[APPROVE_REQUEST,APPROVE_SUCCESS,APPROVE_FAIL],
        promise: client => client.post('/api/approve',{info:info})
    };
}

export function deleteDaily(id) {
    return {
        types:[DELETE_REQUEST,DELETE_SUCCESS,DELETE_FAIL],
        promise: client => client.post('/api/deleteDaily',{dailyId:id})
    };
}