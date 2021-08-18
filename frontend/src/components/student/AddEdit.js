import { Button, Card, Col, Form, Input, message, Row } from "antd"
import api from "../../services/api";
import apiService from "../../services/api.service";
import ValidationMessage from "../utility/ValidationMessage";

function AddEditStudent({ setIsAddEditStudent }) {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        apiService.create(api.users, values)
            .then((response) => {
                setIsAddEditStudent(false)
            })
            .catch((error) => {
                message.error(error.response.message);
            });;
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onCancel = () => {
        setIsAddEditStudent(false)
    }

    return (
        <Card hoverable>
            <Form
                layout="vertical"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                validateMessages={ValidationMessage}
            >
                <Form.Item label="Email Id" name="email" rules={[{ required: true }]}><Input /></Form.Item>
                <Form.Item label="Mobile Number" name="mobile"><Input /></Form.Item>
                <Form.Item label="First Name" name="firstName"><Input /></Form.Item>
                <Form.Item label="Last Name" name="lastName"><Input /></Form.Item>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item><Button type="default" htmlType="reset" block onClick={onCancel}>Cancel</Button></Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item><Button type="primary" htmlType="submit" block>Save</Button></Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}
export default AddEditStudent