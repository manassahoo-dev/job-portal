import { Card, Col, List, Row } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import { FiMail, FiPhone } from "react-icons/fi";
import api from '../../services/api';
import ApiRequest from '../../services/ApiRequest';
import AppSpin from '../utility/AppSpin';

function StudentList({ student, setStudent }) {

    const { data, error, loading } = ApiRequest('GET', api.STUDENT, null);

    return (
        <AppSpin loading={loading}>
            <Card className="overflow-auto" style={{ maxHeight: '80vh' }}>
                <List
                    size="small"
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item className={item === student ? "active" : "null"}>
                            <List.Item.Meta
                                title={
                                    <Row className="align-items-center pointer" onClick={() => setStudent(item)}>
                                        <Col span={16}>
                                            <b>{item.firstName}&nbsp;{item.lastName}</b>
                                            <Paragraph className="m-0 d-flex align-items-center" type="secondary" ellipsis>
                                                <FiMail />&nbsp;&nbsp;{item.email}
                                            </Paragraph>
                                            <Paragraph className="m-0 d-flex align-items-center" type="secondary" ellipsis>
                                                <FiPhone />&nbsp;&nbsp;{item.mobile}
                                            </Paragraph>
                                        </Col>
                                        <Col span={8}>
                                            <span className="float-end"><b>{item.batchName}</b></span><br />
                                        </Col>
                                    </Row>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Card>
        </AppSpin>
    );
}

export default StudentList