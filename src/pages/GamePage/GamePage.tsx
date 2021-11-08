import { FC, Fragment, useState } from "react";
import { useNavigate } from "react-router";

import { FaRegArrowAltCircleLeft, FaCommentDots } from "react-icons/fa";

import { useStore } from "../../store/puzzler";

import Paths from "./../../const/paths";

import GameCards from "./../../components/GameCards/GameCards";
import Button from "./../../components/common/Button/Button";
import HelpPopUp from "../../components/HelpPopUp/HelpPopUp";
import ConfettiBox from "../../components/common/ConfettiBox/ConfettiBox";

import { GamePageContainer } from "./GamePage.styled";

const GamePage: FC = () => {
  const navigate = useNavigate();

  const { puzzleNumber, isGameEnd } = useStore();

  const [showHelp, setShowHelp] = useState(false);

  const onBackButtonClick = () => {
    navigate(Paths.Start, { replace: true });
  };

  const onHelpButtonMouseEnter = () => {
    setShowHelp(true);
  };

  const onHelpButtonMouseLeave = () => {
    setShowHelp(false);
  };

  return (
    <Fragment>
      {isGameEnd && <ConfettiBox />}
      <GamePageContainer>
        <Button position="tl" onClick={onBackButtonClick}>
          <FaRegArrowAltCircleLeft />
        </Button>
        <Button
          position="tr"
          onMouseEnter={onHelpButtonMouseEnter}
          onMouseLeave={onHelpButtonMouseLeave}
        >
          <FaCommentDots />
        </Button>
        {showHelp && <HelpPopUp puzzleNumber={puzzleNumber} />}
        <GameCards />
      </GamePageContainer>
    </Fragment>
  );
};

export default GamePage;
