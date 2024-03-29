import { Badge, Button, Card, Form, Input, List, message, PageHeader } from "antd";
import moment from "moment";
import React, { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import apiService from "../../services/api.service";
import ApiRequest from "../../services/ApiRequest";
import AppError from "../utility/AppError";
import AppSpin from "../utility/AppSpin";
import ValidationMessage from "../utility/ValidationMessage";
import BatchStatus from "./BatchStatus";

function BatchList({ setBatch }) {
    
    const { contextData, setContextData } = useContext(AppContext);
    const [form] = Form.useForm();
    const [isAddBatch, setIsAddBatch] = useState(false);
    const { data, error, loading } = ApiRequest('GET', api.BATCH, contextData.lastRefresh);
    
    const onFinish = (values) => {
        apiService.create(api.BATCH, values)
            .then((response) => {
                message.success('New Batch created successfully.');
                setIsAddBatch(false);
                form.resetFields();
                setContextData({ ...contextData, lastRefresh: new Date() })
            })
            .catch((error) => {
                message.error(error.response.data.message);
            });;
    };

    const onFinishFailed = (errorInfo) => {
        console.error(errorInfo);
    };
    return (
        <AppSpin loading={loading}>
            <Card>
                <PageHeader
                    className="p-0 mb-2"
                    onBack={isAddBatch ? () => setIsAddBatch(false) : ""}
                    title={isAddBatch ? "Add New Batch" : "Batch"}
                    extra={!isAddBatch && [
                        <Button type="primary" block onClick={() => setIsAddBatch(true)}>Add New Batch</Button>,
                    ]}
                />
                {error ? <AppError
                    title="Unable to get Batch details"
                    subTitle={error.message}
                /> :
                    <div className="vh65 overflow-auto">
                        {
                            isAddBatch ?
                                <Form
                                    layout="vertical"
                                    form={form}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    validateMessages={ValidationMessage}
                                >
                                    <Form.Item label="Batch Name" name="name" rules={[{ required: true }]}><Input /></Form.Item>
                                    <Form.Item><Button type="primary" htmlType="submit" block>Add New Batch</Button></Form.Item>
                                </Form>
                                :

                                <List
                                    itemLayout="horizontal"
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item 
                                            className={item?.id === contextData?.batch?.id ? "custom-card active" : "custom-card"}
                                        onClick={() => setBatch(item)}>
                                            <BatchStatus status={item.status}/>
                                            <List.Item.Meta
                                                title={<Button className="p-0" type="link" size="small" >{item.name}</Button>}
                                                description={item.status !== 'NOTSTARTED' && `${moment(item.startDate).format("Do MMM YY")} - ${moment(item.endDate).format("Do MMM YY")}`}
                                            />
                                        </List.Item>
                                    )}
                                />
                        }
                    </div>
                }
            </Card>
        </AppSpin>
    );
}
export default BatchList;