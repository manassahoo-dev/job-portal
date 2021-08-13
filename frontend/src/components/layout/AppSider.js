import {
    HomeOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';

const { Sider } = Layout;

const AppLayout = () => {

    const [collapsed, setCollapsed] = useState(false);

    const menuItems = [
        { name: 'Home', icon: <HomeOutlined /> },
        { name: 'Student', icon: <HomeOutlined /> },
        { name: 'Batch', icon: <HomeOutlined /> },
        { name: 'Course', icon: <HomeOutlined /> },
        { name: 'Job', icon: <HomeOutlined /> },
        { name: 'Report', icon: <HomeOutlined /> },
    ]
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {menuItems.map((item, index) =>
                    <Menu.Item key={item.name} icon={item.icon}>
                        {item.name}
                    </Menu.Item>
                )}
            </Menu>
        </Sider>
    )
}

export default AppLayout

