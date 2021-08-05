import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const DefaultLayout = React.lazy(() => import('./components/layout/AppLayout'))
const Login = React.lazy(() => import('./pages/Login'))
const SignUp = React.lazy(() => import('./pages/SignUp'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function AppRouter() {
  return (
    <div data-testid="app-router">
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route exact path="/signup" name="Signup Page" render={(props) => <SignUp {...props} />} />
            <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;