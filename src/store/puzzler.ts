import create from "zustand";

import startCard1 from "./../assets/1.jpg";
import startCard2 from "./../assets/2.jpg";
import startCard3 from "./../assets/3.jpg";
import startCard4 from "./../assets/4.jpg";
import startCard5 from "./../assets/5.jpg";
import startCard6 from "./../assets/6.jpg";

interface startCard {
  id: number;
  cardImageSrc: string;
  cardImageAlt: string;
}

interface PuzzlerStore {
  startCards: startCard[];
}

export const useStore = create<PuzzlerStore>((set, get) => ({
  startCards: [
    { id: 1, cardImageSrc: startCard1, cardImageAlt: "Venice beach sign." },
    { id: 2, cardImageSrc: startCard2, cardImageAlt: "Palms and blue sky." },
    {
      id: 3,
      cardImageSrc: startCard3,
      cardImageAlt: "Sign of Santa Monica 66 End of the Trail.",
    },
    {
      id: 4,
      cardImageSrc: startCard4,
      cardImageAlt: "Palms and blue sky and houses.",
    },
    { id: 5, cardImageSrc: startCard5, cardImageAlt: "Golden Gate Bridge." },
    { id: 6, cardImageSrc: startCard6, cardImageAlt: "View on night city." },
  ],
}));
