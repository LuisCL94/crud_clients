import React, { Component } from 'react';

import api from "../../services/api";

import { Content1, List, Content2, Content3 } from "./styles";

function cpfMask(cpf) {
  return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})*/, "$1.$2.$3-$4");
}

function cepMask(cep) {
  return cep.replace(/^(\d{2})(\d{3})(\d{3})*/, "$1.$2-$3");
}

function phoneMask(phoneType, phone) {
  if(phoneType==="Celular")
    return phone.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})*/, "($1) $2 $3-$4");
  else
    return phone.replace(/^(\d{2})(\d{4})(\d{4})*/, "($1) $2-$3");
}

export default class ViewCliente extends Component {
  state = {
    name: "",
    cpf: "",
    emails: [],
    phones: [],

    cep: "",
    uf: "",
    localidade:"",
    bairro: "",
    logradouro: "",
    complemento: ""
  };

  async componentDidMount() {
    const { match } = this.props;
    const clientId = decodeURIComponent(match.params.infoClient);

    const response = await api.get(`clients/${clientId}`);
    this.setState({
      name: response.data.name,
      cpf: response.data.cpf,
      emails: response.data.emails,
      phones: response.data.phones,

      cep: response.data.adress[0],
      uf: response.data.adress[1],
      localidade: response.data.adress[2],
      bairro: response.data.adress[3],
      logradouro: response.data.adress[4],
      complemento: response.data.adress[5]

    });
  }

  render() {

    return (
      <>
        <Content1>
          <h1>Informações do Cliente</h1>

          <div>
            <span><h3>Nome:</h3>{this.state.name}</span>
            <span><h3>CPF:</h3>{cpfMask(this.state.cpf)}</span>

          </div>
        </Content1>


        <Content2>
          
          <List style={{marginRight: "40px"}}>
            <h3>Email(s):</h3>
            <div>
              {this.state.emails.map(email => (
                <li> <span>{email}</span> </li>
              ))}
            </div>
          </List>

          <List>
            <h3>Telefones(s):</h3>
            <div>
              {this.state.phones.map(phone => (
                <li> <span>
                  {phone[0]} &nbsp;&nbsp;&nbsp;{"-"}&nbsp;&nbsp;&nbsp; {phoneMask(phone[0], phone[1])}
                </span> </li>
              ))}
            </div>
          </List>

        </Content2>

        <Content3>
          <h3>Endereço:</h3>
          <div>
            <li> <span><h4>CEP:</h4>{cepMask(this.state.cep)}</span> </li>
            <li> <span><h4>UF:</h4>{this.state.uf}</span> </li>
            <li> <span><h4>Localidade:</h4>{this.state.localidade}</span> </li>
            <li> <span><h4>Bairro:</h4>{this.state.bairro}</span> </li>
            <li> <span><h4>Logradouro:</h4>{this.state.logradouro}</span> </li>
            <li> <span><h4>Complemento:</h4>{this.state.complemento}</span> </li>
          </div>
        </Content3>
        
      </>
    );
  }
}