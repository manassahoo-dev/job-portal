
import { Col, Row, Typography } from 'antd';
import React, { useEffect, useState } from "react";
import BatchList from '../../components/batch';
import BatchDetails from '../../components/batch/BatchDetails';
import CounsellingCard from '../../components/batch/Counselling';
import CourseCard from '../../components/batch/Course';
import QuizCard from '../../components/batch/Quiz';
import SkillTestCard from '../../components/batch/SkillTest';
import AppContext from "../../contexts/AppContext";

const { Title, Text, Link } = Typography;
function Batches() {

    const [batch, setBatch] = useState(null);
    const [lastRefresh, setLastRefresh] = useState(new Date());
    const object = {
        batch: batch,
        lastRefresh: lastRefresh,
        setLastRefresh: setLastRefresh
    }

    const items = [<CourseCard />, <QuizCard quizType="APTITUDE" />, <CounsellingCard />, <QuizCard quizType="EXAM" />, <SkillTestCard />];
    const [contextData, setContextData] = useState(object);
    useEffect(() => {
        setContextData({ ...contextData, batch })
    }, [batch, lastRefresh]);

    return (
        <AppContext.Provider value={{ contextData, setContextData }}>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                    <BatchList setBatch={setBatch}/>
                </Col>
                <Col xs={24} sm={12} md={16}>
                    {batch && <BatchDetails batch={batch} items={items}/>}
                </Col>
            </Row>
        </AppContext.Provider>
    );
}
export default Batches;
