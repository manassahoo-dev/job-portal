import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopNavigationBar from './components/TopNavigationBar';
import Login from './pages/Login';
import SignUp from "./pages/SignUp";

function AppRouter() {
  return (
    <div data-testid="app-router">
      <BrowserRouter>
        <TopNavigationBar />
        <Switch>
          <Route exact path='/login' component={Login} />
        </Switch>
        <Switch>
          <Route exact path='/sign-up' component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;