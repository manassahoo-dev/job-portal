import { MailOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Checkbox, Col, Form, Input, message, Row, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import Login from '../pages/Login';
import { hashHistory } from 'react-router';
import userService from '../services/api.service';

function LoginOrSignUp(props) {

    const { type } = props;
    const { TabPane } = Tabs;
    const history = useHistory();
    const [tabState, setTabState] = useState('Email');
    const [isOtpSent, setOTPSentState] = useState(false);
    const [otp, setOTPState] = useState(false);
    const [userData, setUserDataState] = useState({});
    const [userExists, setUserExistsState] = useState(true);

    const onFinish = (values) => {
        console.log(values);
        setUserDataState(values)
        console.log(userData);
        isOtpSent ? login(otp) : isExists(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const login = (values) => {
        console.log(userData, "After successfull Login", values);
        sessionStorage.setItem('user', JSON.stringify(userData));
        history.push('/');
    }

    const isExists = (values) => {

        userService.exists(values)
            .then(response => {
                setOTPSentState(response.data);
                setUserExistsState(response.data);
            })
            .catch(e => {
                console.table(e.response);
                message.error('Try again after some time');
            });
    }

    const simpleform = (
        <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >{isOtpSent ? (
            <>
                <OtpInput
                    value={otp}
                    onChange={(e) => setOTPState(e)}
                    numInputs={4}
                    inputStyle="ant-input otp-input"
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
                    <Button type="link" block>
                        <Link className="text-center" to="/signup">Sign Up</Link>
                    </Button>
                    :
                    <Button type="link" block>
                        <Link to="/login" >Login</Link>
                    </Button>
                }
            </>
            )}
        </Form>
    );

    return (
        <div className="card-center">
            <Card className="auth-card" bordered={true} style={{ width: 500 }}>
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
        </div>
    );
}
export default LoginOrSignUp;