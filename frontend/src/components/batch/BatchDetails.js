
import {
    Button, Card, Col, DatePicker, Form, Input, message, Row, Select, Space, Tooltip, Typography
} from 'antd';
import moment from 'moment';
import { default as React, useContext, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import CounsellingCard from '../../components/batch/Counselling';
import CourseCard from '../../components/batch/Course';
import QuizCard from '../../components/batch/Quiz';
import SkillTestCard from '../../components/batch/SkillTest';
import StudentCard from '../../components/batch/Student';
import AppContext from '../../contexts/AppContext';
import api from '../../services/api';
import apiService from '../../services/api.service';
import ValidationMessage from '../utility/ValidationMessage';
const { Option } = Select;
const { Text } = Typography;

function BatchDetails({ batch }) {

    const [isEdit, setIsEdit] = useState(false);
    const [form] = Form.useForm();
    const { contextData, setContextData } = useContext(AppContext);

    let formValue = {
        ...batch,
        startDate: moment(batch.startDate, "YYYY-MM-DD"),
        endDate: moment(batch.endDate, "YYYY-MM-DD"),
    }

    form.setFieldsValue(formValue);

    const onFinish = (values) => {
        console.log('Success:', values);
        apiService.updateBatch(`${api.BATCH}/update`, values)
            .then((response) => {
                message.success('Batch updated successfully');
                setContextData({ ...contextData, lastRefresh: new Date() })
                form.resetFields();
                setIsEdit(false);
            })
            .catch((error) => {
                message.error(error.response.data.message);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Row gutter={[12, 12]}>
            <Col span={24}>
                <Card>
                    {isEdit ?
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            validateMessages={ValidationMessage}
                        >
                            <Row align="middle" gutter={[16]}>
                                <Col span="6">
                                    <Form.Item label="id" name="id" hidden><Input /></Form.Item>
                                    <Form.Item label="Batch" name="name" rules={[{ required: true }]}><Input /></Form.Item>
                                </Col>
                                <Col span="6">
                                    <Form.Item label="Start Date" name="startDate" rules={[{ required: true }]}><DatePicker className="w-100" /></Form.Item>
                                </Col>
                                <Col span="6">
                                    <Form.Item label="End Date" name="endDate" rules={[{ required: true }]}><DatePicker className="w-100" /></Form.Item>
                                </Col>
                                <Col span="6">
                                    <Form.Item name="status" label="Status" rules={[{ required: true }]}>
                                        <Select placeholder="Batch Status">
                                            <Option value="NOTSTARTED">Non Started</Option>
                                            <Option value="INPROGRESS">In Progress</Option>
                                            <Option value="COMPLETED">Completed</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span="24" className="d-flex justify-content-end">
                                    <Space>
                                        <Button type="primary" htmlType="submit" >Update</Button>
                                        <Button onClick={() => setIsEdit(false)} >Cancel</Button>
                                    </Space>
                                </Col>
                            </Row>
                        </Form>
                        :
                        <Row align="middle">
                            <Col span={6}>
                                <Text type="secondary">Batch</Text><br />
                                <Text strong>{batch.name}</Text>
                            </Col>
                            <Col span={6}>
                                <Text type="secondary">Start Date</Text><br />
                                <Text strong>{batch.startDate || '-'}</Text>
                            </Col>
                            <Col span={6}>
                                <Text type="secondary">End Date</Text><br />
                                <Text strong>{batch.endDate || '-'}</Text>
                            </Col>
                            <Col span={6}>
                                <Text type="secondary">Status</Text><br />
                                <Text strong>{batch.status}</Text>
                                <Tooltip title="Edit Batch">
                                    <Button type="link" icon={<FiEdit2 />} className="float-end" onClick={() => setIsEdit(true)} />
                                </Tooltip>
                            </Col>
                        </Row>
                    }
                </Card>
            </Col>
            <Col xs={24} sm={12}>
                <CourseCard />
                <StudentCard />
            </Col>
            <Col xs={24} sm={12}>
                <QuizCard quizType="APTITUDE" />
                <CounsellingCard />
                <QuizCard quizType="EXAM" />
                <SkillTestCard />
            </Col>
        </Row>
    );
}
export default BatchDetails;
