import styled from "styled-components";
import {colors} from "../theme/default/styles";

export const Button = styled.button`
  margin: 20px auto;
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