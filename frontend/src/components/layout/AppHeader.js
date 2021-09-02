import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, message, Space, Switch, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useState } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { FiLogOut } from 'react-icons/fi';
import { Link } from "react-router-dom";

const { Text } = Typography;
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
        message.success('Logout successfully')
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
            <Menu.Divider />
            <Menu.Item key="3">
                <Link to="/" onClick={logout}><LogoutOutlined /> Logout</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <Header>
            <div onClick={handleClick} mode="horizontal" style={{ float: 'right' }}>
                <Space size="large">
                    <Switch checked={isDarkMode} onChange={toggleTheme} />
                    {user ?
                        <a><Avatar style={{ backgroundColor: '#fa7879' }}>{user?.firstName.charAt(0).toUpperCase()}</Avatar>
                            <Text className="mx-2 fw-bold">{user?.firstName}&nbsp;{user?.lastName}</Text></a>
                        // <Dropdown overlay={menu} placement="bottomCenter" placement="bottomRight" arrow style={{width: '150px'}}></Dropdown>
                        :
                        <Button type='primary'>
                            <Link to="/login">Login</Link>
                        </Button>
                    }
                    <Button><Link to="/" className="d-flex align-items-center" onClick={logout}><FiLogOut className="me-2"/>Logout</Link></Button>
                </Space>
            </div>
        </Header>
    )
}

export default AppHeader