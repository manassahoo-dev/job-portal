import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Row, Checkbox } from "antd";
import React from "react";

const { Option } = Select;

function Answer(props) {

    const handleCheck = (answer) => {
        console.log(answer);
    }
    return (
        <Form.List name={[props.fieldKey, "answers"]}>
            {(answers, { add, remove }) => {
                return (
                    <div>
                        {answers.map((answer, index2) => (
                            <Row justify="space-around" align="top">
                                <Form.Item
                                    {...answer}
                                    name={[answer.name, "correct"]}
                                    fieldKey={[answer.fieldKey, "correct"]}
                                    key={[answer.fieldKey, "correct"]}
                                >
                                    <Checkbox onChange={() => handleCheck(answer)}/>
                                </Form.Item>
                                <Form.Item
                                    {...answer}
                                    name={[answer.name, "text"]}
                                    fieldKey={[answer.fieldKey, "text"]}
                                    key={[answer.fieldKey, "text"]}
                                    rules={[
                                        {required: true}
                                    ]}
                                >
                                    <Input placeholder="Answer" />
                                </Form.Item>
                                <MinusCircleOutlined
                                    onClick={() => {
                                        remove(answer.name);
                                    }}
                                />
                            </Row>
                        ))}
                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => {
                                    add();
                                }}
                            >
                                <PlusOutlined /> Add Answer
                            </Button>
                        </Form.Item>
                    </div>
                );
            }}
        </Form.List>
    );
}

export default Answer;
