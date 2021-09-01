import { Card, Col, Divider, message, Row, Tooltip } from "antd";
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from "antd/lib/typography/Title";
import moment from "moment";
import { useEffect, useState } from "react";
import { FiMail, FiPhone, FiCheck } from "react-icons/fi";
import StudentList from "../../components/report/StudentList";
import api from "../../services/api";
import apiService from "../../services/api.service";
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

function AdminReport() {

    const [student, setStudent] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [quizes, setQuizes] = useState([]);

    useEffect(() => {
        if (student) {
            getJobsByStudent();
            getQuizesByStudent();
        }
    }, [student]);

    const getJobsByStudent = () => {
        apiService.get(`${api.STUDENT}/${student.id}/jobs`)
            .then((response) => {
                setJobs(response.data);
            })
            .catch((error) => {
                message.error(error.response.message);
            });
    }

    const getQuizesByStudent = () => {
        apiService.get(`${api.STUDENT}/${student.id}/quizes`)
            .then((response) => {
                setQuizes(response.data);
            })
            .catch((error) => {
                message.error(error.response.message);
            });
    }

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
                <StudentList student={student} setStudent={setStudent} />
            </Col>
            {student && <Col xs={24} sm={12} md={16}>
                <Card>
                    <section>
                        <Title level={3}>{student.firstName}&nbsp;{student.lastName}</Title>
                        <Paragraph className="m-0 d-flex align-items-center" >
                            <FiMail />&nbsp;&nbsp;{student.email}
                        </Paragraph>
                        <Paragraph className="m-0 d-flex align-items-center" >
                            <FiPhone />&nbsp;&nbsp;{student.mobile}
                        </Paragraph>
                    </section>
                    {jobs.length > 0 &&
                        <section className="my-5">
                            <Title level={3} className="m-0">Jobs</Title>
                            <Divider dashed={true} />
                            {jobs.map((job, index) =>
                                <>
                                    <Row gutter={[16, 16]} className="d-flex align-items-center">
                                        <Col span={6}>
                                            <Title level={5} className="m-0">{job.job.companyName}</Title>
                                            <p className="m-0">{job.job.jobTitle}</p>
                                        </Col>

                                        <Col span={1}>
                                            {job.applied && <CheckCircleTwoTone twoToneColor="#52c41a" />}
                                        </Col>
                                        <Col span={5}>
                                            <h3 className={job.applied ? "m-0 text-success" : "m-0"}>Applied</h3>
                                            <h4>{job.appliedDate}</h4>
                                        </Col>
                                        <Col span={1}>
                                            {job.interviewed && <CheckCircleTwoTone twoToneColor="#52c41a" />}
                                        </Col>
                                        <Col span={5}>
                                            <h3 className={job.interviewed ? "m-0 text-success" : "m-0"}>Interviewed</h3>
                                            <h4>{job.interviewedDate}</h4>
                                        </Col>
                                        <Col span={1}>
                                            {job.placed && <CheckCircleTwoTone twoToneColor="#52c41a" />}
                                        </Col>
                                        <Col span={5}>
                                            <h3 className={job.placed ? "m-0 text-success" : "m-0"}>Placed</h3>
                                            <h4>{job.placedDate}</h4>
                                        </Col>
                                    </Row><Divider />
                                </>)}
                        </section>}

                    {quizes.length > 0 &&
                        <section className="my-5">
                            <Title level={3} className="m-0">Aptitude Test & Exam</Title>
                            <Divider dashed={true} />
                            {quizes.map((item, index) =>
                                <>
                                    <Row gutter={[16, 16]} className="d-flex align-items-center">
                                        <Col span={6}>
                                            <Title level={5} className="m-0">{item.quiz.name}</Title>
                                            <p className="m-0">{item.quiz.description}</p>
                                        </Col>
                                        <Col span={6}>
                                            <Title level={5} className="m-0">{item.score} / 100</Title>
                                            <Tooltip title={item.createdOn}><p className="m-0">{moment(item.createdOn).fromNow()}</p></Tooltip>
                                        </Col>
                                    </Row><Divider />
                                </>)}
                        </section>}
                </Card>
            </Col>}
        </Row>
    )

}
export default AdminReport;