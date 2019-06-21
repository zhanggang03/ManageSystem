import React, {Component} from 'react';
import {Menu, Breadcrumb, Icon} from 'antd';
import './home.scss';

const {SubMenu} = Menu;

class HomeMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{height: '100%', borderRight: 0}}
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="user" />
                            subnav 1
                        </span>
                    }
                >
                    <Menu.Item key="1">option1</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default HomeMenu;
