import React, { Component } from 'react';

// import { Container } from './styles';

export default class ViewCliente extends Component {
  render() {

    const { match } = this.props;
    const clienteCPF = decodeURIComponent(match.params.infoClient);

    return (
      <div>
        {clienteCPF}
      </div>
    );
  }
}