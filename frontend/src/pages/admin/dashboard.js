import {
    BookOutlined, FileOutlined, HomeOutlined, TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Card, Col, List, Row, Statistic, Table, Tabs, Timeline, Avatar } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import api from '../../services/api';
import ApiRequest from '../../services/ApiRequest';

const { TabPane } = Tabs;

const statItems = [
    { name: 'student', icon: <UserOutlined />, items: {category1: 'male', category2: 'female'} },
    // { name: 'batch', icon: <TeamOutlined />, category1: { name: 'Completed', count: 161 }, category2: { name: 'Inprogress', count: 12 } },
    // { name: 'course', icon: <BookOutlined />, category1: { name: 'Reserve', count: 88 }, category2: { name: 'Active', count: 32 } },
    // { name: 'aptitude', icon: <FileOutlined />, category1: { name: 'Attempted', count: 2650 }, category2: { name: 'Success', count: 2545 } },
    // { name: 'job', icon: <HomeOutlined />, category1: { name: 'Interview', count: 1250 }, category2: { name: 'Placements', count: 1188 } },
]

const contentStyle = {
    height: '500px',
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

const batches = [
    { name: 'Batch 162', time: '10:30 AM' },
    { name: 'Batch 163', time: '12:30 PM' },
    { name: 'Batch 164', time: '4:30 PM' },
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
    { date: '10 Aug, 21', data: 'P 18 - A 2' },
    { date: '11 Aug, 21', data: 'P 18 - A 2' },
    { date: '12 Aug, 21', data: 'P 18 - A 2' },
    { date: '13 Aug, 21', data: 'P 18 - A 2' },
    { date: '14 Aug, 21', data: 'P 18 - A 2' },
]

const cardTitles = ['Skill Test', 'Counselling', 'Volunteering Sessions Attended', 'Aptitude Test', 'Exams']

function AdminDashBoard(params) {

    const { data, error, loading } = ApiRequest('GET', api.DASHBOARD);

    const dataCard = (
        <Card bordered={false} style={contentStyle} title={<Text strong>Ongoing Batch</Text>}>
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
            <Row gutter={[16, 16]}>
                {statItems.map((item) =>
                    <Col xs={24} sm={12} md={8} lg={4}>
                        <Card hoverable>
                            <Row>
                                <Col span={18} className="mb-4">
                                    <Title level={3} className="m-0" type="success">{item.name}</Title>
                                    <Text> {item.name} {data[item.name]?.total}</Text>
                                </Col>
                                <Col span={6} className="mb-4">
                                    <span style={avatar}>{item.icon}</span>
                                </Col>
                                <Col span={12}>
                                    <Statistic title={item.items.category1} value={data[item.name]?.[item.items.category1]} />
                                </Col>
                                <Col span={12}>
                                    <Statistic title={item.items.category2} value={data[item.name]?.[item.items.category2]}  />
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
                                <TabPane tab="Batch 1- 10.30 AM" key="1">
                                    <Text italic>20 Students Skill test will conduct today 10 Aug, 21</Text>
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
export default AdminDashBoard;