import { ClockCircleOutlined } from '@ant-design/icons';
import { Card, Col, Row, Space, Statistic, Table, Tabs, Timeline } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import { useContext } from 'react';
import { FiBookOpen, FiBriefcase, FiCheckSquare, FiUser } from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';

const { TabPane } = Tabs;

const statItems = [
    { name: 'Profile', icon: <FiUser />, category1: { name: 'Course', count: 2 }, category2: { name: 'New Jobs Available', count: 213 } },
    { name: 'Course', icon: <FiBookOpen />, category1: { name: 'Completed', count: 3 }, category2: { name: 'Inprogress', count: 10 } },
    { name: 'Aptitude Test', icon: <FiCheckSquare />, category1: { name: 'Attempted', count: 5 }, category2: { name: 'Success', count: 10 } },
    { name: 'Job', icon: <FiBriefcase />, category1: { name: 'Interview', count: 15 }, category2: { name: 'Placements', count: 10 } },
]

const contentStyle = {
    height: '300px',
    overflow: 'auto',
};
const avatar = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '2rem',
    color: '#bfbfbf'
}

const studentList = [
    { dateTime: '9:30 AM, 11 July, 21 Attended', score: '73%', time: '9:30 AM' },
    { dateTime: '9:30 AM, 11 July, 21 Attended', score: '93%', time: '4:00 PM' },
]

const columns = [
    {
        title: 'Date and Time',
        dataIndex: 'dateTime',
        key: 'dateTime',
    },
    {
        title: 'Score',
        dataIndex: 'score',
        key: 'score',
    },

];

const batches = [
    { name: 'Batch 162', time: '10:30 AM' },
];

const coursesColumns = [
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Refrigerator',
        dataIndex: 'data',
    },
    {
        title: 'Television',
        dataIndex: 'data',
    },
    {
        title: 'RO Service',
        dataIndex: 'data',
    },
    {
        title: 'Spoken English',
        dataIndex: 'data',
    },
];

const courses = [
    { date: '10 Aug, 21', data: '-' },
    { date: '11 Aug, 21', data: '-' },
    { date: '12 Aug, 21', data: '-' },
    { date: '13 Aug, 21', data: '-' },
    { date: '14 Aug, 21', data: '-' },
]

const cardTitles = ['Skill Test', 'Counselling', 'Volunteering Sessions Attended', 'Aptitude Test', 'Exams']

function StudentView() {
    const location = useLocation();
    const selectedItem = location.state.selectedItem;
    console.log('im in', selectedItem)
    const dataCard = (
        <Card bordered={false} style={{ height: 500, overflow: 'auto' }} title={<Text strong>Ongoing Batch</Text>}>
            <Tabs type="card">
                {batches.map((batch, index) =>
                    <TabPane tab={batch.name} key={index}>
                        <Text italic>Started on 10 Aug to 9 September 2021</Text><br />
                        <Text italic>Time :{batch.time}</Text>
                        <Table size='small' dataSource={courses} columns={coursesColumns} />
                    </TabPane>
                )}
            </Tabs>
        </Card>
    );

    const timeline = (
        <Card style={{ height: 500, overflow: 'auto' }}>
            <Timeline mode='left'>
                <Timeline.Item color="blue">
                    <p>Profile Completed</p>
                    <Space>
                        <p>90%</p>
                        <p>10:10 AM, Today</p>
                    </Space>
                </Timeline.Item>
                <Timeline.Item color="green">
                    <p>Upcoming Batch</p>
                    <Space>
                        <p>Batch 167</p>
                        <p>10:10 AM, Today</p>
                    </Space>
                </Timeline.Item>
                <Timeline.Item color="red">
                    <p>Got Offer Letter</p>
                    <Space>
                        <p>K C Hospital</p>
                        <p>10:10 AM, Today</p>
                    </Space>
                </Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    <p>Interview</p>
                    <Space>
                        <p>3 Attended</p>
                        <p>10:10 AM, Today</p>
                    </Space>
                </Timeline.Item>
                <Timeline.Item color="gray">
                    <p>Report Card</p>
                    <Space>
                        <p>Overall Score 82% </p>
                        <p>10:10 AM, Today</p>
                    </Space>
                </Timeline.Item>
                <Timeline.Item color="gray">
                    <p>Upcoming Exam</p>
                </Timeline.Item>
            </Timeline>
        </Card>
    )



    return (
        <>
            <Row gutter={[16, 16]}>
                {statItems.map((item) =>
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Card hoverable>
                            <Row>
                                <Col span={18} className="mb-4">
                                    <Title level={3} className="m-0" type="success">{item.name}</Title>
                                    {item.name === 'Profile' ?
                                        <Text>{selectedItem?.firstName} {selectedItem?.lastName}</Text>
                                        :
                                        <Text>Total {item.name} {item.category1.count + item.category2.count}</Text>
                                    }
                                </Col>
                                <Col span={6} className="mb-4">
                                    <span style={avatar}>{item.icon}</span>
                                </Col>
                                <Col span={12}>
                                    <Statistic title={item.category1.name} value={item.category1.count} prefix={item.category1.icon} />
                                </Col>
                                <Col span={12}>
                                    <Statistic title={item.category2.name} value={item.category2.count} prefix={item.category2.icon} />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                )}
                <Col xs={24} sm={24} md={16} lg={18} xl={18}>
                    {dataCard}
                </Col>
                <Col xs={24} sm={24} md={8} lg={6} xl={6}>
                    {timeline}
                </Col>
                {cardTitles.map((item) =>
                    <Col xs={24} md={8}>
                        <Card bordered={false} title={<Text strong>{item}</Text>}>
                            <Tabs style={contentStyle} >
                                <TabPane tab="History" key="1">
                                    <Text italic>{item} History</Text>
                                    <Table size='small' dataSource={studentList} columns={columns} />
                                </TabPane>
                                <TabPane tab="Upcoming" key="2">
                                    <Meta title="Repairing Started on 10-1-2021" description="Batch:'B163',Time: 10.30 AM" />
                                </TabPane>
                            </Tabs>
                        </Card>
                    </Col>
                )}
                <Col span={24}>{dataCard}</Col>
            </Row>


        </>
    )
}
export default StudentView;