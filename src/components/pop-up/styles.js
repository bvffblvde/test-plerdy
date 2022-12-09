import styled from "styled-components";
import {colors} from "../theme/default/styles";

export const Button = styled.button`
  margin: 20px auto 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  border: none;
  gap: 5px;
  border-radius: 7px;
  color: ${colors.windSand};
  background: ${colors.dodgerBlue};
  font-family: 'Roboto',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.0025em;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  width: 400px;
  height: 400px;
  margin: 30px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  padding: 10px;
`;

export const ModalBody = styled.div`
  padding: 10px;
`;