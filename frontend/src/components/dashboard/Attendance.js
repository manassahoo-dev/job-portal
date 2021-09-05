import { Button, DatePicker, message, Select, Space, Table, Form, Col, Row } from "antd";
import { Option } from "antd/lib/mentions";
import Modal from "antd/lib/modal/Modal";
import moment from "moment";
import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import api from "../../services/api";
import apiService from "../../services/api.service";
import ApiRequest from "../../services/ApiRequest";
import toSentenceCase from "../utility/util";
import ValidationMessage from "../utility/ValidationMessage";

function Attendance({ batch, courseData }) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedCourseId, setSelectedCourseID] = useState(0);
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${batch?.id}/students`, isModalVisible);

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
    const [form] = Form.useForm();
    const showModal = () => {
        setSelectedRowKeys([]);
        setSelectedDate('');
        setSelectedCourseID(0);
        setIsModalVisible(true);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRowKeys(selectedRowKeys)
        }
    };
    const handleOk = () => {
        const values = form.getFieldsValue();
        console.log(form.getFieldsValue());
        const Obj = {
            batchId: batch.id,
            courseId: values.courseId,
            date: moment(values.courseDate).format("YYYY-MM-DD"),
            present: true,
            studentIds: selectedRowKeys,
        }
        apiService.create(`${api.ATTENDANCE}/createattendancedata`, Obj)
            .then(() => {
                setSelectedRowKeys([]);
                setSelectedDate('');
                setSelectedCourseID(0);
                form.resetFields();
                message.success("Attendance Details Updated Successfully!!")
                setIsModalVisible(false);
            }).catch(() => {
                message.error("Something went Wrong!!")
            })


    };

    const handleCancel = () => {
        form.resetFields();
        setSelectedRowKeys([]);
        setSelectedDate('');
        setSelectedCourseID(0);
        setIsModalVisible(false);
    };

    const onFinish = (values) => {

        apiService.get(`${api.ATTENDANCE}/student-list-by-batch-and-course-and-date?batchId=${batch.id}&courseId=${values.courseId}&date=${moment(values.courseDate).format("YYYY-MM-DD")}`)
            .then((response) => {
                const n = response.data.map((data) => (data.studentId))
                setSelectedRowKeys(n)
            })
    }

    const onFinishFailed = () => {

    }

    return (
        <>
            <Button className="float-end" onClick={() => showModal()} >Update Attendance</Button>

            <Modal title="Attendance" visible={isModalVisible} onOk={handleOk} okText="Update Attendance" onCancel={handleCancel}>
                <Form
                    layout="vertical"
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    validateMessages={ValidationMessage}
                >
                    <Row gutter={[16]}>
                        <Col span={12}>
                            <Form.Item label="Select Course" name="courseId" rules={[{ required: true, message: "Course is required" }]}>
                                <Select
                                    placeholder="Select Course"
                                >
                                    {courseData.map((course) => (
                                        <Option key={course.id}>
                                            <b>{course.name}</b>
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Select Date" name="courseDate" rules={[{ required: true, message: "Date is required" }]}>
                                <DatePicker format='DD/MM/YYYY' />
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Button htmlType="submit" style={{ marginTop: '30px'}}>Search</Button>
                        </Col>
                    </Row>

                </Form>
                <Table loading={loading} columns={columns} pagination={data.length > 10}
                    rowSelection={rowSelection}
                    dataSource={data} size="small" rowKey="id"
                    bordered
                />
            </Modal>
        </>
    )
} export default Attendance;