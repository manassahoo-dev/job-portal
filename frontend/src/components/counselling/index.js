import { Col } from "antd";
import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppEmpty from "../utility/AppEmpty";
import CounsellingCard from "./Card";

function CounsellingList() {
    const { contextData } = useContext(AppContext);
    const { data, error, loading } = ApiRequest('GET', `${api.COUNSELLING}/category/${contextData.categoryId}`, contextData);

    return (
        <>
            {data.length ?
                <>
                    {contextData.isAddEdit ? <Col span={12}>
                        {data.map((counselling, index) => <Col xs={24} key={index}><CounsellingCard counselling={counselling} /></Col>)}
                    </Col>
                        :
                        <>{data.map((counselling, index) => <Col xs={24} sm={12} key={index}><CounsellingCard counselling={counselling} /></Col>)}
                        </>
                    }
                </>
                :
                <Col span={contextData.isAddEdit ? 12 : 24}>
                    <AppEmpty name="Counselling" />
                </Col>
            }
        </>

    );
}
export default CounsellingList;