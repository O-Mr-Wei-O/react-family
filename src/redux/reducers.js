import {combineReducers} from 'redux';

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import home from 'reducers/home';
import register from 'reducers/register';
import login from 'reducers/login';
import daily from 'reducers/daily';
import circle from 'reducers/circle';
import card from 'reducers/card';

export default combineReducers({
    counter,
    userInfo,
    home,
    register,
    login,
    daily,
    circle,
    card
});