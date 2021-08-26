import { Button, Checkbox, Form, List, Row, Typography } from 'antd';
import React from "react";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";

const { Paragraph, Text } = Typography;

function AddItem({ isAdd, path, ids }) {

    const { data, error, loading } = ApiRequest('GET', path, isAdd);

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
        >
            <Form.Item name="courseIds">
                <Row>
                    <Checkbox.Group className="w-100">
                        <List
                            footer={
                                <Button type="primary" htmlType="submit" block>
                                    Add
                                </Button>}
                            bordered
                            dataSource={data}
                            renderItem={course => (
                                <List.Item>
                                    <Checkbox value={course.id} disabled={ids.includes(course.id)}>
                                        {course.name}
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