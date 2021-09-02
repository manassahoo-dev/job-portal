import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';

function Questions(params) {
    return (
        <Form.List name="questions">
            {(fields, { add, remove }) => (
                <>
                    {fields.map(field => (
                        <Space key={field.key} align="baseline">
                            <Form.Item
                                noStyle
                                shouldUpdate={(prevValues, curValues) =>
                                    prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                                }
                            >
                                {() => (
                                    <Form.Item
                                        {...field}
                                        label="Question"
                                        name={[field.name, 'question']}
                                        fieldKey={[field.fieldKey, 'question']}
                                        rules={[{ required: true, message: 'Missing question' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                )}
                            </Form.Item>
                            <Form.Item
                                {...field}
                                label="Answer"
                                name={[field.name, 'answer']}
                                fieldKey={[field.fieldKey, 'answer']}
                                rules={[{ required: true, message: 'Missing answer' }]}
                            >
                                <Input />
                            </Form.Item>

                            <MinusCircleOutlined onClick={() => remove(field.name)} />
                        </Space>
                    ))}

                    <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                            Add Questions
                        </Button>
                    </Form.Item>
                </>
            )}
        </Form.List>
    )
}
export default Questions