import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout } from 'antd';
import React from 'react';
import { Link, useLocation } from "react-router-dom";

const { Footer } = Layout;

const AppBreadCrumb = () => {
    const path = useLocation().pathname;
    return (
        <Breadcrumb className="my-3">
            <Breadcrumb.Item>
                <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                {path}
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default AppBreadCrumb