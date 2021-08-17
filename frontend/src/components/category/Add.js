import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import api from "../../services/api";
import apiService from "../../services/api.service";

function CategoryAdd({ setIsAdd }) {

    const [form] = Form.useForm();

    const validateMessages = {
        required: '${label} is required',
    };

    const onFinish = (values) => {
        apiService.create(api.categories, values)
            .then((response) => {
                setIsAdd(false);
            })
            .catch((error) => {
                message.error(error.response.message);
            });;
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.error(errorInfo);
    };

    return (
        <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            validateMessages={validateMessages}
        >
            <Form.Item label="Category Name" name="name" rules={[{ required: true }]}><Input /></Form.Item>
            <Form.Item><Button type="primary" htmlType="submit" block>Add New Category</Button></Form.Item>
        </Form>
    );
}
export default CategoryAdd;