import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Select } from "antd";
import React from "react";
import Answer from "./Answer";

function Question(props) {
    return (
        <Form.List name="questions">
            {(fields, { add, remove }) => {
                return (
                    <Card bordered={false} size="small" title="Questions" extra={<Button type="link" onClick={() => { add(); }}><PlusOutlined /> Add Question</Button>} >
                        {fields.map((field, index) => (
                            <Card bordered={false} size="small" title={`Question ${index + 1}`} extra={<a href="#"><MinusCircleOutlined
                                onClick={() => {
                                    remove(field.name);
                                    console.log(field);
                                }}
                            /></a>} >
                                <Form.Item
                                    {...field}
                                    name={[field.name, "text"]}
                                    fieldKey={[field.fieldKey, "text"]}
                                    rules={[
                                        { required: true, message: 'Question can not be blank' }
                                    ]}
                                >
                                    <Input placeholder="Question" />
                                </Form.Item>

                                <Form.Item>
                                    <Answer fieldKey={field.name} />
                                </Form.Item>
                            </Card>
                        ))}
                    </Card>
                );
            }}
        </Form.List>

    );
}

export default Question;
