import React, {Component} from 'react';
import {Layout} from 'antd';
import './dept.scss';
import DeptTree from './depttree';
import UserTable from './usertable';

const {Content, Sider} = Layout;

class DeptInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Layout className="layout">
                <Sider className="silder">
                    <DeptTree />
                </Sider>
                <Content
                    style={{
                        background: '#ffff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <UserTable />
                </Content>
            </Layout>
        );
    }
}

export default DeptInfo;
