import { Card } from "antd"
import Meta from "antd/lib/card/Meta"
import Text from "antd/lib/typography/Text"
import { useContext } from "react"
import AppContext from "../../contexts/AppContext"

function EnquiryCard() {
    const { contextData, setContextData } = useContext(AppContext)
    return (
        <Card hoverable>
            <Meta
                title={contextData.selectedItem.studentName}
            /><Text type='secondary'>{contextData.selectedItem.studentName}</Text>
            <Meta
                title="Roles and Responsibilities"
            /><Text type='secondary'>{contextData.selectedItem.studentName}</Text>
            <Meta
                title="Comments"
            /><Text type='secondary'>{contextData.selectedItem.state}</Text>
        </Card>
    )
}
export default EnquiryCard