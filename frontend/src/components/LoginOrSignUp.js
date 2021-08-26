import { MailOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Form, Input, message, Tabs, Typography } from 'antd';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link, useHistory } from 'react-router-dom';
import API from "../services/api";
import userService from '../services/api.service';

const { Title, Text } = Typography;
function LoginOrSignUp(props) {

    const [form] = Form.useForm();
    const { type } = props;
    const { TabPane } = Tabs;
    const history = useHistory();
    const [tabState, setTabState] = useState('Email');
    const [isOtpSent, setOTPSentState] = useState(false);
    const [otp, setOTPState] = useState(false);
    const [userData, setUserDataState] = useState({});
    const [userExists, setUserExistsState] = useState(true);

    const onFinish = (values) => {
        setUserDataState(values)
        isOtpSent ? login(otp) : isExists(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const login = (values) => {
        const data = {
            mobile: form.getFieldValue('mobile'),
            email: form.getFieldValue('email')
        }
        sessionStorage.setItem('user', JSON.stringify(userData));
        type === 'Login' ?
            history.push('/admin/dashboard') :
            history.push({
                pathname: '/register',
                state: { Data: data }
            });
    }

    const isExists = (values) => {

        userService.exists(API.USER, values)
            .then(response => {
                setOTPSentState(response.data);
                setUserExistsState(response.data);
            })
            .catch(e => {
                message.error(e.response.statusText);
            });
    }

    const simpleform = (
        <Form
            form={form}
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >{isOtpSent ? (
            <>
                <Title level={2} className="text-center m-0">Verification code</Title>
                <p className="text-center">We have sent the verification code to your mobile</p>
                <OtpInput
                    value={otp}
                    onChange={(e) => setOTPState(e)}
                    numInputs={4}
                    inputStyle="otp-input ant-input"
                    containerStyle="justify-content-center"
                />
                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        {type}
                    </Button>
                </Form.Item>

            </>)
            : (<>
                {!userExists &&
                    <Alert message="Account does not exists" type="error" showIcon />
                }
                {tabState === 'Email' ?
                    <>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ type: 'email', required: true, message: 'Please input your Mail Id!' }]}
                        >
                            <Input placeholder="abc@def.com" style={{ width: '100%' }} prefix={<MailOutlined style={{ width: 50, align: 'right' }} />} />
                        </Form.Item>
                    </>
                    :
                    <>
                        <Form.Item
                            name="mobile"
                            label="Mobile"
                            rules={[{ required: true, message: 'Please input your mobile number!' }]}
                        >
                            <Input addonBefore={'+91'} minLength={10} maxLength={10}
                                style={{ width: '100%' }} name="mobile" />
                        </Form.Item>
                    </>
                }
                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Request OTP
                    </Button>
                </Form.Item>
                {type === "Login" ?
                    <div className="text-center">
                        Not registered yet? <Link className="text-center" to="/signup">Sign Up</Link>
                    </div>
                    :
                    <div className="text-center">
                        Already have an account? <Link to="/login" >Login</Link>
                    </div>
                }
            </>
            )}
        </Form>
    );

    return (
        <div className="card-center vh-100">
            <Card bordered={true}>
                <Tabs onChange={(e) => { setTabState(e); setOTPSentState(false); setUserExistsState(true) }}
                    defaultActiveKey="1" centered>
                    <TabPane tab="Email ID" key="Email">
                        {simpleform}
                    </TabPane>
                    <TabPane tab="Mobile Number" key="Mobile">
                        {simpleform}
                    </TabPane>
                </Tabs>
            </Card>
        </div >
    );
}
export default LoginOrSignUp;