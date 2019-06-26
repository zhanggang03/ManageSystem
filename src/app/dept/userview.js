import React, {Component} from 'react';
import {Form, Icon, Button} from 'antd';
import {ajax} from '@src/uitls';

class UserView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        ajax.get('user/GetUser/' + this.props.userCode).then(response => {
            this.setState(response.Data);
        });
    }

    render() {
        debugger;
        const {handleCancel} = this.props;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        return (
            <Form {...formItemLayout}>
                <Form.Item label="用户名">
                    <span className="ant-form-text">{this.state.UserName}</span>
                </Form.Item>
                <Form.Item label="职位">
                    <span className="ant-form-text">{this.state.Title}</span>
                </Form.Item>
                <Form.Item label="电话">
                    <span className="ant-form-text">{this.state.Tel}</span>
                </Form.Item>
                <Form.Item label="手机">
                    <span className="ant-form-text">{this.state.Phone}</span>
                </Form.Item>
                <Form.Item label="科室">
                    <span className="ant-form-text">{this.state.DeptCode}</span>
                </Form.Item>
                <Form.Item label="角色">
                    <span className="ant-form-text">{this.state.DeptCode}</span>
                </Form.Item>
                <Form.Item label="登录代码">
                    <span className="ant-form-text">
                        {this.state.LoginCode}
                    </span>
                </Form.Item>
                <Form.Item label="密码">
                    <span className="ant-form-text">{this.state.LoginPwd}</span>
                </Form.Item>
                <Form.Item label="顺序">
                    <span className="ant-form-text">{this.state.UIndex}</span>
                </Form.Item>

                <Form.Item wrapperCol={{span: 12, offset: 6}}>
                    <Button type="primary" onClick={handleCancel}>
                        确定
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default UserView;
