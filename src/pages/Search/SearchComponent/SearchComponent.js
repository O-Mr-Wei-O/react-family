import React, {Component} from 'react';
import {Input} from 'antd/lib/index';

const Search = Input.Search;

class SearchComponent extends Component {
    render() {
        return (
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                enterButton
                style={{width: '200px', marginLeft: '2%'}}
            />
        );
    }
}

export default SearchComponent;
