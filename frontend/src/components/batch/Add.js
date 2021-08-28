import { Button, Checkbox, Form, List, message, Row, Typography } from 'antd';
import React, { useState } from "react";
import ApiRequest from "../../services/ApiRequest";
import apiService from "../../services/api.service";
import api from "../../services/api";

const { Paragraph, Text } = Typography;

function AddItem({ param }) {

    const { data, error, loading } = ApiRequest('GET', param.path, param.isAdd);
    const [checked, setChecked] = useState([]);
    const onFinish = (values) => {
        let body = {
            batchId: param.batchId,
            [param.name]: checked
        }
        apiService.post(`${api.BATCH}/mapping`, body).then(response => {
            param.setIsAdd(false);
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
                            footer={
                                <Button type="primary" htmlType="submit" block disabled={checked.length === 0}>
                                    Add
                                </Button>}
                            bordered
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <Checkbox value={item.id} disabled={param.existingIds.includes(item.id)}>
                                        {item.name}
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