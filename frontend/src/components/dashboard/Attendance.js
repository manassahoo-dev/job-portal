import { Button, DatePicker, Dropdown, message, Select, Table, Tabs } from "antd";
import { Option } from "antd/lib/mentions";
import Modal from "antd/lib/modal/Modal";
import { useContext, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import apiService from "../../services/api.service";
import ApiRequest from "../../services/ApiRequest";
import toSentenceCase from "../utility/util";

function Attendance({ batch }) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { contextData } = useContext(AppContext);

    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${batch.id}/students`, isModalVisible);

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [courses, setCourses] = useState([]);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => <b>{`${toSentenceCase(record?.firstName)} ${toSentenceCase(record?.lastName || '')}`}</b>,
        }, {
            title: 'Mobile',
            dataIndex: 'mobile',
            key: 'mobile',
        },
    ]


    const showModal = () => {
        setIsModalVisible(true);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRowKeys(selectedRowKeys)
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Button type="link" icon={<FiEdit2 />} className="float-end" onClick={() => showModal()} >Update</Button>

            <Modal title="Attendance" visible={isModalVisible} onOk={handleOk} okText="Update Attendance" onCancel={handleCancel}>
                <Select style={{ width: 120 }} onChange={(e) => console.log(e)}>
                    <Option value="computer">Computer</Option>
                </Select>

                <DatePicker format='DD/MM/YYYY' onChange={e => console.log(e.toDate())} />


                <Table loading={loading} columns={columns} pagination={data.length > 10}
                    rowSelection={rowSelection}
                    dataSource={data} size="small" rowKey="id"
                    bordered
                />
            </Modal>
        </>
    )
} export default Attendance;