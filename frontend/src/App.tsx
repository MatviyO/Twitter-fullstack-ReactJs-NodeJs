import React from 'react';
import {Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
    return (
        <Switch>
            <Route path="/signin"  component={SignIn}/>
            <Route path="/home"  component={Home}/>
        </Switch>
    );
}

export default App;
