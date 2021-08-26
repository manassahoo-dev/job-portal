import { PageHeader, Table } from "antd";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";

function Attendance() {
    const { contextData, setContextData } = useContext(AppContext);


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
            <h1>hjhd</h1>
            <Table size='small' dataSource={courses} columns={coursesColumns} />
        </>
    )
}
export default Attendance;