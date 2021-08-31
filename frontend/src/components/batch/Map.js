import { Button, Card, Modal } from 'antd';
import { useContext, useState } from 'react';
import { FiUserPlus } from "react-icons/fi";
import AppContext from '../../contexts/AppContext';

function MapItem({ param, data, name }) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { contextData } = useContext(AppContext);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            {name !== 'course' && <Button type="link" icon={<FiUserPlus />} onClick={showModal}></Button>}
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>{JSON.stringify(data)}</p>
            </Modal>
        </>
    );
}
export default MapItem;
