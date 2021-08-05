import { Layout } from 'antd';
import { Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import AppRouter from './AppRouter';

function App(props) {
  return (
    <div>
      <Layout className="layout">
        <Content className="site-layout-background"
          style={{
            backgroundImage: "inherit"
          }}>
          <AppRouter />
        </Content>
      </Layout>
    </div>
  );
}
export default App;
