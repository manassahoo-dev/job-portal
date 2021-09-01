import { Card, Col, Divider, Form, InputNumber, List, message, Modal, Row } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import Text from 'antd/lib/typography/Text';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../contexts/AppContext';
import api from '../../services/api';
import apiService from '../../services/api.service';
import ApiRequest from '../../services/ApiRequest';

function AddSkill({ isModalVisible, setIsModalVisible, item }) {
    const { contextData } = useContext(AppContext);
    const [existingStudentIds, setExistingStudentIds] = useState([]);
    const [existingStudents, setExistingStudents] = useState([]);
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${contextData.batch?.id}/students`, contextData.lastRefresh);
    const [form] = Form.useForm();

    const handleOk = () => {
        console.log(item);
        let values = form.getFieldsValue();
        console.log(values);
        Object.keys(values).forEach(function (key) {
            let request = {
                "batchId": item.id.batchId,
                "id": {
                    "quizId": item.id.quizId,
                    "studentId": key
                },
                "quiz": {
                    "id": item.id.quizId
                },
                "student": {
                    "id": key
                },
                "score": values[key]
            }
            saveStudentsByBatchAndQuiz(request);
            console.log('Key : ' + key + ', Value : ' + values[key])
        })

        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = values => {
        console.log('Received values of form:', values);
    };

    const fetchStudentsByBatchIdAndQuizId = () => {
        apiService.get(`${api.STUDENT}/quiz/${item.id.batchId}/${item.id.quizId}`)
            .then((response) => {
                let result = response.data.map(({ student }) => student.id)
                setExistingStudentIds(result);
                setExistingStudents(response.data);
            })
            .catch((error) => {
                message.error(error.response.message);
            });
    }

    const saveStudentsByBatchAndQuiz = (data) => {
        apiService.post(`${api.STUDENT}/quiz`, data)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                message.error(error.response.message);
            });
    }

    useEffect(() => {
        if (isModalVisible) {
            setExistingStudents([]);
            setExistingStudentIds([]);
            fetchStudentsByBatchIdAndQuizId();
        }
        form.resetFields();
    }, [isModalVisible]);

    return (
        <>
            <Modal title="Add Students Data" visible={isModalVisible} okText="Submit" onOk={handleOk} onCancel={handleCancel}>
                {existingStudents?.length > 0 &&
                    <List
                        size="small"
                        itemLayout="horizontal"
                        dataSource={existingStudents}
                        renderItem={item => (
                            <List.Item className="px-0">
                                <List.Item.Meta
                                    title={
                                        <Row>
                                            <Col span={16}>
                                                <b>{item.student.firstName}&nbsp;{item.student.lastName}</b>
                                                <Paragraph className="m-0" type="secondary" ellipsis>
                                                    {item.student.email}
                                                </Paragraph>
                                            </Col>
                                            <Col span={8}>
                                                <span className="float-end"><b>{item.score}</b>/ 100</span><br/>
                                                <Text className="float-end">{moment(item.createdOn).fromNow()}</Text>
                                            </Col>
                                        </Row>
                                    }
                                />
                            </List.Item>
                        )}
                    />}
                <Divider />
                <Form
                    form={form}
                    layout="vertical"
                    name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                    {data.map((student, index) =>
                        <>
                            {!existingStudentIds.includes(student.id) && <Row>
                                <Col span={16}>
                                    <List.Item.Meta
                                        title={<b>{student.firstName}&nbsp;{student.lastName}</b>}
                                        description={<Paragraph className="m-0" type="secondary" ellipsis>
                                            {student.email} / {student.mobile}
                                        </Paragraph>}
                                    />
                                </Col>
                                <Col span={8}>
                                    { }
                                    <Form.Item name={student.id}>
                                        <InputNumber min={0} max={100} placeholder="Marks" className="float-end" />
                                    </Form.Item>
                                </Col>
                            </Row>}
                        </>
                    )}
                </Form>
            </Modal>
        </>
    );
}
export default AddSkill;
