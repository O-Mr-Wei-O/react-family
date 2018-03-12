import React from 'react';
import './daily.css';

import {Button} from 'antd';
import {Upload, message, Icon} from 'antd';

import {connect} from 'react-redux';
import {writeDaily} from 'actions/daily';


// 上传文件---待写
const props = {
    name: 'file',
    action: '/api/upload',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
            console.log(info);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class Daily extends React.Component {
    constructor(props) {
        super(props);
        this.publish = this.publish.bind(this);
        this.state = {
            status: null
        };
    }

    //发布按钮
    publish(email) {
        const title = this.refs.title.value;
        const text = this.refs.text.value;
        this.props.writeDaily({
            title: title,
            text: text,
            email: email
        });
        this.setState({
            status: 'writesuccess'
        });
    }

    render() {
        const email = sessionStorage.getItem('email');
        if (email) {
            return (
                <div className={'writeDaily'}>
                    <p>写日记</p>
                    <textarea rows={1} placeholder={'请输入标题'} style={{height: '44px'}} className={'Input'}
                        ref={'title'}/>
                    <hr/>
                    <textarea rows={5} maxLength={300} placeholder={'请输入正文'} className={'textInput'} ref={'text'}/>
                    {/*上传附件*/}
                    {/*<Upload {...props}>*/}
                    {/*<Button>*/}
                    {/*<Icon type="upload"/> Click to Upload*/}
                    {/*</Button>*/}
                    {/*</Upload>*/}
                    {
                        this.state.status == 'writesuccess'
                        &&
                        <Button style={{width: '100%'}} type='ghost' disabled>发表成功，请点击圈子导航查看</Button>
                    }
                    {
                        this.state.status != 'writesuccess'
                        &&
                        <Button style={{width: '100%'}} onClick={() => this.publish(email)} ref={'write'}>发表</Button>
                    }
                </div>
            );
        } else {
            return (
                <div className={'noLogin'}>
                    请先登录！
                </div>
            );
        }

    }
}

export default connect((state) => ({dailyData: state.daily}), {writeDaily})(Daily);