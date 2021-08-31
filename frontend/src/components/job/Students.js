import { Button, Table } from "antd"
import Modal from "antd/lib/modal/Modal"
import { useContext, useState } from "react"
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";

function StudentList({ job }) {
    const [isVisible, setIsVisible] = useState(false)
    const { contextData } = useContext(AppContext)
    const { data, error, loading } = ApiRequest('GET', api.STUDENT, contextData);
    console.log(data)

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
    return (
        <>
            <Button type="primary" onClick={() => setIsVisible(true)} block>Apply</Button>
            <Modal
                title={job?.companyName}
                centered
                visible={isVisible}
                onOk={() => setIsVisible(false)}
                onCancel={() => setIsVisible(false)}
            >
                <Table loading={loading} columns={columns} pagination={data.length > 10}
                    rowSelection='true'
                    dataSource={data} size="small" rowKey="id"
                    bordered
                />
            </Modal>
        </>
    )
}
export default StudentList