import React, {Component} from 'react';
import {Table, Button} from 'antd';
import {Resizable} from 'react-resizable';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ShowModal from '@src/app/uitls/showmodal';
import UserView from '@src/app/dept/userview';

const ResizeableTitle = props => {
    const {onResize, width, ...restProps} = props;

    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable width={width} height={0} onResize={onResize}>
            <th {...restProps} />
        </Resizable>
    );
};

class UserTable extends Component {
    constructor(props) {
        super(props);
        this.state = this.columnHeader;
    }

    showUserClick = userCode => {
        let view = this.refs.userViewModal;
        view.openModal('用户信息', true, {userCode: userCode});
    };

    columnHeader = {
        columns: [
            {
                title: '用户名称',
                dataIndex: 'UserName',
                width: 150,
            },
            {
                title: '职称',
                dataIndex: 'Title',
                width: 200,
            },
            {
                title: '登录名',
                dataIndex: 'LoginCode',
                width: 150,
            },
            {
                title: '备注',
                dataIndex: 'Memo',
                width: 240,
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, rowRecord) => (
                    <div>
                        <Button
                            className="menu-button"
                            type="primary"
                            size="small"
                            onClick={() => {
                                this.showUserClick(rowRecord.Code);
                            }}
                        >
                            详情
                        </Button>
                        <Button
                            className="menu-button"
                            type="primary"
                            size="small"
                        >
                            编辑
                        </Button>
                        <Button
                            className="menu-button"
                            type="primary"
                            size="small"
                        >
                            删除
                        </Button>
                    </div>
                ),
            },
        ],
    };

    components = {
        header: {
            cell: ResizeableTitle,
        },
    };

    handleResize = index => (e, {size}) => {
        this.setState(({columns}) => {
            const nextColumns = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
            };
            return {columns: nextColumns};
        });
    };

    render() {
        const {users} = this.props;
        const columns = this.state.columns.map((col, index) => ({
            ...col,
            onHeaderCell: column => ({
                width: column.width,
                onResize: this.handleResize(index),
            }),
        }));
        return (
            <div>
                <Table
                    rowKey={record => record.Code}
                    bordered
                    components={this.components}
                    columns={columns}
                    dataSource={users}
                />
                <ShowModal ref="userViewModal">
                    <UserView />
                </ShowModal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserTable);
