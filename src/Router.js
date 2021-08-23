import React from "react";
import { Switch, Route, BrowserRouter} from "react-router-dom";

import Promo from './pages/Recomendacao';
import GoogleBtn from "./pages/Google";
import Email from  './pages/email'

  export default function routes() {
      return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/google" component={GoogleBtn}/>
            <Route path="/google/recomendacao" component={Promo}/>
            <Route path="/google/email" component={Email}/>
        </Switch>
      </BrowserRouter>
      )
  }