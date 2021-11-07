import { PuzzleCard } from "../store/puzzler";

export const swapItems = (
  pos1: number = 0,
  pos2: number = 0,
  arr: PuzzleCard[]
) => {
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;

  return arr;
};
