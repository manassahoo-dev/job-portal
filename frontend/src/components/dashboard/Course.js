import { Table, Tabs } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { FiClock, FiMail, FiPhone } from "react-icons/fi";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import BatchStatus from "../batch/BatchStatus";
import toSentenceCase from "../utility/util";

function Courses(params) {
    const { TabPane } = Tabs;
    const contentStyle = {
        height: '500px',
        overflow: 'auto',
    };

    const { contextData } = useContext(AppContext);
    const [selectedBatchId, setSelectedBatchId] = useState(contextData?.initialLoadBatch?.id);

    useEffect(() => {
        setSelectedBatchId(contextData?.initialLoadBatch?.id)
    }, [contextData])

    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${selectedBatchId}/courses`, selectedBatchId);

    const columns = [
        {
            title: 'Corse Name',
            dataIndex: 'name',
            render: (text, record) => <>
                <Text type="success" strong>{`${toSentenceCase(record.course.name)} `}</Text>
                <Paragraph className="m-0 d-flex align-items-center" >
                    <FiClock />&nbsp;&nbsp;{record.course.days}
                </Paragraph>
            </>,
        }, {
            title: 'Date',
            dataIndex: 'date',
            render: (text, record) => <>{(record.createdOn && toSentenceCase(moment(`${record.createdOn}`).fromNow())) || " "}</>,
        },
    ];
    return (
        <Tabs type="card" style={contentStyle} onChange={(e) => setSelectedBatchId(e)}>
            {contextData?.batches?.map((batch, index) =>
                <TabPane tab={<>
                    <BatchStatus status={batch.status} />
                    {batch.name}
                </>} key={batch.id}>
                    <Table size='small' dataSource={data} columns={columns} />
                </TabPane>
            )}
        </Tabs>
    )
}
export default Courses;