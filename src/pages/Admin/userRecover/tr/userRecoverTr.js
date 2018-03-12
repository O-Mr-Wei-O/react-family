import React from 'react';
import {Button, Modal, message} from 'antd';

const confirm = Modal.confirm;

import {recoverUser} from 'actions/userRecover';
import {connect} from 'react-redux';

class UserRecoverTr extends React.Component {
    constructor(props) {
        super(props);
        this.recover = this.recover.bind(this);
        this.state = {
            recover: ''
        };
    }

    recover() {
        this.props.recoverUser(this.props.info);
        this.setState({
            recover: 'recover'
        },message.success('已解封！'));
    }

    render() {
        console.log(this.props);
        return (
            <tr>
                <td>{this.props.info.email}</td>
                <td>{this.props.info.nickname}</td>
                <td>
                    {
                        this.state.recover == 'recover'
                        &&
                        <Button type="primary" disabled>已解封</Button>
                    }
                    {
                        this.state.recover != 'recover'
                        &&
                        <Button type="primary" onClick={() => this.recover()}>解封</Button>
                    }
                </td>
            </tr>
        );

    }
}

export default connect((state) => ({userRecoverData: state.userRecover}), {recoverUser})(UserRecoverTr);