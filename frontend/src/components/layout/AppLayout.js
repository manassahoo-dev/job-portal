import { Layout } from 'antd';
import React from 'react';
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
