import React, { Component } from "react";

import { ClientsList, Options, Title, RegisterButton } from "./styles";
import { Link } from "react-router-dom";

import api from "../../services/api";

function cpfMask(cpf) {
  return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})*/, "$1.$2.$3-$4");
}

export default class ViewClients extends Component {
  state = {
    clients: []
  };

  async componentDidMount() {
    const response = await api.get('clients');
    this.setState({ clients: response.data });
  }

  async handleDelete (client) {
    if (window.confirm("Deseja excluir o cliente com CPF " + client.cpf + "?")) {
      this.setState({ clients: this.state.clients.filter(c => c !== client) });
      return await api.delete(`clients/${encodeURIComponent(client.id)}`);
    }
  };

  render() {
    return (
      <>
        <Title>CLIENTES CADASTRADOS</Title>

        <ClientsList>
          {this.state.clients.length === 0 ? (
            <span> Sem clientes cadastrados ou sem conexao com o banco</span>
          ) : (
            <></>
          )}

          {this.state.clients.map(client => (
            <li key={client.id}>
              <span>{cpfMask(client.cpf)}</span>
              <Options>
                <Link to={`/infoClient/${encodeURIComponent(client.id)}`}>
                  Visualizar
                </Link>

                {this.props.permission === "admin" ? (
                  <>
                    <Link to={`/editClient/${encodeURIComponent(client.id)}`}>
                      Editar
                    </Link>

                    <Link onClick={() => this.handleDelete(client)}>
                      Excluir
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </Options>
            </li>
          ))}
        </ClientsList>

        {this.props.permission === "admin" ? (
          <>
            <Link to="/registerClient">
              <RegisterButton>
                <h3>Cadastrar Cliente</h3>
              </RegisterButton>
            </Link>
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}
