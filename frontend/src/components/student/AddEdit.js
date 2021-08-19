import { Button, Card, Col, Form, Input, message, Row } from "antd"
import api from "../../services/api";
import apiService from "../../services/api.service";
import ACTIONTYPES from "../utility/ACTIONTYPES";
import ValidationMessage from "../utility/ValidationMessage";

function AddEditStudent({ isActionPerformedStudent, setIsActionPerformedStudent, data }) {

    const [form] = Form.useForm();

    if (isActionPerformedStudent === ACTIONTYPES.edit) {
        form.setFieldsValue(data)
    }
    const onFinish = (values) => {
        console.log('Success:', values);
        if (isActionPerformedStudent === ACTIONTYPES.add) {
            apiService.create(api.students, values)
                .then((response) => {
                    setIsActionPerformedStudent(ACTIONTYPES.none)
                })
                .catch((error) => {
                    message.error(error.response.message);
                });;
        }
        if (isActionPerformedStudent === ACTIONTYPES.edit) {
            console.log(data)
            apiService.update(api.students, data.id, values)
                .then((response) => {
                    setIsActionPerformedStudent(ACTIONTYPES.none)
                })
                .catch((error) => {
                    message.error(error.response.message);
                });;
        }

    };

    const onFinishFailed = (errorInfo) => {
        setIsActionPerformedStudent(ACTIONTYPES.none)
        console.log('Failed:', errorInfo);
    };

    const onCancel = () => {
        setIsActionPerformedStudent(ACTIONTYPES.none)
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