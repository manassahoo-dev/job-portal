import { Button, Descriptions } from "antd";
import Modal from "antd/lib/modal/Modal";
import Title from "antd/lib/typography/Title";
import { useState } from "react";
import toSentenceCase from "../utility/util";

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
                title="Student Profile"
                visible={isProfileView}
                onOk={hideModal}
                onCancel={hideModal}
                okText="OK"
                cancelText=""
                footer={null}
            >
                <div className="card-center">
                    <img alt="profile" className="profile-picture"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <hr />
                    <Title level={2}>{toSentenceCase(record.firstName) + ' ' + toSentenceCase(record.lastName || '')}</Title>
                    <Descriptions bordered><Descriptions.Item label='Email'>{record.email || ''}</Descriptions.Item></Descriptions>
                    <Descriptions bordered><Descriptions.Item label='Adhar Number'>{record.idNumber || ''}</Descriptions.Item></Descriptions>
                    <Descriptions bordered><Descriptions.Item label='Mobile Number'>{record.mobile}</Descriptions.Item></Descriptions>
                    <Descriptions bordered><Descriptions.Item label='Date Of Birth'>{record.dateOfBirth || ''} </Descriptions.Item></Descriptions>
                    <Descriptions bordered><Descriptions.Item label='Age'>{record.age}</Descriptions.Item></Descriptions>
                    <Descriptions bordered><Descriptions.Item label='Gender '>{record.gender}</Descriptions.Item></Descriptions>
                    <Descriptions bordered><Descriptions.Item label='Student Type2'>{record.studentType}</Descriptions.Item></Descriptions>
                </div>
            </Modal>
        </>
    )
}
export default ProfileView