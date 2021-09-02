import { Button, Checkbox, Form, List, message, Row, Typography } from 'antd';
import React, { useState } from "react";
import api from "../../services/api";
import apiService from "../../services/api.service";
import ApiRequest from "../../services/ApiRequest";

const { Text } = Typography;
function AddItem({ param, name }) {

    const { data, error, loading } = ApiRequest('GET', param.path, param.isAdd);
    const [checked, setChecked] = useState([]);
    const onFinish = (values) => {
        let body = {
            batchId: param.batchId,
            [param.name]: checked
        }
        apiService.post(`${api.BATCH}/mapping`, body).then(response => {
            param.setIsAdd(false);
            param.setLastRefresh(new Date());
            message.success(`${name} added successfully`);
        }).catch(error => {
            message.error(error);
        }).then(function () {
            // console.info(false);
        });
    };

    function onChange(checkedValues) {
        setChecked(checkedValues);
    }

    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
        >
            <Form.Item name="courseIds" valuePropName="checked">
                <Row>
                    <Checkbox.Group className="w-100" onChange={onChange}>
                        <List
                            pagination={{hideOnSinglePage: true}}
                            footer={
                                <Button type="primary" htmlType="submit" className="w-50 m-auto d-block" disabled={checked.length === 0}>
                                    Add
                                </Button>}
                            bordered
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <Checkbox value={item.id} disabled={param.existingIds.includes(item.id)}>
                                        {param.name === 'studentIds' ? <>
                                            <Text strong>{item.firstName + ' ' + item.lastName}</Text><br />
                                            <Text type="secondary">{item.idNumber}</Text>
                                        </> : item.name}
                                    </Checkbox>
                                </List.Item>
                            )}
                        />
                    </Checkbox.Group>
                </Row>
            </Form.Item>

        </Form>
    );
}
export default AddItem;