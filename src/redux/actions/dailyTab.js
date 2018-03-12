export const DAILY_TAB_REQUEST = 'dailyTab/DAILY_TAB_REQUEST';
export const DAILY_TAB_SUCCESS = 'dailyTab/DAILY_TAB_SUCCESS';
export const DAILY_TAB_FAIL = 'dailyTab/DAILY_TAB_FAIL';

export function getdailyTab() {
    return {
        types:[DAILY_TAB_REQUEST,DAILY_TAB_SUCCESS,DAILY_TAB_FAIL],
        promise: client => client.get('/api/getdailyTab')
    };
}