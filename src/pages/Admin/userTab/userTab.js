import React from 'react';
import Tr from 'pages/Admin/userTab/tr/userTr';

import {connect} from 'react-redux';
import {getuserTab} from 'actions/userTab';

class UserTab extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getuserTab();
    }

    render() {
        let TrArray = [];
        if (this.props.userTabData.tr != null) {
            for (let i=0;i<this.props.userTabData.tr.length;i++) {
                TrArray.unshift(<Tr info={this.props.userTabData.tr[i]} key={i}/>);
            }
        }
        return (
            // 不可以操作管理员
            <table className={'userTabTable'}>
                <tr>
                    <th>email</th>
                    <th>nickname</th>
                    <th>operation</th>
                </tr>
                {
                    TrArray.map(function (item) {
                        return item;
                    })
                }
            </table>
        );

    }
}

export default connect((state) => ({userTabData: state.userTab}), {getuserTab})(UserTab);
