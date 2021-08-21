import { Button, Card, Col, Form, Input, message, Row } from "antd";
import React, { useContext } from 'react';
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import apiService from "../../services/api.service";
import ValidationMessage from "../utility/ValidationMessage";
import Question from "./Question";

const { TextArea } = Input;

function CounsellingAddEdit() {

    const [form] = Form.useForm();
    const { contextData, setContextData } = useContext(AppContext);
    form.setFieldsValue(contextData.selectedItem);
    form.setFieldsValue({ quizType: contextData.quizType });

    const onFinish = (values) => {
        const updatedValues = {
            ...values,
            categoryId: contextData.categoryId,
        }

        create(updatedValues);
    };

    const create = (values) => {
        apiService.create(api.COUNSELLING, values)
            .then((response) => {
                message.success('Counselling added successfully');
                setContextData({ ...contextData, isAddEdit: false, selectedItem: null })
                form.resetFields();
            })
            .catch((error) => {
                message.error(error.response.data.message);
            });
    }

    const onFinishFailed = (errorInfo) => {
        console.info(errorInfo.values);
    };

    const onCancel = () => {
        setContextData({ ...contextData, isAddEdit: false, selectedItem: null })
    }

    return (
        <Card>
            <Form
                layout="vertical"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                validateMessages={ValidationMessage}
            >
                <Form.Item label="id" name="id" hidden><Input /></Form.Item>
                <Form.Item label="Counselling Type" name="quizType" hidden><Input /></Form.Item>
                <Form.Item label="Counselling Name" name="name" rules={[{ required: true }]}><Input /></Form.Item>
                <Form.Item label="Counselling Description" name="description" ><TextArea rows={3} /></Form.Item>
                <Form.Item>
                    <Question />
                </Form.Item>
                <Row gutter={16}>
                    <Col span="12">
                        <Form.Item><Button block onClick={onCancel}>Cancel</Button></Form.Item>
                    </Col>
                    <Col span="12">
                        <Form.Item><Button type="primary" htmlType="submit" block>{contextData.selectedItem?.id ? 'Update' : 'Add'} Counselling</Button></Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
}
export default CounsellingAddEdit;