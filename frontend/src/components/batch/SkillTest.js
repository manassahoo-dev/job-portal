import { Button, Card, Checkbox, Col, Form, List, PageHeader, Row } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import React, { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppSpin from '../utility/AppSpin';
import AddItem from './Add';

function SkillTestCard() {
    const { contextData } = useContext(AppContext);
    const [isAdd, setIsAdd] = useState(false);
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${contextData.batch?.id}/skills`, contextData);

    return (
        <AppSpin loading={loading}>
            <Card>
                <PageHeader
                    className="p-0 mb-1"
                    onBack={isAdd ? () => setIsAdd(false) : ""}
                    title="Skill Test"
                    extra={!isAdd && <Button type="link" onClick={() => setIsAdd(true)}>Add</Button>}
                />
                {isAdd ?
                    <AddItem isAdd={isAdd} path={api.SKILLSET}  ids={data.map(({ id }) => id.courseId)}/>
                    :

                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item className="px-0">
                                <List.Item.Meta
                                    title={<b>{item.skillSet.name}</b>}
                                    description={<Paragraph type="secondary" ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                                        {item.skillSet.description}
                                    </Paragraph>}
                                />
                            </List.Item>
                        )}
                    />
                }
            </Card>
        </AppSpin>
    );
}
export default SkillTestCard;