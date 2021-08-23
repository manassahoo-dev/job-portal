
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Menu, PageHeader, Row, Typography } from 'antd';
import React, { useEffect, useState } from "react";
import BatchList from '../../components/batch';
import CourseCard from '../../components/batch/Course';
import AppContext from "../../contexts/AppContext";

const { Title, Text, Link } = Typography;
function Batches() {

    const [batch, setBatch] = useState(null);
    const [isAddBatch, setIsAddBatch] = useState(false);

    const menu = (
        <Menu>
            <Menu.Item>Add Course</Menu.Item>
            <Menu.Item>Add Aptitude Test</Menu.Item>
            <Menu.Item>Add Skill Test</Menu.Item>
            <Menu.Item>Add Counselling</Menu.Item>
            <Menu.Item>Add Exam</Menu.Item>
        </Menu>
    );

    const object = {
        isAddEdit: true,
        batch: batch
    }

    const items = [<CourseCard />];
    const [contextData, setContextData] = useState(object);
    useEffect(() => {
        setContextData({ ...contextData, batch })
    }, [batch]);

    return (
        <AppContext.Provider value={{ contextData, setContextData }}>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                    <BatchList setBatch={setBatch} />
                </Col>
                <Col xs={24} sm={12} md={16}>
                    {batch &&
                        <>
                            <PageHeader
                                className="p-0 mb-2"
                                onBack={isAddBatch ? () => setIsAddBatch(false) : ""}
                                title={batch.name}
                                extra={[
                                    <Dropdown overlay={menu} placement="bottomRight" arrow>
                                        <Button onClick={() => setIsAddBatch(true)} icon={< PlusOutlined />}>Add Batch Item</Button>
                                    </Dropdown>
                                ]}
                            />
                            <Row>
                                {items.map((item, index) => <Col xs={24} sm={12}>
                                    {item}
                                </Col>)}
                            </Row>
                        </>
                    }
                </Col>
            </Row>
        </AppContext.Provider>
    );
}
export default Batches;
