import { Col, Empty } from "antd";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppEmpty from "../utility/AppEmpty";
import CourseCard from "./Card";

function CourseList() {
    const { contextData } = useContext(AppContext);
    const { data, error, loading } = ApiRequest('GET', `${api.COURSE}/category/${contextData.categoryId}`, contextData);

    return (
        <>
            {data.length ?
                <>
                    {contextData.isAddEdit ?
                        <Col span={12}>
                            <>{data.map((course, index) => <Col xs={24} key={index}><CourseCard course={course} /></Col>)}</>
                        </Col>
                        :
                        <>{data.map((course, index) => <Col xs={24} sm={12} key={index}><CourseCard course={course} /></Col>)}
                        </>
                    }
                </>
                :
                <Col span={contextData.isAddEdit ? 12 : 24}>
                    <AppEmpty name="Course" />
                </Col>
            }
        </>
    );
}
export default CourseList;