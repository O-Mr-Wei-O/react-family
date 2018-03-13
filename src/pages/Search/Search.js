import React, {Component} from 'react';
import './Search.css';
import {Tabs} from 'antd';
import SearchComponent from 'pages/Search/SearchComponent/SearchComponent';

const TabPane = Tabs.TabPane;

function callback(key) {
    // console.log(key);
}

class Search extends Component {
    render() {
        return (
            <div className={'Search'}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="站内模糊搜索" key="1"><SearchComponent/></TabPane>
                    <TabPane tab="站内精准搜索" key="2"><SearchComponent/></TabPane>
                    <TabPane tab="站外搜索" key="3"><SearchComponent/></TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Search;
