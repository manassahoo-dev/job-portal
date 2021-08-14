
import { LogoutOutlined, MailOutlined, UserOutlined, SettingOutlined, BellFilled } from '@ant-design/icons';
import { Badge, Button, Dropdown, Layout, Menu, message, Space, Switch } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useState } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Link } from "react-router-dom";

const { Header } = Layout;

const AppHeader = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const { switcher, currentTheme, status, themes } = useThemeSwitcher();

    const toggleTheme = (isChecked) => {
        setIsDarkMode(isChecked);
        switcher({ theme: isChecked ? themes.dark : themes.light });
    };
    const [tabState, setTabState] = useState('mail');
    const user = JSON.parse(sessionStorage.getItem('user'));
    const handleClick = e => {
        setTabState(e.key);
    };
    const logout = () => {
        sessionStorage.removeItem('user');
    }
    function handleMenuClick(e) {
        console.log('click', e);
    }
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                Setting
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/" onClick={logout}><LogoutOutlined /> Logout</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <Header>
            <div onClick={handleClick} selectedKeys={tabState} mode="horizontal" style={{ float: 'right' }}>
                <Space size="large">
                    <Switch checked={isDarkMode} onChange={toggleTheme} />
                    {user ?
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                        </Dropdown>
                        :
                        <Button type='primary'>
                            <Link to="/login">Login</Link>
                        </Button>
                    }
                </Space>
            </div>
        </Header>
    )
}

export default AppHeader