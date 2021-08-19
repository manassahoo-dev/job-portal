import { DeleteOutlined, EditOutlined, MoreOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Avatar, Card, Dropdown, List, Menu, Tag } from "antd";
import React from "react";

const { Meta } = Card;

function QuizCard({ quiz }) {

    const handleMenuClick = (e) => {
        console.log('click', e.key);
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
            title={quiz.name}
            extra={
                <a><Dropdown overlay={actions} placement="bottomRight">
                    <MoreOutlined />
                </Dropdown></a>
            }>
            <List
                dataSource={quiz.questions}
                renderItem={(question, index) => (
                    <List.Item>
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