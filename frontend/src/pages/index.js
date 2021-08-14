import { BackTop, Card, Carousel, Col, Row, Statistic, Tabs, Timeline, Typography } from 'antd';
import { LikeOutlined, WomanOutlined, VerticalAlignTopOutlined, SettingOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { useState } from 'react';
import { List } from 'antd/lib/form/Form';

const { Title } = Typography;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
const { TabPane } = Tabs;

function Home() {
    const contentStyle = {
        height: '200px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const { Meta } = Card;
    const [statCardTitle, setstatCardTitle] = useState('Student');
    const statCardTitles = ['Student', 'Batch', 'Courses', 'Aptitude Tests'];

    const statsCard = (
        <Card title={statCardTitle} style={{ width: 200, margin: 15 }}>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Male" value={1128} prefix={<LikeOutlined />} />
                </Col>
                <Col span={12}>
                    <Statistic title="Female" value={1128} prefix={<WomanOutlined />} />
                </Col>
            </Row>
        </Card>
    );

    const dataCard = (
        <Card bordered >
            <h2>Jobs</h2>
            <Tabs type="card">
                <TabPane tab="Batch 1- 10.30 AM" key="1">
                    <Meta title="Repairing Started on 10-1-2021" description="Time: 10.30 AM" />
                </TabPane>
                <TabPane tab="Batch 2- 12.30 PM" key="2">
                    <Meta title="Repairing Started on 10-1-2021" description="Time: 10.30 AM" />
                </TabPane>
            </Tabs>
        </Card>
    );

    const timeline = (
        <Card style={{ width: 300, float: 'right' }}>
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
            <Row>
                {statsCard}
                {statsCard}
                {statsCard}
                {statsCard}
            </Row>

            <Row>
                <Col span={20}>
                    <div>
                        <Card className="auth-card" bordered style={{ width: 650 }}>
                            <h2>Ongoing Batches</h2>
                            <Tabs type="card">
                                <TabPane tab="Batch 1- 10.30 AM" key="1">
                                    <Meta title="Repairing Started on 10-1-2021" description="Time: 10.30 AM" />
                                </TabPane>
                                <TabPane tab="Batch 2- 12.30 PM" key="2">
                                    <Meta title="Repairing Started on 10-1-2021" description="Time: 10.30 AM" />
                                </TabPane>
                                <TabPane tab="Batch 3- 3.30 PM" key="3">
                                    <Meta title="Repairing Started on 10-1-2021" description="Time: 10.30 AM" />
                                </TabPane>
                            </Tabs>
                        </Card>
                    </div>
                </Col>
                <Col span={4}>
                    {timeline}
                </Col>
            </Row>

            <Row>
                <Col span={12}>
                    {dataCard}
                </Col>
                <Col span={12}>
                    {dataCard}
                </Col>
                <Col span={12}>
                    {dataCard}
                </Col>
                <Col span={12}>
                    {dataCard}
                </Col>
            </Row>
            {dataCard}
        </>
    );
}
export default Home;
