import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Card, Dropdown, List, Menu, message, Modal, Typography } from "antd";
import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import api from "../../services/api";
import apiService from "../../services/api.service";

const { Text, Link } = Typography;
const { confirm } = Modal;
const { Meta } = Card;

function SkillSetCard({ skillSet }) {

    const { contextData, setContextData } = useContext(AppContext);

    const handleMenuClick = (e) => {
        e.key === "edit" ? setContextData({ ...contextData, isAddEdit: true, selectedItem: skillSet }) : showConfirmDelete();

    }

    const showConfirmDelete = () => {
        confirm({
            title: 'Do you Want to delete this SkillSet?',
            icon: <ExclamationCircleOutlined />,
            content: skillSet.name,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteSkillSet();
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const deleteSkillSet = () => {
        apiService.delete(api.SKILLSET, skillSet.id)
            .then((response) => {
                message.success('SkillSet deleted successfully');
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
            className={contextData.selectedItem?.id === skillSet.id && "active"}
            title={skillSet.name}
            extra={
                <a><Dropdown overlay={actions} placement="bottomRight">
                    <MoreOutlined />
                </Dropdown></a>
            }>
            <List
                size="small"
                dataSource={skillSet.skills}
                renderItem={(skill, index) => (
                    <List.Item key={index}>
                        <List.Item.Meta
                            avatar={<Text type="success">{index + 1}</Text>}
                            title={skill.skill}
                        />
                    </List.Item>
                )}
            />
        </Card>
    );
}
export default SkillSetCard;