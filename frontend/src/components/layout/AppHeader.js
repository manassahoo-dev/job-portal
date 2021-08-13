import { LogoutOutlined, MailOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Dropdown, Layout, Menu, message } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import SubMenu from 'antd/lib/menu/SubMenu';
import Icon from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useState } from 'react';

const { Header, Footer, Sider, Content } = Layout;

const AppHeader = () => {

    const [tabState, setTabState] = useState('mail');
    const user = JSON.parse(sessionStorage.getItem('user'));
    const handleClick = e => {
        console.log('click ', e, user);
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
        <Header style={{ background: '#ffffff' }}>
            <Menu onClick={handleClick} selectedKeys={tabState} mode="horizontal" style={{float: 'right'}}>
                {user ?
                    <>
                        <span>
                            <Dropdown overlay={menu} placement="bottomCenter">
                                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                            </Dropdown>
                        </span>
                    </>
                    :
                    <span>
                        <Button type='primary'>
                            <Link to="/login">Login</Link>
                        </Button>
                    </span>
                }
            </Menu>
        </Header>
    )
}

export default AppHeader