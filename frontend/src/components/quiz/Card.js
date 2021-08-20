import { CheckCircleOutlined, DeleteOutlined, EditOutlined, ExclamationCircleOutlined, MoreOutlined } from '@ant-design/icons';
import { Avatar, Card, Dropdown, List, Menu, message, Modal, Tag } from "antd";
import React, { useContext } from 'react';
import QuizContext from '../../contexts/QuizContext';
import api from "../../services/api";
import apiService from "../../services/api.service";

const { confirm } = Modal;
const { Meta } = Card;

function QuizCard({ quiz }) {

    const { quizData, setQuizData } = useContext(QuizContext);

    const handleMenuClick = (e) => {
        e.key === "edit" ? setQuizData({ ...quizData, isAddEdit: true, selectedQuiz: quiz }) : showConfirmDelete();
        
    }

    const showConfirmDelete = () => {
        confirm({
            title: 'Do you Want to delete these items?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
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
                setQuizData({ ...quizData, isAddEdit: false, selectedQuiz: null })
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
            className={quizData.selectedQuiz?.id === quiz.id && "active"}
            title={quiz.name}
            extra={
                <a><Dropdown overlay={actions} placement="bottomRight">
                    <MoreOutlined />
                </Dropdown></a>
            }>
            <List
                dataSource={quiz.questions}
                renderItem={(question, index) => (
                    <List.Item key={index}>
                        <List.Item.Meta
                            avatar={<Avatar>{index + 1}</Avatar>}
                            title={question.text}
                            description={question.answers.map((answer, index) =>
                                <Tag icon={answer.correct && <CheckCircleOutlined />} color={answer.correct ? "success" : ""}>{answer.text}</Tag>)}
                        />
                    </List.Item>
                )}
            />
        </Card>
    );
}
export default QuizCard;