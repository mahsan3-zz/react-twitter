import React from 'react';
import './App.css';
import TweetsShell from "./Tweets/containers/TweetsShell";
import {Layout, Menu} from "antd";
import { UserOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

interface ITwitterAccounts {
    name: string;
    screenName: string;
}

function App() {

  const twitterAccounts: ITwitterAccounts[] = [{
      name: 'Donald Trump',
      screenName: 'realDonaldTrump'
  }, {
      name: 'Hillary Clinton',
      screenName: 'HillaryClinton'
  }];

  return (
      <Layout>
          <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={broken => {
                  console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                  console.log(collapsed, type);
              }}
          >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['realDonaldTrump']}>
                  {twitterAccounts.map((acc: ITwitterAccounts, i: number) => (
                      <Menu.Item key={acc.screenName} icon={<UserOutlined />}>
                          {acc.name}
                      </Menu.Item>
                  ))}
              </Menu>
          </Sider>
          <Layout>
              <Content style={{ margin: '24px 16px 0' }}>
                  <TweetsShell></TweetsShell>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Ant UED</Footer>
          </Layout>
      </Layout>
  );
}

export default App;
