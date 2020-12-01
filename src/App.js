import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import React from "react";
import Main from "./components/main/Main";
import Personal from "./components/personal/Personal";
import Group from "./components/group/Group";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/personal" exact component={Personal}></Route>
        <Route path="/group" exact component={Group}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
