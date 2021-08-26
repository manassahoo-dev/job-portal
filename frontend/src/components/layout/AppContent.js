import { BackTop, Layout } from 'antd';
import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../PrivateRoute';
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
                                <PrivateRoute
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
                                </PrivateRoute>
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