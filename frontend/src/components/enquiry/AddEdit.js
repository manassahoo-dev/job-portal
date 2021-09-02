import { Button, Card, Col, DatePicker, Divider, Form, Input, message, Row, Select } from "antd";
import Meta from 'antd/lib/card/Meta';
import { Option } from "antd/lib/mentions";
import Title from "antd/lib/typography/Title";
import moment from "moment";
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import api from '../../services/api';
import apiService from '../../services/api.service';
import ValidationMessage from '../utility/ValidationMessage';
import Questions from './Questions';

function EnquiryAddEdit() {

    const [form] = Form.useForm();
    const { contextData, setContextData } = useContext(AppContext);
    
    let formValue = {
        ...contextData?.selectedItem,
        dob: contextData?.selectedItem?.dob && moment(contextData?.selectedItem?.dob, "YYYY-MM-DD"),
    }

    form.setFieldsValue(formValue);

    const onFinish = (values) => {
        console.log('selectedItem', values)
        const updatedValues = {
            ...values,
            id: contextData.selectedItem?.id,
        }
        create(updatedValues)
    }

    const create = (values) => {
        apiService.create(api.ENQUIRY, values)
            .then((response) => {
                message.success(`Enquiry ${contextData?.selectedItem?.id ? 'updated' : 'added'} successfully`);
                form.resetFields();
                resetContextData()
            })
            .catch((error) => {
                message.error(error.response.data.message);
            });;
    }

    const onCancel = () => {
        form.resetFields();
        resetContextData()
    }

    const resetContextData = () => {
        setContextData({
            ...contextData,
            selectedItem: {},
            isAddEdit: false
        })
    }


    const onFinishFailed = (errorInfo) => {
        console.error(errorInfo);
    };

    return (
        <Card>
            <Form
                layout="vertical"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                validateMessages={ValidationMessage}
            >
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={11}>
                        <Meta
                            title={<Title level={3} className="mb-4">Personal Details</Title>}
                        />
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={24} md={12} lg={12} >
                                <Form.Item label="Student Name" name="studentName" rules={[{ required: true }]}><Input allowClear /></Form.Item>
                                <Form.Item label="Gender" name="gender" > <Select
                                    defaultValue={contextData.selectedItem?.gender}
                                    onChange={e => form.setFieldsValue({ gender: e })}
                                    allowClear
                                >
                                    <Option value="M">Male</Option>
                                    <Option value="F">Female</Option>
                                    <Option value="O">Other</Option>
                                </Select>
                                </Form.Item>
                                <Form.Item label="Email Id" name="mailId"><Input allowClear /></Form.Item>
                                <Form.Item label="Skills" name="skills"><Input allowClear /></Form.Item>
                                <Form.Item label="State" name="state"><Input allowClear /></Form.Item>

                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12}>
                                <Form.Item label="DOB" name="dob">
                                    <DatePicker />
                                </Form.Item>
                                <Form.Item label="Mobile Number" name="phoneNumber" rules={[{ required: true }, { pattern: new RegExp("^\\d{10}$"), message: 'Please enter a valid Mobile' }]}><Input allowClear /></Form.Item>
                                <Form.Item label="Aadhaar Number" name="aadhaarNumber"
                                    rules={[{ pattern: new RegExp("^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$"), message: 'Please enter a valid Adhar' }]}
                                >
                                    <Input allowClear />
                                </Form.Item>
                                <Form.Item label="Highest Qualification" name="pincode"><Input allowClear /></Form.Item>
                                <Form.Item label="Pincode" name="pinCode"><Input allowClear /></Form.Item>

                            </Col>
                        </Row>
                    </Col>
                    <Col md={1}>
                        <Divider type="vertical" className="h-100" />
                    </Col>
                    <Col xs={24} sm={24} md={11}>
                        <Meta
                            title={<Title level={3} className="mb-4">Additional Details</Title>}
                        />

                        <Form.Item label='Question'>
                            <Questions />
                        </Form.Item>
                        <Row gutter={[16, 16]}>
                            <Col lg={12}>
                                <Form.Item><Button type="default" htmlType="reset" block onClick={onCancel}>Cancel</Button></Form.Item>
                            </Col>
                            <Col lg={12}>
                                <Form.Item><Button type="primary" htmlType="submit" block>{contextData?.selectedItem?.id ? 'Update' : 'Add'}</Button></Form.Item>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Form>
        </Card>
    )
}
export default EnquiryAddEdit