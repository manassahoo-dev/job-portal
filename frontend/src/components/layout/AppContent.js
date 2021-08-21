import { BackTop, Layout } from 'antd';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';

const { Content } = Layout;

const AppContent = (props) => {
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
                                >
                                </Route>
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