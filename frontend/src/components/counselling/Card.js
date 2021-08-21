import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, MoreOutlined } from '@ant-design/icons';
import { Card, Dropdown, List, Menu, message, Modal, Typography } from "antd";
import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import api from "../../services/api";
import apiService from "../../services/api.service";

const { Text, Link } = Typography;
const { confirm } = Modal;
const { Meta } = Card;

function CounsellingCard({ counselling }) {

    const { contextData, setContextData } = useContext(AppContext);

    const handleMenuClick = (e) => {
        e.key === "edit" ? setContextData({ ...contextData, isAddEdit: true, selectedItem: counselling }) : showConfirmDelete();
        
    }

    const showConfirmDelete = () => {
        confirm({
            title: 'Do you Want to delete this Counselling ?',
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
        apiService.delete(api.COUNSELLING, counselling.id)
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
            className={contextData.selectedItem?.id === counselling.id && "active"}
            title={counselling.name}
            extra={
                <a><Dropdown overlay={actions} placement="bottomRight">
                    <MoreOutlined />
                </Dropdown></a>
            }>
            <List
                size="small"
                dataSource={counselling.questions}
                renderItem={(question, index) => (
                    <List.Item key={index}>
                        <List.Item.Meta
                            avatar={<Text type="success">{index+1}</Text>}
                            title={question.text}
                        />
                    </List.Item>
                )}
            />
        </Card>
    );
}
export default CounsellingCard;