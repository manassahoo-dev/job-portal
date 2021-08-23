import { Button, Card, Col, Input, message, Row, Select, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import apiService from "../../services/api.service";
import ValidationMessage from "../utility/ValidationMessage";
import {
    InfoCircleOutlined
} from '@ant-design/icons';

function JobAddEdit(params) {

    const [form] = Form.useForm();
    const { contextData, setContextData } = useContext(AppContext);
    form.setFieldsValue(contextData.selectedItem);

    const onFinish = (values) => {
        const updatedValues = {
            ...values,
            id: contextData.selectedItem.id,
            categoryId: contextData.categoryId,
        }
        contextData.selectedItem.id ? update(updatedValues) : create(updatedValues)
    }

    const create = (values) => {
        apiService.create(api.JOB, values)
            .then((response) => {
                message.success('Job added successfully');
                form.resetFields();
                resetContextData()
            })
            .catch((error) => {
                message.error(error.response.data.message);
            });;
    }

    const update = (values) => {
        console.log(values)
        apiService.update(api.JOB, values.id, values)
            .then((response) => {
                resetContextData()
            })
            .catch((error) => {
                message.error(error.response.message);
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
                    <Col xs={24} md={12} lg={12}>
                        <Form.Item label="Enter Job Name" name='name' rules={[{ required: true }]} tooltip="This is a required field">
                            <Input placeholder="Job Sub-Category Name" />
                        </Form.Item>

                        <Form.Item label="Select Location" name='name' rules={[{ required: true }]} tooltip="This is a required field">
                            <Input placeholder="Location Name" />
                        </Form.Item>
                        <Form.Item label="Company Name" name='name' rules={[{ required: true }]} tooltip="This is a required field">
                            <Input placeholder="Company Name" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12} lg={12}>
                        <Form.Item label="Duration" name='duration' rules={[{ required: true }]}>
                            <Select>
                                <Option value="15">15 Days</Option>
                                <Option value="30">30 Days</Option>
                                <Option value="45">45 Days</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <Form.Item label="Days" name='days' rules={[{ required: true }]}>
                            <Select>
                                <Option value="Mon-Fri">Mon-Fri</Option>
                                <Option value="Sat-Sun">Sat-Sun</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    label="Course Syllabus"
                    name="syllabus"
                    rules={[{ required: true }]}
                    tooltip={{ title: '200 Characters in Words', icon: <InfoCircleOutlined /> }}
                >
                    <TextArea
                        placeholder="Type here.."
                        autoSize={{ minRows: 2, maxRows: 6 }}
                    />
                </Form.Item>
                <Form.Item
                    label="Short Description"
                    name="description"
                    tooltip={{ title: '200 Characters in Words', icon: <InfoCircleOutlined /> }}
                >
                    <TextArea
                        placeholder="Type here.."
                        autoSize={{ minRows: 2, maxRows: 6 }}
                    />
                </Form.Item>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item><Button type="default" htmlType="reset" block onClick={onCancel}>Cancel</Button></Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item><Button type="primary" htmlType="submit" block>Create</Button></Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}
export default JobAddEdit;