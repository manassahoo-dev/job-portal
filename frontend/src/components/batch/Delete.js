import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import { FiTrash } from "react-icons/fi";
import api from "../../services/api";
import apiService from "../../services/api.service";

const { confirm } = Modal;

function DeleteItem({ param, data, name }) {
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
