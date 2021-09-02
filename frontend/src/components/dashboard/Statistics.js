import { Card, Col, Row, Statistic } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { FiBarChart2, FiBookOpen, FiBriefcase, FiCheckSquare, FiSend, FiUser } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import toSentenceCase from "../utility/util";

function Statistics(params) {

    const { data, error, loading } = ApiRequest('GET', api.DASHBOARD);
    const history = useHistory();
    function handleClick(path) {
        history.push(path);
    }
    const avatar = {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: '2rem',
        color: '#bfbfbf'
    }

    const statItems = [
        { name: 'student', icon: <FiUser />, category1: 'male', category2: 'female', path: '/admin/students' },
        { name: 'batch', icon: <FiBarChart2 />, category1: 'Completed', category2: 'InProgress', path: '/admin/batches' },
        { name: 'course', icon: <FiBookOpen />, category1: 'reserve', category2: 'active', path: '/admin/courses' },
        { name: 'aptitude', icon: <FiCheckSquare />, category1: 'attempted', category2: 'success', path: '/admin/aptitudes' },
        { name: 'job', icon: <FiBriefcase />, category1: 'interviews', category2: 'placements', path: '/admin/jobs' },
        { name: 'enquiry', icon: <FiSend />, category1: 'completed', category2: 'inProgress', path: '/admin/enquiry' },
    ]

    return (
        <>
            {statItems.map((item) =>
                <Col xs={24} sm={12} md={8} lg={4}>
                    <Card hoverable onClick={() => handleClick(item.path)}>
                        <Row>
                            <Col span={18} className="mb-4">
                                <Title level={3} className="m-0" type="success">{toSentenceCase(item.name)}</Title>
                                <Text>Total {toSentenceCase(item.name)} {data[item.name]?.total}</Text>
                            </Col>
                            <Col span={6} className="mb-4">
                                <span style={avatar}>{item.icon}</span>
                            </Col>
                            <Col span={12}>
                                <Statistic title={toSentenceCase(item.category1)} value={data[item.name]?.[item.category1]} />
                            </Col>
                            <Col span={12}>
                                <Statistic title={toSentenceCase(item.category2)} value={data[item.name]?.[item.category2]} />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            )
            }
        </>
    )
}
export default Statistics;