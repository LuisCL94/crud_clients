import React, { Component } from "react";

import CrudClients from "../../components/CrudClients";
import { AdminUserPage } from "./styles";

export default class AdminPage extends Component {
  render() {
    return (
      <AdminUserPage>

        <h1>Usuário Administrador</h1>
        <CrudClients permission="admin"/>

      </AdminUserPage>
    );
  }
}