import { Layout } from 'antd';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routes'

const { Content } = Layout;

const AppContent = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
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
                    <Redirect from="/" to="/dashboard" />
                </Switch>
            </Suspense>
        </Content>
    )
}

export default AppContent