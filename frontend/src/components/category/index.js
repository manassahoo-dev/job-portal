import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Empty, List, PageHeader, Tooltip } from "antd";
import React, { useState } from "react";
import { FiPlus, FiRotateCcw } from "react-icons/fi";
import api from "../../services/api";
import ApiRequest from "../../services/ApiRequest";
import AppError from "../utility/AppError";
import AppSpin from "../utility/AppSpin";
import CategoryAdd from "./Add";
import CategoryCard from "./Card";

function CategoryList({ id, setCategory, groupBy }) {

    const [isAdd, setIsAdd] = useState(false);
    const [lastRefresh, setLastRefresh] = useState(new Date());
    const { data, error, loading } = ApiRequest('GET', `${api.CATEGORY}/${groupBy}`, lastRefresh);
    return (
        <AppSpin loading={loading} size="large" tip="Fetching categories...">
            <Card className={loading ? 'vh65' : 'overflow-auto'}>
                <PageHeader
                    className="p-0 mb-2"
                    onBack={isAdd ? () => setIsAdd(false) : ""}
                    title={isAdd ? "Add New Category" : "Category"}
                    extra={!isAdd && [
                        <Tooltip title="Refresh">
                            <Button type="link" shape="circle" icon={<FiRotateCcw />} onClick={() => setLastRefresh(new Date())} />
                        </Tooltip>,
                        <Button type="primary" icon={<FiPlus />} onClick={() => setIsAdd(true)}>Add</Button>,
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
                                            <CategoryCard id={id} item={item} setCategory={setCategory} />
                                        )}
                                    /> :
                                    <Empty
                                        className={loading ? "d-none" : "vh65 card-center"}
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