import styled from "styled-components";
import { css } from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;
  &:hover {
    background-color: red;
  }
  ${({ isBlack }) =>
    isBlack === true &&
    css`
      background-color: black;
    `}
`;
export default function BoxWithStyledComponents({ isBlack }) {
  return <StyledBox isBlack={isBlack} />;
}
