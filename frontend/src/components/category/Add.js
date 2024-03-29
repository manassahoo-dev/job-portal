import { Button, Form, Input, message } from "antd";
import React from "react";
import api from "../../services/api";
import apiService from "../../services/api.service";
import ValidationMessage from "../utility/ValidationMessage";

function CategoryAdd({ setIsAdd, setLastRefresh }) {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        apiService.create(api.CATEGORY, values)
            .then((response) => {
                message.success('Category added successfully');
                setIsAdd(false);
                setLastRefresh(new Date());
                form.resetFields();
            })
            .catch((error) => {
                message.error(error.response.data.message);
            });;

    };

    const onFinishFailed = (errorInfo) => {
        console.error(errorInfo);
    };

    return (
        <Form
            layout="vertical"
            className="vh65"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            validateMessages={ValidationMessage}
        >
            <Form.Item label="Category Name" name="name" rules={[{ required: true }]}><Input /></Form.Item>
            <Form.Item><Button type="primary" htmlType="submit" block>Add New Category</Button></Form.Item>
        </Form>
    );
}
export default CategoryAdd;