import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, Drawer, Form, Input, message, Modal, Row, Space, Table, Tooltip, Typography } from 'antd';
import { useEffect, useState } from 'react';
import UserService from "../../../services/user.service";

const { confirm } = Modal;
const { Title } = Typography;
const { Meta } = Card;

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => `${record.firstName} ${record.lastName}`,
        }, {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        }, {
            title: 'Mobile',
            dataIndex: 'mobile',
            key: 'mobile',
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space>
                    <Tooltip title="Edit">
                        <Button type="dashed" size="small" shape="circle" icon={<EditOutlined />} onClick={() => { form.setFieldsValue(record); showDrawer() }} />
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button danger size="small" shape="circle" icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(record)} />
                    </Tooltip>
                </Space>
            ),
        },
    ];

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        findAll();
    }, [])

    const findAll = () => {
        UserService.findAll()
            .then(response => {
                setUsers(response.data);
            })
            .catch(e => {
                console.table(e.response);
                message.error(e.response.data.error);
            }).then(function () {
                setLoading(false);
            });;
    }

    const deleteUser = (id) => {
        UserService.delete(id)
            .then(response => {
                message.success('Delete Successfull');
            })
            .catch(e => {
                message.error(e.response.data.error);
            }).then(function () {
                // setLoading(false);
            });;
    }

    const showDeleteConfirm = (user) => {
        confirm({
            title: <Card cover={<img src={user.image} />}>
                <Meta
                    title='Are you sure delete this user?'
                    description={user.mobile}
                />
            </Card>,
            icon: <ExclamationCircleOutlined />,
            content: <Card cover={<img src={user.image} />}>
                <Meta
                    title={user.email}
                    description={user.mobile}
                />
            </Card>,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteUser(user.id);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Card>
                <Row>
                    <Col span={12}>
                        <h3 className="py-2 fw-bolder m-0">Manage Users</h3>
                    </Col>
                    <Col span={12}>
                        <Button type="primary" style={{ float: 'right' }} onClick={() => { form.resetFields(); showDrawer() }}>Add User</Button>
                    </Col>
                    <Col span={24}>
                        <Table loading={loading} columns={columns} pagination={users.length > 10}
                            dataSource={users} size="small" rowKey="id"
                            bordered
                        />
                    </Col>
                </Row>
            </Card>
            <Drawer
                title="Add User"
                placement="right"
                onClose={onClose}
                visible={visible}
            >
                <Form
                    layout={formLayout}
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item label="Email Id" name="email" rules={[{ required: true }]}><Input /></Form.Item>
                    <Form.Item label="Mobile Number" name="mobile"><Input /></Form.Item>
                    <Form.Item label="First Name" name="firstName"><Input /></Form.Item>
                    <Form.Item label="Last Name" name="lastName"><Input /></Form.Item>
                    <Form.Item><Button type="primary" htmlType="submit" block>Save</Button></Form.Item>
                </Form>
            </Drawer>
        </>
    );
}
export default UserList;
