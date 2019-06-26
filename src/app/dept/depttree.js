import React, {Component} from 'react';
import {Icon, Tree, Button} from 'antd';
import './dept.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllDept, selectDept, addDept, editDept, deleteDept} from './action';

const {TreeNode} = Tree;

class DeptTree extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        props.getAllDept();
    }

    onSelect = (selectedKeys, info) => {
        console.log(selectedKeys);
        console.log(info);
    };

    render() {
        const {
            getAllDept,
            selectDept,
            addDept,
            editDept,
            deleteDept,
            depts,
        } = this.props;
        return (
            <div>
                <div>
                    <Button
                        className="menu-button"
                        type="primary"
                        size="small"
                        onClick={selectedKeys => getAllDept(selectedKeys)}
                    >
                        刷新
                    </Button>
                    <Button type="primary" size="small" className="menu-button">
                        新增
                    </Button>
                    <Button
                        className="menu-button"
                        type="primary"
                        size="small"
                        onClick={selectedKeys => deleteDept(selectedKeys)}
                    >
                        删除
                    </Button>
                </div>
                <Tree
                    showIcon
                    defaultExpandAll
                    defaultSelectedKeys={['1']}
                    switcherIcon={<Icon type="down" />}
                    onSelect={selectedKeys => selectDept(selectedKeys)}
                >
                    {depts.map(dept => {
                        return (
                            <TreeNode
                                icon={({selected}) => (
                                    <Icon
                                        type={selected ? 'frown-o' : 'meh-o'}
                                    />
                                )}
                                title={dept.DeptName}
                                key={dept.Code}
                            ></TreeNode>
                        );
                    })}
                </Tree>
            </div>
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
            getAllDept,
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
