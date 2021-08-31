import { List } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import React from "react";
import DeleteItem from './Delete';
import MapItem from './Map';

function ListItem({ param, data, name }) {

    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item className="px-0" actions={[
                    <MapItem param={param} data={item} name={name} />,
                    <DeleteItem param={param} data={item} name={name} />
                ]}>
                    <List.Item.Meta
                        title={<b>{item[name].name}</b>}
                        description={<Paragraph className="m-0" type="secondary" ellipsis>
                            {item[name].description}
                        </Paragraph>}
                    />
                </List.Item>
            )}
        />
    );
}
export default ListItem;