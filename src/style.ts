import styled from "styled-components";

export const Body = styled.div`
background: rgb(0, 212, 255);
  background: linear-gradient(
    48deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(251, 82, 131, 1) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Container = styled.div`
  width: 80%;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
`