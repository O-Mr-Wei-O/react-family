import React from 'react';
import {Button, Modal,message} from 'antd';

const confirm = Modal.confirm;

import {approve,deleteDaily} from 'actions/Tr';
import {connect} from 'react-redux';

class Tr extends React.Component {
    constructor(props) {
        super(props);
        this.showDeleteConfirm = this.showDeleteConfirm.bind(this);
        this.approved = this.approved.bind(this);
        this.state = {
            approved: null,
            deleted: null
        };
    }

    approved(){
        this.props.approve(this.props.info);
        this.setState({
            approved:'approved'
        },()=>message.success('成功通过，可以在圈子查看'));
    }

    showDeleteConfirm() {
        this.props.deleteDaily(this.props.info.id);
        this.setState({
            deleted:'deleted'
        },()=>message.success('删除成功'));
    }

    render() {
        console.log(this.props);
        return (
            <tr>
                <td>{this.props.info.id}</td>
                <td>{this.props.info.title}</td>
                <td>{this.props.info.text}</td>
                <td>{this.props.info.time}</td>
                <td>
                    {
                        this.state.approved == 'approved'
                        &&
                        <Button type="primary" disabled>已通过</Button>
                    }
                    {
                        this.state.approved != 'approved'
                        &&
                        <Button type="primary" onClick={()=>this.approved()}>通过</Button>
                    }
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    {
                        this.state.deleted == 'deleted'
                        &&
                        <Button type="danger" disabled>已删除</Button>
                    }
                    {
                        this.state.deleted != 'deleted'
                        &&
                        <Button type="danger" onClick={() => this.showDeleteConfirm()}>删除</Button>
                    }
                </td>
            </tr>
        );

    }
}

export default connect((state) => ({TrData: state.Tr}), {approve,deleteDaily})(Tr);
