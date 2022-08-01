import React from "react";
import { LotteryTicket } from "./components/LotteryTicket";
import { WinningNumbers } from "./components/WinningNumbers";
import { drawMegaplier, drawNumbers, drawTicketNumberLine } from "./utils/lottery-utils";

const containerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
};

const App = () => {
  const draw = drawNumbers(5);
  const megaplier = drawMegaplier();

  const ticketDraws = [
    drawTicketNumberLine(),
    drawTicketNumberLine(),
    drawTicketNumberLine(),
    drawTicketNumberLine(),
    drawTicketNumberLine(),
  ];

  return (
    <div style={containerStyles}>
      <WinningNumbers draw={draw} megaplier={megaplier} />
      <LotteryTicket draws={ticketDraws} />
    </div>
  );
};

export default App;
