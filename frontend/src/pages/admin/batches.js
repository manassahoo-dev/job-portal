import { Button, Card, Col, DatePicker, Form, Input, message, Row, Space, Typography } from 'antd';
import { useState } from 'react';
import AppError from '../../components/utility/AppError';
import AppSpin from '../../components/utility/AppSpin';
import api from '../../services/api';
import ApiService from '../../services/api.service';
import ApiRequest from '../../services/ApiRequest';

const { Title, Text, Link } = Typography;
function Batches() {

    const [form] = Form.useForm();
    const [isAdd, setIsAdd] = useState(false);
    const { data, error, loading } = ApiRequest('GET', api.batches, isAdd);

    const validateMessages = {
        required: '${label} is required',
    };
    const onFinish = (values) => {
        const data = {
            ...values,
            'startDate': values['startDate'].format('YYYY-MM-DD'),
            'endDate': values['endDate'].format('YYYY-MM-DD')
        };
        ApiService.create(api.batches, data)
            .then((response) => {
                setIsAdd(false);
            })
            .catch((error) => {
                message.error(error.response.statusText);
            });;
    };

    const onFinishFailed = (errorInfo) => {
        console.error(errorInfo);
    };

    return (
        <Row>
            <Col xs={24} sm={12} md={8}>
                <AppSpin loading={loading}>
                    <Card className="full-height">
                        <Title level={4}>Batch</Title>
                        {error ? <AppError
                            title="Unable to get Batch details"
                            subTitle={error.message}
                        /> :
                            <>
                                {
                                    isAdd ?
                                        <Form
                                            layout="vertical"
                                            form={form}
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                            validateMessages={validateMessages}
                                        >
                                            <Form.Item label="Batch Name" name="name" rules={[{ required: true }]}><Input /></Form.Item>
                                            <Form.Item name="startDate" label="Start Date" rules={[{ required: true }]} className="w-50 float-start">
                                                <DatePicker className="w-100" />
                                            </Form.Item>
                                            <Form.Item name="endDate" label="End Date" rules={[{ required: true }]} className="w-50">
                                                <DatePicker className="w-100" />
                                            </Form.Item>
                                            <Form.Item><Button type="primary" htmlType="submit" block>Add New Batch</Button></Form.Item>
                                        </Form>
                                        :
                                        <>
                                            <Button type="primary" block className="mb-4" onClick={() => setIsAdd(true)}>Add New Batch</Button>
                                            <Space direction="vertical">
                                                {data.map((item, index) => <Button type="link">{item.name}</Button>)}
                                            </Space>
                                        </>
                                }
                            </>
                        }
                    </Card>
                </AppSpin>
            </Col>
        </Row>
    );
}
export default Batches;
