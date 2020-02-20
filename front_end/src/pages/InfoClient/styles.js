import styled from 'styled-components';

export const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    margin: 30px 0;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
        
    margin-right: 50px;
    h3{
      margin-right:10px;
    }
  }

`;

export const List = styled.ul`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;

  list-style: none;

  h3 {
    margin-bottom:5px;
  }

  div{
    border: 2px solid black;
    border-radius: 5px;
  }
  margin-top: 20px;

  li {
    padding: 15px 0;
    display: flex;

    & + li {
      border-top: 1px solid #eee;
    }

    span {
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      margin: auto;
      padding: 0px 15px;
    }
  }
  h4 {
    margin-right: 10px;
  }
`;

export const Content2 = styled.ul`
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content:center; 

  margin-bottom:20px;

`;

export const Content3 = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;

  list-style: none;

  h4{
    margin-right: 10px;
  }  
  li {
    margin-top:10px;
  }

  div{
    margin-top: 5px;
    border: 2px solid black;
    border-radius: 5px;
    padding: 0 10px;
    padding-bottom: 10px;
  
  }

  span {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
  }
`;