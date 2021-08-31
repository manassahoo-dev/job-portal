import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Card, message, Modal } from 'antd';
import { useContext } from 'react';
import { FiTrash } from "react-icons/fi";
import { useParams } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';
import api from "../../services/api";
import apiService from "../../services/api.service";

const { confirm } = Modal;
const { Meta } = Card;

function DeleteItem({ param, data, name }) {
    const { contextData } = useContext(AppContext);
    const showDeleteConfirm = (item) => {
        confirm({
            title: `Are you sure delete this ${name}?`,
            content: `${name!== 'student' ? data[name].name : data.firstName + ' '+data.lastName}`,
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteEntity(item);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const deleteEntity = (item) => {
        apiService.deleteBatchMapping(`${api.BATCH}/${name}`, { "data": item })
            .then((response) => {
                message.success(`${name} deleted successfully`);
                param.setLastRefresh(new Date());
            }).catch((error) => {
                message.error(error.response.message);
            });
    }

    return (
        <Button type="link" danger icon={<FiTrash />} onClick={() => showDeleteConfirm(data)}></Button>
    );
}
export default DeleteItem;
