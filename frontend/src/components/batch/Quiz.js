import { Button, Card, Checkbox, Col, Form, List, PageHeader, Row } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import React, { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppSpin from '../utility/AppSpin';
import toSentenceCase from '../utility/util';
import AddItem from './Add';

function QuizCard({ quizType}) {
    const { contextData } = useContext(AppContext);
    const [isAdd, setIsAdd] = useState(false);
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${contextData.batch?.id}/quizes?quizType=${quizType}`, isAdd);

    const param = {
        isAdd: isAdd,
        setIsAdd: setIsAdd,
        path: `${api.QUIZ}/type/${quizType}`,
        existingIds: data.map(({ id }) => id.quizId),
        name: "quizIds",
        batchId: contextData.batch?.id
    }
    return (
        <AppSpin loading={loading}>
            <Card>
                <PageHeader
                    className="p-0 mb-1"
                    onBack={isAdd ? () => setIsAdd(false) : ""}
                    title={toSentenceCase(quizType)}
                    extra={!isAdd && <Button type="link" onClick={() => setIsAdd(true)}>Add</Button>}
                />
                {isAdd ?
                    <AddItem param={param} />
                    :

                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item className="px-0">
                                <List.Item.Meta
                                    title={<b>{item.quiz.name}</b>}
                                    description={<Paragraph type="secondary" ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                                        {item.quiz.description}
                                    </Paragraph>}
                                />
                            </List.Item>
                        )}
                    />
                }
            </Card>
        </AppSpin>
    );
}
export default QuizCard;