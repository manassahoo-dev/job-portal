import { Button, Card, List, PageHeader } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import { default as React, useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppSpin from '../utility/AppSpin';
import AddItem from './Add';
import DeleteItem from './Delete';

function StudentCard() {
    const name = "student";
    const { contextData } = useContext(AppContext);
    const [isAdd, setIsAdd] = useState(false);
    const [lastRefresh, setLastRefresh] = useState(new Date());
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${contextData.batch?.id}/students`, lastRefresh);

    const param = {
        setLastRefresh: setLastRefresh,
        setIsAdd: setIsAdd,
        path: api.STUDENT,
        existingIds: data.map(({ id }) => id),
        name: "studentIds",
        batchId: contextData.batch?.id
    }

    return (
        <AppSpin loading={loading}>
            <Card className="mb-2">
                <PageHeader
                    className="p-0 mb-1"
                    onBack={isAdd ? () => setIsAdd(false) : ""}
                    title={isAdd ? <span className="ant-page-header-heading-title text-success">Add Student</span> : <span className="ant-page-header-heading-title text-success">Students</span>}
                    extra={!isAdd && <Button type="link" onClick={() => setIsAdd(true)}>Add</Button>}
                />
                {isAdd ? <AddItem param={param} name={name} /> :

                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item className="px-0" actions={[<DeleteItem param={param} data={item} name={name} />]}>
                                <List.Item.Meta
                                    title={<b>{item.firstName}&nbsp;{item.lastName}</b>}
                                    description={<Paragraph className="m-0" type="secondary" ellipsis>
                                        {item.email}
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
export default StudentCard;