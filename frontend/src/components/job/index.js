import { Col } from "antd";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import JobCard from "./Card";

function JobList() {
    const { contextData } = useContext(AppContext);
    const { data, error, loading } = ApiRequest('GET', api.JOB, contextData);

    return (
        <>
            {contextData.isAddEdit ? <Col span={12}>
                {data.map((job, index) => <Col xs={24} key={index}><JobCard job={job} /></Col>)}
            </Col>
                :
                <>{data.map((job, index) => <Col xs={24} sm={12} key={index}><JobCard job={job} /></Col>)}
                </>
            }
        </>
    );
}
export default JobList;