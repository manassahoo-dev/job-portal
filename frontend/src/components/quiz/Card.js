import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, MoreOutlined } from '@ant-design/icons';
import { Card, Dropdown, List, Menu, message, Modal, Typography } from "antd";
import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import api from "../../services/api";
import apiService from "../../services/api.service";

const { confirm } = Modal;
const { Text } = Typography;

function QuizCard({ quiz }) {

    const { contextData, setContextData } = useContext(AppContext);

    const handleMenuClick = (e) => {
        e.key === "edit" ? setContextData({ ...contextData, isAddEdit: true, selectedItem: quiz }) : showConfirmDelete();

    }

    const options = ['a', 'b', 'c', 'd', 'e', 'f'];

    const showConfirmDelete = () => {
        confirm({
            title: 'Do you Want to delete this Quiz?',
            icon: <ExclamationCircleOutlined />,
            content: quiz.name,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteQuiz();
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const deleteQuiz = () => {
        apiService.delete(api.QUIZ, quiz.id)
            .then((response) => {
                message.success('Quiz deleted successfully');
                setContextData({ ...contextData, isAddEdit: false, selectedItem: null })
            })
            .catch((error) => {
                message.error(error.response.data.message);
            });
    }

    const actions = (<Menu onClick={handleMenuClick}>
        <Menu.Item key="edit" icon={<EditOutlined />}>
            Edit
        </Menu.Item>
        <Menu.Item danger key="delete" icon={<DeleteOutlined />} >
            Delete
        </Menu.Item>
    </Menu>);

    return (
        <Card
            bordered={false}
            className={contextData.selectedItem?.id === quiz.id && "active"}
            title={quiz.name}
            extra={
                <a><Dropdown overlay={actions} placement="bottomRight">
                    <MoreOutlined />
                </Dropdown></a>
            }>
            <List
                size="small"
                dataSource={quiz.questions}
                renderItem={(question, index) => (
                    <List.Item key={index}>
                        <List.Item.Meta
                            avatar={<Text type="success">{index + 1}</Text>}
                            title={<Text strong>{question.text}</Text>}
                            description={question.answers.map((answer, index) =>
                                <Text type={answer.correct ? "success" : ""}>{options[index]}) {answer.text}<br/></Text>)}
                        />
                    </List.Item>
                )}
            />
        </Card>
    );
}
export default QuizCard;