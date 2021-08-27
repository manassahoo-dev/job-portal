import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { List, Menu, Typography } from "antd";
import React from "react";

const { Text, Link } = Typography;

function CategoryCard({ id, item, setCategory }) {

    const handleMenuClick = (e) => {
        console.log('click', e.key);
    }

    const actions = (<Menu onClick={handleMenuClick}>
        <Menu.Item key="edit" icon={<EditOutlined />}>
            Edit
        </Menu.Item>
        <Menu.Item danger key="delete" icon={<DeleteOutlined />} >
            Delete
        </Menu.Item>
    </Menu>);

    return (
        <List.Item
            className={item.id === id ? "custom-card active" : "custom-card"}
            onClick={() => { setCategory(item) }}
        >
            <Text type={item.count > 0 ? "success" : "secondary"}><b className="px-2">{item.count}</b></Text>
            <List.Item.Meta
                title={<Text type={item.count > 0 ? "success" : "secondary"}><b>{item.name}</b></Text>}
            />
        </List.Item>
    );
}
export default CategoryCard;