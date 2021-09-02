import { Table, Tabs } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import BatchStatus from "../batch/BatchStatus";
import toSentenceCase from "../utility/util";


function Tests({ quizType }) {
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

    const { data, error, loading } = ApiRequest('GET', `${api.STUDENT}/quiz/${selectedBatchId}`, selectedBatchId);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => <>
                <Text type="success" strong>{toSentenceCase(record.quiz.name)}</Text><br />
                <Text strong>{`${toSentenceCase(record.student.firstName)} ${toSentenceCase(record?.student.lastName || '')}`}</Text><br />
                <Paragraph className="m-0 d-flex align-items-center" >
                    <FiMail />&nbsp;&nbsp;{record?.student.email}
                </Paragraph>
            </>,
        }, {
            title: 'Marks',
            dataIndex: 'marks',
            render: (text, record) => <>{(record.createdOn && moment(`${record.createdOn}`).fromNow()) || " "} <br /><b>{record.score}/100</b></>,
        },
    ];
    const filterData = data.filter((item) => item.quiz.quizType === quizType)
    return (
        <Tabs type="card" style={contentStyle} onChange={(e) => setSelectedBatchId(e)}>
            {contextData?.batches?.map((batch, index) =>
                <TabPane tab={<>
                    <BatchStatus status={batch.status} />
                    {batch.name}
                </>} key={batch.id}>
                    <Table size='small' dataSource={filterData} columns={columns} />
                </TabPane>
            )}
        </Tabs>
    )
}
export default Tests;