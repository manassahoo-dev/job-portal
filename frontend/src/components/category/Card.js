import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Badge, List, Menu, Typography } from "antd";
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
            <List.Item.Meta
                title={<Text><b>{item.name}</b></Text>}
            />
            <Badge style={{ backgroundColor: '#52c41a', margin: '0 10px' }} count={item.count > 0 ? item.count : ''} />
        </List.Item>
    );
}
export default CategoryCard;