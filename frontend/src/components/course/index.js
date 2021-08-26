import { Col, Empty } from "antd";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import CourseCard from "./Card";

function CourseList() {
    const { contextData } = useContext(AppContext);
    const { data, error, loading } = ApiRequest('GET', `${api.COURSE}/category/${contextData.categoryId}`, contextData);

    return (
        <>
            {contextData.isAddEdit ? <Col span={12}>
                {loading ?
                    data.map((course, index) => <Col xs={24} key={index}><CourseCard course={course} /></Col>)
                    :
                    <Empty
                        className="vh65 card-center bg-white"
                        description="No course found">
                    </Empty>
                }
            </Col>
                :
                <>{data.map((course, index) => <Col xs={24} sm={12} key={index}><CourseCard course={course} /></Col>)}
                </>
            }
        </>
    );
}
export default CourseList;