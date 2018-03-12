import React from 'react';
import './Admin.css';

import {BackTop, Button, Tabs} from 'antd';
import {Upload, message, Icon} from 'antd';

const TabPane = Tabs.TabPane;

import DailyTab from 'pages/Admin/dailyTab/dailyTab';
import UserTab from 'pages/Admin/userTab/userTab';
import UserRecover from 'pages/Admin/userRecover/userRecover';


function callback(key) {
    // console.log(key);
}

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const admin = sessionStorage.getItem('admin');
        if (admin == 1) {
            return (
                <div className={'adminContainer'}>
                    <Tabs defaultActiveKey="daily" onChange={callback}>
                        <TabPane tab="日记管理" key="daily"><DailyTab/></TabPane>
                        <TabPane tab="用户管理" key="user"><UserTab/></TabPane>
                        <TabPane tab="被封禁用户" key="userbaned"><UserRecover/></TabPane>
                    </Tabs>
                    <BackTop/>
                </div>
            );
        } else {
            return (
                <div className={'noAdmin'}>
                    你不是管理员！！！
                </div>
            );
        }
    }
}

export default Admin;