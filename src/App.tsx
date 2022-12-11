import React, { useState, useEffect } from "react";
import { Balance } from "./components/Balance";
import { BuyButton } from "./components/BuyButton";
import { LotteryTicket, TicketDraw } from "./components/LotteryTicket";
import { WinningNumbers } from "./components/WinningNumbers";
import {
  drawMegaplier,
  drawNumbers,
  getTicketDraw,
} from "./utils/lottery-utils";

const containerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const App = () => {
  const [draw, setDraw] = useState<Array<number>>(drawNumbers(5));
  const [megaplier, setMegaplier] = useState<number>(drawMegaplier());
  const [ticketDraws, setTicketDraws] = useState<TicketDraw[]>(getTicketDraw());

  const [money, setMoney] = useState<number>(1000);

  const addMoney = (incomingMoney: number) => {
    setMoney(incomingMoney + money);
  };

  const onBuyClick = () => {
    setDraw(drawNumbers(5));
    setMegaplier(drawMegaplier());
    setTicketDraws(getTicketDraw());
    setMoney(money - 10);
  };

  return (
    <div style={containerStyles}>
      <WinningNumbers draw={draw} megaplier={megaplier} />
      <LotteryTicket
        draws={ticketDraws}
        winningDraw={draw}
        winningMegaplier={megaplier}
        addMoney={addMoney}
      />
      <BuyButton clickHandler={onBuyClick} />
      <Balance value={money} />
    </div>
  );
};

export default App;
