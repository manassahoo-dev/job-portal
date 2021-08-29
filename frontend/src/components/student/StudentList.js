import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, message, Row, Space, Table, Tooltip } from 'antd';
import DeleteEntity from '../DeleteEntity';
import api from '../../services/api';
import ApiRequest from '../../services/ApiRequest';
import ACTIONTYPES from '../utility/ACTIONTYPES';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import apiService from '../../services/api.service';
import confirm from 'antd/lib/modal/confirm';
import Meta from 'antd/lib/card/Meta';
import Text from 'antd/lib/typography/Text';

// { isActionPerformedStudent, setIsActionPerformedStudent, setData, item }

function StudentList() {

    const { contextData, setContextData } = useContext(AppContext);

    const { data, error, loading } = ApiRequest('GET', api.STUDENT, contextData);
    const columns = [
        {
            title: 'SL No',
            dataIndex: 'id',
            key: 'id',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.id - b.id,
        }, {
            title: 'UID (Adhar)',
            dataIndex: 'idNumber',
            key: 'idNumber',
        }, {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => <b>{`${record.firstName} ${record?.lastName}`}</b>,
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
            title: 'Student Type',
            dataIndex: 'studentType',
            key: 'studentType',
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space>
                    <Tooltip title="Edit">
                        <Button type="dashed" size="small" shape="circle" icon={<EditOutlined />} onClick={() => {
                            setContextData({ ...contextData, isActionPerformed: ACTIONTYPES.edit, selectedItem: record })
                        }} />
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button danger size="small" shape="circle" icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(record)} />
                    </Tooltip>
                </Space>
            ),
        }, {
            title: 'View',
            key: 'view',
            render: (text, record) => (
                <Space>
                    <Button type="link" size="small" onClick={() => { }} > Profile</Button>
                    <Button type="link" size="small" onClick={() => { }} > Student</Button>
                </Space>

            ),
        },
    ];

    const showDeleteConfirm = (item) => {
        setContextData({
            ...contextData,
            isActionPerformed: ACTIONTYPES.delete
        })
        confirm({
            title: <Card>
                <Meta
                    title={'Are you sure delete this user?'}
                    description={`${item.firstName} ${item.lastName}`}
                />
            </Card>,
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                apiService.delete(api.USER, item.id)
                    .then((response) => {
                        setContextData({
                            ...contextData,
                            isActionPerformed: ACTIONTYPES.none
                        })
                        message.info(`${item.id} deleted successfully!!`);
                    })
                    .catch((error) => {
                        message.error(error.response.message);
                    });;;
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    return (
        <>

            <Card className="overflow-auto">
                <Row>
                    <Col span={24}>
                        <Table loading={loading} columns={columns} pagination={data.length > 10}
                            dataSource={data} size="small" rowKey="id"
                            rowClassName={(record, index) => (record.id === contextData.selectedItem?.id) ? 'ant-table-row-selected' : ''}
                            bordered
                        />
                    </Col>
                </Row>
            </Card>
        </>
    );
}

export default StudentList