import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0;
`

export const RowLeft = styled.div`
  margin-left: 50px;
  position: relative;

  h2 {
    font-size: 54px;
  }
  
  h3 {
    font-size: 30px;
    color: #707070;
    font-weight: 100;
    margin: 20px 0;
  }

  p {
    font-size: 16px;
    color: #b7b7b7;
    font-weight: 100;
  }

  h4 {
    font-size: 20px;
    color: #000;
    margin: 30px 0;
  }

  button {
    width: 140px;
    border: none;
    padding: 12px 10px;
    outline: none;
    color: #fff;
    border-radius: 6px;
    cursor: pointer;
    z-index: 2;
    background: linear-gradient(to right, #fb5283, #ff3527);
  }
`

export const RowRight = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  img {
    width: 90%;
    z-index: 2;
  }

  div {
    position: absolute;
    right: 0;
    top: 0;
    background: linear-gradient(#ff54a2, #ff575a);
    height: 100%;
    width: 80%;
    border-radius: 20px 0 0 20px;
    z-index: 1;
    transform: translateX(150px);
  }

  button {
    z-index: 2;
    border: none;
    background-color: transparent;
    cursor: pointer;

    img {
      height: 45px;
      width: 45px;
    }
  }
`