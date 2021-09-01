import { Button, message, Table, Tabs } from "antd"
import Modal from "antd/lib/modal/Modal"
import React, { useContext, useState } from "react"
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import apiService from "../../services/api.service";
import ApiRequest from "../../services/ApiRequest";
import StudentList from "./Student";

function JobCategory({ job }) {
    const [isVisible, setIsVisible] = useState(false)
    const [tabState, setTabState] = useState("Applied");
    const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const { contextData } = useContext(AppContext)
    const { TabPane } = Tabs;
    const tabs = ["Applied", "Interviewed", "Placed"]

    const onOk = () => {
        const param = {
            jobId: job.id,
            studentIds: selectedRowKeys,
            type: tabState,
        }
        apiService.create(`${api.JOB}/jobstudentdata`, param).then((response) => {
            console.log(response)
        })
        setTabState("Applied");
        setSelectedRowKeys([])
        setIsVisible(false)
    }

    const onTabChange = (e) => {
        setTabState(e)
        apiService.get(`${api.JOB}/jobstudentbyjobidandtype/${job?.id}?type=${e}`).then((response) => {
            console.log(e, response.data)
            setSelectedRowKeys(response.data)
        }).catch((response) => {
            message.error(response.error)
        })
    }

    const onClickApply = () => {
        console.log('44', tabState)
        apiService.get(`${api.JOB}/jobstudentbyjobidandtype/${job?.id}?type=${tabState}`).then((response) => {
            setSelectedRowKeys(response.data)
        }).catch((response) => {
            message.error(response.error)
        })
        setIsVisible(true)
    }
    return (
        <>
            <Button type="primary" onClick={onClickApply} block>Apply</Button>
            <Modal
                title={job?.companyName}
                centered
                visible={isVisible}
                onOk={() => onOk()}
                onCancel={() => { setTabState("Applied"); setSelectedRowKeys([]); setIsVisible(false) }}
            >
                <Tabs defaultActiveKey={tabState} type="card" onChange={(e) => onTabChange(e)}>
                    {tabs.map((tab, key) =>
                        <TabPane tab={tab} key={tab}>
                            <StudentList selectedRowKeys={selectedRowKeys} setSelectedRowKeys={setSelectedRowKeys} />
                        </TabPane>
                    )}

                </Tabs>

            </Modal>
        </>
    )
}
export default JobCategory