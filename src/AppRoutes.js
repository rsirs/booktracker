import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";
import SearchBooks from "./SearchBooks";

function AppRoutes(props) {
    return (
        <BrowserRouter>
             <switch>
                 <Route  exact path='/' component={App} />
                 <Route path="/search" component={SearchBooks} />
             </switch>
        </BrowserRouter>
    )
}

export default AppRoutes;