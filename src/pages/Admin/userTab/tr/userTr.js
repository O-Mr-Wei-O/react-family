import React from 'react';
import {Button, Modal, message} from 'antd';

const confirm = Modal.confirm;

import {ban} from 'actions/userTr';
import {connect} from 'react-redux';

class UserTr extends React.Component {
    constructor(props) {
        super(props);
        this.banuser = this.banuser.bind(this);
        this.state = {
            baned: ''
        };
    }

    banuser() {
        this.props.ban(this.props.info);
        this.setState({
            baned: 'baned'
        },message.success('已封禁，该账户不可再登录！'));
    }

    render() {
        console.log(this.props);
        return (
            <tr>
                <td>{this.props.info.email}</td>
                <td>{this.props.info.nickname}</td>
                <td>
                    {
                        this.state.baned == 'baned'
                        &&
                        <Button type="primary" disabled>已封禁</Button>
                    }
                    {
                        this.state.baned != 'baned'
                        &&
                        <Button type="primary" onClick={() => this.banuser()}>封禁</Button>
                    }
                </td>
            </tr>
        );

    }
}

export default connect((state) => ({userTrData: state.userTr}), {ban})(UserTr);