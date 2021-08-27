import { Col } from "antd";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppEmpty from "../utility/AppEmpty";
import JobCard from "./Card";

function JobList() {
    const { contextData } = useContext(AppContext);
    const { data, error, loading } = ApiRequest('GET', api.JOB, contextData);

    return (
        <>
            {data.length ?
                <>
                    {contextData.isAddEdit ? <Col span={12}>
                        {data.map((job, index) => <Col xs={24} key={index}><JobCard job={job} /></Col>)}
                    </Col>
                        :
                        <>{data.map((job, index) => <Col xs={24} sm={12} key={index}><JobCard job={job} /></Col>)}
                        </>
                    }
                </>
                :
                <Col span={contextData.isAddEdit ? 12 : 24}>
                    <AppEmpty name="Job" />
                </Col>
            }
        </>
    );
}
export default JobList;