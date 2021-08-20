import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, PageHeader, Row } from "antd";
import { useState } from "react";
import AddEditStudent from "../../components/student/AddEdit";
import StudentList from '../../components/student/StudentList';
import ACTIONTYPES from '../../components/utility/ACTIONTYPES';

function Students() {

    const [isActionPerformedStudent, setIsActionPerformedStudent] = useState(ACTIONTYPES.none);
    const [data, setData] = useState({});
    const checkAddEdit = (isActionPerformedStudent === ACTIONTYPES.add || isActionPerformedStudent === ACTIONTYPES.edit)

    return (
        <>
            <PageHeader
                className="p-0 mb-2"
                title='Students'
                extra={!checkAddEdit &&
                    <Button type="primary" block onClick={() => setIsActionPerformedStudent(ACTIONTYPES.add)} icon={<PlusOutlined />}>Add New Student</Button>
                }
            />
            <Row gutter={[16, 16]}>

                <Col xs={24} sm={24} md={24} lg={checkAddEdit ? 14 : 24} xl={checkAddEdit ? 14 : 24}>
                    <StudentList isActionPerformedStudent={isActionPerformedStudent} setIsActionPerformedStudent={setIsActionPerformedStudent} setData={setData} item={data} />
                </Col>
                {checkAddEdit &&
                    <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                        <AddEditStudent isActionPerformedStudent={isActionPerformedStudent} setIsActionPerformedStudent={setIsActionPerformedStudent} setData={setData} data={data} />
                    </Col>
                }
            </Row>
        </>
    )
}

export default Students