import { Col, List } from "antd";
import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import QuizCard from "./Card";

function QuizList() {
    const { contextData } = useContext(AppContext);
    const { data, error, loading } = ApiRequest('GET', `${api.QUIZ}/category/${contextData.categoryId}?quizType=${contextData.quizType}`, contextData);

    return (
        <>
            {contextData.isAddEdit ? <Col span={12}>
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