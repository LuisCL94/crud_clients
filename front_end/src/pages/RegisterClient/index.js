import React, { Component } from 'react';

import { Title, Content1, ContentEmails, ContentPhones, ButtonP, List, Adress } from "./styles";

import { Link } from 'react-router-dom';

import NameInput from "../../components/NameInput";
import CpfInput from "../../components/CpfInput";
import EmailInput from "../../components/EmailInput";
import PhoneInput from "../../components/PhoneInput";
import TypeSelect from "../../components/TypePhoneSelect";
import CepInput from "../../components/CepInput";
import Input from "../../components/Input";

import { FaPlus } from "react-icons/fa";

import api from "../../services/api";
import apiViaCep from "../../services/apiViaCep";

import { Button } from "@material-ui/core";
import * as EmailValidator from "email-validator";

import { Redirect } from "react-router-dom";

function alpha_numeric_filter(string) {
  return string.replace(/[\W_-]/g, "");
}

function validateName(name) { 
  return /^([a-zA-Z0-9 ]{3,100})$/.test(name)
}

var disableSaveClient; 

export default class RegisterClient extends Component {
  state = {
    name: "",
    cpf: "",
    email: "",
    emails: [],
    phone: "",
    type:"",
    phones: [],
    
    cep: "",
    validCep: false,
    uf: "",
    localidade:"",
    bairro: "",
    logradouro: "",
    complemento: "",

    registerDone: false,
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDeleteItem = (itens, item) => e => {
    this.setState({ [e.target.name]: itens.filter(i => i !== item) });
  }

  handleChangeEmails = email => {
    if(EmailValidator.validate(email)) {
      this.setState({ 
        emails: [...this.state.emails, email],
        email: ""     
      });
    }
    else {
      window.alert("Email Invalido");
    }
  };

  handleChangeTypePhone = e => {
    this.setState({
      type: e.target.value,
      phone: ""
    })

  }

  handleChangePhones = (type, phone) => {
    if(this.state.type.length===0)
      window.alert("Selecione o tipo antes de adicionar um telefone");
    else if(alpha_numeric_filter(this.state.phone).length < 10) {
      window.alert("Telefone inválido");
    }
    else if(alpha_numeric_filter(this.state.phone).length === 10 && this.state.type === "Celular") {
        window.alert("Telefone celular deve ter um número a mais");
    }
    else {
      this.setState({
        phones: [...this.state.phones, [type, phone]],
        type: "",
        phone:""
      });
    }
  };
  
  eraseInfoAdress = e => {
    this.setState({
      uf: "",
      localidade: "",
      bairro: "",
      logradouro: "",
      complemento: ""
    });
  }

  loadAdress = cep => async e => {
    if (alpha_numeric_filter(cep).length !== 8) {
      window.alert("Formato de CEP Invalido");
      this.setState({validCep: false});
      this.eraseInfoAdress();
    }

    else {
      const response = await apiViaCep.get(
        `${alpha_numeric_filter(cep)}/json`);

      if (response.data.cep) {
        this.setState({
          validCep: true,
          cep: response.data.cep,
          uf: response.data.uf,
          localidade: response.data.localidade,
          bairro: response.data.bairro,
          logradouro: response.data.logradouro
        });
      }
      else {
        this.setState({validCep: false});
        window.alert("CEP nao encontrado!");
        this.eraseInfoAdress();
      }
    }
  }
  
  validatePhones(element) {
    element[1] = alpha_numeric_filter(element[1]);
  }

  createClient = async e => {
    const response = await apiViaCep.get(
      `${alpha_numeric_filter(this.state.cep)}/json`);

    if (response.data.cep) {
      this.state.phones.forEach(this.validatePhones); 
      
      const params = {
        name: this.state.name,
        cpf: alpha_numeric_filter(this.state.cpf),
        emails: this.state.emails,
        phones: this.state.phones,
        adress: [
          alpha_numeric_filter(this.state.cep),
          this.state.uf,
          this.state.localidade,
          this.state.bairro,
          this.state.logradouro,
          this.state.complemento
        ]
      };
      api.post('clients', params)
      .then((response) => {
        console.log(response)
        this.setState({ registerDone: true });
      }, (error) => {
        console.log(error);
      });
    }
    else {      
      this.eraseInfoAdress();
      window.alert("Cep Invalido")
    }
  }

  render() {    
    return (
      <>
        {validateName(this.state.name) &&
        alpha_numeric_filter(this.state.cpf).length === 11 &&
        this.state.emails.length > 0 &&
        this.state.phones.length > 0 &&
        alpha_numeric_filter(this.state.cep).length === 8 &&
        this.state.uf.length > 0 &&
        this.state.localidade.length > 0 &&
        this.state.bairro.length > 0 &&
        this.state.logradouro.length > 0 &&
        this.state.validCep
          ? (disableSaveClient = false)
          : (disableSaveClient = true)}

        <Title>Cadastrar de Cliente</Title>

        <Content1>
          <NameInput
            ref="searchInput"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <CpfInput
            name="cpf"
            value={this.state.cpf}
            onChange={this.handleChange}
          />
        </Content1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "0px 200px"
          }}
        >
          <ContentEmails>
            <div id="emailInput">
              <EmailInput
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />

              <ButtonP
                title="adicionar email"
                id="emails"
                onClick={() => this.handleChangeEmails(this.state.email)}
              >
                <FaPlus />
              </ButtonP>
            </div>

            <List>
              {this.state.emails.map(email => (
                <li>
                  <span>{email}</span>
                  <Link
                    name="emails"
                    onClick={this.handleDeleteItem(this.state.emails, email)}
                  >
                    Excluir
                  </Link>
                </li>
              ))}
            </List>
          </ContentEmails>

          <ContentPhones>
            <div id="phoneInput">
              <TypeSelect
                // name="type"
                value={this.state.type}
                onChange={this.handleChangeTypePhone}
              />

              <PhoneInput
                type={this.state.type}
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />

              <ButtonP
                title="adicionar telefone"
                onClick={() =>
                  this.handleChangePhones(this.state.type, this.state.phone)
                }
              >
                <FaPlus />
              </ButtonP>
            </div>

            <List>
              {this.state.phones.map(phone => (
                <li>
                  <span>{phone[0]}</span>
                  <span>{phone[1]}</span>
                  <Link
                    name="phones"
                    onClick={this.handleDeleteItem(this.state.phones, phone)}
                  >
                    Excluir
                  </Link>
                </li>
              ))}
            </List>
          </ContentPhones>
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            border: "0.5px solid",
            marginTop: "30px"
          }}
        ></div>

        <Adress>
          <div id="adressData1">
              <CepInput
                name="cep"
                value={this.state.cep}
                onChange={this.handleChange}
                onBlur={this.loadAdress(this.state.cep)}
              />
              {/* <ButtonP
                title="carregar/validar dados do cep"
                onClick={this.loadAdress(this.state.cep)}
              > 
                <FaPlus />
              </ButtonP> */}

            <Input
              width="80px"
              label="uf"
              name="uf"
              value={this.state.uf}
              onChange={this.handleChange}
            />

            <Input
              label="localidade"
              name="localidade"
              value={this.state.localidade}
              onChange={this.handleChange}
            />
          </div>

          <div id="adressData2">
            <Input
              label="bairro"
              name="bairro"
              value={this.state.bairro}
              onChange={this.handleChange}
            />

            <Input
              label="logradouro"
              name="logradouro"
              value={this.state.logradouro}
              onChange={this.handleChange}
            />

            <Input
              label="complemento"
              name="complemento"
              value={this.state.complemento}
              onChange={this.handleChange}
            />
          </div>
        </Adress>

        {this.handleDisable}

        <Button
          style={{
            display: "flex",
            margin: "auto",
            marginTop: "30px",
            marginBottom: "40px"
          }}
          variant="contained"
          color="primary"
          onClick={this.createClient}
          disabled={disableSaveClient}
        >
          Salvar
        </Button>

        {this.state.registerDone ? <Redirect to="/adminUser" /> : (<></>)}

      </>
    );
  }
}