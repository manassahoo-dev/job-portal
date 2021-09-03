import { Col, Row, Space, Tabs } from "antd";
import Text from "antd/lib/typography/Text";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import apiService from "../../services/api.service";
import ApiRequest from "../../services/ApiRequest";
import BatchStatus from "../batch/BatchStatus";
import Attendance from "./Attendance";
import AttendanceCourseCard from "./AttendanceCourseCard";

function OngoingBatches(params) {

    const { contextData } = useContext(AppContext);
    const [students, setStudents] = useState([]);
    const [selectedBatchId, setSelectedBatchId] = useState(contextData?.initialLoadBatch?.id);
    const { TabPane } = Tabs;

    useEffect(() => {
        setSelectedBatchId(contextData?.initialLoadBatch?.id)
        getStudents();
    }, [contextData])
    
    const getStudents = () => {
        apiService.get(`${api.BATCH}/${selectedBatchId}/students`)
        .then(response => {
            setStudents(response.data);
        }).catch(e => {
            // message.error(e.response.statusText);
        });
    }
    
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${selectedBatchId}/courses`, selectedBatchId);
    const coursesData = data.map((item) => item.course)

    const contentStyle = {
        height: '500px',
        overflow: 'auto',
    };

    return (
        <>
            <Tabs type="card" style={contentStyle} onChange={(e) => setSelectedBatchId(e)}>
                {contextData?.batches?.map((batch, index) =>
                    <TabPane tab={<>
                        <BatchStatus status={batch.status} />
                        {batch.name}
                    </>} key={batch.id}>
                        <Space>
                            <Text strong italic>Started on </Text>{batch.startDate || '-'} to {batch.endDate || '-'}
                        </Space>
                        <Attendance courseData={coursesData} batch={batch} />
                        <Row>
                            {coursesData.map((course) =>
                                <Col span={6}>
                                    <AttendanceCourseCard course={course} batchId={selectedBatchId} />
                                </Col>)}
                        </Row>
                        {/* <Table size='small' dataSource={courses} columns={coursesColumns} /> */}
                    </TabPane>
                )}
            </Tabs>
        </>
    )
}
export default OngoingBatches;