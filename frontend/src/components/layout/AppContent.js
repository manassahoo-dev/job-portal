import { BackTop, Layout } from 'antd';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routes'
import { VerticalAlignTopOutlined } from '@ant-design/icons';


const { Content } = Layout;

const AppContent = () => {
    return (
        <Content className="container">
            <Suspense fallback={<div color="primary" />}>
                <Switch>
                    {routes.map((route, idx) => {
                        return (
                            route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={(props) => (
                                        <>
                                            <route.component {...props} />
                                        </>
                                    )}
                                />
                            )
                        )
                    })}
                </Switch>
            </Suspense>
            <BackTop />
        </Content>
    )
}

export default AppContent