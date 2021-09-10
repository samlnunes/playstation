import React from "react";

import { Container, RowLeft, RowRight } from "./style";

const Row: React.FC = () => {
  return (
    <Container>
      <RowLeft>
        <h2>PS5 Dualshok</h2>
        <h3>Wireless Controller for PlayStation</h3>
        <p>Controle Original</p>
        <h4>R$ 222,50</h4>
        <button>Comprar agora</button>
      </RowLeft>

      <RowRight>
        <img
          src="https://i.postimg.cc/cLJ5XTQZ/controller.png"
          alt="controle"
        />
        <div></div>
        <button>
          <img
            src="https://i.ibb.co/CvgWy1n/add.png"
            alt="adicionar-ao-carrinho"
          />
        </button>
      </RowRight>
    </Container>
  );
};

export default Row;
