import React, {Component} from 'react';
import './Register.css';
import { Input } from 'antd';
import { Button } from 'antd';

class Register extends React.Component {
    render() {
        return (
            <div className={'Register'}>
                <div className={'Register_container'}>
                    {/*涉及到用户信息要用post*/}
                    <form action="" method="post" target="nm_iframe2">
                        <Input placeholder={'用户名'}/>
                        <br/>
                        <Input placeholder={'密码'}/>
                        <br/>
                        <Input placeholder={'再次输入密码'}/>
                        <br/>
                        <Button type="primary" htmlType={'submit'}>注册</Button>
                    </form>
                    {/*加上iframe使得form只提交不跳转*/}
                    <iframe id="id_iframe2" name="nm_iframe2" style={{display:'none'}}/>
                </div>
            </div>
        );
    }
}

export default Register;