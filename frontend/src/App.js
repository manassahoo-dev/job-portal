<<<<<<< HEAD
import { Layout } from 'antd';
=======
import Layout, { Content, Footer } from "antd/lib/layout/layout";
>>>>>>> 396e8c8c1cdd52cca0c18b544c32ea8bc137bb52
import React from "react";
import AppRouter from './AppRouter';
const { Header, Footer, Sider, Content } = Layout;

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
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}
export default App;
