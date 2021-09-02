import { Button } from 'antd';
import { useState } from 'react';
import { FiUserPlus } from "react-icons/fi";
import AddCounselling from './AddCounselling';
import AddQuiz from './AddQuiz';
import AddSkill from './AddSkill';

function MapItem({ param, item, name }) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <>
            {name !== 'course' && <Button type="link" icon={<FiUserPlus />} onClick={showModal}></Button>}

            {name === 'quiz' && <AddQuiz isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} item={item} />}

            {name === 'counselling' && <AddCounselling isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} item={item} />}

            {name === 'skillSet' && <AddSkill isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} item={item} />}
        </>
    );
}
export default MapItem;
