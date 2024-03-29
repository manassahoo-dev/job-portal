
import {
    Button, Col, PageHeader, Row
} from 'antd';
import { useEffect, useState } from 'react';
import CategoryList from '../../components/category';
import CounsellingList from '../../components/counselling';
import CounsellingAddEdit from '../../components/counselling/AddEdit';
import AppContext from '../../contexts/AppContext';

function Counselling(props) {

    const [category, setCategory] = useState(null);

    const object = {
        selectedItem: null,
        isAddEdit: false,
        categoryId: category?.id
    }

    useEffect(() => {
        setContextData({ ...contextData, categoryId: category?.id })
    }, [category]);

    const [contextData, setContextData] = useState(object);

    return (
        <AppContext.Provider value={{ contextData, setContextData }}>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                    < CategoryList setCategory={setCategory} id={contextData.categoryId} groupBy="counselling"/>
                </Col>
                <Col xs={24} sm={12} md={16}>
                    {category &&
                        <>
                            <PageHeader
                                className="p-0 mb-2"
                                title={category.name}
                                extra={[
                                    <Button block onClick={() => setContextData({ ...contextData, isAddEdit: true })}>Add counselling</Button>,
                                ]}
                            />
                            <Row gutter={[16, 16]}>
                                <CounsellingList />
                            {contextData.isAddEdit && <Col xs={24} sm={12}><CounsellingAddEdit /></Col>}
                            </Row>
                        </>
                    }
                </Col>
            </Row>
        </AppContext.Provider>
    );
}
export default Counselling;
