import { Button, Card, Form, List, PageHeader } from "antd";
import moment from "moment";
import React, { useState } from "react";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppError from "../utility/AppError";
import AppSpin from "../utility/AppSpin";
import CategoryAdd from "./Add";

function CategoryList({ setCategory, setIsAddItem }) {

    const [isAdd, setIsAdd] = useState(false);
    const { data, error, loading } = ApiRequest('GET', api.categories, isAdd);

    return (
        <AppSpin loading={loading}>
            <Card className='overflow-auto'>
                <PageHeader
                    className="p-0 mb-2"
                    onBack={isAdd ? () => setIsAdd(false) : ""}
                    title={isAdd ? "Add New Category" : "Category"}
                    extra={!isAdd && [
                        <Button type="primary" block onClick={() => setIsAdd(true)}>Add New Category</Button>,
                    ]}
                />
                {error ? <AppError
                    title="Unable to get Category details"
                    subTitle={error.message}
                /> :
                    <div className="vh65 overflow-auto">
                        {
                            isAdd ?
                                <CategoryAdd setIsAdd={setIsAdd}/>
                                :

                                <List
                                    itemLayout="horizontal"
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item className="px-2" onClick={() => { setCategory(item); setIsAddItem(false) }}>
                                            <List.Item.Meta
                                                title={<Button className="p-0" type="link" size="small" >{item.name}</Button>}
                                                description={`Created At- ${moment(item.startDate).format("Do MMM YY")}`}
                                            />
                                        </List.Item>
                                    )}
                                />
                        }
                    </div>
                }
            </Card>
        </AppSpin>
    );
}
export default CategoryList;