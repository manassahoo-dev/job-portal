
import {
    Button, Col, PageHeader, Row, Typography
} from 'antd';
import { useState } from 'react';
import CategoryList from '../../components/category';
import QuizList from '../../components/quiz';

function Quizes(props) {

    console.log(props.location)

    const [category, setCategory] = useState(null);
    const [isAddItem, setIsAddItem] = useState(false);
    const [isAddCategory, setIsAddCategory] = useState(false);

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
                < CategoryList setCategory={setCategory} setIsAddItem={setIsAddItem}/>
            </Col>
            <Col xs={24} sm={12} md={16}>
                {category &&
                    <>
                        <PageHeader
                            className="p-0 mb-2"
                        onBack={isAddCategory ? () => setIsAddItem(false) : ""}
                        title={category.name}
                            extra={[
                                <Button block onClick={() => setIsAddItem(true)}>Add Quiz</Button>,
                            ]}
                        />
                        <Row>
                            <Col xs={24} sm={12} md={8}>
                                <QuizList categoryId={category.id} />
                            </Col>
                        </Row>
                    </>
                }
            </Col>
        </Row>
    );
}
export default Quizes;
