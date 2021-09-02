import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Empty, List, PageHeader } from "antd";
import Text from "antd/lib/typography/Text";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppError from "../utility/AppError";
import AppSpin from "../utility/AppSpin";

function EnquiryList() {

    const { contextData, setContextData } = useContext(AppContext);
    const { data, error, loading } = ApiRequest('GET', api.ENQUIRY, contextData);
    return (
        <AppSpin loading={loading} size="large" tip="Fetching enquiries...">
            <Card className={loading ? 'vh65' : 'overflow-auto'}>
                <PageHeader
                    className="p-0 mb-2"
                    title="Enquiry"
                    extra={!contextData.isAddEdit && [
                        <Button type="primary" block icon={<PlusOutlined />} onClick={() => setContextData({ ...contextData, isAddEdit: true })}> Add Enquiry</Button>,
                    ]}
                />

                <>
                    {error ? <AppError
                        className="vh65 card-center"
                        title="Unable to get Enquiry details"
                        subTitle={error.message}
                    /> :
                        <>
                            {data.length ?
                                <List
                                    className="vh65 overflow-auto"
                                    itemLayout="horizontal"
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item
                                            className={item.id === contextData.selectedItem?.id ? "custom-card active" : "custom-card"}
                                            onClick={() => { setContextData({ ...contextData, selectedItem: item }) }}
                                        >
                                            <List.Item.Meta
                                                title={<Text><b>{item.studentName}</b></Text>}
                                            />
                                        </List.Item>
                                    )}
                                /> :
                                <Empty
                                    className={loading ? "d-none" : "vh65 card-center"}
                                    description="No Enquiry found">
                                    {!contextData.isAddEdit &&
                                        <Button icon={<PlusOutlined />} onClick={() => setContextData({ ...contextData, isAddEdit: true })}>Add One</Button>
                                    }
                                </Empty>
                            }
                        </>
                    }
                </>
            </Card>
        </AppSpin>
    )
}
export default EnquiryList