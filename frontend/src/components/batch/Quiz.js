import { Button, Card, PageHeader } from 'antd';
import React, { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppSpin from '../utility/AppSpin';
import toSentenceCase from '../utility/util';
import AddItem from './Add';
import ListItem from './List';

function QuizCard({ quizType }) {
    const name = "quiz";
    const { contextData } = useContext(AppContext);
    const [isAdd, setIsAdd] = useState(false);
    const [lastRefresh, setLastRefresh] = useState(new Date());
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${contextData.batch?.id}/quizes?quizType=${quizType}`, lastRefresh);

    const param = {
        setLastRefresh: setLastRefresh,
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
                {isAdd ? <AddItem param={param} name={name} /> : <ListItem param={param} data={data} name={name} />}
            </Card>
        </AppSpin>
    );
}
export default QuizCard;