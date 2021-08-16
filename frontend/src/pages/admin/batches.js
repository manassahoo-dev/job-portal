
import {
    Button, Card, Col, DatePicker, Form, Input, List, message, PageHeader, Row, Typography
} from 'antd';
import moment from 'moment';
import { useState } from 'react';
import AppError from '../../components/utility/AppError';
import AppSpin from '../../components/utility/AppSpin';
import api from '../../services/api';
import ApiService from '../../services/api.service';
import ApiRequest from '../../services/ApiRequest';

const { Title, Text, Link } = Typography;
function Batches() {

    const [form] = Form.useForm();
    const [isAddBatch, setIsAddBatch] = useState(false);
    const [isAddOrEdit, setIsAddOrEdit] = useState(false);
    const [batch, setBatch] = useState(null);
    const { data, error, loading } = ApiRequest('GET', api.batches, isAddBatch);

    const validateMessages = {
        required: '${label} is required',
    };
    const onFinish = (values) => {
        ApiService.create(api.batches, values)
            .then((response) => {
                setIsAddBatch(false);
            })
            .catch((error) => {
                message.error(error.response.message);
            });;
    };

    const onFinishFailed = (errorInfo) => {
        console.error(errorInfo);
    };

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
                <AppSpin loading={loading}>
                    <Card>
                        <PageHeader
                            className="p-0 mb-2"
                            onBack={isAddBatch ? () => setIsAddBatch(false) : ""}
                            title={isAddBatch ? "Add New Batch" : "Batch"}
                            extra={!isAddBatch && [
                                <Button type="primary" block onClick={() => setIsAddBatch(true)}>Add New Batch</Button>,
                            ]}
                        />
                        {error ? <AppError
                            title="Unable to get Batch details"
                            subTitle={error.message}
                        /> :
                            <div className="vh65 overflow-auto">
                                {
                                    isAddBatch ?
                                        <Form
                                            layout="vertical"
                                            form={form}
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                            validateMessages={validateMessages}
                                        >
                                            <Form.Item label="Batch Name" name="name" rules={[{ required: true }]}><Input /></Form.Item>
                                            <Form.Item><Button type="primary" htmlType="submit" block>Add New Batch</Button></Form.Item>
                                        </Form>
                                        :

                                        <List
                                            itemLayout="horizontal"
                                            dataSource={data}
                                            renderItem={item => (
                                                <List.Item className="px-2" onClick={() => setBatch(item)}>
                                                    <List.Item.Meta
                                                        title={<Button className="p-0" type="link" size="small" >{item.name}</Button>}
                                                        description={`${moment(item.startDate).format("Do MMM YY")} - ${moment(item.endDate).format("Do MMM YY")}`}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                }
                            </div>
                        }
                    </Card>
                </AppSpin>
            </Col>
            <Col xs={24} sm={12} md={16}>
                {batch &&
                    <>
                        <PageHeader
                            className="p-0 mb-2"
                            onBack={isAddBatch ? () => setIsAddBatch(false) : ""}
                            title={batch.name}
                            extra={[
                                <Button block onClick={() => setIsAddBatch(true)}>Add Batch Item</Button>,
                            ]}
                        />
                        <Row>
                            <Col xs={24} sm={12} md={8}>
                                <Card title="Courses">{batch.courses.map((course, index) => <p>{course.name}</p>)}</Card>
                            </Col>
                        </Row>
                    </>
                }
            </Col>
        </Row>
    );
}
export default Batches;
