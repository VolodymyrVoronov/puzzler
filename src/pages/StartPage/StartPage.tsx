import { FC } from "react";

import StartPageCards from "../../components/StartPageCards/StartPageCards";

import { StartPageContainer } from "./StartPage.styled";

const StartPage: FC = () => {
  return (
    <StartPageContainer>
      <StartPageCards />
    </StartPageContainer>
  );
};

export default StartPage;
