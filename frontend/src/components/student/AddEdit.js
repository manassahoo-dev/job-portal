import { Button, Calendar, Card, Col, DatePicker, Form, Input, message, Row, Select, Space, Upload } from "antd"
import { Option } from "antd/lib/mentions";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import apiService from "../../services/api.service";
import ACTIONTYPES from "../utility/ACTIONTYPES";
import ValidationMessage from "../utility/ValidationMessage";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

import * as moment from "moment";

function AddEditStudent() {

    const [form] = Form.useForm();
    const { contextData, setContextData } = useContext(AppContext);

    if (contextData.isActionPerformed === ACTIONTYPES.edit) {
        form.setFieldsValue({ ...contextData.selectedItem, dateOfBirth: moment(contextData.selectedItem.dateOfBirth) })
    }


    const onFinish = (values) => {
        console.log('Success:', values);
        if (contextData.isActionPerformed === ACTIONTYPES.add) {
            const updatedValues = {
                ...values,
                role: "JOB_SEEKER",
                profilePic: values.file && values.file[0].response
            }
            apiService.create(api.STUDENT, updatedValues)
                .then((response) => {
                    message.success(`${updatedValues.firstName} added Successfully`);
                    resetContextData()
                })
                .catch((error) => {
                    message.error(error.response.data.message);
                });;
        }
        if (contextData.isActionPerformed === ACTIONTYPES.edit) {
            const updatedValues = {
                ...contextData.selectedItem,
                ...values,
                role: "JOB_SEEKER",
                profilePic: values.file && values.file[0].response
            }
            console.log(contextData.selectedItem)
            apiService.create(api.STUDENT, updatedValues)
                .then((response) => {
                    message.success(`${updatedValues.firstName} updated Successfully`);
                    resetContextData()
                })
                .catch((error) => {
                    message.error(error.response.data.message);
                });;
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onCancel = () => {
        resetContextData()
    }

    const resetContextData = () => {
        setContextData({
            ...contextData,
            selectedItem: {},
            isActionPerformed: ACTIONTYPES.none
        })
    }

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return (
        <Card hoverable>
            <Form
                layout="vertical"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                validateMessages={ValidationMessage}
            >

                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item label="Email Id" name="email" rules={[{ required: true }]}><Input allowClear /></Form.Item>
                        <Form.Item label="Mobile Number" name="mobile" rules={[{ required: true }, { pattern: new RegExp("^\\d{10}$"), message: 'Please enter a valid Mobile' }]}><Input allowClear /></Form.Item>
                        <Form.Item label="First Name" name="firstName"><Input allowClear /></Form.Item>
                        <Form.Item label="Last Name" name="lastName"><Input allowClear /></Form.Item>
                        <Form.Item label="Gender" name="gender" > <Select
                            defaultValue={contextData.selectedItem?.gender}
                            onChange={e => form.setFieldsValue({ gender: e })}
                            allowClear
                        >
                            <Option value="M">Male</Option>
                            <Option value="F">Female</Option>
                            <Option value="O">Other</Option>
                        </Select></Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item label="DOB" name="dateOfBirth">
                            <DatePicker onChange={e => form.setFieldsValue({ dateOfBirth: e })} />
                        </Form.Item>
                        <Form.Item label="Aadhaar Number" name="idNumber"
                            rules={[{ required: true, },
                            { pattern: new RegExp("^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$"), message: 'Please enter a valid Adhar' }]}
                        >
                            <Input allowClear />
                        </Form.Item>
                        {/* <Form.Item label="Mother Name" name="motherName"><Input allowClear /></Form.Item> */}
                        <Form.Item label="Father Name" name="fatherName"><Input allowClear /></Form.Item>
                        <Form.Item label="Address" name="address"><Input allowClear /></Form.Item>
                        <Form.Item label="Student Type" name="studentType">
                            <Select
                                defaultValue={contextData.selectedItem?.studentType}
                                onChange={e => form.setFieldsValue({ studentType: e })}
                                allowClear
                            >
                                <Option value="Study and Job">Study and Job</Option>
                                <Option value="Study">Study</Option>
                                <Option value="Job">Job</Option>
                            </Select>
                        </Form.Item>


                    </Col>

                </Row>
                <Form.Item
                    name="file"
                    label="Upload profile Picture"
                    valuePropName="file"
                    getValueFromEvent={normFile}
                >
                    <Upload name="file" action={api.PROFILEUPLOAD} listType="picture" maxCount={1}>
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>

                {/* <Form.Item label="Documents">
                    <Form.Item name="file" valuePropName="file" getValueFromEvent={normFile} noStyle>
                        <Upload.Dragger name="file" action={api.FILEUPLOAD}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item> */}
                <Space className="float-end">
                    <Button type="primary" htmlType="submit">Save</Button>
                    <Button type="default" htmlType="reset" onClick={onCancel}>Cancel</Button>
                </Space>

            </Form>
        </Card>
    )
}
export default AddEditStudent