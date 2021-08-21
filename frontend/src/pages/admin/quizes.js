
import {
    Button, Col, PageHeader, Row
} from 'antd';
import { useEffect, useState } from 'react';
import CategoryList from '../../components/category';
import QuizList from '../../components/quiz';
import QuizAddEdit from '../../components/quiz/AddEdit';
import { QUIZ_TYPE } from '../../constants/QUIZ_TYPE';
import QuizContext from '../../contexts/QuizContext';

function Quizes(props) {

    const quizType = props.location.pathname.includes("/aptitudes") ? QUIZ_TYPE.APTITUDE : QUIZ_TYPE.EXAM;
    const [category, setCategory] = useState(null);

    const object = {
        selectedQuiz: null,
        isAddEdit: false,
        quizType: quizType,
        categoryId: category?.id
    }

    useEffect(() => {
        setQuizData({ ...quizData, categoryId: category?.id })
    }, [category]);

    const [quizData, setQuizData] = useState(object);

    const toSentenceCase = (value) => {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    }

    return (
        <QuizContext.Provider value={{ quizData, setQuizData }}>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                    < CategoryList setCategory={setCategory} id={quizData.categoryId}/>
                </Col>
                <Col xs={24} sm={12} md={16}>
                    {category &&
                        <>
                            <PageHeader
                                className="p-0 mb-2"
                                title={category.name}
                                extra={[
                                    <Button block onClick={() => setQuizData({ ...quizData, isAddEdit: true })}>Add {toSentenceCase(quizType)}</Button>,
                                ]}
                            />
                            <Row gutter={[16, 16]}>
                                <QuizList />
                                {quizData.isAddEdit && <Col xs={24} sm={12}><QuizAddEdit /></Col>}
                            </Row>
                        </>
                    }
                </Col>
            </Row>
        </QuizContext.Provider>
    );
}
export default Quizes;