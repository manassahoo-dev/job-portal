import { Card, Space, Table, Tabs } from "antd";
import Text from "antd/lib/typography/Text";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import BatchStatus from "../batch/BatchStatus";
import Attendance from "./Attendance";

function OngoingBatches(params) {

    const { contextData } = useContext(AppContext);
    const [selectedBatchId, setSelectedBatchId] = useState(contextData?.initialLoadBatch?.id);
    const { TabPane } = Tabs;

    useEffect(() => {
        setSelectedBatchId(contextData?.initialLoadBatch?.id)
    }, [contextData])

    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${selectedBatchId}/courses`, selectedBatchId);
    const coursesData = data.map((item) => item.course)

    const contentStyle = {
        height: '500px',
        overflow: 'auto',
    };


    const coursesColumns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Refrigerator',
            dataIndex: 'data',
        },
        {
            title: 'Television',
            dataIndex: 'data',
        },
        {
            title: 'RO Service',
            dataIndex: 'data',
        },
        {
            title: 'Spoken English',
            dataIndex: 'data',
        },
    ];

    const courses = [
        { date: '10 Aug, 21', data: 'P 18 - A 2' },
        { date: '11 Aug, 21', data: 'P 18 - A 2' },
        { date: '12 Aug, 21', data: 'P 18 - A 2' },
        { date: '13 Aug, 21', data: 'P 18 - A 2' },
        { date: '14 Aug, 21', data: 'P 18 - A 2' },
    ]

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
                            <Text strong italic>Students :</Text>{batch.startDate || '-'}
                        </Space>
                        <Attendance courseData={coursesData} batch={batch} />
                        <Table size='small' dataSource={courses} columns={coursesColumns} />
                    </TabPane>
                )}
            </Tabs>
        </>
    )
}
export default OngoingBatches;