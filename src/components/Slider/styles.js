import styled from "styled-components";
import {colors, sizes} from "../theme/default/styles";

export const SliderCard = styled.div`
  border-radius: 10px;
  height: 372px;
  background-color: ${colors.athensGray};
  margin: 15px 10px 40px;
  padding: 20px 0 20px 20px;
  isolation: isolate;
`;

export const TitleSlide = styled.div`
  font-weight: 600;
  font-size: 17px;
  line-height: 150%;
  margin-bottom: 20px;
  color: ${colors.midnight};
  margin-right: 20px;
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
  position: absolute;
  width: 219px;
  height: 219px;
  top: 210px;
  left: 323px;

  @media (min-width: ${sizes.tablet}px) {
  left: 270px;
}
`;