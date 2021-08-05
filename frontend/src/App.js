import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import AppRouter from './AppRouter';

function App() {
  return (
    <div>
      <Layout className="layout">
        <Content className="site-layout-background"
          style={{
            backgroundImage: "inherit"
          }}>
          <AppRouter />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}
export default App;
