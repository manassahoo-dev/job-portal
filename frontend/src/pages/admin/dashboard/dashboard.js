import { BackTop, Card, Carousel, Col, Row, Statistic, Tabs, Timeline, Typography } from 'antd';
import { LikeOutlined, WomanOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Meta from 'antd/lib/card/Meta';

const { TabPane } = Tabs;

function AdminDashBoard(params) {

    const statsCard = (
        <Col>
            <Card title='Student'>
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="Male" value={1128} prefix={<LikeOutlined />} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Female" value={1128} prefix={<WomanOutlined />} />
                    </Col>
                </Row>
            </Card>
        </Col>
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
        <Card>
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
                {statsCard}
                {statsCard}
                {statsCard}
                {statsCard}
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={16}>
                    <div>
                        <Card bordered>
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
                <Col span={8}>
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
    )
}
export default AdminDashBoard;