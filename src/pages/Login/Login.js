import React, {Component} from 'react';
import './Login.css';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {postLogin} from 'actions/login';

const FormItem = Form.Item;


class LoginForm extends React.Component {
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
        if (this.props.loginData.login == 'loginSuccess') {
            sessionStorage.setItem('nickname', this.props.loginData.nickname);
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
                            placeholder="Password"/>
                    )}
                </FormItem>
                {
                    this.props.loginData.login != 'loginSuccess'
                    &&
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Login
                        </Button>
                        Or <Link to="/Register">register now!</Link>
                    </FormItem>
                }
                {
                    this.props.loginData.login == 'loginSuccess'
                    &&
                    <Button style={{width: '100%'}} type="primary" ghost><Link to={'/'}>登录成功，点击跳转</Link></Button>
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