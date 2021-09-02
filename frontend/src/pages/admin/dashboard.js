import { Card, Col, Row, Tabs, Timeline } from 'antd';
import Text from 'antd/lib/typography/Text';
import { useEffect, useState } from 'react';
import Courses from '../../components/dashboard/Course';
import OngoingBatches from '../../components/dashboard/OngoingBatches';
import Statistics from '../../components/dashboard/Statistics';
import Students from '../../components/dashboard/Students';
import Tests from '../../components/dashboard/Tests';
import AppContext from '../../contexts/AppContext';
import api from '../../services/api';
import ApiRequest from '../../services/ApiRequest';



const contentStyle = {
    height: '500px',
    overflow: 'auto',
};


function AdminDashBoard(params) {

    const { data, error, loading } = ApiRequest('GET', api.BATCH);
    const [contextData, setContextData] = useState(null);

    useEffect(() => {
        let item = data.filter((item) => item.status === "INPROGRESS");
        setContextData({
            ...contextData,
            batches: item,
            initialLoadBatch: item[0]
        })
    }, [data])

    const timeline = (
        <Card style={contentStyle}>
            <Timeline mode='left'>
                <Timeline.Item color="blue">New Student Join</Timeline.Item>
                <Timeline.Item color="green">Upcoming Batch</Timeline.Item>
                <Timeline.Item color="red">
                    <p>Got Offer Letter</p>
                </Timeline.Item>
                <Timeline.Item>
                    <p>Interview</p>
                </Timeline.Item>
                <Timeline.Item color="gray">
                    <p>Report Card</p>
                </Timeline.Item>
                <Timeline.Item color="gray">
                    <p>Upcoming Exam</p>
                </Timeline.Item>
            </Timeline>
        </Card>
    )

    return (
        <>
            <AppContext.Provider value={{ contextData, setContextData }}>

                <Row gutter={[16, 16]}>
                    <Statistics />
                    <Col xs={24} sm={24} md={16} lg={18} xl={18}>
                        <Card bordered={false} style={contentStyle} title={<Text strong>Ongoing Batches</Text>}>
                            <OngoingBatches />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={6} xl={6}>
                        {timeline}
                    </Col>
                    <Col xs={24} md={12}>
                        <Card bordered={false} title={<Text strong>Students</Text>}>
                            <Students />
                        </Card>
                    </Col>
                    <Col xs={24} md={12}>
                        <Card bordered={false} title={<Text strong>Courses</Text>}>
                            <Courses />
                        </Card>
                    </Col>
                    <Col xs={24} md={12}>
                        <Card bordered={false} title={<Text strong>Aptitude Tests</Text>}>
                            <Tests quizType="APTITUDE" />
                        </Card>
                    </Col>
                    <Col xs={24} md={12}>
                        <Card bordered={false} title={<Text strong>Exams</Text>}>
                            <Tests quizType="EXAM" />
                        </Card>
                    </Col>

                </Row>
            </AppContext.Provider>

        </>
    )
}
export default AdminDashBoard;