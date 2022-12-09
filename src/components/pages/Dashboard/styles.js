import styled from "styled-components";
import {colors} from "../../theme/default/styles";

export const Card = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: ${props => props.backgroundColor || colors.pattensBlue};
  margin: ${props => props.margin || "10px"};
  padding: 20px 10px;
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
  margin: ${props => props.margin};
  color: ${props => props.color || colors.midnight};
  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.fontSize || '12px'};
  line-height: 14px;
  text-align: ${props => props.textAlign || 'left'};
  
  .default-text {
    color: ${colors.sooGray};
    line-height: initial;
  }
`;

export const LogoArea = styled.div`
  vertical-align: middle;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: ${props => props.marginTop || '5px'};
  
  .analytic-icon {
    animation-name: Appearance;
    animation-duration: 3s;
    animation-timing-function: cubic-bezier(.1, -.6, .2, 0);

    @-webkit-keyframes Appearance {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-o-keyframes Appearance {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes Appearance {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes Appearance {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    
  }
`;

export const LogoCompany = styled.img`
  margin: ${props => props.margin || '5px'};
`;

export const ReasonsArea = styled.div`
 margin: 20px 0 0;
`;

export const AnalyticIconFirst = styled.img`
  float: left;
  padding-left: 35px;
  margin-right: -100%;
  top: -25px;
  position: relative;
  z-index: 1;
`;

export const AnalyticIconSecond = styled.img`
  float: left;
  padding-left: 25px;
  margin-right: -100%;
  top: 170px;
  position: relative;
  z-index: 1;
`;

export const AnalyticIconThird = styled.img`
  float: left;
  padding-left: 210px;
  margin-right: -100%;
  top: 40px;
  position: relative;
  z-index: 1;
`;

