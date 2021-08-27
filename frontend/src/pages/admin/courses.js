import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, PageHeader, Row } from "antd";
import React, { useEffect, useState } from "react";
import CategoryList from '../../components/category/index';
import CourseList from '../../components/course';
import AddEditCourse from '../../components/course/AddEdit';
import CourseCards from '../../components/course/Card';
import AppContext from '../../contexts/AppContext';

function Courses() {

    const [category, setCategory] = useState(null);

    const object = {
        selectedItem: {},
        isAddEdit: false,
        categoryId: category?.id
    }
    const [contextData, setContextData] = useState(object);
    useEffect(() => {
        setContextData({ ...contextData, isAddEdit: false, categoryId: category?.id })
    }, [category]);

    return (
        <AppContext.Provider value={{ contextData, setContextData }}>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    < CategoryList setCategory={setCategory} id={contextData.categoryId} groupBy="course"/>
                </Col>

                <Col xs={24} sm={12} md={16}>
                    {category &&
                        <>
                            <PageHeader
                                className="p-0 mb-2"
                                title={category.name}
                                extra={!contextData.isAddEdit && [
                                    <Button type="primary" block onClick={() => setContextData({ ...contextData, isAddEdit: true })} icon={<PlusOutlined />}>Add New Course</Button>,
                                ]}
                            />
                            <Row gutter={[16, 16]}>
                                <CourseList />
                                <Col xs={24} sm={12}>
                                    {contextData.isAddEdit &&
                                        <AddEditCourse />
                                    }
                                </Col>
                            </Row>
                        </>
                    }
                </Col>
            </Row>
        </AppContext.Provider>
    )
}
export default Courses