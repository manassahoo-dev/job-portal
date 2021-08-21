import { Button, Card, Col, Form, Input, message, Row, Select } from "antd"
import { Option } from "antd/lib/mentions";
import api from "../../services/api";
import apiService from "../../services/api.service";
import ACTIONTYPES from "../utility/ACTIONTYPES";
import ValidationMessage from "../utility/ValidationMessage";

function AddEditStudent({ isActionPerformedStudent, setIsActionPerformedStudent, setData, data }) {

    const [form] = Form.useForm();

    if (isActionPerformedStudent === ACTIONTYPES.edit) {
        form.setFieldsValue(data)
    }
    const onFinish = (values) => {
        console.log('Success:', values);
        if (isActionPerformedStudent === ACTIONTYPES.add) {
            const updatedValues = {
                ...values,
                role: "JOB_SEEKER",
            }
            apiService.create(api.students, updatedValues)
                .then((response) => {
                    setIsActionPerformedStudent(ACTIONTYPES.none)
                    setData({})
                })
                .catch((error) => {
                    message.error(`${updatedValues.firstName} added SuccessFully`);
                });;
        }
        if (isActionPerformedStudent === ACTIONTYPES.edit) {
            const updatedValues = {
                ...data,
                ...values,
                role: "JOB_SEEKER",
            }
            console.log(data)
            apiService.update(api.students, updatedValues.id, updatedValues)
                .then((response) => {
                    setData({})
                    setIsActionPerformedStudent(ACTIONTYPES.none)
                })
                .catch((error) => {
                    message.error(error.response.message);
                });;
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onCancel = () => {
        setData({})
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

                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item label="Email Id" name="email" rules={[{ required: true }]}><Input allowClear /></Form.Item>
                        <Form.Item label="Mobile Number" name="mobile" rules={[{ required: true }, { pattern: new RegExp("^\\d{10}$"), message: 'Please enter a valid Mobile' }]}><Input allowClear /></Form.Item>
                        <Form.Item label="First Name" name="firstName"><Input allowClear /></Form.Item>
                        <Form.Item label="Last Name" name="lastName"><Input allowClear /></Form.Item>
                        <Form.Item label="Gender" name="gender"> <Select
                            placeholder="Select a option and change input text above"
                            onChange={e => form.setFieldsValue({ gender: e })}
                            allowClear
                        >
                            <Option value="M">Male</Option>
                            <Option value="F">Female</Option>
                            <Option value="O">Other</Option>
                        </Select></Form.Item>
                        <Form.Item><Button type="default" htmlType="reset" block onClick={onCancel}>Cancel</Button></Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item label="Aadhaar Number" name="idNumber"
                            rules={[{ required: true, },
                            { pattern: new RegExp("^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$"), message: 'Please enter a valid Adhar' }]}
                        >
                            <Input allowClear />
                        </Form.Item>
                        <Form.Item label="Mother Name" name="motherName"><Input allowClear /></Form.Item>
                        <Form.Item label="Father Name" name="fatherName"><Input allowClear /></Form.Item>
                        <Form.Item label="Student Type" name="studentType"><Input /></Form.Item>
                        <Form.Item label="Address" name="address"><Input allowClear /></Form.Item>
                        <Form.Item><Button type="primary" htmlType="submit" block>Save</Button></Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}
export default AddEditStudent