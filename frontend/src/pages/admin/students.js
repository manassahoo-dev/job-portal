import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, PageHeader, Row } from "antd";
import { useState } from "react";
import AddEditStudent from "../../components/student/AddEdit";
import StudentList from '../../components/student/StudentList';
import ACTIONTYPES from '../../components/utility/ACTIONTYPES';
import AppContext from '../../contexts/AppContext';

function Students() {

    const object = {
        selectedItem: {},
        isActionPerformed: ACTIONTYPES.none,
    }
    const [contextData, setContextData] = useState(object);
    const checkAddEdit = (contextData.isActionPerformed === ACTIONTYPES.add || contextData.isActionPerformed === ACTIONTYPES.edit)

    return (
        <>
            <AppContext.Provider value={{ contextData, setContextData }}>
                <PageHeader
                    className="p-0 mb-2"
                    title='Students'
                    extra={!checkAddEdit &&
                        <Button type="primary" block
                            onClick={() => setContextData({
                                ...contextData,
                                isActionPerformed: ACTIONTYPES.add
                            })}
                            icon={<PlusOutlined />}
                        >Add New Student</Button>
                    }
                />
                <Row gutter={[16, 16]}>

                    <Col xs={24} sm={24} md={24} xl={checkAddEdit ? 14 : 24}>
                        <StudentList />
                    </Col>
                    {checkAddEdit &&
                        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                            <AddEditStudent />
                        </Col>
                    }
                </Row>
            </AppContext.Provider>
        </>
    )
}

export default Students