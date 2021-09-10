import React from "react";
import { Menu, Row, Social } from "./components";
import { Container, Body } from "./style";

function App() {
  return (
    <Body>
      <Container>
        <Menu link="https://i.ibb.co/dg0X6HX/logo.png" />
        <Row />
        <Social />
      </Container>
    </Body>
  );
}

export default App;
