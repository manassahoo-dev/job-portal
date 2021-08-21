
import {
    Button, Col, PageHeader, Row
} from 'antd';
import { useEffect, useState } from 'react';
import CategoryList from '../../components/category';
import AppBreadCrumb from '../../components/layout/AppBreadcrumb';
import QuizList from '../../components/quiz';
import QuizAddEdit from '../../components/quiz/AddEdit';
import { QUIZ_TYPE } from '../../constants/QUIZ_TYPE';
import AppContext from '../../contexts/AppContext';

function Quizes(props) {

    const quizType = props.location.pathname.includes("/aptitudes") ? QUIZ_TYPE.APTITUDE : QUIZ_TYPE.EXAM;
    const [category, setCategory] = useState(null);

    const object = {
        selectedItem: null,
        isAddEdit: false,
        quizType: quizType,
        categoryId: category?.id
    }

    useEffect(() => {
        setContextData({ ...contextData, categoryId: category?.id })
    }, [category]);

    const [contextData, setContextData] = useState(object);

    const toSentenceCase = (value) => {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    }

    return (
        <AppContext.Provider value={{ contextData, setContextData }}>
            <AppBreadCrumb path={toSentenceCase(quizType)} />
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                    < CategoryList setCategory={setCategory} id={contextData.categoryId}/>
                </Col>
                <Col xs={24} sm={12} md={16}>
                    {category &&
                        <>
                            <PageHeader
                                className="p-0 mb-2"
                                title={category.name}
                                extra={[
                                    <Button block onClick={() => setContextData({ ...contextData, isAddEdit: true })}>Add {toSentenceCase(quizType)}</Button>,
                                ]}
                            />
                            <Row gutter={[16, 16]}>
                                <QuizList />
                                {contextData.isAddEdit && <Col xs={24} sm={12}><QuizAddEdit /></Col>}
                            </Row>
                        </>
                    }
                </Col>
            </Row>
        </AppContext.Provider>
    );
}
export default Quizes;
