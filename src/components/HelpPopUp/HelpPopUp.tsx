import { FC } from "react";
//@ts-ignore
import { FadeIn } from "animate-components";

import { HelpPopUpContainer, HelpPopUpImage } from "./HelpPopUp.styled";

interface HelpPopUpProps {
  puzzleNumber: number | undefined;
}

const HelpPopUp: FC<HelpPopUpProps> = ({ puzzleNumber }) => {
  return (
    <FadeIn duration="0.5s" timingFunction="ease">
      <HelpPopUpContainer>
        <HelpPopUpImage
          src={require(`../../assets/${puzzleNumber}.jpg`).default}
          alt="Puzzle image"
        />
      </HelpPopUpContainer>
    </FadeIn>
  );
};

export default HelpPopUp;
