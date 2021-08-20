import { Col, List } from "antd";
import React, { useContext } from "react";
import QuizContext from "../../contexts/QuizContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import QuizCard from "./Card";

function QuizList() {
    const { quizData } = useContext(QuizContext);
    const { data, error, loading } = ApiRequest('GET', `${api.QUIZ}/category/${quizData.categoryId}?quizType=${quizData.quizType}`, quizData);

    return (
        <>
            {quizData.isAddEdit ? <Col span={12}>
                {data.map((quiz, index) => <Col xs={24} key={index}><QuizCard quiz={quiz} /></Col>)}
            </Col>
                :
                <>{data.map((quiz, index) => <Col xs={24} sm={12} key={index}><QuizCard quiz={quiz} /></Col>)}
                </>
            }
        </>
    );
}
export default QuizList;