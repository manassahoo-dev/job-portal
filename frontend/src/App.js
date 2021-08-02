import React from "react";
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import './App.css';
import {
  AppNavBar,
  setItemActive
} from "baseui/app-nav-bar";
import {
  ChevronDown,
  Delete,
  Overflow,
  Upload
} from "baseui/icon";
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();

  const [mainItems, setMainItems] = React.useState([
    { icon: Upload, label: "Home", url: '/' },
    { icon: Overflow, label: "About", url: '/about' },
    { icon: Delete, label: "Users", url: '/users' },
  ]);
  return (
    <div className="App">
      <Router>
        <AppNavBar
          title="Job Portal"
          mainItems={mainItems}
          mapItemToNode={item => <Link to={item.url}>{item.label}</Link>}
          onMainItemSelect={item => {
            setMainItems(prev => setItemActive(prev, item));
          }}
          username="Umka Marshmallow"
          usernameSubtitle="5 Stars"
          userItems={[
            { icon: Overflow, label: "User A" },
            { icon: ChevronDown, label: "User B" }
          ]}
          onUserItemSelect={item => console.log(item)}
        />

        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Users() {
  return <h1>Users</h1>;
}
export default App;
