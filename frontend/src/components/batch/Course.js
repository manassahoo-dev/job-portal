import { Button, Card, List, PageHeader } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import React, { useContext, useState } from "react";
import { FiTrash, FiPlus } from "react-icons/fi";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppSpin from '../utility/AppSpin';
import AddItem from './Add';
import ListItem from './List';

function CourseCard() {
    const { contextData } = useContext(AppContext);
    const [isAdd, setIsAdd] = useState(false);
    const [lastRefresh, setLastRefresh] = useState(new Date());
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${contextData.batch?.id}/courses`, lastRefresh);
    
    const param = {
        setLastRefresh: setLastRefresh,
        setIsAdd: setIsAdd,
        path: api.COURSE,
        existingIds: data.map(({ id }) => id.courseId),
        name: "courseIds",
        batchId: contextData.batch?.id
    }

    return (
        <AppSpin loading={loading}>
            <Card>
                <PageHeader
                    className="p-0 mb-1"
                    onBack={isAdd ? () => setIsAdd(false) : ""}
                    title={isAdd ? "Add Course" : "Courses"}
                    extra={!isAdd && <Button type="link" onClick={() => setIsAdd(true)}>Add</Button>}
                />
                {isAdd ? <AddItem param={param} /> : <ListItem param = {param} data={data} name="course"/>}
            </Card>
        </AppSpin>
    );
}
export default CourseCard;