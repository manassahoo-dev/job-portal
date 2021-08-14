import { Button, Card, Descriptions, Input, Rate, Row, List, Avatar, Space, Tabs, Radio, Select } from "antd";
import React, { useState } from "react";
import { PlusOutlined, InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';

import Modal from "antd/lib/modal/Modal";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";


function Courses(params) {

    const { TabPane } = Tabs;
    const [form] = Form.useForm();
    const [modalVisible, setModalVisible] = useState(false);
    const [duration, setDuration] = useState(false);

    const [tabState, setTabState] = useState('Healthcare');
    const subCourses = (
        <Card title={form.getFieldValue('subCatName')} style={{ width: 300, height: 300 }} hoverable>
            <Rate defaultValue={3} />
            <Descriptions title="User Info">

                {/* <Descriptions.Item label="In week">{form.getFieldValue('days')}</Descriptions.Item> */}
            </Descriptions>
            <p>Duration:{form.getFieldValue('duration')}</p>
            <p>In week:{form.getFieldValue('days')}</p>
        </Card>
    );
    const onFinish = values => {
        console.log('Received values of form:', values);
    };

    const listData = [];
    for (let i = 0; i < 5; i++) {
        listData.push({
            href: 'https://ant.design',
            title: `HealthCare ${i}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            duration: '45 Days',
            days: 'Mon-Fri',
            description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
    }

    return (
        <>
            <Card title='Courses' style={{ width: 900, height: 500, backgroundColor: 'lightgrey', overflow: 'auto' }} bordered>
                <Tabs type='card' onChange={(e) => setTabState(e)} tabPosition='left'>
                    <TabPane tab="Healthcare" key="Healthcare">
                        <Button type="primary" onClick={() => setModalVisible(true)} icon={<PlusOutlined />}>
                            Add New Sub Category
                        </Button>
                        <Modal
                            title="New Sub Category"
                            centered
                            visible={modalVisible}
                            okText='Create'
                            cancelText='Cancel'
                            onOk={() => setModalVisible(false)}
                            onCancel={() => setModalVisible(false)}
                        >
                            <Form
                                form={form}
                                layout="vertical"
                            >
                                <Form.Item label="Enter Sub-Category Name" name='subCatName' required tooltip="This is a required field">
                                    <Input placeholder="Sub-Category Name" />
                                </Form.Item>
                                <Form.Item label="Select Duration" name='duration'>
                                    <Select defaultValue="30 Days">
                                        <Option value="15 Days">15 Days</Option>
                                        <Option value="30 Days">30 Days</Option>
                                        <Option value="45 Days">45 Days</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Select Days" name='days'>
                                    <Select defaultValue="Mon-Fri">
                                        <Option value="Mon-Fri">Mon-Fri</Option>
                                        <Option value="Sat-Sun">Sat-Sun</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="Enter Short Description"
                                    tooltip={{ title: '200 Characters in Words', icon: <InfoCircleOutlined /> }}
                                >
                                    <TextArea
                                        placeholder="Type here.."
                                        autoSize={{ minRows: 2, maxRows: 6 }}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Enter Course Syllabus"
                                    tooltip={{ title: '200 Characters in Words', icon: <InfoCircleOutlined /> }}
                                >
                                    <TextArea
                                        placeholder="Type here.."
                                        autoSize={{ minRows: 2, maxRows: 6 }}
                                    />
                                </Form.Item>
                            </Form>
                        </Modal>
                        {subCourses}
                    </TabPane>
                    <TabPane tab="Spoken English" key="Spoken English">
                        {subCourses}
                    </TabPane>
                    <TabPane tab="Retail" key="Retail">
                        <List
                            itemLayout="horizontal"
                            size="small"
                            pagination={{
                                pageSize: 2
                            }}
                            dataSource={listData}
                            footer={
                                <div>
                                    <b>ant design</b> footer part
                                </div>
                            }
                            renderItem={item => (
                                <Card title={item.title} style={{ width: 300, height: 300 }} hoverable>
                                    <Rate defaultValue={3} />
                                    <Descriptions title="User Info">
                                    </Descriptions>
                                    <p>Duration : {item.duration}</p>
                                    <p>In week : {item.days}</p>
                                    <p>Description : {item.description}</p>
                                </Card>
                            )}
                        />
                    </TabPane>
                </Tabs>
            </Card>
        </>
    );
}
export default Courses;