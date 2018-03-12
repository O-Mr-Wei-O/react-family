import React from 'react';
import Tr from 'pages/Admin/userRecover/tr/userRecoverTr';

import {connect} from 'react-redux';
import {getBanedUser} from 'actions/userRecover';

class UserRecover extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getBanedUser();
    }

    render() {
        let TrArray = [];
        if (this.props.userRecoverData.baneduser != null) {
            for (let i=0;i<this.props.userRecoverData.baneduser.length;i++) {
                TrArray.unshift(<Tr info={this.props.userRecoverData.baneduser[i]} key={i}/>);
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

export default connect((state) => ({userRecoverData: state.userRecover}), {getBanedUser})(UserRecover);
