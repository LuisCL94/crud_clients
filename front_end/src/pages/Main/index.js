import React, { Component } from 'react';

import { MainPage, Auth } from './styles';

import PasswordInput from "../../components/PasswordInput";
import NameInput from "../../components/NameInput";

import { Button } from "@material-ui/core";

import { Redirect } from "react-router";

export default class Main extends Component {
  state = {
    acessAllowed: false,
    name: "",
    password: "",
  }

  handleInputName = e => {
    this.setState({ name: e.target.value });
  };

  handleInputPassword = e => {
    this.setState({ password: e.target.value });
  };

  validatePassword = pass => {
    if (this.state.password === "123456" && (this.state.name==="admin" || this.state.name === "user"))
      this.setState({acessAllowed: true})
    else
      window.alert("nome e/ou senha incorretos");
  };

  render() {
    return (
      <>
        <MainPage>
          <h1>Autenticação de Usuário</h1>

          <Auth>
            <NameInput
              label="Nome"
              value={this.state.name}
              onChange={this.handleInputName}
            />

            <PasswordInput
              label="Senha"
              value={this.state.password}
              onChange={this.handleInputPassword}
            />

            {console.log(
              "nome: " + this.state.name + "\npassword: " + this.state.password
            )}

            <Button
              variant="contained"
              color="primary"
              onClick={this.validatePassword}
            >
              {console.log("Permissao: " + this.state.acessAllowed)}
              Autenticar
            </Button>

            {this.state.acessAllowed && this.state.name === "admin"? 
            ( <Redirect to="/adminUser" /> ) : (<></>) }

            {this.state.acessAllowed && this.state.name === "user" ?
              (<Redirect to="/comumUser" />) : (<></>)}

          </Auth>
        </MainPage>
      </>
    );
  }
}