import React, {Component} from 'react';
import {Icon, Tree} from 'antd';
import './dept.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectDept, addDept, editDept, deleteDept} from './action';

const {TreeNode} = Tree;

class DeptTree extends Component {
    onSelect = (selectedKeys, info) => {
        console.log(selectedKeys);
        console.log(info);
    };

    render() {
        const {selectDept, addDept, editDept, deleteDept} = this.props;

        return (
            <Tree
                showIcon
                defaultExpandAll
                defaultSelectedKeys={['1']}
                switcherIcon={<Icon type="down" />}
                onSelect={selectedKeys => selectDept(selectedKeys)}
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
        );
    }
}

function mapStateToProps(state) {
    return {
        depts: state.depts,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            selectDept,
            addDept,
            editDept,
            deleteDept,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeptTree);
