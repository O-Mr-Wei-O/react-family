export const DAILY_REQUEST = 'daily/DAILY_REQUEST';
export const DAILY_SUCCESS = 'daily/DAILY_SUCCESS';
export const DAILY_FAIL = 'daily/DAILY_FAIL';

export function writeDaily(content) {
    return {
        //如果不写三个，这里的type或报错，因为在中间件里定义了三个
        types: [DAILY_REQUEST, DAILY_SUCCESS, DAILY_FAIL],
        promise: client => client.post('/api/daily',{data:content})
    };
}

