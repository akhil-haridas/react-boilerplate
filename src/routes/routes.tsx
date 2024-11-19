. // src/routes.tsx
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={<></>} />
        <Route path="/login" component={<></>} />
        <Route path="/signup" component={<></>} />
        <PrivateRoute path="/chat" layout={<></>} component={<></>} />
        <PrivateRoute path="/profile" layout={<></>} component={<></>} />
        <Route component={<></>} />
    </Switch>
);

export default Routes;
