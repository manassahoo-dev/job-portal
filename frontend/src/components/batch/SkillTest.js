import { Button, Card, PageHeader } from 'antd';
import React, { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppSpin from '../utility/AppSpin';
import AddItem from './Add';
import ListItem from './List';

function SkillTestCard() {

    const name = "skillSet";
    const [isAdd, setIsAdd] = useState(false);
    const [lastRefresh, setLastRefresh] = useState(new Date());
    const { contextData } = useContext(AppContext);
    const { data, error, loading } = ApiRequest('GET', `${api.BATCH}/${contextData.batch?.id}/skillSets`, lastRefresh);

    const param = {
        setLastRefresh: setLastRefresh,
        setIsAdd: setIsAdd,
        path: api.SKILLSET,
        existingIds: data.map(({ id }) => id.skillSetId),
        name: "skillTestIds",
        batchId: contextData.batch?.id
    }

    return (
        <AppSpin loading={loading}>
            <Card className="mb-2">
                <PageHeader
                    className="p-0 mb-1"
                    onBack={isAdd ? () => setIsAdd(false) : ""}
                    title={isAdd ? <span className="ant-page-header-heading-title text-success">Add Skill Test</span> :
                        <span className="ant-page-header-heading-title text-success">Skill Tests</span>}
                    extra={!isAdd && <Button type="link" onClick={() => setIsAdd(true)}>Add</Button>}
                />
                {isAdd ? <AddItem param={param} name={name} /> : <ListItem param={param} data={data} name={name} />}
            </Card>
        </AppSpin>
    );
}
export default SkillTestCard;