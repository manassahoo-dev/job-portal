import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Card, Dropdown, Menu, message, Modal, Popover, Typography } from "antd";
import { useContext } from "react";
import { FiBriefcase, FiDollarSign, FiMapPin } from "react-icons/fi";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import apiService from "../../services/api.service";
import StudentList from './Students';

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


    const basicContent = (
        <div>
            <FiDollarSign /><Text >  {job.salaryRange}</Text><br />
            <FiMapPin /><Text >  {job.jobLocation}</Text><br />
            <FiBriefcase /><Text >  {job.experience}</Text><br />
        </div>

    )

    const content = (
        <Card style={{ maxWidth: 500, maxHeight: 500, overflow: 'auto' }}>
            <b>{job.jobTitle}</b>
            {basicContent}
            <Meta title="Job Description" className="my-2" /><Text type='secondary'>{job.jobDescription}</Text>
            <Meta title="Roles and Responsibilities" className="my-2" /><Text type='secondary'>{job.rolesAndResponsibilities}</Text>
            <Meta title="Eligibility Criteria" className="my-2" /><Text type='secondary'>{job.eligibilityCriteria}</Text>
        </Card>
    );

    return (
        <Card
            bordered={false}
            className={contextData.selectedItem?.id === job.id && "active"}
            title={job.jobTitle}
            actions={[
                <Popover content={content} placement='right'>
                    <Button type="default">Details</Button>
                </Popover>,
                <StudentList job={job} />
            ]}
            extra={
                <a><Dropdown overlay={actions} placement="bottomRight">
                    <MoreOutlined />
                </Dropdown></a>
            }>
            <Meta title={job.companyName} className="mb-2"/>
            {basicContent}
            <br /><Text className="mt-4">  {job.jobDescription}</Text>
        </Card>
    );
}
export default JobCard;