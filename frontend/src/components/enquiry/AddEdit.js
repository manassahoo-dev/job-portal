import {
    InfoCircleOutlined
} from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Divider, Form, Input, message, Row, Select } from "antd";
import Meta from 'antd/lib/card/Meta';
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import Text from 'antd/lib/typography/Text';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import api from '../../services/api';
import apiService from '../../services/api.service';
import ValidationMessage from '../utility/ValidationMessage';
import Questions from './Questions';


function EnquiryAddEdit() {


    const [form] = Form.useForm();
    const { contextData, setContextData } = useContext(AppContext);
    form.setFieldsValue(contextData?.selectedItem);

    const onFinish = (values) => {
        console.log('selectedItem', contextData.selectedItem.id)
        const updatedValues = {
            ...values,
            id: contextData.selectedItem?.id,
        }
        create(updatedValues)
    }

    const create = (values) => {
        apiService.create(api.ENQUIRY, values)
            .then((response) => {
                message.success('Enquiry added successfully');
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
        <Card hoverable>
            <Form
                layout="vertical"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                validateMessages={ValidationMessage}
            >
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Meta
                            title={<Text>Personal Details</Text>}
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
                                <Form.Item label="Skills" name="state"><Input allowClear /></Form.Item>
                                <Form.Item label="State" name="state"><Input allowClear /></Form.Item>

                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12}>
                                <Form.Item label="DOB" name="dob">
                                    <DatePicker format='DD/MM/YYYY' onChange={e => form.setFieldsValue({ dateOfBirth: e })} />
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
                    {/* <Divider type="vertical" /> */}

                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Meta
                            title={<Text>Other Details</Text>}
                        />

                        <Form.Item label='Question'>
                            <Questions />
                        </Form.Item>
                        <Row gutter={[16, 16]}>
                            <Col lg={12}>
                                <Form.Item><Button type="default" htmlType="reset" block onClick={onCancel}>Cancel</Button></Form.Item>
                            </Col>
                            <Col lg={12}>
                                <Form.Item><Button type="primary" htmlType="submit" block>Done</Button></Form.Item>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Form>
        </Card>
    )
}
export default EnquiryAddEdit