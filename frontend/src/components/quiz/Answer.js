import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space } from "antd";
import React from "react";

const { Option } = Select;

function Answer(props) {
    console.log(props);
    return (
        <Form.List name="answers">
            {(fields, { add, remove }) => (
                <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                            <Form.Item
                                name={[props.index, key, 'text']}
                                fieldKey={[props.index, key, 'text']}
                                rules={[{ required: true, message: 'Missing first name' }]}
                            >
                                <Input placeholder={key} />
                            </Form.Item>
                            <MinusCircleOutlined onClick={() => remove(name)} />
                        </Space>
                    ))}
                    <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                            Add field
                        </Button>
                    </Form.Item>
                </>
            )}
        </Form.List>
    );
}

export default Answer;
