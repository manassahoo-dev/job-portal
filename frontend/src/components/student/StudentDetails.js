import { EditOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Table, Tooltip } from 'antd';
import DeleteEntity from '../DeleteEntity';
import api from '../../services/api';
import ApiRequest from '../../services/ApiRequest';


function StudentDetails() {

    const { data, error, loading } = ApiRequest('GET', api.users);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => <b>{`${record.firstName} ${record.lastName}`}</b>,
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
                        <Button type="dashed" size="small" shape="circle" icon={<EditOutlined />} onClick={() => ''} />
                    </Tooltip>
                    <DeleteEntity item={record} />
                </Space>
            ),
        },
    ];

    return (
        <>
            <Card>
                <Row>
                    <Col span={12}>
                        <h3 className="py-2 fw-bolder m-0">Manage Users</h3>
                    </Col>
                    <Col span={24}>
                        <Table loading={loading} columns={columns} pagination={data.length > 10}
                            dataSource={data} size="small" rowKey="id"
                            bordered
                        />
                    </Col>
                </Row>
            </Card>
        </>
    );
}

export default StudentDetails