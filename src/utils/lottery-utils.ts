import { TicketDraw } from "../components/LotteryTicket";
import { getRandomInt } from "./math-utils";

export const drawNumbers = (sizeOfDraw: number): number[] => {
    let draw = new Array(sizeOfDraw);
    for (let i = 0; i < sizeOfDraw; i++) {
        draw[i] = getRandomInt(70);
    }
    return draw;
};

export const drawMegaplier = () => getRandomInt(25);

export const getLotteryTicketNumber = () => getRandomInt(302575350);

export const drawTicketNumberLine = (): TicketDraw => {
  return { draw: drawNumbers(5), megaplier: drawMegaplier() };
};

export const getTicketDraw = () => [
  drawTicketNumberLine(),
  drawTicketNumberLine(),
  drawTicketNumberLine(),
  drawTicketNumberLine(),
  drawTicketNumberLine(),
];

export const calculateWinnings = (longestCombo: number, hasMegaplier: boolean) => {
  switch (longestCombo) {
    case 5:
      return hasMegaplier ? 1000000000 : 1000000;
    case 4:
      return hasMegaplier ? 10000 : 500;
    case 3:
      return hasMegaplier ? 200 : 10;
    case 2:
      return hasMegaplier ? 12 : 10;
    case 1:
      return hasMegaplier ? 4 : 2;
    default:
      return 0;
  }
};