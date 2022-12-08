import styled from "styled-components";
import {colors} from "../../theme/default/styles";

export const Card = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: ${colors.pattensBlue};
  margin: 10px;
  padding: 20px 10px;
  
  .background-sales {
    background-image: url("../../icons/default-icons/urkPostLogo.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
`;

export const Title = styled.span`
  color: ${colors.midnight};
  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  letter-spacing: 0.02em;
`;

export const TextAbout = styled.div`
  margin-top: ${props => props.marginTop || '20px'};
  color: ${props => props.color || colors.midnight};
  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.fontSize || '12px'};
  line-height: 14px;
  text-align: ${props => props.textAlign || 'left'};
`;

export const LogoArea = styled.div`
  vertical-align: middle;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 5px;
`;

export const LogoCompany = styled.img`
  margin: 5px;
`;
