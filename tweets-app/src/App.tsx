import React, {useEffect} from 'react';
import './App.css';
import TweetsShell from "./Tweets/containers/TweetsShell";
import {Layout, Menu} from "antd";
import { UserOutlined } from '@ant-design/icons';
import {connect, MapDispatchToProps} from "react-redux";
import {loadTweets} from "./store/actions/tweets.actions";

const {Content, Sider } = Layout;

interface ITwitterAccounts {
    name: string;
    screenName: string;
}

function App(props: any) {

    useEffect(() => {
        props.loadTweets('realDonaldTrump');
    }, []);

  const twitterAccounts: ITwitterAccounts[] = [{
      name: 'Donald Trump',
      screenName: 'realDonaldTrump'
  }, {
      name: 'Hillary Clinton',
      screenName: 'HillaryClinton'
  }];

  const screenNameSelected = (menuProps: any) => {
      props.loadTweets(menuProps.key);
  };

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
              <div className="logo">
                  <img src="./twitter.png" width="50"/>
              </div>

              <Menu theme="dark" mode="inline"
                    selectedKeys={[props.screenName]}
                    onSelect={screenNameSelected}>

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

          </Layout>

      </Layout>
  );
}


function mapStateToProps(state: any) {
    return {
        screenName: state.tweets.selectedTwitterAccount,
    }
}

function mapDispatchToProps(dispatch: MapDispatchToProps<any, any>) {
    return {
        loadTweets: (screenName: string) => dispatch(loadTweets(screenName))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
