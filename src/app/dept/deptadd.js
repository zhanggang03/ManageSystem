import React, {Component} from 'react';
import {Form, Icon, Input, Select, Button, InputNumber} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addDept} from './action';

const {Option} = Select;

class DeptAdd extends Component {
    parentName = '';

    parentDeptSelect = (value, option) => {
        this.parentName = option.props.children;
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let fields = this.props.form.getFieldsValue();
                fields = {...fields, parentName: this.parentName};
                this.props.addDept(fields, this.props.handleSubmit);
            }
        });
    };

    render() {
        const {depts} = this.props;
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="部门名称">
                    {getFieldDecorator('deptName', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input department name',
                            },
                        ],
                    })(<Input placeholder="Please input department name" />)}
                </Form.Item>

                <Form.Item label="顺序">
                    {getFieldDecorator('uIndex', {initialValue: 0})(
                        <InputNumber min={0} max={100} />
                    )}
                </Form.Item>

                <Form.Item label="上级科室" hasFeedback>
                    {getFieldDecorator('parentCode', {
                        rules: [
                            {
                                required: false,
                            },
                        ],
                    })(
                        <Select
                            placeholder="Please select a parent department"
                            onSelect={this.parentDeptSelect}
                        >
                            <Option value={null}>空</Option>
                            {depts.map(dept => {
                                return (
                                    <Option value={dept.Code} key={dept.Code}>
                                        {dept.DeptName}
                                    </Option>
                                );
                            })}
                        </Select>
                    )}
                </Form.Item>

                <Form.Item wrapperCol={{span: 12, offset: 6}}>
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                    <Button style={{marginLeft: 8}}>取消</Button>
                </Form.Item>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    return {
        depts: state.depts,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addDept}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(DeptAdd));
