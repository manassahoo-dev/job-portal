import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Empty, List, PageHeader } from "antd";
import React, { useState } from "react";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppError from "../utility/AppError";
import AppSpin from "../utility/AppSpin";
import QuizAdd from "./Add";
import QuizCard from "./Card";

function QuizList({ categoryId, quizType }) {

    const [isAdd, setIsAdd] = useState(false);
    const { data, error, loading } = ApiRequest('GET', `${api.QUIZ}/category/${categoryId}`, categoryId);

    return (
        <List
            className="vh65 overflow-auto"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <QuizCard quiz={item} />
            )}
        />
        // <Empty
        //     className={loading ? "d-none" : "vh65 card-center"}
        //     description="No category found">
        //     <Button icon={<PlusOutlined />} onClick={() => setIsAdd(true)}>Add One</Button>
        // </Empty>
    );
}
export default QuizList;