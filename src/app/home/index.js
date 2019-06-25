import React from 'react';
import {Layout} from 'antd';
import './home.scss';
import HomeTop from './home-top';
import HomeMenu from './home-menu';
import HomeContent from './home-content';

const {Header, Content, Sider, Footer} = Layout;

export default props => {
    return (
        <Layout>
            <Header className="header" style={{height: 100, padding: 0}}>
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
                    <HomeContent />
                </Content>
            </Layout>

            <Footer className="footer">
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
};
