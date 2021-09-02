import { Card, Space, Table, Tabs } from "antd";
import Text from "antd/lib/typography/Text";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import Attendance from "./Attendance";

function OngoingBatches(params) {


    const { contextData } = useContext(AppContext);
    const { TabPane } = Tabs;

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
            <Card bordered={false} style={contentStyle} title={<Text strong>Ongoing Batches</Text>}>
                <Tabs type="card" style={contentStyle}>
                    {contextData?.batches?.map((batch, index) =>
                        <TabPane tab={batch.name} key={index}>
                            <Space>
                                <Text strong italic>Started on </Text>{batch.startDate || '-'} to {batch.endDate || '-'}
                                <Text strong italic>Students :</Text>{batch.startDate || '-'}
                            </Space>
                            <Attendance batch={batch} />
                            <Table size='small' dataSource={courses} columns={coursesColumns} />
                        </TabPane>
                    )}
                </Tabs>
            </Card>
        </>
    )
}
export default OngoingBatches;