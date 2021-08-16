import {
    InfoCircleOutlined
} from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import { useState } from 'react';



function AddNewCourseForm({ isAddCourse }) {

    const [form] = Form.useForm();
    const [isAdd, setIsAdd] = useState(isAddCourse);
    const validateMessages = {
        required: '${label} is required',
    };
    const onFinish = (values) => {
        console.log(values)
        form.resetFields();
    };

    const onCancel = () => {
        form.resetFields();
        setIsAdd(false)
    }

    const onFinishFailed = (errorInfo) => {
        console.error(errorInfo);
    };
    return (
        <>
            {isAdd &&
                <Card hoverable>
                    <Form
                        layout="vertical"
                        form={form}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        validateMessages={validateMessages}
                    >
                        <Form.Item label="Enter Sub-Category Name" name='subCatName' required tooltip="This is a required field">
                            <Input placeholder="Sub-Category Name" />
                        </Form.Item>

                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item label="Select Duration" name='duration'>
                                    <Select defaultValue="15 Days">
                                        <Option value="15 Days">15 Days</Option>
                                        <Option value="30 Days">30 Days</Option>
                                        <Option value="45 Days">45 Days</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item label="Select Days" name='days'>
                                    <Select defaultValue="Mon-Fri">
                                        <Option value="Mon-Fri">Mon-Fri</Option>
                                        <Option value="Sat-Sun">Sat-Sun</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
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
                            label="Enter Category Syllabus"
                            tooltip={{ title: '200 Characters in Words', icon: <InfoCircleOutlined /> }}
                        >
                            <TextArea
                                placeholder="Type here.."
                                autoSize={{ minRows: 2, maxRows: 6 }}
                            />
                        </Form.Item>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item><Button type="primary" htmlType="reset" block onClick={onCancel}>Cancel</Button></Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item><Button type="primary" htmlType="submit" block>Create</Button></Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            }
        </>
    )
}
export default AddNewCourseForm;