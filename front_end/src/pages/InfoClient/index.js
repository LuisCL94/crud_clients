import React, { Component } from 'react';

import api from "../../services/api";

// import { Container } from './styles';

export default class ViewCliente extends Component {
  state = {
    name: "",
    cpf: ""
  };

  async componentDidMount() {
    const { match } = this.props;
    const clientId = decodeURIComponent(match.params.infoClient);

    const response = await api.get(`clients/${clientId}`);
    this.setState({
      name: response.data.name,
      cpf: response.data.cpf
    });
  }


  render() {

    return (
      <div>
        {this.state.name}
        {this.state.cpf}
      </div>
    );
  }
}