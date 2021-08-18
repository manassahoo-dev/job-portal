import { Button, Card, Empty, List, PageHeader } from "antd";
import moment from "moment";
import React, { useState } from "react";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppError from "../utility/AppError";
import AppSpin from "../utility/AppSpin";
import CategoryAdd from "./Add";
import { PlusOutlined } from "@ant-design/icons"

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

                {isAdd ?
                    <CategoryAdd setIsAdd={setIsAdd} /> :
                    <>
                        {error ? <AppError
                            className="vh65 card-center"
                            title="Unable to get Category details"
                            subTitle={error.message}
                        /> :
                            <>
                                {data.length ?
                                    <List
                                        className="vh65 overflow-auto"
                                        itemLayout="horizontal"
                                        dataSource={data}
                                        renderItem={item => (
                                            <List.Item className="px-2" onClick={() => { setCategory(item); setIsAddItem(false) }}>
                                                <List.Item.Meta
                                                    title={<Button className="p-0" type="link" size="small" >{item.name}</Button>}
                                                    description={`Created on ${moment(item.startDate).format("Do MMM YY")}`}
                                                />
                                            </List.Item>
                                        )}
                                    /> :
                                    <Empty
                                        className="vh65 card-center"
                                        description="No category found">
                                        <Button icon={<PlusOutlined />} onClick={() => setIsAdd(true)}>Add One</Button>
                                    </Empty>
                                }
                            </>


                        }
                    </>
                }
            </Card>
        </AppSpin>
    );
}
export default CategoryList;