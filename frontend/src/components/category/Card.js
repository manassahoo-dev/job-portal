import { Badge, List, Typography } from "antd";
import React from "react";

const { Text } = Typography;

function CategoryCard({ id, item, setCategory }) {

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