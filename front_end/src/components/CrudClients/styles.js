import styled from "styled-components";

export const Title = styled.strong`
  text-align: center;
`;

export const ClientsList = styled.ul`
  list-style: none;
  margin-top: 5px;
  border: solid black;
  border-radius: 10px;
  padding: 0 20px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: blue;
      text-decoration: none;
      margin-left: 40px;
      &:hover {
        color: #7159c1;
      }
    }
  }
`;

export const Options = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterButton = styled.button`
  /* position: absolute;
  top: 10%;
  left: 65%; */

  margin-top: 30px;
  color: white;

  background: #666;
  border: 2px solid black;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    border: 2px solid black;
    font-size: 15px;
    transition: font-size 0.05s;

    h3 {
      color: white;
    }
  }
`;
