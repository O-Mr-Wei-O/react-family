import React from 'react';

import {Button} from 'antd';
import {Upload, message, Icon} from 'antd';

import {zan,report} from 'actions/card';
import {connect} from 'react-redux';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.zan = this.zan.bind(this);
        this.state = {
            // 点赞
            zanNumber: this.props.info.zanNumber,
            // 举报
            report: this.props.info.report == 1 ? 'report' : 'unreport'
        };
    }

    // 点赞
    zan(id, zanNumber) {
        //通过id修改数据库，点赞+1
        this.props.zan(id, zanNumber + 1);
        //不会重复叠加原因是因为这个zanNumber是通过上一级的props传进来，不是从redux获取，所以这个zanNumber在这个card中是个定值
        //举个例子，进来时5，就算一直点，他最终也只有6，无论点多少次，只要页面不刷新
        this.setState({
            zanNumber: zanNumber + 1
        });
    }

    // 举报
    report(id) {
        this.props.report(id);
        this.setState({
            report: 'report'
        });
    }

    render() {
        // console.log(this.props);
        return (
            <div className={'Card'}>
                <span className={'CardEmail'}><Icon type="paper-clip"/> {this.props.info.email}</span>
                <span style={{marginLeft: '30px'}}><Icon type="clock-circle-o"/>{this.props.info.time}</span>
                <br/>
                <span className={'CardTitle'}>{this.props.info.title}</span>
                <br/>
                <span
                    className={'CardText'}>{this.props.info.text}</span>
                <div style={{marginTop: '20px'}}>
                    {/*这里应该条件渲染，根据已点赞和未点赞展示不同的按钮*/}
                    {/*根据id给数据库的日记添加赞的数量*/}

                    <Button type="primary" onClick={() => this.zan(this.props.info.id, this.props.info.zanNumber)}><Icon
                        type="like"/>已收获赞 {this.state.zanNumber} 个</Button>
                    {/*举报*/}
                    {
                        this.state.report == 'report'
                        &&
                        <Button type="ghost" disabled style={{marginLeft: '30px'}}><Icon
                            type="cross-circle-o"/>已举报</Button>
                    }
                    {
                        this.state.report != 'report'
                        &&
                        <Button type="ghost" style={{marginLeft: '30px'}} onClick={() => this.report(this.props.info.id)}><Icon
                            type="cross-circle-o"/>举报</Button>
                    }
                </div>
            </div>
        );
    }
}

export default connect((state) => ({cardData: state.card}), {zan,report})(Card);