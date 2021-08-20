import { EditOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Table, Tooltip } from 'antd';
import DeleteEntity from '../DeleteEntity';
import api from '../../services/api';
import ApiRequest from '../../services/ApiRequest';
import ACTIONTYPES from '../utility/ACTIONTYPES';


function StudentList({ isActionPerformedStudent, setIsActionPerformedStudent, setData, item }) {

    const { data, error, loading } = ApiRequest('GET', api.students, isActionPerformedStudent);
    const columns = [
        {
            title: 'SL No',
            dataIndex: 'id',
            key: 'id',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.id - b.id,
        }, {
            title: 'UID (Adhar)',
            dataIndex: 'idProof',
            key: 'idProof',
        }, {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => <b>{`${record.firstName} ${record.lastName}`}</b>,
            sorter: (a, b) => (a?.name - b?.name),
        }, {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        }, {
            title: 'Mobile',
            dataIndex: 'mobile',
            key: 'mobile',
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        }, {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        }, {
            title: 'Mother Name',
            dataIndex: 'motherName',
            key: 'motherName',
        }, {
            title: 'Father Name',
            dataIndex: 'fatherName',
            key: 'fatherName',
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space>
                    <Tooltip title="Edit">
                        <Button type="dashed" size="small" shape="circle" icon={<EditOutlined />} onClick={() => { setData(record); setIsActionPerformedStudent(ACTIONTYPES.edit) }} />
                    </Tooltip>
                    <DeleteEntity entityName={'User'} item={record} setActionPerformed={setIsActionPerformedStudent} url={api.students} />
                </Space>
            ),
        },
    ];

    return (
        <>

            <Card className="overflow-auto">
                <Row>
                    <Col span={24}>
                        <Table loading={loading} columns={columns} pagination={data.length > 10}
                            dataSource={data} size="small" rowKey="id"
                            rowClassName={(record, index) => (record.id === item?.id) ? 'table-row-dark' : ''}
                            bordered
                        />
                    </Col>
                </Row>
            </Card>
        </>
    );
}

export default StudentList