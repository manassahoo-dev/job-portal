import { Card, Col, Row, Table, Tabs, Timeline } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Text from 'antd/lib/typography/Text';
import { useEffect, useState } from 'react';
import Aptitude from '../../components/dashboard/Aptitude';
import Exam from '../../components/dashboard/Exam';
import OngoingBatches from '../../components/dashboard/OngoingBatches';
import Statistics from '../../components/dashboard/Statistics';
import AppContext from '../../contexts/AppContext';
import api from '../../services/api';
import ApiRequest from '../../services/ApiRequest';

const { TabPane } = Tabs;


const contentStyle = {
    height: '500px',
    overflow: 'auto',
};


const studentList = [
    { name: 'Rahul Reddy', batch: 'B163', time: '9:30 AM' },
    { name: 'Amasha Das', batch: 'B163', time: '9:45 AM' },
    { name: 'Chandra LAKSHMIPURAM', batch: 'B163', time: '10:10 AM' },
    { name: 'Kiran Kumar Kallepalli', batch: 'B163', time: '10:30 AM' },
    { name: 'Kiran Kumar Kallepalli', batch: 'B164', time: '10:45 AM' },
    { name: 'Dinesh Ram Manikanta', batch: 'B164', time: '3:20 PM' },
    { name: 'Sai Mani Krishna Sandee', batch: 'B164', time: '3:40 PM' },
    { name: 'Siva LOMADA', batch: 'B164', time: '4:00 PM' },
]

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Batch',
        dataIndex: 'batch',
        key: 'batch',
    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
    },
];

const cardTitles = ['Skill Test', 'Counselling', 'Volunteering Sessions Attended', 'Aptitude Test', 'Exams']

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

    console.log('data', data)
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
                        <OngoingBatches />
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={6} xl={6}>
                        {timeline}
                    </Col>
                    <Col xs={24} md={8}>
                        <Aptitude />
                    </Col>
                    <Col xs={24} md={8}>
                        <Exam />
                    </Col>
                    {/* <Col xs={24} md={8}>
                        <Exam />
                    </Col> */}
                </Row>
            </AppContext.Provider>

        </>
    )
}
export default AdminDashBoard;