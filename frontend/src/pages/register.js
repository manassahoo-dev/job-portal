import { MailOutlined } from '@ant-design/icons';
import {
    Button, Card, DatePicker, Form,
    Input, Select
} from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Option } from 'antd/lib/mentions';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Register = (props) => {

    const [form] = Form.useForm();
    const location = useLocation();
    const mobile = location.state.Data.mobile;
    const email = location.state.Data.email;

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        console.log(props, 'rec', mobile, email);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const registerForm = (<Form
        name="register"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        scrollToFirstError
    >
        <Form.Item
            form={form}
            name="name"
            label="Name"
            rules={[
                {
                    required: true,
                    message: 'Please input your Name!',
                },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="email"
            label="E-mail"
            rules={[
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                }
            ]}
        >
            <Input placeholder="abc@def.com" defaultValue={email} prefix={<MailOutlined style={{ width: 50, align: 'right' }} />} disabled />
        </Form.Item>

        <Form.Item
            name="mobile"
            label="Mobile Number"
        >

            <Input addonBefore={'+91'} defaultValue={mobile} minLength={10} maxLength={10}
                name="mobile" disabled />
        </Form.Item>

        <Form.Item
            name="gender"
            label="Gender"
            rules={[
                {
                    required: true,
                    message: 'Please select gender!',
                },
            ]}
        >
            <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
            </Select>
        </Form.Item>

        <Form.Item label="Date Of Birth">
            <DatePicker format='DD/MM/YYYY' bordered style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
                {
                    validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
            ]}
        >
            <Checkbox>
                I have read the <a href="">agreement</a>
            </Checkbox>
        </Form.Item>
        <Form.Item >
            <Button type="primary" htmlType="submit">
                Register
            </Button>
        </Form.Item>
    </Form>
    )

    return (
        <>
            <div className="card-center vh-100">
                <Card bordered={true}>
                    {registerForm}
                </Card>
            </div>
        </>
    );
};

export default Register;