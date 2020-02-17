import styled from "styled-components";

export const Title = styled.h1`
  margin-top: 30px;
  text-align: center;
`;

export const Content1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin: 20px 400px;

  /* input {
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
  } */
`;

export const ContentEmails = styled.div`
  display: flex;
  flex-direction: column;

  #emailInput {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentPhones = styled.div`
  display: flex;
  flex-direction: column;

  #phoneInput {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonP = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #7159c1;
  border: 0;
  padding: 15px 15px;
  margin-top: 7px;
  margin-left: 10px;
  border-radius: 4px;

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 350px;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;

export const Adress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* margin: 0 100px; */

  margin-top: 30px;

  #adressData1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    button {
      margin-right:40px;
    }
    margin-bottom: 10px;
  
    #cepInput {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  
  }

  #adressData2 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;
