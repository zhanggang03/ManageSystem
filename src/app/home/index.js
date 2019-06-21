import React, {Component} from 'react';
import {Layout, Icon} from 'antd';
import './home.scss';
import HomeTop from './home-top';
import HomeMenu from './home-menu';

const {Header, Content, Sider, Footer} = Layout;

export default () => {
    return (
        <Layout>
            <Header className="header">
                <HomeTop></HomeTop>
            </Header>

            <Layout className="middle">
                <Sider className="silder">
                    <HomeMenu />
                </Sider>
                <Content
                    style={{
                        background: '#ffff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>

            <Footer className="footer">
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
};
