import { EditOutlined } from '@ant-design/icons';
import { Button, Card, Col, Drawer, Form, Input, Row, Space, Table, Tooltip } from 'antd';
import { useState } from 'react';
import DeleteEntity from '../../../components/DeleteEntity';
import ApiRequest from '../../../services/api';
import UserService from "../../../services/user.service";

function UserList() {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');

    const { data, error, loading } = ApiRequest('GET', "/users");

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
                    <DeleteEntity item={record} />
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

    const deleteUser = (id) => {
        UserService.delete(id);
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
                        <Table loading={loading} columns={columns} pagination={data.length > 10}
                            dataSource={data} size="small" rowKey="id"
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
