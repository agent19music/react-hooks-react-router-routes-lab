import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>
   <div>
            <NavBar />
            <Switch>
            <Route exact path="/">
                    <Home />
                    </Route>
                <Route path="/actors">
                    <Actors />
                </Route>
                <Route exact path="/directors">
                    <Directors />
                </Route>
                <Route exact path="/movies">
                    <Movies />    
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </div>

  </div>;
}

export default App;
