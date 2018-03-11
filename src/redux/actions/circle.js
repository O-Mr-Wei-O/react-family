export const CIRCLE_REQUEST = 'Circle/CIRCLE_REQUEST';
export const CIRCLE_SUCCESS = 'Circle/CIRCLE_SUCCESS';
export const CIRCLE_FAIL = 'Circle/CIRCLE_FAIL';

export const ZAN_REQUEST = 'Circle/ZAN_REQUEST';
export const ZAN_SUCCESS = 'Circle/ZAN_SUCCESS';
export const ZAN_FAIL = 'Circle/ZAN_FAIL';


export function getCircle() {
    return {
        //如果不写三个，这里的type或报错，因为在中间件里定义了三个
        types: [CIRCLE_REQUEST, CIRCLE_SUCCESS, CIRCLE_FAIL],
        promise: client => client.get('/api/circle')
    };
}