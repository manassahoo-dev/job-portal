import { Button, Card, PageHeader } from 'antd';
import React, { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppSpin from '../utility/AppSpin';
import AddItem from './Add';
import ListItem from './List';

function CounsellingCard() {
    const name = "counselling";
    const { contextData } = useContext(AppContext);
    const [isAdd, setIsAdd] = useState(false);
    const [lastRefresh, setLastRefresh] = useState(new Date());
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${contextData.batch?.id}/counselling`, lastRefresh);

    const param = {
        setLastRefresh: setLastRefresh,
        setIsAdd: setIsAdd,
        path: api.COUNSELLING,
        existingIds: data.map(({ id }) => id.counsellingId),
        name: "counsellingIds",
        batchId: contextData.batch?.id
    }

    return (
        <AppSpin loading={loading}>
            <Card className="mb-2">
                <PageHeader
                    className="p-0 mb-1"
                    onBack={isAdd ? () => setIsAdd(false) : ""}
                    title={isAdd ? <span class="ant-page-header-heading-title text-success">Add Counselling</span> : <span class="ant-page-header-heading-title text-success">Counselling</span>}
                    extra={!isAdd && <Button type="link" onClick={() => setIsAdd(true)}>Add</Button>}
                />
                {isAdd ? <AddItem param={param} name={name} /> : <ListItem param={param} data={data} name={name} />}
            </Card>
        </AppSpin>
    );
}
export default CounsellingCard;