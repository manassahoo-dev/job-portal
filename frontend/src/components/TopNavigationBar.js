import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

function TopNavigationBar() {
    const handleClick = e => {
        console.log('click ', e);
    };
    return (
        <Menu onClick={handleClick} mode="horizontal">
            <Menu.Item key="mail" icon={<MailOutlined />}>
                Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                Navigation Two
            </Menu.Item>
            <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
            </Menu.Item>
        </Menu>
    );
}
export default TopNavigationBar;
