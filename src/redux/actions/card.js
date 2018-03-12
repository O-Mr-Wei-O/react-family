export const ZAN_REQUEST = 'Circle/ZAN_REQUEST';
export const ZAN_SUCCESS = 'Circle/ZAN_SUCCESS';
export const ZAN_FAIL = 'Circle/ZAN_FAIL';
export const REPORT_REQUEST = 'Circle/REPORT_REQUEST';
export const REPORT_SUCCESS = 'Circle/REPORT_SUCCESS';
export const REPORT_FAIL = 'Circle/REPORT_FAIL';

export function zan(id,zanNumber) {
    return {
        types:[ZAN_REQUEST,ZAN_SUCCESS,ZAN_FAIL],
        promise: client => client.post('/api/zan',{id:id,zanNumber:zanNumber})
    };
}

export function report(id) {
    return {
        types:[REPORT_REQUEST,REPORT_SUCCESS,REPORT_FAIL],
        promise: client => client.post('/api/report',{id:id})
    };
}