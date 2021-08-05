import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Logo from "../assets/logo.png"
function TopNavigationBar() {
    const handleClick = e => {
        console.log('click ', e);
    };
    return (
        <Menu onClick={handleClick} mode="horizontal">
            <Menu.Item>
                <img
                    src={Logo}
                    height='30'
                    className="d-inline-block align-top"
                    filter="invert(1)"
                    alt="React Bootstrap logo"
                />
            </Menu.Item>
            <Menu.Item key="mail" icon={<HomeOutlined />}>
                <a href="/login">
                    Home
                </a>
            </Menu.Item>
            <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                About Us
            </Menu.Item>
            <Menu.Item key="alipay">
                <a href="/sign-up">
                    Sign Up
                </a>
            </Menu.Item>
        </Menu>
    );
}
export default TopNavigationBar;
