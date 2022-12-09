import styled from "styled-components";
import {colors, sizes} from "../theme/default/styles";

export const SliderCard = styled.div`
  border-radius: 10px;
  height: 372px;
  background-color: ${colors.athensGray};
  isolation: isolate;
  padding-top: 20px;
  padding-left: 20px;
  margin-top: 15px;
`;

export const TitleSlide = styled.div`
  font-weight: 600;
  font-size: 17px;
  line-height: 150%;
  color: ${colors.midnight};
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const SubTitleSlide = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.0025em;
  margin-right: 20px;
`;

// TODO FIX THIS FCKING CIRCLE
export const CircleWithNumber = styled.svg`
  position: fixed;
  bottom: 0;
  right: 0;

  @media (min-width: ${sizes.tablet}px) {
    // left: 270px;
  }
`;

export const Container = styled.div`
  margin: 15px 10px 40px;
  padding: 20px 0 20px 20px;
`;