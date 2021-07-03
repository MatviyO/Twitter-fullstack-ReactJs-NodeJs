import React from 'react';
import SignIn from "./pages/SignIn";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <SignIn/>
        </BrowserRouter>
    );
}

export default App;
