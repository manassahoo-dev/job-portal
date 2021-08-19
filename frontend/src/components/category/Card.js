import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, List, Menu } from "antd";
import moment from "moment";
import React from "react";

function CategoryCard({ item, setCategory, setIsAddItem }) {

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
            className="custom-card"
        >
            <List.Item.Meta
                onClick={() => { setCategory(item); setIsAddItem(false) }}
                title={item.name}
                description={`Created on ${moment(item.startDate).format("Do MMM YY")}`}
            />
        </List.Item>
    );
}
export default CategoryCard;