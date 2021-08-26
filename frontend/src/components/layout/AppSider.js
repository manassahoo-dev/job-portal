import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { AiFillHome } from "react-icons/ai";
import { BiBookReader } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { GiBookPile, GiSuitcase, GiTeacher } from 'react-icons/gi';
import { ImPen } from "react-icons/im";
import { IoIosBookmarks } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { RiHandHeartFill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const AppLayout = () => {

    const [collapsed, setCollapsed] = useState(false);

    const menuItems = [
        { name: 'Home', icon: <AiFillHome />, path: '/admin/dashboard' },
        { name: 'Student', icon: <BsPersonFill />, path: '/admin/students' },
        { name: 'Batch', icon: <GiTeacher />, path: '/admin/batches' },
        { name: 'Course', icon: <GiBookPile />, path: '/admin/courses' },
        { name: 'Skill Test', icon: <BiBookReader />, path: '/admin/skills' },
        { name: 'Counselling', icon: <TiGroup />, path: '/admin/counselling' },
        { name: 'Aptitude Test', icon: <IoIosBookmarks />, path: '/admin/aptitudes' },
        { name: 'Enquiry', icon: <RiHandHeartFill />, path: '/admin/enquiry' },
        { name: 'Exam', icon: <ImPen />, path: '/admin/exams' },
        { name: 'Job', icon: <GiSuitcase />, path: '/admin/jobs' },
        { name: 'Report', icon: <FaGraduationCap />, path: '/admin/reports' },
        { name: 'Settings', icon: <IoSettingsSharp />, path: '/admin/settings' },
    ]
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} >
            <div className="logo" />
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