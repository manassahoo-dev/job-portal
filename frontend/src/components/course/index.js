import { Col } from "antd";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import CourseCard from "./Card";

function CourseList() {
    const { contextData } = useContext(AppContext);
    const { data, error, loading } = ApiRequest('GET', `${api.courses}/category/${contextData.categoryId}`, contextData);

    return (
        <>
            {contextData.isAddEdit ? <Col span={12}>
                {data.map((course, index) => <Col xs={24} key={index}><CourseCard course={course} /></Col>)}
            </Col>
                :
                <>{data.map((course, index) => <Col xs={24} sm={12} key={index}><CourseCard course={course} /></Col>)}
                </>
            }
        </>
    );
}
export default CourseList;