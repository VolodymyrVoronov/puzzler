import { FC, Fragment } from "react";
import { useNavigate } from "react-router";

import { FaRegArrowAltCircleLeft, FaCommentDots } from "react-icons/fa";

import Paths from "./../../const/paths";

import GameCards from "./../../components/GameCards/GameCards";
import Button from "./../../components/common/Button/Button";

const GamePage: FC = () => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(Paths.Start, { replace: true });
  };

  const onHelpButtonMouseEnter = () => {
    console.log("enter");
  };

  const onHelpButtonMouseLeave = () => {
    console.log("leave");
  };

  return (
    <Fragment>
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
      <GameCards />
    </Fragment>
  );
};

export default GamePage;
