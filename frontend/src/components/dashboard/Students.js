import { Table, Tabs } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import { useContext, useEffect, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import toSentenceCase from "../utility/util";

function Students() {
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

    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${selectedBatchId}/students`, selectedBatchId);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => <>
                <Text type="success" strong>{`${toSentenceCase(record.firstName)} ${toSentenceCase(record?.lastName || '')}`}</Text>
                <Paragraph className="m-0 d-flex align-items-center" >
                    <FiMail />&nbsp;&nbsp;{record.email}
                </Paragraph>
                <Paragraph className="m-0 d-flex align-items-center" >
                    <FiPhone />&nbsp;&nbsp;{record.mobile}
                </Paragraph>
            </>,
        }
    ];
    return (
        <Tabs type="card" style={contentStyle} onChange={(e) => setSelectedBatchId(e)}>
            {contextData?.batches?.map((batch, index) =>
                <TabPane tab={batch.name} key={batch.id}>
                    <Table size='small' dataSource={data} columns={columns} />
                </TabPane>
            )}
        </Tabs>
    )
}
export default Students;