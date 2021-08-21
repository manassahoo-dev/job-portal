import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Form, Input, Select } from "antd";
import React from "react";
import Answer from "./Answer";

const { Option } = Select;

function Question(props) {
    return (
        <Form.List name="questions">
            {(questions, { add, remove }) => {
                return (
                    <div>
                        {questions.map((field, index) => (
                            <Card size="small" key={field.key} title={`Question ${index + 1}`} extra={questions.length > 1 ? (
                                <Button
                                    type="danger"
                                    className="dynamic-delete-button"
                                    onClick={() => remove(field.name)}
                                    icon={<MinusCircleOutlined />}
                                >
                                    Remove
                                </Button>
                            ) : null}>
                                <Form.Item
                                    name={[index, "text"]}
                                    label="Question"
                                    rules={[{ required: true }]}
                                >
                                    <Input placeholder="Input Question" />
                                </Form.Item>
                                <Answer index={index}/>
                                
                            </Card>
                        ))}
                        <Divider />
                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => add()}
                            >
                                <PlusOutlined /> Add Question
                            </Button>
                        </Form.Item>
                    </div>
                );
            }}
        </Form.List>
    );
}

export default Question;
