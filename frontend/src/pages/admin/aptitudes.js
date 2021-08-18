
import {
    Button, Card, Col, Form, message, PageHeader, Row, Typography
} from 'antd';
import { useState } from 'react';
import CategoryList from '../../components/category';
import api from '../../services/api';
import ApiService from '../../services/api.service';
import ApiRequest from '../../services/ApiRequest';

const { Title, Text, Link } = Typography;
function Aptitudes() {

    const [form] = Form.useForm();

    const [isAddCategory, setIsAddCategory] = useState(false);
    const [isAddItem, setIsAddItem] = useState(false);

    const [category, setCategory] = useState(null);

    const { data, error, loading } = ApiRequest('GET', api.aptitudes, setIsAddItem);

    const validateMessages = {
        required: '${label} is required',
    };
    const onFinish = (values) => {
        ApiService.create(api.aptitudes, values)
            .then((response) => {
                setIsAddItem(false);
            })
            .catch((error) => {
                message.error(error.response.message);
            });;
    };

    const onFinishFailed = (errorInfo) => {
        console.error(errorInfo);
    };

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
                                <Button block onClick={() => setIsAddItem(true)}>Add Batch Item</Button>,
                            ]}
                        />
                        <Row>
                            <Col xs={24} sm={12} md={8}>
                            <Card title="Courses">{category.courses.map((course, index) => <p>{course.name}</p>)}</Card>
                            </Col>
                        </Row>
                    </>
                }
            </Col>
        </Row>
    );
}
export default Aptitudes;
