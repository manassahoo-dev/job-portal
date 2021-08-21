import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Card } from "antd";
import React from "react";
import Answer from "./Answer";

const { Option } = Select;

function Question(props) {
    return (
        <Form.List name="questions">
            {(fields, { add, remove }) => {
                return (
                    <>
                        {fields.map((field, index) => (
                            <Card size="small" title={`Question ${index + 1}`} extra={<a href="#"><MinusCircleOutlined
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
                                        { required: true }
                                    ]}
                                >
                                    <Input placeholder="Question" />
                                </Form.Item>

                                <Form.Item>
                                    <Answer fieldKey={field.name} />
                                </Form.Item>
                            </Card>
                        ))}

                        <Button
                            type="dashed"
                            onClick={() => {
                                add();
                            }}
                            block
                        >
                            <PlusOutlined /> Add Question
                        </Button>
                    </>
                );
            }}
        </Form.List>

    );
}

export default Question;
