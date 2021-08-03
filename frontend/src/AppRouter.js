import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopNavigationBar from './components/TopNavigationBar';
import Login from './pages/Login';

function AppRouter() {
  return (
    <div data-testid="app-router">
      <BrowserRouter>
        <TopNavigationBar />
        <Switch>
          <Route exact path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;