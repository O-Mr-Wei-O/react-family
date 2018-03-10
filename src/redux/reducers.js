import {combineReducers} from 'redux';

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import home from 'reducers/home';
import register from 'reducers/register';
import login from 'reducers/login';

export default combineReducers({
    counter,
    userInfo,
    home,
    register,
    login
});