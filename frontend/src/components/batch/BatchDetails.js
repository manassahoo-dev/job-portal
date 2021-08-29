
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import {
    Button, Card, Col, DatePicker, Form,
    Input, message, Row, Tooltip, Typography
} from 'antd';
import moment from 'moment';
import { default as React, useContext, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import AppContext from '../../contexts/AppContext';
import api from '../../services/api';
import apiService from '../../services/api.service';
import ValidationMessage from '../utility/ValidationMessage';

const { Title, Text, Link } = Typography;
function BatchDetails({ batch, items }) {

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
        apiService.update(api.BATCH, batch.id, values)
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
                            <Row align="middle">
                                <Col span="6">
                                    <Form.Item label="id" name="id" hidden><Input /></Form.Item>
                                    <Form.Item label="Batch" name="name" rules={[{ required: true }]}><Input /></Form.Item>
                                </Col>
                                <Col span="6">
                                    <Form.Item label="Start Date" name="startDate" rules={[{ required: true }]}><DatePicker /></Form.Item>
                                </Col>
                                <Col span="6">
                                    <Form.Item label="End Date" name="endDate" rules={[{ required: true }]}><DatePicker /></Form.Item>
                                </Col>
                                <Col span="6">
                                    <Tooltip title="Update">
                                        <Button type="link" shape="circle" htmlType="submit" icon={<CheckOutlined />} />
                                    </Tooltip>
                                    <Tooltip title="Cancel">
                                        <Button type="link" danger shape="circle" icon={<CloseOutlined />} onClick={() => setIsEdit(false)} />
                                    </Tooltip>
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
                                <Text strong>{batch.startDate}</Text>
                            </Col>
                            <Col span={6}>
                                <Text type="secondary">End Date</Text><br />
                                <Text strong>{batch.endDate}</Text>
                            </Col>
                            <Col span={6}>
                                <Tooltip title="Edit Batch">
                                    <Button type="link" icon={<FiEdit2 />} className="float-end" onClick={() => setIsEdit(true)} />
                                </Tooltip>                                </Col>
                        </Row>
                    }
                </Card>
            </Col>
            {items.map((item, index) =>
                <Col xs={24} sm={12} key={index}>
                    {item}
                </Col>)}
        </Row>
    );
}
export default BatchDetails;
