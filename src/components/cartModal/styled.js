import styled from "styled-components";


export const Center = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export const Modal = styled.div`
  background-size: cover;
  background: white;
  color: white;
  z-index: 3;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;