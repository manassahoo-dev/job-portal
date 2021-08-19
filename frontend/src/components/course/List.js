import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, PageHeader, Row } from "antd";
import React, { useState } from "react";
import CategoryList from '../category';
import AddEditCourse from './AddEdit';
import CourseDetails from "./Details";

function CourseList() {

    const [isAddItem, setIsAddItem] = useState(false);
    const [category, setCategory] = useState(null);
    const [formData, setFormData] = useState({
        subCatName: '',
        duration: '',
        days: '',
        description: '',
        syllabus: ''
    })
    const [isEdit, setIsEdit] = useState(false)

    const onEdit = (e) => {
        console.log(e)
        setFormData(e)
        setIsEdit(true)
        setIsAddItem(true)
    }

    const manageStates = () => {
        setIsAddItem(false)
        setIsEdit(false)
    }

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                < CategoryList setCategory={setCategory} setIsAddItem={setIsAddItem} />
            </Col>

            <Col xs={24} sm={12} md={16} lg={16} xl={16}>
                {category !== null &&
                    <>
                        <PageHeader
                            className="p-0 mb-2"
                            title={category.name}
                            extra={!isAddItem && [
                                <Button type="primary" block onClick={() => setIsAddItem(true)} icon={<PlusOutlined />}>Add New Course</Button>,
                            ]}
                        />
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={24} md={16} lg={10} xl={10}>
                                <CourseDetails category={category.name}
                                    onEdit={onEdit.bind(this)}
                                />
                            </Col>
                            <Col xs={24} sm={24} md={16} lg={14} xl={14}>
                                {isAddItem &&
                                    <AddEditCourse isEdit={isEdit} manageStates={manageStates.bind()} formData={formData} />
                                }
                            </Col>

                        </Row>
                    </>
                }
            </Col>
        </Row>
    );
}
export default CourseList;