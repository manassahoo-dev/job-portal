import { Col } from "antd";
import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import SkillSetCard from "./Card";

function SkillList() {
    const { contextData } = useContext(AppContext);
    const { data, error, loading } = ApiRequest('GET', `${api.SKILLSET}/category/${contextData.categoryId}`, contextData);

    return (
        <>
            {contextData.isAddEdit ? <Col span={12}>
                {data.map((skillSet, index) => <Col xs={24} key={index}><SkillSetCard skillSet={skillSet} /></Col>)}
            </Col>
                :
                <>{data.map((skillSet, index) => <Col xs={24} sm={12} key={index}><SkillSetCard skillSet={skillSet} /></Col>)}
                </>
            }
        </>
    );
}
export default SkillList;