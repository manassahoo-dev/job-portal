import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {
    FiBarChart2, FiBookOpen, FiBriefcase, FiCheckSquare, FiEdit3,
    FiFileText, FiHome, FiList, FiSend, FiSettings, FiTerminal, FiUser
} from "react-icons/fi";
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const AppLayout = () => {

    const [collapsed, setCollapsed] = useState(false);

    const menuItems = [
        { name: 'Home', icon: <FiHome />, path: '/admin/dashboard' },
        { name: 'Student', icon: <FiUser />, path: '/admin/students' },
        { name: 'Batch', icon: <FiBarChart2 />, path: '/admin/batches' },
        { name: 'Course', icon: <FiBookOpen />, path: '/admin/courses' },
        { name: 'Skill Test', icon: <FiTerminal />, path: '/admin/skills' },
        { name: 'Counselling', icon: <FiList />, path: '/admin/counselling' },
        { name: 'Aptitude Test', icon: <FiCheckSquare />, path: '/admin/aptitudes' },
        { name: 'Enquiry', icon: <FiSend />, path: '/admin/enquiry' },
        { name: 'Exam', icon: <FiEdit3 />, path: '/admin/exams' },
        { name: 'Job', icon: <FiBriefcase />, path: '/admin/jobs' },
        { name: 'Report', icon: <FiFileText />, path: '/admin/reports' },
        // { name: 'Settings', icon: <FiSettings />, path: '/admin/settings' },
    ]
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} >
            <div className="logo">UWH</div>
            <Menu defaultSelectedKeys={['1']} mode="inline">
                {menuItems.map((item, index) =>
                    <Menu.Item className="mb-1" key={item.name} icon={item.icon}>
                        <Link to={item.path}>{item.name}</Link>
                    </Menu.Item>
                )}
            </Menu>
        </Sider>
    )
}

export default AppLayout