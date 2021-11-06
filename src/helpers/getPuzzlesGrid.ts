export const getPuzzlesGrid = (i: number): number => {
  let counter = 0;

  if (i > 0 && i < 12) {
    counter = 0;
  }

  if (i >= 12 && i < 24) {
    counter = 100;
  }

  if (i >= 24 && i < 36) {
    counter = 200;
  }

  if (i >= 36 && i < 48) {
    counter = 300;
  }

  if (i >= 48 && i < 60) {
    counter = 400;
  }

  if (i >= 60 && i < 72) {
    counter = 500;
  }

  if (i >= 72 && i < 84) {
    counter = 600;
  }

  if (i >= 84 && i < 96) {
    counter = 700;
  }

  return counter;
};
