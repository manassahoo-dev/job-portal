import { Layout } from 'antd';
import React from "react";
import AppRouter from './AppRouter';
const { Header, Footer, Sider, Content } = Layout;

function App(props) {
  return (
    <div>
      <AppRouter />
    </div>
  );
}
export default App;
