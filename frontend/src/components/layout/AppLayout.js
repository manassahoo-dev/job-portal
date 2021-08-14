
import { Layout, Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import AppSider from './AppSider';

const AppLayout = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {user && <AppSider />}
            <Layout>
                <AppHeader />
                <AppContent />
                <AppFooter />
            </Layout>
        </Layout >
    )
}

export default AppLayout
