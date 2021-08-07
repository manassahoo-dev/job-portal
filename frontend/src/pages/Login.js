import { ArrowRightOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Form, Input, Row, Select, Tabs } from 'antd';
import { Option } from 'antd/lib/mentions';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login() {

    const [form] = Form.useForm();
    const [tabState, setTabState] = useState(1);
    const history = useHistory();
    const { TabPane } = Tabs;
    const onFinish = (values) => {
        console.log('Success:', values);
        // const empObj = new Student();
        // dispatch(addEmployeeAction(empObj));
        history.push('/');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const form1 = (
        <>
            <h1>key {tabState}</h1>
            <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                {tabState === 1}{
                    <Form.Item
                        label="Email"
                        name="mail"
                        rules={[{ type: 'email', required: true, message: 'Please input your Mail Id!' }]}
                    >
                        <Input placeholder="abc@def.com" style={{ width: '100%' }} prefix={<MailOutlined style={{ width: 50, align: 'right' }} />} />
                    </Form.Item>
                }
                {tabState === 2}{
                    <Form.Item
                        name="phone"
                        label="Phone"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={'+91'} minLength={10} maxLength={10}
                            style={{ width: '100%' }} name="phone" />
                    </Form.Item>
                }

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </>
    );

    return (
        <div className="card-center">
            <Card className="auth-card" bordered={true} style={{ width: 500 }}>
                <Tabs onChange={(e) => setTabState(e)}
                    defaultActiveKey="1" centered>
                    <TabPane tab="Email ID" key="1">
                        {form1}
                    </TabPane>
                    <TabPane tab="Phone Number" key="2">
                        {form1}
                    </TabPane>
                </Tabs>
            </Card>
        </div>
    );
}
export default Login;
