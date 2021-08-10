import { Layout } from 'antd';
import { Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import AppRouter from './AppRouter';

function App(props) {
  return (
    <div>
      <div className="layout">
        <div className="site-layout-background"
          style={{
            backgroundImage: "inherit"
          }}>
          <AppRouter />
        </div>
      </div>
    </div>
  );
}
export default App;
