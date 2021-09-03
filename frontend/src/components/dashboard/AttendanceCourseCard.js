import { Card, List } from "antd";
import Paragraph from 'antd/lib/typography/Paragraph';
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";

function AttendanceCourseCard({ course, batchId }) {
    const { data, error, loading } = ApiRequest('GET', `${api.ATTENDANCE}/by-batch-and-course?batchId=${batchId}&courseId=${course.id}`);

    return (
        <Card className="overflow-auto" style={{height: '400px'}}>
            <h1>{course.name}</h1>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item className="px-0">
                        <List.Item.Meta
                            title={<b>Present&nbsp;&nbsp;{item[3]}</b>}
                            description={<Paragraph className="m-0" type="secondary" ellipsis>
                                {item[0]}
                            </Paragraph>}
                        />
                    </List.Item>
                )}
            />
        </Card>
    )
}
export default AttendanceCourseCard;