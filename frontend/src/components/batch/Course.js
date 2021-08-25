import { Button, Card, List, PageHeader, Dropdown } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import React, { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppSpin from '../utility/AppSpin';

function CourseCard() {
    const { contextData } = useContext(AppContext);
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${contextData.batch?.id}/courses`, contextData);
    const [isAdd, setIsAdd] = useState(false);

    return (
        <AppSpin loading={loading}>
            <Card>
                <PageHeader
                    className="p-0 mb-1"
                    onBack={isAdd ? () => setIsAdd(false) : ""}
                    title="Courses"
                    extra={!isAdd && <Button type="link" onClick={() => setIsAdd(true)}>Add Course</Button>}
                />
                {isAdd ?
                    <>Add Form</>
                    :

                    <List
                        size="small"
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item className="px-0">
                                <List.Item.Meta
                                    title={item.course.name}
                                    description={<Paragraph type="secondary" ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
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