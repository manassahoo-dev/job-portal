import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, FileExcelOutlined } from '@ant-design/icons';
import { Table } from "ant-table-extensions";
import { Button, Card, Col, message, Row, Space, Tooltip } from 'antd';
import Meta from 'antd/lib/card/Meta';
import confirm from 'antd/lib/modal/confirm';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';
import api from '../../services/api';
import apiService from '../../services/api.service';
import ApiRequest from '../../services/ApiRequest';
import ACTIONTYPES from '../utility/ACTIONTYPES';
import ProfileView from './ProfileView';

function StudentList() {

    const history = useHistory()
    const { contextData, setContextData } = useContext(AppContext);
    const { data, error, loading } = ApiRequest('GET', api.STUDENT, contextData);
    const [isProfileView, setIsProfileView] = useState(false);

    const hideModal = () => {
        setIsProfileView(false)
    };
    const profileView = (record) => {
        console.log(record)
        setIsProfileView(true)
    }


    const StudentView = (record) => {
        console.log(record)
        history.push({
            pathname: `/admin/students/${record.id}`,
            state: { selectedItem: record }
        })
    }

    const fields = {
        id: 'SL No',
        idNumber: 'Aadhar Number',
        Name: {
            header: "Name",
            formatter: (_fieldValue, record) => {
                return record?.firstName + " " + record?.lastName;
            },
        },
        batchName: 'Batch',
        email: 'Email Address',
        mobile: 'Mobile Number',
        age: 'Age',
        gender: 'Gender',
    };

    const columns = [
        {
            title: 'SL No',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
        }, {
            title: 'UID (Aadhar)',
            dataIndex: 'idNumber',
            key: 'idNumber',
        }, {
            title: 'Name',
            dataIndex: 'name',
            formatter: (_fieldValue, record) => {
                return record?.firstName + " " + record?.lastName;
            },
            render: (text, record) => <b>{`${record.firstName} ${record?.lastName || ''}`}</b>,
        }, {
            title: 'Batch',
            dataIndex: 'batchName',
            key: 'batchName',
        },
        {
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
            render: (text, record) => ([
                <Space>
                    <ProfileView record={record} />
                    <Button type="link" size="small" onClick={() => StudentView(record)} > Student</Button>
                </Space>
            ]),
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
                    title={'Are you sure delete user?'}
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
                        message.info(`${item.firstName} deleted successfully!`);
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
                    <Col span={24} className="student-table">
                        <Table loading={loading} columns={columns} pagination={{ hideOnSinglePage: true, showSizeChanger: true }}
                            exportable exportableProps={{
                                fields, showColumnPicker: true, fileName: "students", btnProps: {
                                    type: "primary",
                                    icon: <FileExcelOutlined />,
                                    children: <span>Export to CSV</span>,
                                }, }}
                            searchable searchableProps={{
                                inputProps: {
                                    placeholder: "Search Student",
                                    style: { width: '500px', border: '1px solid #4a73ff'},
                                },
                            }}
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