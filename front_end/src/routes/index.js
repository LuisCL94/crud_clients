import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from "../pages/Main";
import AdminUserPage from '../pages/AdminUserPage';
import ComumUserPage from "../pages/ComumUserPage";
import InfoClient from "../pages/InfoClient";
import EditClient from "../pages/EditClient";
import RegisterClient from "../pages/RegisterClient";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/adminUser" component={AdminUserPage} />
        <Route path="/comumUser" component={ComumUserPage} />
        <Route path="/infoClient/:infoClient" component={InfoClient} />
        <Route path="/editClient/:editClient" component={EditClient} />
        <Route path="/registerClient" component={RegisterClient} />
      </Switch>
    </BrowserRouter>
  );
}