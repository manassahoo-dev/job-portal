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
                <Spin indicator={antIcon}  spinning={loading}>
                    <Card>
                        <Title level={4}>Batch</Title>
                        {error ? <Result
                            status="error"
                            title="Unable to get Batch details"
                            subTitle={error.message}
                        /> :
                            <>
                                <Button type="primary" block>Add Batch</Button>
                                <Space direction="vertical">
                                    {data.map((item, index) => <Text>{item.name}</Text>)}
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
