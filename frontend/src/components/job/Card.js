import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, MoreOutlined, SettingOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Card, Dropdown, List, Menu, message, Modal, Popover, Rate, Typography } from "antd";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import apiService from "../../services/api.service";

const { confirm } = Modal;
const { Meta } = Card;
const { Text, Link } = Typography;

function JobCard({ job }) {

    const { contextData, setContextData } = useContext(AppContext);

    const handleMenuClick = (e) => {
        e.key === "edit" ? setContextData({ ...contextData, isAddEdit: true, selectedItem: job }) : showConfirmDelete();

    }


    const showConfirmDelete = () => {
        confirm({
            title: 'Do you Want to delete this job?',
            icon: <ExclamationCircleOutlined />,
            content: job.name,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deletejob();
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const deletejob = () => {
        apiService.delete(api.JOB, job.id)
            .then((response) => {
                message.success('Job deleted successfully');
                setContextData({ ...contextData, isAddEdit: false, selectedItem: null })
            })
            .catch((error) => {
                message.error(error.response.data.message);
            });
    }

    const actions = (<Menu onClick={handleMenuClick}>
        <Menu.Item key="edit" icon={<EditOutlined />}>
            Edit
        </Menu.Item>
        <Menu.Item danger key="delete" icon={<DeleteOutlined />} >
            Delete
        </Menu.Item>
    </Menu>);

    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    return (
        <Card
            bordered={false}
            className={contextData.selectedItem?.id === job.id && "active"}
            title={job.jobTitle}
            actions={[
                <Popover content={content} title="Title">
                    <Button type="primary">Hover me</Button>
                </Popover>,
                // <Button type="default" block onClick={viewDetails()}>Details</Button>,
                <Button type="primary" block>Apply</Button>
                // <SettingOutlined key="setting" />,
                // <EditOutlined key="edit" />,
                // <EllipsisOutlined key="ellipsis" />,
            ]}
            extra={
                <a><Dropdown overlay={actions} placement="bottomRight">
                    <MoreOutlined />
                </Dropdown></a>
            }>
            <Meta
                title="Company Name"
                description={job.companyName}
            />
            <Meta
                title="Description"
                description={job.jobDescription}
            />
            <Meta
                title="Responsibilities"
                description={job.rolesAndResponsibilities}
            />
        </Card>
    );
}
export default JobCard;