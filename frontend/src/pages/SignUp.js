
import { Button, Card, Checkbox, Col, Form, Input, Row, Select } from 'antd';
import React from 'react';
import LoginOrSignUp from '../components/LoginOrSignUp';
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const SignUp = () => {
    return (
        <LoginOrSignUp type="Sign Up" />
    );
};
export default SignUp;

{/*
       const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    <div className="card-center">
            <Card className="auth-card" title="Register With Us" bordered={true}>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={{
                        residence: ['zhejiang', 'hangzhou', 'xihu'],
                        prefix: '86',
                    }}
                    scrollToFirstError
                >
                    <Form.Item
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
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            style={{
                                width: '100%',
                            }} maxLength={10}
                        />
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

                    <Form.Item label="OTP">
                        <Row gutter={8}>
                            <Col span={12}>
                                <Form.Item
                                    name="OTP"
                                    noStyle
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input the captcha you got!',
                                        },
                                    ]}
                                >
                                    <Input.Group size="middle">
                                        <Row gutter={8}>
                                            <Col span={6}>
                                                <Input type="number" minLength={1} maxLength={1} placeholder="__" />
                                            </Col>
                                            <Col span={6}>
                                                <Input minLength={1} maxLength={1} placeholder="__" />
                                            </Col>
                                            <Col span={6}>
                                                <Input minLength={1} maxLength={1} placeholder="__" />
                                            </Col>
                                            <Col span={6}>
                                                <Input minLength={1} maxLength={1} placeholder="__" />
                                            </Col>
                                        </Row>
                                    </Input.Group>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Button size="middle">Get OTP</Button>
                            </Col>
                        </Row>
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
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" on>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
                    </div>*/}