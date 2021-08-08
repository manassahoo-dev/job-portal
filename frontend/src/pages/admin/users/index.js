import { message, Table, Typography, Row, Col, Button } from 'antd';
import { useEffect, useState } from 'react';
import UserService from "../../../services/user.service";

const { Title } = Typography;
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
            key: 'mobile',
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
    ];

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

    return (
        <>
            <Row>
                <Col span={12}>
                    <h3 className="py-2 fw-bolder m-0">Manage Users</h3>
                </Col>
                <Col span={12}>
                    <Button type="primary" style={{ float: 'right' }} >Add User</Button>
                </Col>
                <Col span={24}>
                    <Table loading={loading} columns={columns} pagination={users.length > 5} dataSource={users} size="small" />
                </Col>
            </Row>
        </>
    );
}
export default UserList;
