import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, MoreOutlined } from '@ant-design/icons';
import { Card, Descriptions, Dropdown, Menu, Rate } from "antd";
import Meta from 'antd/lib/card/Meta';
import confirm from 'antd/lib/modal/confirm';
import { duration } from 'moment';


function CourseDetails(props) {

    const categoryName = props.category;
    const formData = {
        subCatName: 'Nursing Training',
        duration: '30 Days',
        days: 'Mon-Fri',
        description: 'A range of education options from basic certification to post-graduate studies is available when you choose nursing as your career.',
        syllabus: 'Collecting patient information Supporting patient evaluationAdministering treatments and medications as needed  Educating patients.'
    }
    const handleMenuClick = (e) => {
        console.log('click', e.key);

        if (e.key === 'edit') {
            props.onEdit(formData)
        }
        if (e.key === 'delete') {
            confirm({
                title: <Card>
                    <Meta
                        title='Are you sure delete this Course?'
                        description={`${formData.subCatName} - ${formData.duration}`}
                    />
                </Card>,
                icon: <ExclamationCircleOutlined />,
                okText: 'Yes',
                okType: 'danger',
                cancelText: 'No',
                onOk() {
                    console.log('onOk');
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="edit" icon={<EditOutlined />}>
                Edit
            </Menu.Item>
            <Menu.Item key="delete" icon={<DeleteOutlined />} >
                Delete
            </Menu.Item>
        </Menu>
    )
    return (
        <>
            <Card title={categoryName}
                extra={
                    <Dropdown.Button icon={<MoreOutlined />} overlay={menu}>
                    </Dropdown.Button>
                }
                hoverable>
                <Rate defaultValue={3} />
                <Descriptions title="Course Info">
                </Descriptions>
                <p>Duration - {categoryName}</p>
                <p>In week - {categoryName}</p>
                <p>Description - {categoryName}</p>
            </Card>
        </ >
    )
}
export default CourseDetails