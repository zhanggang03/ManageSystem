import React, {Component} from 'react';
import {Layout, Icon, Tree} from 'antd';
import './dept.scss';
import UserTable from './usertable';

const {Content, Sider} = Layout;
const {TreeNode} = Tree;

class DeptInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Layout className="layout">
                <Sider className="silder">
                    <Tree
                        showIcon
                        defaultExpandAll
                        defaultSelectedKeys={['1']}
                        switcherIcon={<Icon type="down" />}
                    >
                        <TreeNode
                            icon={({selected}) => (
                                <Icon type={selected ? 'frown-o' : 'meh-o'} />
                            )}
                            title="业务科"
                            key="1"
                        ></TreeNode>
                        <TreeNode
                            icon={({selected}) => (
                                <Icon type={selected ? 'frown-o' : 'meh-o'} />
                            )}
                            title="财务科"
                            key="2"
                        ></TreeNode>
                    </Tree>
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
