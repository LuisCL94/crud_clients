import React, { Component } from "react";

import { ClientsList, Options, Title, RegisterButton } from "./styles";
import { Link } from "react-router-dom";

export default class ViewClients extends Component {
  state = {
    cpfs: ["006-848-271-07", "524-709-201-59"]
  };

  handleDelete = cpf => {
    if (window.confirm("Deseja excluir o cliente com CPF " + cpf + "?")) {
      this.setState({ cpfs: this.state.cpfs.filter(c => c !== cpf) });
    }
  };


  render() {
    return (
      <>

        <Title>CLIENTES CADASTRADOS</Title>

        <ClientsList>
          {this.state.cpfs.length === 0 ? (
            <span> Sem clientes cadastrados ou sem conexao com o banco</span>
          ) : (
            <></>
          )}

          {this.state.cpfs.map(cpf => (
            <li key={cpf}>
              <span>{cpf}</span>
              <Options>
                <Link to={`/infoClient/${encodeURIComponent(cpf)}`}>
                  Visualizar
                </Link>

                {this.props.permission === "admin" ? (
                  <>
                    <Link to={`/editClient/${encodeURIComponent(cpf)}`}>
                      Editar
                    </Link>

                    <Link onClick={() => this.handleDelete(cpf)}>Deletar</Link>
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
