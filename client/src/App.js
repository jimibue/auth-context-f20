import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import NavBar1 from "./components/Navbar1";
import ThingsDemo from "./things/ThingsDemo";
import { Container } from "semantic-ui-react";
import AccountProfile from "./components/AccountProfile";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <NavBar1 />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account/profile" component={AccountProfile} />
          <Route exact path="/thingsDemo" component={ThingsDemo} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
