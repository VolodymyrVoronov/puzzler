import { PuzzleCard } from "../store/puzzler";

export const checkGameEnd = (arr: PuzzleCard[]) => {
  return arr.slice(1).every((e, i) => e.number > arr[i].number);
};
