import { Button, Checkbox, Form, Input, Card, Row, Col, Switch, Select, Tabs } from 'antd';
import { MailOutlined, ArrowRightOutlined, SettingOutlined } from '@ant-design/icons';
import { Option } from 'antd/lib/mentions';
import MaskedInput from 'antd-mask-input'
import Text from 'antd/lib/typography/Text';


function Login() {

    const [form] = Form.useForm();

    const { TabPane } = Tabs;
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="91">+91</Option>
                <Option value="1">+1</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    const tailLayout = {
        wrapperCol: { offset: 1, span: 16 },
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const _onChange = (e) => {

    }

    function callback(key) {
        console.log(key);
    }

    return (
        <div className=" main-container " style={{ width: "800px" }}>
            <Row type="flex">
                <Col span={16} offset={12}>
                    <Card title="Login" bordered={true}>
                        <Tabs onChange={callback} >
                            <TabPane tab="Email ID" key="1">
                                <Form
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                    <Form.Item {...tailLayout}
                                        labelCol={{ span: 6 }}
                                        label="Email ID"
                                        name="mail"
                                        rules={[{ type: 'email', required: true, message: 'Please input your Mail Id!' }]}
                                    >
                                        <Input size="large" placeholder="abc@def.com" style={{ width: '70%' }} prefix={<MailOutlined style={{ width: 50 }} />} />{" "}
                                        <Button size="large" wrapperCol={{ offset: 6, span: 16 }} htmlType="submit" shape="circle" icon={<ArrowRightOutlined />} />

                                    </Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
                                        <Checkbox>Remember me</Checkbox>
                                        <a href="/sign-up" >
                                            Sign Up
                                        </a>
                                    </Form.Item>
                                </Form>
                            </TabPane>
                            <TabPane tab="Phone Number" key="2">
                                <Form
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}>
                                    <Form.Item {...tailLayout}
                                        labelCol={{ span: 6 }}
                                        name="phone"
                                        label="Phone Number"
                                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                                    >
                                        <Input size="large" addonBefore={prefixSelector} minLength={10} maxLength={10}
                                            style={{ width: '70%' }} name="phone" onChange={_onChange} />{" "}
                                        <Button wrapperCol={{ offset: 6, span: 16 }} size="large" htmlType="submit" shape="circle" icon={<ArrowRightOutlined />} />
                                    </Form.Item>
                                </Form>
                                <Form.Item {...tailLayout} name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
                                    <Checkbox>Remember me</Checkbox>
                                    <a href="/sign-up" >
                                        Sign Up
                                    </a>
                                </Form.Item>
                            </TabPane>
                        </Tabs>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}
export default Login;
