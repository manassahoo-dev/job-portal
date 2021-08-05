import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import UserList from './pages/admin/users/index';

const DefaultLayout = React.lazy(() => import('./components/layout/AppLayout'))
const Login = React.lazy(() => import('./pages/Login'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
=======
import TopNavigationBar from './components/TopNavigationBar';
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
>>>>>>> 396e8c8c1cdd52cca0c18b544c32ea8bc137bb52

function AppRouter() {
  return (
    <div data-testid="app-router">
      <BrowserRouter>
<<<<<<< HEAD
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
          </Switch>
        </React.Suspense>
=======
        <TopNavigationBar />
        <Switch>
          <Route exact path='/login' component={Login} />
        </Switch>
        <Switch>
          <Route exact path='/sign-up' component={SignUp} />
        </Switch>
>>>>>>> 396e8c8c1cdd52cca0c18b544c32ea8bc137bb52
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;