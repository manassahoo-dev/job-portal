import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, PageHeader, Row } from "antd";
import { useState } from "react";
import AddEditStudent from "../../components/student/AddEdit";
import StudentDetails from "../../components/student/StudentDetails";

function Students() {
    const [isAddEditStudent, setIsAddEditStudent] = useState(false);
    return (
        <>
            <PageHeader
                className="p-0 mb-2"
                title='Students'
                extra={
                    <Button type="primary" block onClick={() => setIsAddEditStudent(true)} icon={<PlusOutlined />}>Add New Student</Button>
                }
            />
            <Row gutter={[16, 16]}>

                <Col xs={24} sm={24} md={24} lg={!isAddEditStudent ? 24 : 14} xl={!isAddEditStudent ? 24 : 14}>
                    <StudentDetails />
                </Col>
                {isAddEditStudent &&
                    <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                        <AddEditStudent setIsAddEditStudent={setIsAddEditStudent} />
                    </Col>
                }
            </Row>
        </>
    )
}

export default Students