import { Button } from 'antd';
import { useState } from 'react';
import { FiUserPlus } from "react-icons/fi";
import AddQuiz from './AddQuiz';

function MapItem({ param, item, name }) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <>
            {name !== 'course' && <Button type="link" icon={<FiUserPlus />} onClick={showModal}></Button>}

            {name === 'quiz' && <AddQuiz isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} item={item}/>}
        </>
    );
}
export default MapItem;
