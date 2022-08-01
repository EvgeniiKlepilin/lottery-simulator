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