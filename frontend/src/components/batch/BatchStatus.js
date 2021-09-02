import { Badge } from "antd";
import React from "react";

function BatchStatus({ status }) {
    const batchStatus = {
        NOTSTARTED: 'default',
        INPROGRESS: 'processing',
        COMPLETED: 'success'
    }

    return (
        <Badge status={batchStatus[status]} className="ms-3" />
    );
}
export default BatchStatus;