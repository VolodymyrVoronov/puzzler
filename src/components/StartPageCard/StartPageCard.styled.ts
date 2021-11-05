import styled from "styled-components";

interface StartPageCardContainerProps {
  bgSrc: string;
}

const StartPageCardContainer = styled.div<StartPageCardContainerProps>`
  display: flex;

  width: 376px;
  height: 250px;

  background-image: url(${(props) => props.bgSrc});
  background-size: 105%;
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);

  cursor: pointer;

  transition: all 0.5s ease;

  &:nth-child(n + 4) {
    margin-top: 36px;
  }

  &:hover {
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.5);

    transition: all 0.5s ease;

    background-size: 120%;
    background-position: center;
  }
`;

export { StartPageCardContainer };
