import { Modal } from 'antd';
import { useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext';
import api from '../../services/api';
import ApiRequest from '../../services/ApiRequest';

function AddQuiz({ isModalVisible, setIsModalVisible, item  }) {
    console.log(item);
    const { contextData } = useContext(AppContext);
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${contextData.batch?.id}/students`, contextData.lastRefresh);
    let students = data;
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
            <Modal title="Quiz Modal" visible={isModalVisible} okText="Submit" onOk={handleOk} onCancel={handleCancel}>
                {students.map((student, index) => <p>{student.email}</p>)}
            </Modal>
        </>
    );
}
export default AddQuiz;
