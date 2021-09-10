import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    width: 50px;
    margin: 30px 0;
  }

  nav {
    width: 100%;
    text-align: right;
  }
  
  li {
    list-style: none;
    display: inline-block;
    margin-right: 30px;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: #000;
    font-size: 14px;
  }
`