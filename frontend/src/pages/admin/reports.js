import { Card, Col, Row } from "antd";
import { useState } from "react";
import StudentList from "../../components/report/StudentList";
import AppContext from "../../contexts/AppContext";


function AdminReport() {

    const object = {
        selectedItem: null,
    }

    const [contextData, setContextData] = useState(object);
    return (
        <AppContext.Provider value={{ contextData, setContextData }}>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                    <StudentList />
                </Col>
                <Col xs={24} sm={12} md={16}>
                    <Card></Card>
                </Col>
            </Row>
        </AppContext.Provider>
    )

}
export default AdminReport;