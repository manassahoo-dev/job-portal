
import { Col, Row, Typography } from 'antd';
import React, { useEffect, useState } from "react";
import BatchList from '../../components/batch';
import CounsellingCard from '../../components/batch/Counselling';
import CourseCard from '../../components/batch/Course';
import QuizCard from '../../components/batch/Quiz';
import SkillTestCard from '../../components/batch/SkillTest';
import AppContext from "../../contexts/AppContext";

const { Title, Text, Link } = Typography;
function Batches() {

    const [batch, setBatch] = useState(null);

    const object = {
        isAddEdit: true,
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
                        <>
                            <Row gutter={[12, 12]}>
                                {items.map((item, index) =>
                                    <Col xs={24} sm={12} md={8}>
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
