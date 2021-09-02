import { Avatar, Button, Descriptions } from "antd";
import Modal from "antd/lib/modal/Modal";
import Title from "antd/lib/typography/Title";
import { useState } from "react";
import toSentenceCase from "../utility/util";
import { UserOutlined } from '@ant-design/icons';
import Text from "antd/lib/typography/Text";

function ProfileView({ record }) {
    const [isProfileView, setIsProfileView] = useState(false);

    const profileView = () => {
        setIsProfileView(true)
    }
    const hideModal = () => {
        setIsProfileView(false)
    };
    return (
        <>
            <Button type="link" size="small" onClick={() => profileView()} > Profile</Button>

            <Modal
                visible={isProfileView}
                onOk={hideModal}
                onCancel={hideModal}
                okText="OK"
                cancelText=""
                footer={null}
            >
                <div className="card-center">
                    <Avatar size={128} icon={<UserOutlined />} className="m-auto my-2" />
                    <hr />
                    <Title className="m-auto" level={2}>{toSentenceCase(record.firstName) + ' ' + toSentenceCase(record.lastName || '')}</Title>
                    <Text className="m-auto">{record.email}</Text>
                    <Text className="m-auto mb-4">{record.mobile}</Text>
                    
                    <Descriptions bordered column={1} size="small">
                        <Descriptions.Item label='Adhar Number'>{record.idNumber || ''}</Descriptions.Item>
                        <Descriptions.Item label='Date Of Birth'>{record.dateOfBirth || ''} </Descriptions.Item>
                        <Descriptions.Item label='Age'>{record.age}</Descriptions.Item>
                        <Descriptions.Item label='Gender '>{record.gender}</Descriptions.Item>
                        <Descriptions.Item label='Student Type'>{record.studentType}</Descriptions.Item>
                    </Descriptions>
                </div>
            </Modal>
        </>
    )
}
export default ProfileView