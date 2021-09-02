import { Card, Row, Col, Divider } from "antd"
import Meta from "antd/lib/card/Meta";
import Text from "antd/lib/typography/Text"
import Title from "antd/lib/typography/Title";
import { useContext } from "react"
import AppContext from "../../contexts/AppContext"

function EnquiryCard() {
    const { contextData, setContextData } = useContext(AppContext);
    let data = contextData.selectedItem;

    const fields = [
        { name: 'Student Name', field: 'studentName' },
        { name: 'Gender', field: 'gender' },
        { name: 'Date of Birth', field: 'dob' },
        { name: 'Email Address', field: 'mailId' },
        { name: 'Phone Number', field: 'phoneNumber' },
        { name: 'Aadhaar Number', field: 'aadhaarNumber' },

        { name: 'Skills', field: 'skills' },
        { name: 'Address', field: 'address' },
        { name: 'Aadhaar Number', field: 'aadhaarNumber' },

        { name: 'Student Type', field: 'studentType' },
        { name: 'Student Father Name', field: 'studentFatherName' },
        { name: 'ID Proof', field: 'idProof' },
        { name: 'ID Number', field: 'idNumber' },
    ];

return (
    <Card>
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={11}>
                <Meta title={<Title level={3} className="mb-4">Personal Details</Title>}/>
                <Row>
                {fields.map((item, index) =>
                    <Col span={12}>
                        <Text type="secondary" >{item.name}</Text>
                        <Title level={4} className="m-0">{data[item.field] || '-'}</Title><br/>
                    </Col>
                )}
                </Row>
            </Col>
            <Col md={1}>
                <Divider type="vertical" className="h-100" />
            </Col>
            <Col xs={24} sm={24} md={11}>
                <Meta title={<Title level={3} className="mb-4">Additional Details</Title>}/>      

            </Col>
        </Row>        
    </Card>
)
}
export default EnquiryCard