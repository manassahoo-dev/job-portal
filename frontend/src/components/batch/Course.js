import { Button, Card, Checkbox, Col, Form, List, PageHeader, Row } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import React, { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppSpin from '../utility/AppSpin';
import AddItem from './Add';

function CourseCard() {
    const { contextData } = useContext(AppContext);
    const [isAdd, setIsAdd] = useState(false);
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${contextData.batch?.id}/courses`, isAdd);

    const param = {
        isAdd: isAdd,
        setIsAdd: setIsAdd,
        path: api.COURSE,
        existingIds: data.map(({ id }) => id.courseId),
        name: "courseIds",
        batchId: contextData.batch?.id
    }

    return (
        <AppSpin loading={loading}>
            <Card>
                <PageHeader
                    className="p-0 mb-1"
                    onBack={isAdd ? () => setIsAdd(false) : ""}
                    title={isAdd ? "Add Course" : "Courses"}
                    extra={!isAdd && <Button type="link" onClick={() => setIsAdd(true)}>Add</Button>}
                />
                {isAdd ?
                    <AddItem param={param} />
                    :

                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item className="px-0">
                                <List.Item.Meta
                                    title={<b>{item.course.name}</b>}
                                    description={<Paragraph className="m-0" type="secondary" ellipsis>
                                        {item.course.description}
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
export default CourseCard;