import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import {Menu, Icon} from 'antd';

import {Input} from 'antd';

const Search = Input.Search;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Nav extends Component {
    state = {
        current: 'home',
    };
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <span className={'social'}>S o c i a l  W e b</span>
                <Menu.Item key="home">
                    <Link to={'/'}><Icon type="home"/>首页</Link>
                </Menu.Item>
                <Menu.Item key="bars">
                    <Link to={'/find'}><Icon type="bars"/>发现</Link>
                </Menu.Item>
                <Menu.Item key="form">
                    <Link to={'/topic'}><Icon type="form"/>话题</Link>
                </Menu.Item>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    enterButton
                    style={{width: '200px', marginLeft: '2%'}}
                />
                <Menu.Item key="login" style={{float: 'right', marginRight: '7%'}}>
                    <Link to={'/Login'}><Icon type="login" />登录</Link>
                </Menu.Item>
                <Menu.Item key="register" style={{float: 'right'}}>
                    <Link to={'/Register'}><Icon type="user-add" />注册</Link>
                </Menu.Item>
            </Menu>
        );
    }
}