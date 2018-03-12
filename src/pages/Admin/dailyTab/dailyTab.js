import React from 'react';
import Tr from 'pages/Admin/dailyTab/tr/Tr';

import {connect} from 'react-redux';
import {getdailyTab} from 'actions/dailyTab';

class DailyTab extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getdailyTab();
    }

    render() {
        // console.log(this.props);

        let TrArray = [];
        if (this.props.dailyTabData.tr != null) {
            for (let i=0;i<this.props.dailyTabData.tr.length;i++) {
                TrArray.unshift(<Tr info={this.props.dailyTabData.tr[i]} key={i}/>);
            }
        }

        return (
            <table>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>text</th>
                    <th>time</th>
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

export default connect((state) => ({dailyTabData: state.dailyTab}), {getdailyTab})(DailyTab);
