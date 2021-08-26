import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, MoreOutlined } from '@ant-design/icons';
import { Card, Dropdown, Menu, message, Rate } from "antd";
import Meta from 'antd/lib/card/Meta';
import confirm from 'antd/lib/modal/confirm';
import Text from 'antd/lib/typography/Text';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import api from '../../services/api';
import apiService from '../../services/api.service';


function CourseCard({ course }) {

    const { contextData, setContextData } = useContext(AppContext);

    const handleMenuClick = (e) => {
        e.key === 'edit' ?
            setContextData({ ...contextData, selectedItem: course, isAddEdit: true }) :
            deleteCourse();
    }

    const deleteCourse = () => {
        confirm({
            title: <Card>
                <Meta
                    title='Are you sure delete this Course?'
                    description={`${course.name} - ${course.duration}`}
                />
            </Card>,
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                apiService.delete(api.COURSE, course.id)
                    .then((response) => {
                        message.success('Course deleted successfully');
                        setContextData({ ...contextData, isAddEdit: false, selectedItem: {} })
                    })
                    .catch((error) => {
                        message.error(error.response.data.message);
                    });
            },
            onCancel() {
            },
        });
    }

    return (
        <Card title={course.name}
            extra={
                <Dropdown
                    overlay={
                        <Menu onClick={(e) => { handleMenuClick(e) }}>
                            <Menu.Item key='edit' icon={<EditOutlined />}>
                                Edit
                            </Menu.Item>
                            <Menu.Item danger key='delete' icon={<DeleteOutlined />} >
                                Delete
                            </Menu.Item>
                        </Menu>
                    } placement="bottomRight">
                    <MoreOutlined />
                </Dropdown>
            }
            hoverable
        >
            <Meta
                title="Duration"
            />
            <Text type="secondary">{course.duration} Days </Text>
            <Text type="secondary">In Week 5 Days (Mon - Fri)</Text>
            <br /> <br />
            <Meta
                title="Description"
                description={`${course.description}`}
            /><br />
            <Meta
                title="Syllabus"
                description={`${course.syllabus}`}
            />
        </Card>
    )
}
export default CourseCard