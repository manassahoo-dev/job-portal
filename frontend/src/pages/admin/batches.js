import { Button, Card, Col, Row, Space, Typography } from 'antd';
import ApiRequest from '../../services/ApiRequest';
import api from '../../services/api';

const { Title, Text, Link } = Typography;
function Batches() {
    const { data, error, loading } = ApiRequest('GET', api.batches);

    return (
        <Row>
            <Col span={4}>
                <Card>
                    <Title level={4}>Batch</Title>
                    <Button type="primary" block>Add Batch</Button>
                    <Space direction="vertical">
                        {data.map((item, index) => <Text>{item.name}</Text>)}
                    </Space>
                </Card>
            </Col>
        </Row>
    );
}
export default Batches;
