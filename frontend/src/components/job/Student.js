import { Table } from "antd";
import { useState } from "react";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";

function StudentList({ selectedRowKeys, setSelectedRowKeys }) {
    const [lastRefresh, setLastRefresh] = useState(new Date());
    const { data, error, loading } = ApiRequest('GET', api.STUDENT, lastRefresh);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => <b>{`${record.firstName} ${record?.lastName || ''}`}</b>,
        }, {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        }, {
            title: 'Mobile',
            dataIndex: 'mobile',
            key: 'mobile',
        },
    ]

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRowKeys(selectedRowKeys)
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };

    return (
        <Table loading={loading} columns={columns} pagination={data.length > 10}
            rowSelection={rowSelection}
            dataSource={data} size="small" rowKey="id"
            bordered
        />
    )
}
export default StudentList;