import { Button, Card, Col, Form, Input, List, message, PageHeader, Row } from "antd";
import moment from "moment";
import React, { useState } from "react";
import AppError from "../../../components/utility/AppError";
import AppSpin from "../../../components/utility/AppSpin";
import api from "../../../services/api";
import apiService from "../../../services/api.service";
import ApiRequest from "../../../services/ApiRequest";
import CourseDetails from "./courseDetails";


function CourseCategory(params) {

    const [form] = Form.useForm();
    const [isAddCategory, setIsAddCategory] = useState(false);
    const [Category, setCategory] = useState(null);
    const { data, error, loading } = ApiRequest('GET', api.categories, isAddCategory);

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
    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <AppSpin loading={loading}>
                    <Card className='overflow-auto'>
                        <PageHeader
                            className="p-0 mb-2"
                            onBack={isAddCategory ? () => setIsAddCategory(false) : ""}
                            title={isAddCategory ? "Add New Category" : "Category"}
                            extra={!isAddCategory && [
                                <Button type="primary" block onClick={() => setIsAddCategory(true)}>Add New Category</Button>,
                            ]}
                        />
                        {error ? <AppError
                            title="Unable to get Category details"
                            subTitle={error.message}
                        /> :
                            <div className="vh65 overflow-auto">
                                {
                                    isAddCategory ?
                                        <Form
                                            layout="vertical"
                                            form={form}
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                            validateMessages={validateMessages}
                                        >
                                            <Form.Item label="Category Name" name="name" rules={[{ required: true }]}><Input /></Form.Item>
                                            <Form.Item><Button type="primary" htmlType="submit" block>Add New Category</Button></Form.Item>
                                        </Form>
                                        :

                                        <List
                                            itemLayout="horizontal"
                                            dataSource={data}
                                            renderItem={item => (
                                                <List.Item className="px-2" onClick={() => setCategory(item)}>
                                                    <List.Item.Meta
                                                        title={<Button className="p-0" type="link" size="small" >{item.name}</Button>}
                                                        description={`Created At- ${moment(item.startDate).format("Do MMM YY")}`}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                }
                            </div>
                        }
                    </Card>
                </AppSpin>
            </Col>

            <Col xs={24} sm={12} md={16} lg={16} xl={16}>
                {Category !== null &&
                    <>
                        <PageHeader
                            className="p-0 mb-2"
                            onBack={isAddCategory ? () => setIsAddCategory(false) : ""}
                            title={Category.name}
                        />
                        <CourseDetails course={Category} />
                    </>
                }
            </Col>
        </Row>
    );
}
export default CourseCategory;