import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

const AppHeader = () => {
    const handleClick = e => {
        // console.log('click ', e);
    };

    return (
        <Header style={{ lineHeight: '65px', background: '#ffffff' }}>
            <Menu onClick={handleClick} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="alipay">
                    <Link to="/admin/users">Users</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default AppHeader