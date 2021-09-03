import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Form, Input, List, message, Modal, PageHeader, Select } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import moment from 'moment';
import { default as React, useContext, useState } from "react";
import { FiEdit, FiTrash } from 'react-icons/fi';
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import apiService from '../../services/api.service';
import ApiRequest from "../../services/ApiRequest";
import AppSpin from '../utility/AppSpin';
import ValidationMessage from '../utility/ValidationMessage';
import BatchStatus from './BatchStatus';

const { confirm } = Modal;
const { Option } = Select;

function EventCard() {
    const name = "events";
    const [form] = Form.useForm();
    const { contextData } = useContext(AppContext);
    const [isAdd, setIsAdd] = useState(false);
    const [lastRefresh, setLastRefresh] = useState(new Date());
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${contextData.batch?.id}/events`, lastRefresh);

    const onFinish = (values) => {
        values.batchId = contextData.batch?.id
        console.log(values);
        apiService.post(`${api.BATCH}/events`, values)
            .then(response => {
                setIsAdd(false);
                setLastRefresh(new Date());
                message.success(`${name} added successfully`);
            }).catch(error => {
                message.error(error);
            }).then(function () {
                // console.info(false);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showDeleteConfirm = (item) => {
        confirm({
            title: `Are you sure delete this Event?`,
            content: `${item.name}`,
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteEntity(item);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const deleteEntity = (item) => {
        apiService.deleteBatchMapping(`${api.BATCH}/${name}`, { "data": item })
            .then((response) => {
                message.success(`${item.name} deleted successfully`);
                setLastRefresh(new Date());
            }).catch((error) => {
                message.error(error.response.message);
            });
    }

    const onEdit = (item) => {
        let formValue = {
            ...item,
            eventDate: item.eventDate && moment(item.eventDate, "YYYY-MM-DD"),
        }
        form.setFieldsValue(formValue);
        setIsAdd(true);
    }

    return (
        <AppSpin loading={loading}>
            <Card className="mb-2">
                <PageHeader
                    className="p-0 mb-1"
                    onBack={isAdd ? () => setIsAdd(false) : ""}
                    title={isAdd ? <span className="ant-page-header-heading-title text-success">Add Event</span> :
                        <span className="ant-page-header-heading-title text-success">Events</span>}
                    extra={!isAdd && <Button type="link" onClick={() => {setIsAdd(true); form.resetFields();}}>Add</Button>}
                />
                {isAdd ?
                    <>
                        <Form
                            form={form}
                            name="Batch Event"
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            validateMessages={ValidationMessage}
                        >
                            <Form.Item hidden name="id"><Input /></Form.Item>
                            <Form.Item hidden name="batchId">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Event Name" name="name" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Event Date" name="eventDate" rules={[{ required: true }]}>
                                <DatePicker className="w-100" />
                            </Form.Item>
                            <Form.Item name="status" label="Status" rules={[{ required: true }]}>
                                <Select placeholder="Status">
                                    <Option value="NOTSTARTED">Non Started</Option>
                                    <Option value="INPROGRESS">In Progress</Option>
                                    <Option value="COMPLETED">Completed</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item className="w-50 m-auto">
                                <Button type="primary" htmlType="submit" block>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </>
                    :
                    <>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item className="px-0" actions={[
                                    <Button type="link" icon={<FiEdit />} onClick={() => onEdit(item)}></Button>,
                                    <Button type="link" danger icon={<FiTrash />} onClick={() => showDeleteConfirm(item)}></Button>
                                ]}>
                                    <BatchStatus status={item.status} />
                                    <List.Item.Meta
                                        title={<b>{item.name}</b>}
                                        description={<Paragraph className="m-0" type="secondary" ellipsis>
                                            {item.eventDate}
                                        </Paragraph>}
                                    />
                                </List.Item>
                            )}
                        />
                    </>
                }
            </Card>
        </AppSpin>
    );
}
export default EventCard;