import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Account from '../components/account/account.component';
import AdminReport from '../components/admin/admin-report/admin-report.component';
import Authentication from '../components/authentication/authentication.component';
import Login from '../components/login/login.component';
import Profile from '../components/profile/profile.component';
import RegisterUser from '../components/register-user/register.user.component';
import AuthGuard from './auth-guard/auth.guard';


function AppRouter() {
  return (
    <div data-testid="app-router">
      <BrowserRouter>
        <Switch>
          <Route exact path='/registration' component={RegisterUser} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/auth' component={Authentication} />
          <AuthGuard exact path='/profile' component={Profile} />
          <AuthGuard exact path='/account' component={Account} />
          <Route exact path='/login' component={Login} />
          <AuthGuard exact path='/report' component={AdminReport} />
          <AuthGuard exact path='/dashboard' />
          <AuthGuard exact path='/' >
            <Redirect to="/dashboard" />
          </AuthGuard>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;