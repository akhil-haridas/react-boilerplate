......import React from 'react';
import { Redirect, Route, RouterProps } from 'react-router-dom';

const isAuthenticated = () => { }

interface PrivateRouteProps extends RouterProps {
    layout: React.ComponentType<any>;
    component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    layout: Layout,
    component: Component,
    ...rest
}) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <Layout>
                    <Component {...props} />
                </Layout>
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

export default PrivateRoute;
