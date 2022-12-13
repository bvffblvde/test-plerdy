import styled, {css} from "styled-components";
import {colors} from "../theme/default/styles";

export const Button = styled.button`
  margin: ${props => props.margin || "20px auto 10px"};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  border: none;
  width: ${props => props.width || "auto"};
  border-radius: 7px;
  color: ${colors.windSand};
  background: ${colors.dodgerBlue};
  font-family: 'Roboto',serif;
  font-style: normal;
  font-weight: ${props => props.fontWeight || "500"};
  font-size: ${props => props.fontSize || "14px"};
  line-height: 130%;
  letter-spacing: 0.0025em;
  
  &:disabled {
    background: ${colors.anakiwa};
  }
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
  margin: 30px;
  background-color: white;
  border-radius: 11px;
  // padding: 31.5px;
`;

export const ModalHeader = styled.div`
  font-family: 'Roboto', serif;
  padding: 10px 30px;
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: ${colors.midnight};
  margin: 30px 0 18px 0;
`;

export const ModalBody = styled.div`
  padding: 10px 30px;
  text-align: center;
  font-family: 'Roboto', serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.0025em;
`;

export const CloseButtonArea = styled.div`
  float: right;
  background-color: #F3F4F6;
  display: flex;
  border-radius: 30px;
  padding: 5px;
  margin: 5px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
`;

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FormArea = styled.div`
  padding: 5px 30px;
  text-align: left;
`;

export const Errors = styled.span`
  margin-top: 5px;
  display: block;
  position: relative;
  text-align: left;
  color: ${colors.redApple};
  font-size: 14px;
  font-style: italic;
  margin-bottom: 10px;
`;

export const LabelInput = styled.label`
  cursor: pointer;
  width: 100%;
  font-size: 9px;
  padding: 0;
  font-weight: 600;
  line-height: 11.7px;
  letter-spacing: 0.25px;
  color: ${colors.gray};
  text-align: left;
  margin-bottom: 0;
`;

export const FormFieldStyled = styled.input(() => css`
  outline: none;
  border: none;
  color: ${colors.silver};
  background: none;
  width: 100%;
  font-size: 16px;
`);

export const Wrapper = styled.div((props) => css`
  display: flex;
  margin: 3px 0 6px 0;
  border: 0.75px solid ${colors.iron};
  padding: 10px 12px;
  border-radius: 10px;

  &:focus-within {
    outline: none;
    border-color: ${props.invalid ? colors.redApple : colors.midnight};
    box-shadow: ${props.invalid ?
    'inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 6px #ce8483' : 'inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 6px #8db2e3'};
  }
`);