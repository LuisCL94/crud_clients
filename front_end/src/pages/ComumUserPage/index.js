import React, { Component } from "react";

import CrudClients from "../../components/CrudClients";
import { CommumUserPage } from "./styles";

export default class ComumPage extends Component {
  render() {
    return (
      <CommumUserPage>

        <h1>Usuário Commum</h1>
        <CrudClients />
      
      </CommumUserPage>
    );
  }
}
