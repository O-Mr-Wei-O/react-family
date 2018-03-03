import React, {Component} from 'react';
import './Login.css';
import { Input } from 'antd';
import { Button } from 'antd';

class Login extends React.Component {
    render() {
        return (
            <div className={'Login'}>
                <div className={'Login_container'}>
                    {/*涉及到用户信息要用post*/}
                    <form action="" method="post" target="nm_iframe">
                        <Input placeholder={'用户名'}/>
                        <br/>
                        <Input placeholder={'密码'}/>
                        <br/>
                        <Button type="primary" htmlType={'submit'}>登录</Button>
                    </form>
                    {/*加上iframe使得form只提交不跳转*/}
                    <iframe id="id_iframe" name="nm_iframe" style={{display:'none'}}/>
                </div>
            </div>
        );
    }
}

export default Login;