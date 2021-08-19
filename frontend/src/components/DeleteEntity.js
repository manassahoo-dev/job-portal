import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Card, message, Modal, Tooltip } from 'antd';
import api from '../services/api';
import ApiService from "../services/api.service";
import ApiRequest from '../services/ApiRequest';
import ACTIONTYPES from './utility/ACTIONTYPES';

const { confirm } = Modal;
const { Meta } = Card;

function DeleteEntity({ entityName, item, url, setActionPerformed }) {

    const showDeleteConfirm = (item) => {
        setActionPerformed(ACTIONTYPES.delete)
        confirm({
            title: <Card>
                <Meta
                    title={`Are you sure delete this ${entityName}?`}
                    description={item.mobile}
                />
            </Card>,
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteEntity(item.id);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const deleteEntity = (id) => {
        ApiService.delete(url, id)
            .then((response) => {
                setActionPerformed(ACTIONTYPES.none)
                message.info(`${entityName} deleted successfully!!`);
            })
            .catch((error) => {
                message.error(error.response.message);
            });;;
    }

    return (
        <Tooltip title="Delete">
            <Button danger size="small" shape="circle" icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(item)} />
        </Tooltip>
    );
}
export default DeleteEntity;
