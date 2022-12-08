import styled from "styled-components";
import {colors, sizes} from "../theme/default/styles";

export const SliderCard = styled.div`
  border-radius: 10px;
  height: 372px;
  background-color: ${colors.athensGray};
  margin: 40px 10px;
  padding: 20px;
  gap: 20px;
  isolation: isolate;

  .svg {
    position: absolute;
    width: 219px;
    height: 219px;
    left: 264px;
    top: 234px;
  }
`;

export const TitleSlide = styled.div`
  font-weight: 600;
  font-size: 17px;
  line-height: 150%;
  margin-bottom: 20px;
  color: ${colors.midnight};
`;

export const SubTitleSlide = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.0025em;
`;

export const CircleWithNumber = styled.svg`
  position: absolute;
  width: 219px;
  height: 219px;
  top: 234px;
  left: 264px;

  @media (min-width: ${sizes.tablet}px) {
  left: 270px;

}
`;