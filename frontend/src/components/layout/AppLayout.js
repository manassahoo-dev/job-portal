import { Layout } from 'antd';
import React from 'react';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const AppLayout = () => {
    return (
        <Layout>
            <AppHeader />
            <AppContent />
            <AppFooter />
        </Layout>
    )
}

export default AppLayout
