export const ZAN_REQUEST = 'Circle/ZAN_REQUEST';
export const ZAN_SUCCESS = 'Circle/ZAN_SUCCESS';
export const ZAN_FAIL = 'Circle/ZAN_FAIL';

export function zan(id,zanNumber) {
    return {
        types:[ZAN_REQUEST,ZAN_SUCCESS,ZAN_FAIL],
        promise: client => client.post('/api/zan',{id:id,zanNumber:zanNumber})
    };
}