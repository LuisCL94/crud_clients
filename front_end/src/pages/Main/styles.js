import styled from "styled-components";

export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  h1 {
    margin-bottom: 30px;
  }
`;

export const Auth = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: solid black;
  border-radius: 10px;

  padding: 20px 20px 10px 20px;

  div {
    margin-top: 2px;
  }

  a {
    text-decoration: none;
  }

  button {
    margin: 20px 0 10px 0;
  }
`;
