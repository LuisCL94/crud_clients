import React, { Component } from 'react';

import { Title, Content1, ContentEmails, ContentPhones, Button, List } from "./styles";
import { Link } from 'react-router-dom';

import PasswordInput from "../../components/PasswordInput";
import NameInput from "../../components/NameInput";
import CpfInput from "../../components/CpfInput";
import EmailInput from "../../components/EmailInput";
import PhoneInput from "../../components/PhoneInput";
import TypeSelect from "../../components/TypeSelect";

// import { TextField } from "@material-ui/core";
import { FaPlus } from "react-icons/fa";

var c;

export default class RegisterClient extends Component {
  state = {
    name: "",
    password: "",
    cpf: "",
    email: "",
    emails: [],
    phone: "",
    type:"",
    phones: [],
    adresses: [],
  }

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleChangeCPF = e => {
    this.setState({ cpf: e.target.value });
  };

  handleChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  handleChangeEmails = email => {
    this.setState({ 
      emails: [...this.state.emails, email],
      email: ""     
    });
  };

  handleDeleteEmail = email => {
      this.setState({ emails: this.state.emails.filter(e => e !== email) });
  };

  handleChangePhone = e => {
    this.setState({ phone: e.target.value });
  };

  handleChangePhones = (type, phone) => {
    this.setState({
      phones: [...this.state.phones, [type, phone]],
      type: "",
      phone:""
    });
  };

  handleDeletePhone = phone => {
    this.setState({ phones: this.state.phones.filter(e => e !== phone) });
  };

  handleChangeType = e => {
    this.setState({type: e.target.value});
  }

  render() {

    return (
      <>
        <Title>Cadastrar de Cliente</Title>

        <Content1>
          <NameInput
            label="Nome"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <PasswordInput
            label="Senha"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <CpfInput
            label="Cpf"
            value={this.state.cpf}
            onChange={this.handleChangeCPF}
          />

          {/* {console.log("\nName: " + this.state.name)}
          {console.log("Password: " + this.state.password + "\n")}
          {console.log("CPF: " + this.state.cpf + "\n")}
          {console.log("Email: " + this.state.email)} */}
        </Content1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "0px 150px"
          }}
        >
          <ContentEmails>
            <div id="emailInput">
              <EmailInput
                label="Email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />

              <Button onClick={() => this.handleChangeEmails(this.state.email)}>
                <FaPlus />
              </Button>
            </div>

            <List>
              {this.state.emails.map(email => (
                <li>
                  <span>{email}</span>
                  <Link onClick={() => this.handleDeleteEmail(email)}>
                    Excluir
                  </Link>
                </li>
              ))}
            </List>
          </ContentEmails>

          <ContentPhones>
            <div id="phoneInput">
              <TypeSelect
                label="Tipo"
                value={this.state.type}
                onChange={this.handleChangeType}
              />

              <PhoneInput
                tipo= {this.state.type}
                label="Telefone"
                value={this.state.phone}
                onChange={this.handleChangePhone}
              />

              <Button onClick={() => this.handleChangePhones(this.state.type, this.state.phone)}>
                <FaPlus />
              </Button>
            </div>

            <List>
              {this.state.phones.map(phone => (
                
                
                <li>
                    <span>{phone[0]}</span> 
                    <span>{phone[1]}</span>
                  <Link onClick={() => this.handleDeletePhone(phone)}>
                    Excluir
                  </Link>
                </li>
              ))}
            </List>
          </ContentPhones>
        </div>
      </>
    );
  }
}