import React, { Component } from 'react';

import api from "../../services/api";

// import { Container } from './styles';

export default class EditClient extends Component {
  state = {
    name: "",
    cpf: ""
  };

  async componentDidMount() {
    const { match } = this.props;
    const clientId = decodeURIComponent(match.params.editClient);

    const response = await api.get(`clients/${clientId}`);
    this.setState({
      name: response.data.name,
      cpf: response.data.cpf
    });
  }

  render() {

    return (
      <div>
        editar informaçoes
        {this.state.name}
        {this.state.cpf}
      </div>
    );
  }
}