import {
    InfoCircleOutlined
} from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import ValidationMessage from '../utility/ValidationMessage';



function AddEditCourse(props) {

    const [form] = Form.useForm();
    if (props.isEdit) {
        form.setFieldsValue(props.formData)
    }

    const onFinish = (values) => {
        console.log(values)
        form.resetFields();
        props.manageStates()
    };

    const onCancel = () => {
        form.resetFields();
        props.manageStates()
    }

    const onFinishFailed = (errorInfo) => {
        console.error(errorInfo);
    };
    return (
        <>
            <Card hoverable>
                <Form
                    layout="vertical"
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    validateMessages={ValidationMessage}
                >
                    <Form.Item label="Sub-Category Course Name" name='subCatName' rules={[{ required: true }]} tooltip="This is a required field">
                        <Input placeholder="Sub-Category Name" />
                    </Form.Item>

                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Form.Item label="Duration" name='duration' rules={[{ required: true }]}>
                                <Select>
                                    <Option value="15 Days">15 Days</Option>
                                    <Option value="30 Days">30 Days</Option>
                                    <Option value="45 Days">45 Days</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Form.Item label="Days" name='days' rules={[{ required: true }]}>
                                <Select>
                                    <Option value="Mon-Fri">Mon-Fri</Option>
                                    <Option value="Sat-Sun">Sat-Sun</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        label="Category Syllabus"
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
        </>
    )
}
export default AddEditCourse;