import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Select, Tooltip } from "antd";
import React from "react";

const { Option } = Select;

function Skill(props) {
    return (
        <Form.List name="skills">
            {(fields, { add, remove }) => {
                return (
                    <Card size="small" title="Skills" extra={<Button type="link" onClick={() => { add(); }}><PlusOutlined /> Add skill</Button>} >
                        {fields.length > 0 && fields.map((field, index) => (
                            <Row >
                                <Col flex="auto">
                                    <Form.Item
                                        {...field}
                                        className="mb-1"
                                        name={[field.name, "skill"]}
                                        fieldKey={[field.fieldKey, "skill"]}
                                        rules={[
                                            { required: true, message: 'Can not be blank' }
                                        ]}
                                    >
                                        <Input placeholder={`skill ${index+1}`} />
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

export default Skill;
