import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Select, Tooltip } from "antd";
import React from "react";

const { Option } = Select;

function Question(props) {
    return (
        <Form.List name="questions">
            {(fields, { add, remove }) => {
                return (
                    <Card size="small" title="Questions" extra={<Button type="link" onClick={() => { add(); }}><PlusOutlined /> Add Question</Button>} >
                        {fields.length > 0 && fields.map((field, index) => (

                            <Row >
                                <Col flex="auto">
                                    <Form.Item
                                        {...field}
                                        name={[field.name, "text"]}
                                        fieldKey={[field.fieldKey, "text"]}
                                        rules={[
                                            { required: true }
                                        ]}
                                    >
                                        <Input placeholder={`Question ${index+1}`} />
                                    </Form.Item>
                                </Col>
                                <Col flex="48px">
                                    <Button danger type="text" shape="circle" icon={<DeleteOutlined />} onClick={() => {
                                        remove(field.name);
                                        console.log(field);
                                    }} />
                                </Col>
                            </Row>
                        ))}


                    </Card>
                );
            }}
        </Form.List>

    );
}

export default Question;
