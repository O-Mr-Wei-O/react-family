import React from 'react';
import Card from 'pages/Circle/Card/Card';
import './Circle.css';

import {Button,BackTop} from 'antd';
import {Upload, message, Icon} from 'antd';

import {connect} from 'react-redux';
import {getCircle} from 'actions/circle';

class Circle extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getCircle();
    }

    render() {
        const email = sessionStorage.getItem('email');
        if (email) {
            // console.log(this.props.circleData.cardInfo.length);
            let CardArray = [];
            if (this.props.circleData.cardInfo != null) {
                for (let i = 0; i < this.props.circleData.cardInfo.length; i++) {
                    CardArray.unshift(<Card info={this.props.circleData.cardInfo[i]} key={i}/>);
                }
            }
            return (
                <div className={'Circle'}>
                    {
                        CardArray.map(function (item) {
                            return item;
                        })
                    }
                    <BackTop/>
                </div>
            );
        }else{
            return (
                <div className={'noLogin'}>
                    请先登录！
                </div>
            );
        }

    }
}

export default connect((state) => ({circleData: state.circle}), {getCircle})(Circle);