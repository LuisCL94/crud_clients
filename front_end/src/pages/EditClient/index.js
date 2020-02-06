import React, { Component } from 'react';

// import { Container } from './styles';

export default class EditClient extends Component {
  render() {

    const { match } = this.props;
    const clienteCPF = decodeURIComponent(match.params.editClient);

    return (
      <div>
        editar informaçoes do cpf 
        {clienteCPF}
      </div>
    );
  }
}