import React, {Component} from 'react';
import './Login.css';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {postLogin} from 'actions/login';

const FormItem = Form.Item;


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.postLogin(values);
            }
        });
    };

    render() {
        // console.log(this.props.loginData.login);
        const {getFieldDecorator} = this.props.form;
        // 当返回状态为loginSuccess是时才存入session
        //
        //这里有个BUG！待解决
        //第一次登陆后每次进入都会设为前一个nickname，因为props就是前一个的
        //暂定解决办法：退出后刷新
        //
        if (this.props.loginData.login == 'loginSuccess') {
            // 设置nickname
            sessionStorage.setItem('nickname', this.props.loginData.nickname);
            // 设置email，每位用户唯一
            sessionStorage.setItem('email', this.props.loginData.email);
            // 设置管理员，1是，0不是
            sessionStorage.setItem('admin', this.props.loginData.admin);
            // this.setState({
            //     status:this.props.loginData.login
            // });
        }
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" id={'components-form-demo-normal-login'}>
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="email"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                            placeholder="Password"></Input>
                    )}
                </FormItem>
                {
                    this.props.loginData.login != 'loginSuccess'
                    &&
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Login
                        </Button>
                        Or <span onClick={() => sessionStorage.setItem('current', 'register')}><Link to="/Register">register now!</Link></span>
                    </FormItem>
                }
                {
                    this.props.loginData.login == 'loginSuccess'
                    &&
                    <Button style={{width: '100%'}} type="primary" ghost onClick={
                        () => sessionStorage.setItem('current', 'home')
                    }><Link to={'/'}>登录成功，点击跳转</Link></Button>
                }

                {
                    this.props.loginData.login == 'loginFail'
                    &&
                    <Button style={{width: '100%'}} type='danger' ghost>登录失败</Button>
                }
            </Form>
        );
    }
}

const Login = Form.create()(LoginForm);
export default connect((state) => ({loginData: state.login}), {postLogin})(Login);