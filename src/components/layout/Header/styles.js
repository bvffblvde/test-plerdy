import styled from "styled-components";
import {colors} from "../../theme/default/styles";

export const Header = styled.div`
  height: 49px;
  position: sticky;
  top: 0;
  background: ${colors.windSand};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid ${colors.mercury};
  z-index: 10;
`;