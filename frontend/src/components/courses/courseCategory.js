import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, message, PageHeader, Row } from "antd";
import React, { useState } from "react";
import api from "../../services/api";
import apiService from "../../services/api.service";
import ApiRequest from "../../services/ApiRequest";
import CategoryList from '../category';
import AddNewCourseForm from "./addNewCourseForm";
import CourseDetails from "./courseDetails";

function CourseCategory(params) {

    const [form] = Form.useForm();
    const [isAddCategory, setIsAddCategory] = useState(false);
    const [isAddCourse, setIsAddCourse] = useState(false);
    const [category, setCategory] = useState(null);
    const { data, error, loading } = ApiRequest('GET', api.categories, isAddCategory);
    const [formData, setFormData] = useState({
        subCatName: '',
        duration: '',
        days: '',
        description: '',
        syllabus: ''
    })
    const [isEdit, setIsEdit] = useState(false)

    const validateMessages = {
        required: '${label} is required',
    };
    const onFinish = (values) => {
        const today = new Date();
        const data = {
            ...values,
            'createdAt': today,
            'updatedAt': today
        };
        apiService.create(api.categories, data)
            .then((response) => {
                setIsAddCategory(false);
            })
            .catch((error) => {
                message.error(error.response.message);
            });;
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.error(errorInfo);
    };

    const onEdit = (e) => {
        console.log(e)
        setFormData(e)
        setIsEdit(true)
        setIsAddCourse(true)
    }

    const manageStates = () => {
        setIsAddCourse(false)
        setIsEdit(false)
    }

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                < CategoryList setCategory={setCategory} setIsAddCourse={setIsAddCourse}/>
            </Col>

            <Col xs={24} sm={12} md={16} lg={16} xl={16}>
                {category !== null &&
                    <>
                        <PageHeader
                            className="p-0 mb-2"
                            title={category.name}
                            extra={!isAddCourse && [
                                <Button type="primary" block onClick={() => setIsAddCourse(true)} icon={<PlusOutlined />}>Add New Course</Button>,
                            ]}
                        />
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={24} md={16} lg={10} xl={10}>
                                <CourseDetails category={category.name}
                                    onEdit={onEdit.bind(this)}
                                />
                            </Col>
                            <Col xs={24} sm={24} md={16} lg={14} xl={14}>
                                {isAddCourse &&
                                    <AddNewCourseForm isAddCourse={isAddCourse} isEdit={isEdit} manageStates={manageStates.bind()} formData={formData} />
                                }
                            </Col>

                        </Row>
                    </>
                }
            </Col>
        </Row>
    );
}
export default CourseCategory;