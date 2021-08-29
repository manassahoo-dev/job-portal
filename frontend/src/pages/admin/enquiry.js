import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, PageHeader, Row } from "antd";
import { useEffect, useState } from "react";
import EnquiryAddEdit from "../../components/enquiry/AddEdit";
import EnquiryCard from "../../components/enquiry/Card";
import EnquiryCategories from "../../components/enquiry/Category";
import AppContext from "../../contexts/AppContext";

function Enquiry(params) {

    const object = {
        selectedItem: {},
        isAddEdit: false,
    }

    const [contextData, setContextData] = useState(object);
    useEffect(() => {
        setContextData({ ...contextData })
    }, [contextData.selectedItem]);

    return (
        <AppContext.Provider value={{ contextData, setContextData }}>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                    <EnquiryCategories />
                </Col>
                <Col xs={24} sm={12} md={16} lg={16}>
                    <>
                        <PageHeader
                            className="p-0 mb-2"
                            title={`Enquiry Details  ${contextData.selectedItem?.studentName || ''}`}
                            extra={[
                                <Button type="primary" icon={<PlusOutlined />} block onClick={() => setContextData({ ...contextData, isAddEdit: true })}>Register Now</Button>,
                            ]}
                        />
                        {contextData.isAddEdit ?
                            <EnquiryAddEdit />
                            :
                            <>
                                {contextData.selectedItem?.id &&
                                    <EnquiryCard />
                                }
                            </>
                        }
                    </>
                </Col>
            </Row>
        </AppContext.Provider>
    )
}
export default Enquiry