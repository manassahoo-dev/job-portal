import { Card, Col, List, PageHeader, Row } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import { useState } from 'react';
import { FiMail, FiPhone } from "react-icons/fi";
import api from '../../services/api';
import ApiRequest from '../../services/ApiRequest';
import AppSpin from '../utility/AppSpin';

function StudentList({ student, setStudent }) {
    const [lastRefresh, setLastRefresh] = useState(new Date());
    const { data, error, loading } = ApiRequest('GET', api.STUDENT, lastRefresh);

    return (
        <AppSpin loading={loading}>
            <Card >
                <PageHeader
                    className="p-0 mb-2 mx-3"
                    title={<span className="ant-page-header-heading-title text-success">Student Report</span>}
                />
                <List
                    className="overflow-auto" style={{ maxHeight: '80vh' }}
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