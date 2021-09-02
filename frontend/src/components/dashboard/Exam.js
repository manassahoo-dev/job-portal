import { Card, Table, Tabs } from "antd";
import Text from "antd/lib/typography/Text";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";

function Exam(params) {
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
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${selectedBatchId}/students`, contextData);


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => <><b>{`${record.firstName} ${record?.lastName || ''}`}</b><br />{record.email}</>,
        }, {
            title: 'Test',
            dataIndex: 'time',
            key: 'time',
        }, {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        }, {
            title: 'Marks',
            dataIndex: 'time',
            key: 'time',
        },
    ];

    return (
        <Card bordered={false} title={<Text strong>Exams</Text>}>
            <Tabs type="card" style={contentStyle} onChange={(e) => setSelectedBatchId(e)}>
                {contextData?.batches?.map((batch, index) =>
                    <TabPane tab={batch.name} key={batch.id}>
                        <Text italic>20 Students Exams conduct today 03 Sept, 21</Text>
                        <Table size='small' dataSource={data} columns={columns} />
                    </TabPane>
                )}
            </Tabs>
        </Card>
    )
}
export default Exam;