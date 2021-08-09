import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Card, Modal, Tooltip, Typography } from 'antd';
import ApiService from "../services/api.service";
import api from '../services/api';

const { confirm } = Modal;
const { Meta } = Card;

function DeleteEntity({ item }) {

    const showDeleteConfirm = (user) => {
        confirm({
            title: <Card cover={<img src={user.image} />}>
                <Meta
                    title='Are you sure delete this User?'
                    description={user.mobile}
                />
            </Card>,
            icon: <ExclamationCircleOutlined />,
            content: <Card cover={<img src={user.image} />}>
                <Meta
                    title={user.email}
                    description={user.mobile}
                />
            </Card>,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteUser(user.id);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const deleteUser = (id) => {
        ApiService.delete(api.users, id);
    }

    return (
        <Tooltip title="Delete">
            <Button danger size="small" shape="circle" icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(item)} />
        </Tooltip>
    );
}
export default DeleteEntity;
