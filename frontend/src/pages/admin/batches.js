
import { Button, Card, Col, Row, Tooltip, Typography } from 'antd';
import React, { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import BatchList from '../../components/batch';
import CounsellingCard from '../../components/batch/Counselling';
import CourseCard from '../../components/batch/Course';
import QuizCard from '../../components/batch/Quiz';
import SkillTestCard from '../../components/batch/SkillTest';
import AppContext from "../../contexts/AppContext";

const { Title, Text, Link } = Typography;
function Batches() {

    const [batch, setBatch] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    const object = {
        batch: batch
    }

    const items = [<CourseCard />, <QuizCard quizType="APTITUDE" />, <CounsellingCard />, <QuizCard quizType="EXAM" />, <SkillTestCard />];
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
                        <Row gutter={[12, 12]}>
                            <Col span={24}>
                                <Card>
                                    <Row align="middle">
                                        <Col span={6}>
                                            <Text type="secondary">Batch</Text><br />
                                            <Text strong>{batch.name}</Text>
                                        </Col>
                                        <Col span={6}>
                                            <Text type="secondary">Start Date</Text><br />
                                            <Text strong>{batch.startDate}</Text>
                                        </Col>
                                        <Col span={6}>
                                            <Text type="secondary">End Date</Text><br />
                                            <Text strong>{batch.endDate}</Text>
                                        </Col>
                                        <Col span={6}>
                                            {
                                                isEdit ?
                                                    <>
                                                        <Button type="primary" className="w-50">Save</Button>
                                                        <Button className="w-50" onClick={() => setIsEdit(false)}>Cancel</Button>
                                                    </> :
                                                    <Tooltip title="Edit Batch">
                                                    <Button type="primary" shape="circle" icon={<FiEdit2 />} className="float-end" onClick={() => setIsEdit(true)} />
                                                    </Tooltip>
                                            }

                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            {items.map((item, index) =>
                                <Col xs={24} sm={12} key={index}>
                                    {item}
                                </Col>)}
                        </Row>
                    }
                </Col>
            </Row>
        </AppContext.Provider>
    );
}
export default Batches;
