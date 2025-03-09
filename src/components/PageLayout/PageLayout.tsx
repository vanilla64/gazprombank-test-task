import React, { FC } from 'react';
import s from './PageLayout.module.scss'
import { App as AppAntd, Layout, Space, theme } from 'antd';
import { Outlet } from 'react-router';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';
import { App } from '../App/App';
const { Header, Content, Footer } = Layout;

export const PageLayout: FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AppAntd>
      <Layout>
        <Header style={{ background: '#96B2FFFF', display: 'flex', alignItems: 'center' }}>
          <HeaderNavigation />
        </Header>

        <Space className={s.space} wrap>
          <App>
            <Content style={{ padding: '0 48px' }}>
              <div
                style={{
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
                className={s.content}
              >
                <Outlet />
              </div>
            </Content>
          </App>
        </Space>

        <Footer style={{ textAlign: 'center' }}>
          Sergey Mashin © {new Date().getFullYear()} Gazprombank test task
        </Footer>
      </Layout>
    </AppAntd>
  )
}
