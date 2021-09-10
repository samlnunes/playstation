import React from "react";
import { Container } from "./style";

interface MenuProps {
  link: string;
}

const Menu: React.FC<MenuProps> = ({ link }) => {
  return (
    <Container>
      <img src={link} alt="logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Consoles</a>
          </li>
          <li>
            <a href="/">Acessórios</a>
          </li>
          <li>
            <a href="/">Controles</a>
          </li>
          <li>
            <a href="/">Outros</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Menu;
