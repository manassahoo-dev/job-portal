import { Button, Col, PageHeader, Row } from "antd";
import { useEffect, useState } from "react";
import EnquiryList from "../../components/enquiry"
import EnquiryAddEdit from "../../components/enquiry/AddEdit";
import EnquiryCategories from "../../components/enquiry/Category";
import AppContext from "../../contexts/AppContext";
import { PlusOutlined } from "@ant-design/icons";

function Enquiry(params) {

    const object = {
        selectedItem: null,
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
                <Col xs={24} sm={12} md={16}>
                    <>
                        <PageHeader
                            className="p-0 mb-2"
                            title={`Enquiry Details  ${contextData.selectedItem?.studentName || ''}`}
                            extra={[
                                <Button type="primary" icon={<PlusOutlined />} block onClick={() => setContextData({ ...contextData, isAddEdit: true })}>Register Now</Button>,
                            ]}
                        />
                        <Row gutter={[16, 16]}>
                            {contextData.isAddEdit ?
                                <Col xs={24} sm={12}><EnquiryAddEdit /></Col>
                                :
                                <>
                                    {contextData.selectedItem?.id &&
                                        <EnquiryList />
                                    }
                                </>
                            }
                        </Row>
                    </>
                </Col>
            </Row>
        </AppContext.Provider>
    )
}
export default Enquiry