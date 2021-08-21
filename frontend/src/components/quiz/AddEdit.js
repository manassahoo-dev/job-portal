import { Button, Card, Form, Input, message, Space } from "antd";
import React, { useContext } from 'react';
import QuizContext from "../../contexts/QuizContext";
import api from "../../services/api";
import apiService from "../../services/api.service";
import ValidationMessage from "../utility/ValidationMessage";
import Question from "./Question";

const { TextArea } = Input;

function QuizAddEdit() {

    const [form] = Form.useForm();
    const { quizData, setQuizData } = useContext(QuizContext);
    form.setFieldsValue(quizData.selectedQuiz);
    form.setFieldsValue({ quizType: quizData.quizType });

    const onFinish = (values) => {
        const updatedValues = {
            ...values,
            categoryId: quizData.categoryId,
        }

        create(updatedValues);
        // values.id ? update(updatedValues) : create(updatedValues)
    };

    const create = (values) => {
        apiService.create(api.QUIZ, values)
            .then((response) => {
                message.success('Quiz added successfully');
                setQuizData({ ...quizData, isAddEdit: false, selectedQuiz: null })
                form.resetFields();
            })
            .catch((error) => {
                message.error(error.response.data.message);
            });
    }

    const update = (values) => {
        apiService.update(api.QUIZ, values.id, values)
            .then((response) => {
                message.success('Quiz updated successfully');
                setQuizData({ ...quizData, isAddEdit: false, selectedQuiz: null })
                form.resetFields();
            })
            .catch((error) => {
                message.error(error.response.data.message);
            });
    }

    const onFinishFailed = (errorInfo) => {
        console.info(errorInfo.values);
    };

    const onCancel = () => {
        setQuizData({ ...quizData, isAddEdit: false, selectedQuiz: null })
    }

    return (
        <Card>
            <Form
                layout="vertical"
                className="vh65"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                validateMessages={ValidationMessage}
            >
                <Form.Item label="id" name="id" hidden><Input /></Form.Item>
                <Form.Item label="Quiz Type" name="quizType" hidden><Input /></Form.Item>
                <Form.Item label="Quiz Name" name="name" rules={[{ required: true }]}><Input /></Form.Item>
                <Form.Item label="Quiz Description" name="description" ><TextArea rows={3} /></Form.Item>
                <h4>Questions</h4>
                <Question />
                <Form.Item className="float-end">
                    <Space>
                        <Button type="primary" htmlType="submit">{quizData.selectedQuiz?.id ? 'Update' : 'Add'} Quiz</Button>
                        <Button onClick={onCancel}>Cancel</Button>
                    </Space>
                </Form.Item>
            </Form>
        </Card>
    );
}
export default QuizAddEdit;