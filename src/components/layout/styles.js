import styled from "styled-components";
import {sizes} from "../theme/default/styles";
export const Layout = styled.div`
  background-color: gainsboro;
  display: inline;

  @media (min-width: ${sizes.tablet}px) {
    display: flex;
  }
`;