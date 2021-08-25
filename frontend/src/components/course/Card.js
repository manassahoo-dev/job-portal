import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, MoreOutlined } from '@ant-design/icons';
import { Card, Col, Descriptions, Dropdown, Empty, List, Menu, Rate } from "antd";
import Meta from 'antd/lib/card/Meta';
import confirm from 'antd/lib/modal/confirm';
import Text from 'antd/lib/typography/Text';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import api from '../../services/api';
import ApiRequest from '../../services/ApiRequest';
import ACTIONTYPES from '../utility/ACTIONTYPES';
import AppSpin from '../utility/AppSpin';


function CourseCards() {

    const { contextData, setContextData } = useContext(AppContext);
    const { data, error, loading } = ApiRequest('GET', `${api.courses}/category/${contextData.categoryId}`, contextData);

    const handleMenuClick = (e, { item }) => {
        console.log('##', item)
        e.key === 'edit' ?
            setContextData({ ...contextData, selectedItem: item, isAddEdit: true }) :
            deleteCourse();
    }

    const deleteCourse = () => {
        confirm({
            title: <Card>
                <Meta
                    title='Are you sure delete this Course?'
                    description={`${data.name} - ${data.duration}`}
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

    return (
        <Col xs={24} md={16} lg={10} xl={24}>
            <AppSpin loading={loading}>
                {data.length ?
                    <List
                        className="overflow-auto"
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item className="px-2">
                                <Card title={item.name}
                                    extra={
                                        <Dropdown
                                            overlay={
                                                <Menu onClick={(e) => { handleMenuClick(e, { item }) }}>
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
                                    <Rate defaultValue={2} />
                                    <Meta
                                        title="Duration"
                                        description={`${item.duration} Days`}
                                    />
                                    <Meta
                                        title="Description"
                                        description={`${item.description}`}
                                    />
                                    <Meta
                                        title="Syllabus"
                                        description={`${item.syllabus}`}
                                    />
                                </Card>
                            </List.Item>

                        )}
                    />

                    :
                    <Empty
                        className="vh65 card-center bg-white"
                        description="No course found">
                    </Empty>
                }
            </AppSpin >
        </Col>
    )
}
export default CourseCards