import { LoadingOutlined } from '@ant-design/icons';
import { Button, Card, Col, Result, Row, Space, Spin, Typography } from 'antd';
import api from '../../services/api';
import ApiRequest from '../../services/ApiRequest';

const { Title, Text, Link } = Typography;
function Batches() {
    const { data, error, loading } = ApiRequest('GET', api.batches);
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return (
        <Row>
            <Col span={6}>
                <Spin tip="Loading..." indicator={antIcon} spinning={loading}>
                    <Card className="full-height">
                        <Title level={4}>Batch</Title>
                        {error ? <Result
                            status="error"
                            title="Unable to get Batch details"
                            subTitle={error.message}
                        /> :
                            <>
                                <Button type="primary" block className="mb-4">Add Batch</Button>
                                <Space direction="vertical">
                                    {data.map((item, index) => <Button type="link" block>{item.name}</Button>)}
                                </Space>
                            </>
                        }
                    </Card>
                </Spin>
            </Col>
        </Row>
    );
}
export default Batches;
