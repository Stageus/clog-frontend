import React from "react"
// import { Route, Routes } from 'react-router-dom';
// import Account_Login from "./components/Page/Account/Account_Login.js";

import Router from "./routes/router.js"

const App = () => {

    return (
        <React.Fragment>
            <h1>Clog</h1>
            <Router/>
        </React.Fragment>
    )
}

export default App