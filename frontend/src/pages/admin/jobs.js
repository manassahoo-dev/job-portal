import { Button, Col, PageHeader, Row } from "antd";
import { useEffect, useState } from "react";
import CategoryList from "../../components/category";
import JobList from "../../components/job";
import JobAddEdit from "../../components/job/AddEdit";
import AppContext from "../../contexts/AppContext";
import { PlusOutlined } from "@ant-design/icons";


function Jobs() {
    const [category, setCategory] = useState(null);

    const object = {
        selectedItem: null,
        isAddEdit: false,
        categoryId: category?.id,
        lastRefresh: new Date()
    }

    const [contextData, setContextData] = useState(object);
    useEffect(() => {
        setContextData({ ...contextData, categoryId: category?.id })
    }, [category]);

    return (
        <AppContext.Provider value={{ contextData, setContextData }}>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                    < CategoryList setCategory={setCategory} id={contextData.categoryId} groupBy="job"/>
                </Col>
                <Col xs={24} sm={12} md={16}>
                    {category &&
                        <>
                            <PageHeader
                                className="p-0 mb-2"
                                title={category.name}
                                extra={[
                                    <Button type="primary" icon={<PlusOutlined />} block onClick={() => setContextData({ ...contextData, isAddEdit: true })}>Add Job</Button>,
                                ]}
                            />
                            <Row gutter={[16, 16]}>
                                <JobList />
                                {contextData.isAddEdit && <Col xs={24} sm={12}><JobAddEdit /></Col>}
                            </Row>
                        </>
                    }
                </Col>
            </Row>
        </AppContext.Provider>
    )

}
export default Jobs;