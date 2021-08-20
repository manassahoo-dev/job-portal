import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { List, Menu } from "antd";
import React from "react";

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
            // actions={[<Dropdown overlay={actions} placement="bottomRight">
            //     <Button shape="circle" icon={<MoreOutlined />} />
            // </Dropdown>]}
            className={item.id === id ? "custom-card active" : "custom-card"}
            onClick={() => { setCategory(item) }}
        >
            <List.Item.Meta
                title={item.name}
            // description={`Created on ${moment(item.startDate).format("Do MMM YY")}`}
            />
        </List.Item>
    );
}
export default CategoryCard;