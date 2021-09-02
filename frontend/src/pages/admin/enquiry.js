import { Col, PageHeader, Row } from "antd";
import { useEffect, useState } from "react";
import EnquiryAddEdit from "../../components/enquiry/AddEdit";
import EnquiryCard from "../../components/enquiry/Card";
import EnquiryList from "../../components/enquiry/List";
import AppContext from "../../contexts/AppContext";

function Enquiry() {

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
                    <EnquiryList />
                </Col>
                <Col xs={24} sm={12} md={16} lg={16}>
                    <>                        
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