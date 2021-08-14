import {
    BookOutlined, FileOutlined, HomeOutlined, TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const AppLayout = () => {

    const [collapsed, setCollapsed] = useState(false);

    const menuItems = [
        { name: 'Home', icon: <HomeOutlined />, path: '/admin/dashboard' },
        { name: 'Student', icon: <UserOutlined />, path: '/admin/students' },
        { name: 'Batch', icon: <TeamOutlined />, path: '/admin/batches' },
        { name: 'Course', icon: <BookOutlined />, path: '/admin/courses' },
        { name: 'Job', icon: <HomeOutlined />, path: '/admin/jobs' },
        { name: 'Report', icon: <FileOutlined />, path: 'admin/reports' },
    ]
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} >
            <div className="logo" />
            <Menu defaultSelectedKeys={['1']} mode="inline">
                {menuItems.map((item, index) =>
                    <Menu.Item key={item.name} icon={item.icon}>
                        <Link to={item.path}>{item.name}</Link>
                    </Menu.Item>
                )}
            </Menu>
        </Sider>
    )
}

export default AppLayout