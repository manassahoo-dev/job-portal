import { Card, Col, Descriptions, Rate, Row } from "antd";

function CourseDetails({ Category }) {

    return (
        <>
            <Card title={Category} style={{ width: 300, height: 300 }} hoverable>
                <Rate defaultValue={3} />
                <Descriptions title="User Info">
                </Descriptions>
                <p>Duration : {Category}</p>
                <p>In week : {Category}</p>
                <p>Description : {Category}</p>
            </Card>
        </ >
    )
}
export default CourseDetails