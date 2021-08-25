import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, List, Row, Select } from "antd";
import React from "react";

function Answer(props) {

    return (
        <Form.List name={[props.fieldKey, "answers"]}>
            {(answers, { add, remove }) => {
                return (
                    <div>
                        <Row>
                            <Col span="12"><h4>Answer options</h4></Col>
                            <Col span="12">
                                <Button type="link" className="float-end" type="text" shape="circle" icon={<PlusOutlined />} onClick={() => { add(); }} />
                            </Col>
                        </Row>

                        <List itemLayout="horizontal">
                            {answers.map((answer, index2) => (
                                <List.Item
                                    className="border-0 p-0 align-items-start"
                                    actions={[<Button className="m-0" danger type="text" shape="circle" icon={<DeleteOutlined />} onClick={() => { remove(answer.name); }} />]}>
                                    <List.Item.Meta
                                        avatar={
                                            <Form.Item
                                                {...answer}
                                                className="m-0"
                                                name={[answer.name, "correct"]}
                                                fieldKey={[answer.fieldKey, "correct"]}
                                                key={[answer.fieldKey, "correct"]}
                                                valuePropName="checked"
                                            >
                                                <Checkbox />
                                            </Form.Item>
                                        }
                                        title={<Form.Item
                                            {...answer}
                                            className="m-0"
                                            name={[answer.name, "text"]}
                                            fieldKey={[answer.fieldKey, "text"]}
                                            key={[answer.fieldKey, "text"]}
                                            rules={[
                                                { required: true, message: 'Answer can not be blank' }
                                            ]}
                                        >
                                            <Input placeholder="Answer" />
                                        </Form.Item>}
                                    />
                                </List.Item>
                            ))}
                        </List>
                    </div>
                );
            }}
        </Form.List>
    );
}

export default Answer;
