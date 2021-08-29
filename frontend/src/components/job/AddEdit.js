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
            id: contextData.selectedItem?.id,
            categoryId: contextData.categoryId,
        }
        create(updatedValues)
    }

    const create = (values) => {
        apiService.create(api.JOB, values)
            .then((response) => {
                message.success(`Job ${values.id ? 'updated' : 'created'} successfully`);
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
                    <Col xs={24} md={12} lg={12}>
                        <Form.Item label="Enter Job Name" name='jobTitle' rules={[{ required: true }]}>
                            <Input placeholder="Job Sub-Category Name" />
                        </Form.Item>

                        <Form.Item label="Select Location" name='jobLocation' rules={[{ required: true }]}>
                            <Input placeholder="Enter Location" />
                        </Form.Item>

                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        <Form.Item label="Select Experience" name='experience' rules={[{ required: true }]}>
                            <Select>
                                <Option value="0-2 Years">0-2 Years</Option>
                                <Option value="3-5 Years">3-5 Years</Option>
                                <Option value="5+ Years">5+ Years</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Salary" name='salaryRange' rules={[{ required: true }]}>
                            <Input placeholder="Enter Salary" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={24} lg={24}>
                        <Form.Item label="Company Name" name='companyName' rules={[{ required: true }]}>
                            <Input placeholder="Company Name" />
                        </Form.Item>

                        <Form.Item
                            label="Eligibility Criteria"
                            name="eligibilityCriteria"
                            rules={[{ required: true }]}
                            tooltip={{ title: '200 Characters in Words', icon: <InfoCircleOutlined /> }}
                        >
                            <TextArea
                                placeholder="Type here.."
                                autoSize={{ minRows: 2, maxRows: 6 }}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Job Description"
                            name="jobDescription"
                            tooltip={{ title: '200 Characters in Words', icon: <InfoCircleOutlined /> }}
                        >
                            <TextArea
                                placeholder="Type here.."
                                autoSize={{ minRows: 2, maxRows: 6 }}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Roles and Responsibilities "
                            name="rolesAndResponsibilities"
                            tooltip={{ title: '200 Characters in Words', icon: <InfoCircleOutlined /> }}
                        >
                            <TextArea
                                placeholder="Type here.."
                                autoSize={{ minRows: 2, maxRows: 6 }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="About Company"
                            name="aboutCompany"
                            tooltip={{ title: '200 Characters in Words', icon: <InfoCircleOutlined /> }}
                        >
                            <TextArea
                                placeholder="Type here.."
                                autoSize={{ minRows: 2, maxRows: 6 }}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item><Button type="default" htmlType="reset" block onClick={onCancel}>Cancel</Button></Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item><Button type="primary" htmlType="submit" block>{contextData.selectedItem?.id ? "Update" : "Create"} Job</Button></Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}
export default JobAddEdit;