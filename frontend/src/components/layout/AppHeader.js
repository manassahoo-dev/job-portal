import { LogoutOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

const AppHeader = () => {

    const user = JSON.parse(sessionStorage.getItem('user'));
    const handleClick = e => {
        console.log('click ', e, user);
    };
    const logout = () => {
        sessionStorage.removeItem('user');
    }

    return (
        <Header style={{ lineHeight: '65px', background: '#ffffff' }}>
            <Menu onClick={handleClick} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="alipay">
                    <Link to="/admin/users">Users</Link>
                </Menu.Item>

                {user ?
                    <>
                        <Menu.Item>
                            <h4>Welcome {user.mobile}</h4>
                        </Menu.Item>
                        <Menu.Item key="logout" >
                            <Button type='default' onClick={logout}>
                                <Link to="/"><LogoutOutlined /></Link>
                            </Button>
                        </Menu.Item>
                    </>
                    :
                    <Menu.Item key="login">
                        <Button type='primary'>
                            <Link to="/login">Login</Link>
                        </Button>
                    </Menu.Item>
                }
            </Menu>
        </Header>
    )
}

export default AppHeader